const productsData = require('../db/testProducts.json')



const getAll = (req, res) => {
  console.log('products getall route pinged')
  res.json(productsData)
}

const getOne = (req, res) => {
 
}

module.exports = {
  getAll,
  getOne,

}