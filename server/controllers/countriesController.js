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
const sortCountriesByName = (countries) => {
  return countries.sort(({ name: nameA }, { name: nameB }) => {
    if (nameA > nameB) { return 1 }
    if (nameA < nameB) { return -1 }
    return 0
  })
}

/*
Merge countries in `sourceArray` into `targetArray` based on unique `alpha3Code`
id
*/
const mergeCountries = (sourceArray, targetArray) => {

  // iterate country by country in `sourceArray` and check if country exists
  // in `targetArray`; if so, replace country in `targetArray` with one from
  //`sourceArray
  return sourceArray
    .reduce((acc, country) => {

      // find matching index for source country (if it exists) in target
      const matchIndex = acc
        .findIndex(({ alpha3Code }) => alpha3Code === country.alpha3Code )


      return matchIndex > -1
        // if there is a matching country in the target, replace it without
        // mutating the original target array
        ? [
          ...acc.slice(0, matchIndex),
          country,
          ...acc.slice(matchIndex + 1)
        ]
        // otherwise return the accumulator
        : acc
    }, targetArray)
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


  const mergedMatches = mergeCountries(extendedMatches, apiMatches)

  // combine extended country matches with API matches and sort by name
  const allMatches = sortCountriesByName(mergedMatches)

  return allMatches
}

module.exports = {
  getCountries
}
