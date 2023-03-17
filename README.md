# Express API with Chuck Norris Jokes

This is an Express.js API that returns a random Chuck Norris joke from the [Chuck Norris API](https://api.chucknorris.io/).

## Prerequisites

To run this API, you need to have [Node.js](https://nodejs.org/en/) installed on your machine.

## Installation

1. Clone this repository to your local machine:
https://github.com/Jason-Doze/expressapi.git

<br>

2. Install the required dependencies by running the following command in the project directory:
`npm install`


## Usage

To start the API, run the following command in the project directory:
`npm start`

This will start the server on port 3000.

To retrieve a random Chuck Norris joke, send an HTTP GET request to the `/joke` endpoint:
http://localhost:3000/joke

The API will return a JSON object containing a `value` field, which contains the text of the joke.

You can also view the joke in the console where you ran the `npm start` command.


