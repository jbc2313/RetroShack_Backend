const sequelize = require('sequelize');
const db = require('../db/connection');

const Product = db.define('product', {
  id: {
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4,
    primaryKey: true
  },
  sku: {
    type: sequelize.STRING
  },
  name: {
    type: sequelize.STRING
  },
  description: {
    type: sequelize.STRING
  },
  image: {
    type: sequelize.STRING
  },
  price: {
    type: sequelize.FLOAT
  },
  category: {
    type: sequelize.STRING
  },
  quantity: {
    type: sequelize.INTEGER
  },
  stockStatus: {
    type: sequelize.STRING
  },
  rating: {
    type: sequelize.INTEGER

  }

})

Product.sync().then(() => {
  console.log('table created');
});

module.exports = Product;