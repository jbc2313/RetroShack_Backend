const express = require('express')
const router = express.Router()
const productsCtrl = require('../controllers/productsController')

router.get('/products', productsCtrl.getAll)


router.get('/products/getall', productsCtrl.getProducts)

router.post('/products/new', productsCtrl.newProduct)

router.get('/products/:id', productsCtrl.getOne)


// add delete route

// add update route (put route)


module.exports = router;