const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware to parse JSON in request body
app.use(bodyParser.json());

// Sample in-memory database to store user data
const usersData ={}

// GET response to user request
app.get('/api/weather', (req, res) => {

    const data = {
        temperature: 25,
        humidity: 60,
        gpsCoordinates: {
            latitude: 55.1234,
            longitude: -125.5432
        },
    };

    res.json(data);
});

// PUT request writes JSON data to user specific file
app.put('/api/users/:userId', (req, res) => {
    
    const { userId } = req.params;
    const data = req.body;

    // Check user is authenticated using bearer token in the Authorization header
    const bearerToken = req.headers.authorization;
    if(!authenticateUser(bearerToken, userId)) {
        return res.status(401).json({ error: 'Authenticatino failed.' });
    }

    // Create a folder for the user if it doesn't exist
    const userFolderPath = `./users/${userId}`;
    if(!fs.existsSync(userFolderPath)) {
        fs.mkdirSync(userFolderPath, { recursive: True });
    }

    // Write JSON data to the user file
    const filePath = `${userFolderPath}/data.json`;
    fs.writeFileSync(filePath, JSON_stringify(data));

    res.json({ message: 'Data saved successfully.'});

});

function authenticateUser(token, userId) {

    return token == userId;

}

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

