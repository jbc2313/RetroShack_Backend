const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const db = require('../db/connection');


const Review = db.define('review', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  user: {
    type: DataTypes.STRING
  },
  stars: {
    type: DataTypes.INTEGER,
    validate: {
      max: 5,
      min: 0
    }
  },
  body: {
    type: DataTypes.TEXT,
  }
})


module.exports = Review;