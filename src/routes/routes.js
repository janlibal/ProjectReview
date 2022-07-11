import authRoutes from './auth.js'
import postRoutes from './post.js'


export default function (app) {
    app.use('/auth', authRoutes)
    app.use('/post', postRoutes)
}
