const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authController');



router.get('/logout', authCtrl.logout);

router.post('/login', authCtrl.login)



module.exports = router
