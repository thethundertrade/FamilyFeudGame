const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static('.'));

// Route to serve questions
app.get('/get-questions', (req, res) => {
  fs.readFile('data.json', (err, data) => {
    if (err) {
      res.status(500).send('Error reading questions');
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.listen(PORT, () => {
  console.log(`Family Feud backend running on http://localhost:${PORT}`);
});
