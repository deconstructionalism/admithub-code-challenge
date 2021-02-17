const knex = require('../database/connect.js')

/*
Controller method to get all pinned countries from database
*/
const getPinnedCountries = async () => {

  // get row containing pinned countries array
  const data = await knex('pinned_countries')
    .select('*')
    .where('id', 1)
    .first()

  // destructure countries JSON data
  const countries = data?.countries || '[]'

  // return parsed pinned country data
  return JSON.parse(countries)
}

/*
Controller method to add a new pinned country's data to database
*/
const addPinnedCountry = async (data) => {

  // get pinned countries
  const pinnedCountries = await getPinnedCountries()

  // get array of alpha3Codes of existing countries
  const existingCountries = pinnedCountries.map(({ alpha3Code }) => alpha3Code)

  // do not take any action if country is already pinned
  if (existingCountries.includes(data?.alpha3Code)) { return }

  // add new country to array of pinned countries
  return knex('pinned_countries')
    .update({ countries: JSON.stringify([...pinnedCountries, data]) })
    .where('id', 1)
}

/*
Controller method to remove an existing pinned country from the database by it's
alpha3Code
*/
const removePinnedCountry = async (alpha3Code) => {

  // get pinned countries
  const pinnedCountries = await getPinnedCountries()

  // generate next pinned countries array by filtering out country to be removed
  const nextPinnedCountries = pinnedCountries
    .filter(({ alpha3Code: _a }) => _a !== alpha3Code)

  // remove country from pinned countries
  return knex('pinned_countries')
    .update({ countries: JSON.stringify(nextPinnedCountries) })
    .where('id', 1)
}

module.exports = {
  addPinnedCountry,
  getPinnedCountries,
  removePinnedCountry
}
