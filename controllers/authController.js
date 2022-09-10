


const signup = (req, res) => {

}

const login = (req, res) => {
  console.log('logout route pinged')
  res.json({ id: 1, name: 'J Carson', email: 'jcarson@yahoo.com' })
}

const logout = (req, res) => {
  console.log('logout route pinged')
  console.log('this is the user req' + req.body)
  res.json({msg: 'This is a test'})
}


module.exports = {
  login,
  logout,
  signup,
}