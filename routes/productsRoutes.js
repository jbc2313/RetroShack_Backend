const express = require('express')
const router = express.Router()
const productsCtrl = require('../controllers/productsController')

router.get('/products', productsCtrl.getAll)

module.exports = router;