


const signup = (req, res) => {

}

const login = (req, res) => {

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