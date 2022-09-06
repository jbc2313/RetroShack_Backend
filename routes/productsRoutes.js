const express = require('express')
const router = express.Router()
const productsCtrl = require('../controllers/productsController')

router.get('/products', productsCtrl.getAll)

router.get('/products/:id', productsCtrl.getOne)

module.exports = router;