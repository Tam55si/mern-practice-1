const express = require("express");
const notes = require('./data/notes.js');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send("API is running..");
})

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
    const note = notes.find((n) => n._id === req.params.id);
    // console.log(req.params);
    res.send(note);
})

const port = process.env.PORT || 5001;

app.listen(port, console.log(`Server started on PORT ${port}`));
