import mongoose from 'mongoose'

const db = function () {
    mongoose
        .connect(process.env.CONNECTION_LOCAL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('Connected to local MongoDB...'))
}

export default db