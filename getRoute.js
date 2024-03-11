const express = require('express')
const { handleFetchRate } = require('./getControl')
const router = express.Router()

router.get('/liveRate', handleFetchRate)

module.exports = router