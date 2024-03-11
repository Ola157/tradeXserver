if (process.NODE_ENV != 'production') { require('dotenv').config(); }
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Express on Vercel"));

const getRoute = require('./Route/getRoute')

app.use('/fetchRate', getRoute)

app.listen(process.env.port || 9080, () => {
    console.log(process.env.port)
})