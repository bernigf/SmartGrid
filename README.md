# SmartGrid
The Weather Data Monitoring System is a software project that provides a web interface to display remote weather data gathered from climate sensors and offers an API for uploading new data and requesting previously registered data.

## Features

- Web Interface: Access the weather data through a user-friendly web interface.
- Remote Weather Data: Gathered from climate sensors installed in various locations.
- Real-time Updates: The web interface displays real-time weather data.
- API Endpoints: Easily upload new weather data and request historical data through API endpoints.

## Getting Started

Follow the instructions below to set up and run SmartGrid on your local machine.

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

