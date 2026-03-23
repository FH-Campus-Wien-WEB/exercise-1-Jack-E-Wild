const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  res.json([{
    "Title":"The Lord of the Rings: The Fellowship of the Ring",
    "Released":"2001/12/19",
    "Runtime":178,
    "Genres":["Adventure","Drama", "Fantasy"],
    "Directors":["Peter Jackson"],
    "Writers":["J.R.R. Tolkien", "Fran Walsh", "Philippa Boyens"],
    "Actors":["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    "Plot":"A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    "Poster":"https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_SX300.jpg",
    "Metascore":92,
    "imdbRating":8.9
},
{
    "Title":"Spaceballs",
    "Released":"1987/06/24",
    "Runtime":96,
    "Genres":["Adventure", "Comedy", "Sci-Fi"],
    "Directors":["Mel Brooks"],
    "Writers":["Mel Brooks", "Thomas Meehan", "Ronny Graham"],
    "Actors":["Mel Brooks", "John Candy", "Rick Moranis"],
    "Plot":"A star-pilot for hire and his trusty sidekick must come to the rescue of a princess and save Planet Druidia from the clutches of the evil Spaceballs.",
    "Poster":"https://m.media-amazon.com/images/M/MV5BZWNhNWM3NWQtNTMwNy00NThiLWFkZDYtYzBlZTQyZGU2YzE1XkEyXkFqcGc@._V1_SX300.jpg",
    "Metascore":46,
    "imdbRating":7.1
},
{
    "Title":"Monty Python and the Holy Grail",
    "Released":"1975/07/18",
    "Runtime":91,
    "Genres":["Adventure", "Comedy", "Fantasy"],
    "Directors":["Terry Gilliam", "Terry Jones"],
    "Writers":["Graham Chapman", "John Cleese", "Eric Idle"],
    "Actors":["Graham Chapman", "John Cleese", "Eric Idle"],
    "Plot":"King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering many, very silly obstacles.",
    "Poster":"https://m.media-amazon.com/images/M/MV5BYWY4YmUzZmUtMzQ0ZS00N2Y2LWJlODQtN2IwMDc1MWQwMmU3XkEyXkFqcGc@._V1_SX300.jpg",
    "Metascore":91,
    "imdbRating":8.2
}
]);
});

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

