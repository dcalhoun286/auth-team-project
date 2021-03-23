
const User = require('./models/users.js')
module.exports = async(req,res,next)=>{

  try{
    if(!req.headers.authorization) {_autjError()}
    const token = req.headers.authorization.split(' ').pop();
    const validUser = await User.authenticateWithToken(token)

   req.user = validUser;
   req.token = validUser.token;
   
   next()
  }catch(e){
    _authError();
  }
  function _authError(){
    next('invalid Login')
  }
}