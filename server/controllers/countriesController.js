const axios = require('axios')

const knex = require('../database/connect.js')

// HELPER METHODS

/*
Get data from REST Countries API and handle response errors gracefully by
returning an empty array
*/
const getRESTCountries = async (subString) => {
  try {

    // get all country data that matches `subString`
    const res = await axios
      .get(`https://restcountries.eu/rest/v2/name/${subString}`)

    // destructure countries in response
    const { data = [] } = res

    return data
  } catch {

    // return empty array in case or error
    return []
  }
}

/*
Sort country data by name
*/
const sortByName = (countries) => {
  return countries.sort(({ name: nameA }, { name: nameB }) => {
    if (nameA > nameB) { return 1 }
    if (nameA < nameB) { return -1 }
    return 0
  })
}

/*
Controller method to search for country data in REST Countries and
`extended_countries` table in database by sub string
*/
const getCountries = async (subString) => {

  // get extended countries from database
  const extendedCountries = await knex.select('*').from('extended_countries')

  // find matches to `subString` in `name` prop of extended countries and remove
  // primary key `id`
  const extendedMatches = extendedCountries
    .filter(({ name }) => {
      return name.toLowerCase().includes(subString.toLowerCase())
    })
    .map(({ id, ...rest }) => rest)


  // get country data from REST Countries API
  const apiMatches = await getRESTCountries(subString)

  // combine extended country matches with API matches and sort by name
  const allMatches = sortByName([...apiMatches, ...extendedMatches])

  return allMatches
}

module.exports = {
  getCountries
}
