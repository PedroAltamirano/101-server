const { Sequelize } = require('sequelize');
const mysql2 = require('mysql2')
require('dotenv').config()

const MovieModel = require('../models/movie')
const ActorModel = require('../models/actor')
const GenreModel = require('../models/genre')

console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSW, process.env.DB_HOST)
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSW,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    dialectModule: mysql2
  });
sequelize.on('error', error => {
  console.log(error)
})

const Movie = MovieModel(sequelize, Sequelize)
const Actor = ActorModel(sequelize, Sequelize)
const Genre = GenreModel(sequelize, Sequelize)

sequelize
  .sync({ force: false })
  .then(() => console.log('tablas sync'))

module.exports = {
  Movie,
  Actor,
  Genre
}