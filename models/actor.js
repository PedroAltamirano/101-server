module.exports = (sequelize, type) => {
  return sequelize.define('actor', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: type.STRING,
    age: type.STRING,
    img: type.STRING,
  })
}