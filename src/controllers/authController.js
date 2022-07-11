import validation from '../validations/index.js';
import schema from '../validations/schemas/auth.js';
import operations from '../operations/auth.js';



export const logout = async (req, res) => {
  res.cookie('token', '').send();
}


export const signin = async (req, res) => {
  
  const credentials = {
    email: req.body.email,
    password: req.body.password,
  }

  validation(res, schema.signIn, credentials)

  const user = await operations.signin(res, credentials)
  
  res.status(200).json({ user })

  console.log("Signed In Successfully. " + JSON.stringify(user))


}


export const signup = async (req, res) => {

    const credentials = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmedPassword: req.body.confirmedPassword
    }

    
    validation(res, schema.signUp, credentials)
        
    const user = await operations.signup(res, credentials)

    res.status(200).json({ user })
    
    console.log("New user registered successfully. " + JSON.stringify(user))
}
