import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();

// Enable CORS requests
app.use(cors());

// Set up a middleware to serve static files from the public folder
app.use(express.static('public'));

// Define a new HTTP GET endpoint at /api
app.get('/api', async (req, res) => {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    const joke = data.value;
    res.json({ joke });
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});

app.listen(3000, () => {
  console.log('API running on port 3000');
});
