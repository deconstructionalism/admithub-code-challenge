const express = require('express')

// instantiate router
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send('hello world')
})

module.exports = router
