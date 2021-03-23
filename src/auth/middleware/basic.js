'use strict';

const base64 = require('base-64')
const User = require('../models/users.js')

module.exports = async(require,res,next) =>{

if(!require,headers.authorization){ return _authError(); }
let basic = req.headers.authorization.split(' ').pop();
let [user,pass] = base64.decode(basic).split(':');

try{
  req.user = await User.authorizationBasic(user, pass)
  next()

}catch(e){
  _authError()
}
function _authError(){
  res.status(403).send('Invalid Login')
}
}