const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authController');



router.get('/logout', authCtrl.logout);

router.post('/login', authCtrl.login);

router.post('/signup', authCtrl.signup)

router.post('/make/admin', authCtrl.makeAdmin)

router.post('/find/user', authCtrl.getInfo)



module.exports = router
