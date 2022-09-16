const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const db = require('../db/connection');
const Review = require('../models/Review')

const Product = db.define('product', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  sku: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.TEXT
  },
  description: {
    type: DataTypes.TEXT
  },
  image: {
    type: DataTypes.TEXT
  },
  price: {
    type: DataTypes.FLOAT
  },
  category: {
    type: DataTypes.STRING
  },
  quantity: {
    type: DataTypes.INTEGER
  },
  stockStatus: {
    type: DataTypes.STRING
  },
  rating: {
    type: DataTypes.INTEGER

  }

})


Product.hasMany(Review, {
  foreignKey: {
    name: 'productId',
    allowNull: false
  }
});
Review.belongsTo(Product)


Product.sync().then(() => {
  console.log('table created');
});

Review.sync().then(() => {
  console.log('review table synced')
})



module.exports = Product;