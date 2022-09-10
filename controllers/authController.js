const db = require('../db/connection');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;


const signup = (req, res) => {
  console.log('signup route was pinged')
  console.log(req.body.email.toLowerCase())
  console.log(req.body.password)

  //add db function to create user here
  User.findOne({ where: { email: req.body.email.toLowerCase()}})
  .then(user => {
    if(user) {
      res.json({msg: 'Account found with your email.'})
    }
    else {
      //if no user in db
      const hash = bcrypt.hashSync(req.body.password, saltRounds);
      User.create({
        email: req.body.email.toLowerCase(),
        password: hash 
      })
      .then(user => res.json(user))
      .catch(err => {
        console.log(err)
        res.json({msg: 'Signup Failed'})
      })
    }
  })
      

}

const login = (req, res) => {
  console.log('login route pinged')
  console.log('this is the req email ' + req.body.email)
  console.log('this is the req PassWord ' + req.body.password)

  // add db funtion here to search for user
  User.findOne({ where: { email: req.body.email.toLowerCase()}})
  .then(user => {
    if(user) {
      const pwIsValid = bcrypt.compareSync(req.body.password, user.password);
      if(pwIsValid === false) {
        res.json({ msg: 'Wrong Password'})
      }
      else {
        res.json(user)
      }
    } else {
      //No user in DB
      res.json(null)
    }
  })

  //res.json({ id: 1, name: 'J Carson', email: 'jcarson@yahoo.com' })
}

const logout = (req, res) => {
  console.log('logout route pinged')
  res.json({msg: 'This is a test'})
}


module.exports = {
  login,
  logout,
  signup,
}