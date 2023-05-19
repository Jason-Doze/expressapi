import express from 'express';
import cors from 'cors';
import { readFile } from 'fs/promises'; // Available from Node.js v14.0.0

const app = express();
const port = 3001;

// Enable CORS requests
app.use(cors());

// Set up a middleware to serve static files from the public folder
app.use(express.static('public'));

// Serve the favicon
app.get('/favicon.ico', async (req, res) => {
  const faviconPath = './public/images/favicon.ico';

  try {
    const data = await readFile(faviconPath);
    res.set('Content-Type', 'image/x-icon');
    res.send(data);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
