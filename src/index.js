import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import routes from './routes/routes.js';
import database from './data/index.js';


const app = express()
dotenv.config()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

database()
routes(app)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))