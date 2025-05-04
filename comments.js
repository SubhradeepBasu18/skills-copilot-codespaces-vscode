// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory data store
let comments = [];

// Routes
app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comment.id = comments.length + 1;
    comments.push(comment);
    res.status(201).json(comment);
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});