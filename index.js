import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
// Enable CORS requests
app.use(cors());

// Define a new HTTP GET endpoint at /joke
app.get('/joke', async (req, res) => {
  try {
    // Send an HTTP GET request to the Chuck Norris API and await the response
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    // Parse the response as JSON and extract the joke
    const data = await response.json();
    const joke = data.value;
    // Display the joke in the console
    console.log(joke);
    // Optionally, send the joke as an HTTP response to the client
    res.send(joke);
  } catch (error) {
    // Handle any errors or exceptions that may occur
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('API running on port 3000');
});

