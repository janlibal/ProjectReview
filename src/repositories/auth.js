import User from '../models/user.js';

async function create(userAttributes) {

  //  const user = await User.query().insertAndFetch(userAttributes)

  const user = await User.create({
        name: userAttributes.name,
        email: userAttributes.email,
        password: userAttributes.password
    })
   
    return user
  }

function findByEmail(email){
    return User.findOne( { email })
}

export default {
    create,
    findByEmail
}



