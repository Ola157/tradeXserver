const express = require('express')
const { handleFetchRate } = require('../Control/getControl')
const router = express.Router()

router.get('/liveRate', handleFetchRate)

module.exports = router