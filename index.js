import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
// Enable CORS requests
app.use(cors());

// Set up a middleware to serve static files from the public folder
app.use(express.static('public'));

// Define a new HTTP GET endpoint at /joke
app.get('/joke', async (req, res) => {
  try {
    // Send an HTTP GET request to the Chuck Norris API and await the response
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    // Parse the response as JSON and extract the joke
    const data = await response.json();
    const joke = data.value;
    // Display the joke in the console
    const image = '/images/chuck-norris.jpg';
    // Optionally, send the joke and image URL as an HTTP response to the client
    const html = `
      <div id="joke"; style="text-align: center; margin-top: 50px;">
      <h1 style="text-align: center; margin-top: 25px;">${joke}</h1>
          <img src="${image}" alt="Chuck Norris" style="display: block; margin: 100px auto 0;"/>
          <button onclick="reloadJoke()" style="margin-top: 10px;">Get Another Joke</button>
      </div>
      <script src="/script.js"></script>
    `;
    res.send(html);
    console.log(joke);
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
