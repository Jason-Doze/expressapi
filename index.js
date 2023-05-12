import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import path from 'path';

const app = express();

// Enable CORS requests
app.use(cors());

// Set up a middleware to serve static files from the public folder
app.use('/api', express.static(path.join(__dirname, 'public')));

// Define a new HTTP GET endpoint at /api/joke for the joke data
app.get('/api/joke', async (req, res) => {
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

app.listen(3001, () => {
  console.log('API running on port 3001');
});

