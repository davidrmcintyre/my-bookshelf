const express = require("express");
const app = express();

let theBooks = [
    {
        title: 'On the Road',
        author: 'Jack Kerouac'
    },
    {
        title: 'Ready Player One',
        author: 'Ernest Cline'
    },
    {
        title: 'Fear and Loathing in Las Vegas',
        author: 'Hunter S. Thompson'
    }
];

// Get Requests

app.get('/', (req,res) => {
    res.send('Welcome to my bookshelf.')
});

app.get('/documentation', (req,res) => {
    res.sendFile('public/documentation.html', { root: __dirname });
});

app.get('/books', (req, res) => {
    res.json(theBooks);
});

// listen for requests

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
  });