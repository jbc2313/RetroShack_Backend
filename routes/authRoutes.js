const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authController');



router.get('/logout', authCtrl.logout);

module.exports = router
