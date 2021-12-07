module.exports = (sequelize, type) => {
  return sequelize.define('movie', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: type.STRING,
    description: type.STRING,
    duration: type.INTEGER,
    genre_id: type.INTEGER,
    actors_id: type.STRING,
  })
}