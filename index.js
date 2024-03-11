const express = require('express')
const cors = require('cors')
if (process.env.NODE != 'production') require('dotenv').config()

const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: true }));

const getRoute = require('./getRoute')

app.use('/fetchRate', getRoute)

app.listen(process.env.port, () => {
    console.log(process.env.port)
})