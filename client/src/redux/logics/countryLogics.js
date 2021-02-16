import { createLogic } from 'redux-logic'

import {
  GET_COUNTRIES,
  getCountriesFulfilled,
  getCountriesRejected
} from '../actions/countryActions.js'

const getCountriesLogic = createLogic({
  type: GET_COUNTRIES,
  debounce: 500,
  latest: true,
  async process({ action, axios }, dispatch, done) {
    const { subString } = action.payload

    try {
      const { data = []} = await axios
        .get(`https://restcountries.eu/rest/v2/name/${subString}`)

      dispatch(getCountriesFulfilled(data))
    } catch (error) {
      console.error(error)
      dispatch(getCountriesRejected())
    } finally {
      done()
    }
  }
})

export default [
  getCountriesLogic
]
