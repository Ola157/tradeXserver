const express = require('express')
if (process.NODE_ENV != 'production') { require('dotenv').config(); }
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: true }));

const getRoute = require('./getRoute')

app.use('/fetchRate', getRoute)

app.listen(process.env.port || 9080, () => {
    console.log(process.env.port)
})