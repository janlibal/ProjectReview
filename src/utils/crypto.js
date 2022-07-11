import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import util from 'util';

import config from '../config/default.js';

const jwtSign = util.promisify(jwt.sign)
const jwtVerify = util.promisify(jwt.verify)

function generateAccessToken(res, user) {

    //const payload = { user }
    //return jwtSign(payload, config.auth.secret, config.auth.createOptions)

    

  const token = jwt.sign(
    { 
      email: user.email,
      _id: user._id 
    }, 
      process.env.SECRET, 
    { 
      expiresIn: '1h' 
    })
                 
    return token
}

function hashPassword(password) {
    
  //return bcrypt.hash(peperify(password), config.auth.saltRounds)
    
    return new Promise((resolve, reject) => {
       
        bcrypt.hash(password, 10, function(err, hash) {
          if (err) reject(err);
          else {
            resolve(hash);
          }

        });
    })
}

function comparePasswords(enteredPassword, existingPassword) {
  
  return bcrypt.compare(enteredPassword, existingPassword)
}


export default {
    generateAccessToken,
    hashPassword,
    comparePasswords
}
