# SmartGrid
SmartGrid is a software project that provides a web interface to display remote weather data gathered from climate sensors and offers an API for uploading new data and requesting previously registered data.

It is intended to serve as a hands-on learning project for
```
* Node.js           ->  https://nodejs.org/en
* React             ->  https://react.dev/
* RESTful APIs      ->  https://restfulapi.net/
```

If you have any questions or need assistance, please contact bernigf@gmail.com


## Features

- Web Interface: Access the weather data through a user-friendly web interface.
- Remote Weather Data: Gathered from climate sensors installed in various locations.
- Real-time Updates: The web interface displays real-time weather data.
- API Endpoints: Easily upload new weather data and request historical data through API endpoints.

## Getting Started

Follow the instructions below to set up and run SmartGrid on your local machine.

### Prerequisites

- Node.js and npm installed on your system.

### Installation

1. Clone this repository to your local machine:

```
git clone https://github.com/bernigf/SmartGrid.git
cd SmartGrid
```

2. Install the required dependencies:

```npm install```

3. Configuration


Create a configuration file (config.json) in the root directory of the project with the following details:

```
{
  "api_key": "YOUR_API_KEY",
  "data_folder": "/path/to/data/folder"
}
```

Replace YOUR_API_KEY with a secure API key for authenticating data uploads and requests. Specify the path to the data folder where historical weather data will be stored.

### Usage
Start the web interface:

```npm start```

Access the web interface in your browser by visiting http://localhost:8080.

### API Endpoints
The API provides the following endpoints:

- `POST /api/data`

Upload new weather data. Make sure to include the necessary parameters and provide the API key for authentication.

- `GET /api/data/YYYY-MM-DD`

Retrieve weather data for a specific date in the format "YYYY-MM-DD". Authentication is required using the API key.
Data Format
Weather data should be uploaded in JSON format and include the following fields:

```
{
  "timestamp": 1690038105
  "temperature": 25.6,
  "humidity": 65.3,
  "wind_speed": 8.2,
  "precipitation": 0.2
}
```

### Security
Ensure that you keep your API key secure and do not expose it publicly. Limit access to the API endpoints only to authorized users or applications.

### License
SmartGrid is open-source software licensed under the MIT License.


