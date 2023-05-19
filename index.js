import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import path from 'path';

const port = 3001;
const app = express();

// Enable CORS requests
app.use(cors());

app.use('/', express.static(path.resolve('public'))); 


// Define a new HTTP GET endpoint at /joke for the joke data
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

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});

