require('dotenv').config();
const { Sequelize } = require('sequelize');

//freezeTableName makes the model and table the same name.

const sequelize = new Sequelize(process.env.DB_URL, {
  define: {
    freezeTableName: true
  }
});

module.exports = sequelize;