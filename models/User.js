const sequelize = require('sequelize');
const db = require('../db/connection');


const User = db.define('user', {
  id: {
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4,
    primaryKey: true
  },
  email: {
    type: sequelize.STRING
  },
  password: {
    type: sequelize.STRING
  }
})

User.sync().then(() => {
  console.log('table created');
});

module.exports = User