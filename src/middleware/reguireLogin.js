import jwt from 'jsonwebtoken'

import User from '../models/user.js'


const requireLogin = async (req, res, next) => {

    const { authorization } = req.headers
        
    if (!authorization) {
        return res.status(401).json({ error: 'You muset be logged in!' })
    }

    const token = authorization.replace('Bearer ', '')
    
    jwt.verify(token, process.env.SECRET, (err, payload) => {
        
        if (err) {
            return res.status(401).json({ error: 'You must be logged in!' })
        }
        const { _id } = payload
        
        User.findById(_id).then((userdata) => {
            req.user = userdata
            console.log('User from verification: ' + userdata)
            next()
        })
    })
}

export default requireLogin
