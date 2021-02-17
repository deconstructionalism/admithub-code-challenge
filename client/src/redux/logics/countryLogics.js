import { createLogic } from 'redux-logic'

import {
  GET_COUNTRIES,
  getCountriesFulfilled,
  getCountriesRejected
} from '../actions/countryActions.js'

// HELPER METHODS

/*
Get data from an API by trying server first, and if this fails, fallback on
server REST Countries API, and handle errors gracefully
*/
const getCountries = (() => {

  // server urls
  const serverUrl = 'http://localhost:4000/countries/'
  const restCountriesUrl = 'https://restcountries.eu/rest/v2/name/'

  /*
  Internal helper method to run a country sub string search request to a given
  `url`
  */
  const requestCountriesFromUrl = async (axios, subString, url) => {

    // get all country data that matches `subString`
    const res = await axios.get(`${url}${subString}`)

    // destructure countries in response
    const { data = [] } = res

    return data
  }

  // closure-wrapped returned function
  return async (subString, axios) => {

    try {

      // get all country data that matches `subString` from server
      const data = await requestCountriesFromUrl(axios, subString, serverUrl)

      return data
    } catch {

      // if server request fails, get all country data that matches `subString`
      // from REST Countries API
      const data = await requestCountriesFromUrl(
        axios,
        subString,
        restCountriesUrl
      )

      return data
    }
  }
})()

/*
Redux logic to get country data from REST Countries API based on sub string
matches
*/
const getCountriesLogic = createLogic({
  type: GET_COUNTRIES,

  // debounce incoming requests based on search query updates in `Search`
  debounce: 500,
  latest: true,
  async process ({ action, axios }, dispatch, done) {

    // destructure action data
    const { subString } = action.payload

    try {

      // get all country data that matches `subString`
      const data = await getCountries(subString, axios)

      // dispatch success action
      dispatch(getCountriesFulfilled(data))
    } catch (error) {

      // log error
      console.error(error)

      // dispatch failure action
      dispatch(getCountriesRejected())
    } finally {
      done()
    }
  }
})

export default [
  getCountriesLogic
]
