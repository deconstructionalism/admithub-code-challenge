const express = require('express')

const {
  addPinnedCountry,
  getPinnedCountries,
  removePinnedCountry
} = require('../controllers/pinnedCountriesController.js')

// instantiate router
const router = express.Router()

// INDEX pinned countries route
router.get('/pinned', (_, res, next) => {
  getPinnedCountries()
    .then((countries) => res.json({ countries }))
    .catch(next)
})

// CREATE pinned country route
router.post('/pinned', (req, res, next) => {
  const { body } = req

  addPinnedCountry(body)
    .then(() => res.sendStatus(200))
    .catch(next)
})

// DELETE pinned country route
router.delete('/pinned/:alpha3Code', (req, res, next) => {
  const { alpha3Code } = req.params

  removePinnedCountry(alpha3Code)
    .then(() => res.sendStatus(200))
    .catch(next)
})

module.exports = router
