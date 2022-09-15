const express = require('express')
const router = express.Router()
const productsCtrl = require('../controllers/productsController')


// this was the testing data
//router.get('/products', productsCtrl.getAll)


router.get('/products', productsCtrl.getProducts)

router.post('/products/new', productsCtrl.newProduct)

router.get('/products/:id', productsCtrl.getOne)

// add delete route
router.delete('/products/:id', productsCtrl.deleteProduct)

// add update route (put route)
router.patch('/products/:id', productsCtrl.updateProduct)

module.exports = router;