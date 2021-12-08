const router = require("express").Router();

const { Movie, Actor, Genre } = require('../config/db_connection')

router.get('/genres', async (req, res) => {
  const genres = await Genre.findAll()
  res.json(genres)
})

// Actors
router.get('/actors', async (req, res) => {
  const actors = await Actor.findAll()
  res.json(actors)
})

router.post('/actor', async (req, res) => {
  let data = req.body
  console.log(req.file)
  if (req.file != null) {
    data = {
      ...data,
      img: req.file.firebaseUrl
    }
  }
  const actor = await Actor.create(data)
  res.json({ success: 'creado', actor })
})

router.put('/actor/:id', async (req, res) => {
  let data = req.body
  if (req.file != null) {
    data = {
      ...data,
      img: req.file.filename
    }
  }
  await Actor.update(data, {
    where: { id: req.params.id }
  })
  res.json({ success: 'modificado' })
})

// Movies
router.get('/movies', async (req, res) => {
  const movies = await Movie.findAll()
  res.json(movies)
})

router.post('/movie', async (req, res) => {
  const movie = await Movie.create(req.body)
  res.json({ success: 'creado', movie })
})

router.put('/movie/:id', async (req, res) => {
  await Movie.update(req.body, {
    where: { id: req.params.id }
  })
  res.json({ success: 'modificado' })
})

module.exports = router