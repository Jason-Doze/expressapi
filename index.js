import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import fs from 'fs';

const app = express();

// Enable CORS requests
app.use(cors());

// Set up a middleware to serve static files from the public folder
app.use(express.static('public'));

// Serve the favicon
app.get('/favicon.ico', (req, res) => {
  const faviconPath = './public/images/favicon.ico';

  // Read the contents of the favicon file using fs.readFile
  fs.readFile(faviconPath, (err, data) => {
    if (err) {
      console.error(err);
      res.sendStatus(404);
    } else {
      // Set the content type to image/x-icon
      res.set('Content-Type', 'image/x-icon');

      // Send the favicon file as a response
      res.send(data);
    }
  });
});

// Define a new HTTP GET endpoint at /api
app.get('/api', async (req, res) => {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    const joke = data.value;
    const image = '/images/chuck-norris.jpg';

    // Log the joke to the terminal
    console.log(`The joke is: ${joke}`);

    // Read the contents of index.html into a string
    let html = fs.readFileSync('./public/index.html', 'utf8');

    // Replace `${joke}` with the actual value of `joke`
    html = html.replace('${joke}', joke);

    // Send the modified HTML to the client
    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});

// Start the server and listen on all available network interfaces on port 3000
app.listen(3000, () => {
  console.log('API running on port 3000');
});

