const axios = require('axios');

const user = 'bernigf'
const bearerToken = 'bernigf'; // Replace with your actual bearer token

const iterations = 5
const nap_secs = 2

const api_host = "localhost"
const api_protocol = "http"
const api_port = "3000"
const api_endpoint = "api/users/"

const gpsCoordinates = {
    latitude: getRandomNumber(-90, 90), // Random latitude between -90 and 90 degrees
    longitude: getRandomNumber(-180, 180), // Random longitude between -180 and 180 degrees
};

// Function to generate random weather data
function generateRandomWeatherData() {
  const temperature = getRandomNumber(20, 35); // Random temperature between 20°C and 35°C
  const humidity = getRandomNumber(40, 80); // Random humidity between 40% and 80%

  return {
    temperature,
    humidity,
  };
}

// Helper function to get a random number within a range (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to seed weather data to the API using a PUT request
async function seedWeatherData(userId, bearerToken, gpsCoordinates) {
  try {

    const data = generateRandomWeatherData();
    data.gpsCoordinates = gpsCoordinates;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${bearerToken}`,
      },
    };

    const url = `${api_protocol}://${api_host}:${api_port}/${api_endpoint}${userId}`

    console.log(`Sending PUT request to: ${url}`);
    console.log(`data = ${JSON.stringify(data)}`);
    
    const response = await axios.put(url, data, config);

    console.log(`Data seeded successfully for user ${userId}. Response:`, response.data);
    console.log();

  } catch (error) {
    console.error(`Error seeding data for user ${userId}:`, error.message);
    console.log();
  }
}

// Main function to start seeding weather data for multiple users
async function main() {

    let counter = 0
    while(counter < iterations){

        await seedWeatherData(user, bearerToken, gpsCoordinates);
        await new Promise((resolve) => setTimeout(resolve, nap_secs * 1000));

        counter++;

    }

}

// Start seeding weather data
main();
