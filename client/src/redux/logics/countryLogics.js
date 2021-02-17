import { createLogic } from 'redux-logic'

import {
  GET_COUNTRIES,
  getCountriesFulfilled,
  getCountriesRejected
} from '../actions/countryActions.js'

/*
Redux logic to get country data from REST Countries API based on sub string
matches
*/
const getCountriesLogic = createLogic({
  type: GET_COUNTRIES,

  // debounce incoming requests based on search query updates in `Search`
  debounce: 500,
  latest: true,
  async process({ action, axios }, dispatch, done) {

    // destructure action data
    const { subString } = action.payload

    try {

      // get all country data that matches `subString`
      const res = await axios
        .get(`https://restcountries.eu/rest/v2/name/${subString}`)

      // destructure response
      const { data = [] } = res

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
