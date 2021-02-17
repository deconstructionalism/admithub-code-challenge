const express = require('express')

const {
  getCountries
} = require('../controllers/countriesController.js')

// instantiate router
const router = express.Router()

// search countries in REST Countries by sub string matches
router.get('/countries/:subString', (req, res, next) => {
  const { subString } = req.params

  getCountries(subString)
    .then((countries) => res.json(countries))
    .catch(next)
})

module.exports = router
