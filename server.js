const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())
app.use(express.json())

const createGenre = (id, name) => ({ id, name })
const genres = [
  createGenre(1, 'Genre 1'),
  createGenre(2, 'Genre 2'),
  createGenre(3, 'Genre 3'),
];

const createActor = (id, img, name, age) => ({ id, img, name, age })
const actors = [
  createActor(1, 'foto...', 'Nombre Apell 1', 30),
  createActor(2, 'foto...', 'Nombre Apell 2', 30),
  createActor(3, 'foto...', 'Nombre Apell 3', 30),
  createActor(4, 'foto...', 'Nombre Apell 4', 30),
  createActor(5, 'foto...', 'Nombre Apell 5', 30),
];

const createMovie = (id, name, description, duration, genre, actors) => ({ id, name, description, duration, genre, actors })
const movies = [
  createMovie(1, 'Frozen yoghurt', 'Descripcion 1...', 120, 1, [1, 2]),
  createMovie(2, 'Ice cream sandwich', 'Descripcion 2...', 120, 2, [3, 2]),
  createMovie(3, 'Eclair', 'Descripcion 3..', 120, 3, [1, 2]),
  createMovie(4, 'Cupcake', 'Descripcion 4...', 120, 1, [3, 2]),
  createMovie(5, 'Gingerbread', 'Descripcion 5...', 120, 2, [1, 2]),
];

app.get('/api/genres', (req, res) => {
  res.json(genres)
})

// Actors
app.get('/api/actors', (req, res) => {
  res.json(actors)
})
app.post('/api/actor', (req, res) => {
  const data = req.body
  res.send()
})

// Movies
app.get('/api/movies', (req, res) => {
  res.json(movies)
})
app.post('/api/movie', (req, res) => {
  const data = req.body
  res.send()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
