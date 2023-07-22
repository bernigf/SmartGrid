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
    const bearerString = "Bearer "

    token = bearerToken.replace(new RegExp('^' + bearerString), '');

    if(!authenticateUser(token, userId)) {
        return res.status(401).json({ error: 'Authentication failed.' });
    }

    // Create a folder for the user if it doesn't exist
    const userFolderPath = `./users/${userId}`;
    if(!fs.existsSync(userFolderPath)) {
        fs.mkdirSync(userFolderPath, { recursive: true });
    }

    const filePath = `${userFolderPath}/data.json`;

    let existingData = []
    if(fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        existingData = JSON.parse(fileContent);
    }

    existingData.unshift(data);

    // Write JSON data to the user file
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

    const msg_str = `Data saved successfully to ${filePath}`;
    res.json({ message: msg_str});
    console.log(msg_str);
    console.log();

});

function authenticateUser(token, userId) {

    console.log(`Authenticating user='${userId}' token='${token}'`)

    return token == userId;

}

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    console.log();
});

