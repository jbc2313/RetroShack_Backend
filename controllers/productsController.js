const productsData = require('../db/testProducts.json')
const db = require('../db/connection')
const Product = require('../models/Product')

// THESE ARE TESTING ROUTES WITHOUT DB
const getAll = (req, res) => {
  console.log('products getall route pinged')
  res.json(productsData)
}

// const getOne = (req, res) => {
//   console.log('product get one route pinged.')
//   console.log(req.params)
//   //This will have to be changed when sequalize is hooked up

//   const singleProduct = productsData.products.filter(product => product.id === req.params.id)
//   res.json({product: singleProduct[0]})
// }

// THESE INCLUDE THE DB


const getProducts = (req, res) => {
  console.log("products get all route pinged")
  Product.findAll()
    .then(products => {
      res.json(products)
    })
    .catch(err => console.log(err))
}

const newProduct = (req, res) => {
  console.log("Product create route pinged")
  Product.create({
    sku: req.body.sku,
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
    category: req.body.category,
    quantity: req.body.quantity,
    stockStatus: req.body.stockStatus,
    rating: req.body.rating
  })
  .then(prd => {
    res.json(prd)
  })
  .catch(err => console.log(err))
}


const getOne = (req, res) => {
  console.log('product get one route pinged.')
  console.log(req.params)
  Product.findOne({ where: { id: req.params.id } })
  .then(prod => res.json(prod))
}


const deleteProduct = (req, res) => {
  console.log("Product Delete Route pinged")
  Product.destroy({ where: { id: req.params.id } })
  .then(resp => res.json({ msg: 'Product Deleted.'}))
  .catch(err => res.json(err, {msg: 'product NOT deleted'}))
}

const updateProduct = (req, res) => {
  console.log("product patch route pinged")
  console.log(req.body)
  Product.update({
    sku: req.body.sku,
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
    category: req.body.category,
    quantity: req.body.quantity,
    stockStatus: req.body.stockStatus,
    rating: req.body.rating
    },
    {
      where: {
        id: req.body.id
      }
    }
  ).then(resp => res.json({ msg: 'Product updated'}))
  .catch(err => res.json(err))

}

/*


const Op = Sequelize.Op;

// Search for products
router.get('/search', (req, res) => {
  let { term } = req.query;

  // Make lowercase
  term = term.toLowerCase();

  Product.findAll({ where: { technologies: { [Op.like]: '%' + term + '%' } } })
    .then(products => res.render('gigs', { gigs }))
    .catch(err => console.log(err));
});

*/

module.exports = {
  getAll,
  getOne,
  getProducts,
  newProduct,
  deleteProduct,
  updateProduct,

}