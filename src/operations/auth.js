
import errors from './../utils/errors.js'
import authRepository from '../repositories/auth.js';
import crypto  from './../utils/crypto.js';

//const logger = require('./../utils/logger')

async function signup(res, credentials) {
 
    //logger.info({ credentials }, 'signUp start')
    
    const user = {
      name: credentials.name,
      email: credentials.email.toLowerCase(),
      password: await crypto.hashPassword(credentials.password)
    }
   
     
    const existingUser = await authRepository.findByEmail(user.email)
        
    if (existingUser) {
      throw new errors.ConflictError('User already exists.')
    } 
    
    const createdUser = await authRepository.create(user)
           
    createdUser.accessToken = await crypto.generateAccessToken(res, createdUser)

    res.send(createdUser)
    
    //logger.info('signUp end')
    return createdUser
  }


  async function signin(res, credentials) {
    //logger.info({ credentials }, 'login started')

    
    
    const user = await authRepository.findByEmail(credentials.email.toLowerCase())
    if (!user) {
      throw new errors.UnauthorizedError()
    } 
    
    const verified = await crypto.comparePasswords(credentials.password, user.password)
    
    if (!verified) {
      throw new errors.UnauthorizedError()
    } 
     
        
    const accessToken = await crypto.generateAccessToken(res, user)
            
    //logger.info('login ended')
        
    return {
      id: user._id,
      email: user.email,
      accessToken,
    }
  }

  export default {
    signup,
    signin
  }