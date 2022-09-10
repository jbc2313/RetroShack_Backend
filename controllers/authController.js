


const signup = (req, res) => {
  console.log('signup route was pinged')
  console.log(req.body.email)
  console.log(req.body.password)

  //add db function to create user here



  res.json({ msg: 'user signed up' })


}

const login = (req, res) => {
  console.log('login route pinged')
  console.log('this is the req email ' + req.body.data.email)
  console.log('this is the req PassWord ' + req.body.data.password)

  // add db funtion here to search for user

  res.json({ id: 1, name: 'J Carson', email: 'jcarson@yahoo.com' })
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