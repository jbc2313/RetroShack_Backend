const productsData = require('../db/testProducts.json')



const getAll = (req, res) => {
  console.log('products getall route pinged')
  res.json(productsData)
}

const getOne = (req, res) => {
  console.log('product get one route pinged.')
  console.log(req.params)
  //This will have to be changed when sequalize is hooked up

  const singleProduct = productsData.products.filter(product => product.id === req.params.id)
  res.json({product: singleProduct[0]})
}

module.exports = {
  getAll,
  getOne,

}