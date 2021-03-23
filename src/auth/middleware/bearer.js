'use strict'
const User = require('./models/users.js')


module.exports = async (req, res, next) => {
  console.log(req.query)
  try {
    if (!req.query.token) { _authError() }
    const token = req.query.token;
    const validUser = await User.authenticateWithToken(token)

    req.user = validUser;
    req.token = validUser.token;

    next()
  } catch (e) {
    _authError();
  }
  function _authError() {
    next('invalid Login')
  }
}