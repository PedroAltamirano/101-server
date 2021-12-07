const router = require("express").Router();

const { Movie, Actor, Genre } = require('../db_connection')

router.get('/genres', async (req, res) => {
  const genres = await Genre.findAll()
  res.json(genres)
})

// Actors
router.get('/actors', async (req, res) => {
  const actors = await Actor.findAll()
  res.json(actors)
})
router.post('/actor', (req, res) => {
  const data = req.body
  res.send()
})

// Movies
router.get('/movies', async (req, res) => {
  const movies = await Movie.findAll()
  res.json(movies)
})
router.post('/movie', (req, res) => {
  const data = req.body
  res.send()
})

module.exports = router