import { createLogic } from 'redux-logic'

import {
  GET_PINNED_COUNTRIES,
  getPinnedCountriesFulfilled,
  getPinnedCountriesRejected,

  ADD_PINNED_COUNTRY,
  addPinnedCountryFulfilled,
  addPinnedCountryRejected,

  REMOVE_PINNED_COUNTRY,
  removePinnedCountryFulfilled,
  removePinnedCountryRejected
} from '../actions/pinnedCountryActions.js'

/*
Redux logic to index all pinned country data from server
*/
const getPinnedCountriesLogic = createLogic({
  type: GET_PINNED_COUNTRIES,
  latest: false,
  async process({ axios }, dispatch, done) {
    try {

      // get all pinned countries from server
      const res = await axios.get('http://localhost:4000/pinned')

      // destructure response
      const { countries = [] } = res.data

      // dispatch success action
      dispatch(getPinnedCountriesFulfilled(countries))
    } catch (error) {

      // log error
      console.error(error)

      // dispatch failure action
      dispatch(getPinnedCountriesRejected())
    } finally {
      done()
    }
  }
})

/*
Redux logic to index add a new pinned country's data to server
*/
const addPinnedCountryLogic = createLogic({
  type: ADD_PINNED_COUNTRY,
  latest: false,
  async process({ action, axios }, dispatch, done) {

    // destructure action data
    const { data } = action.payload

    try {

      // create a new pinned country on server
      await axios.post('http://localhost:4000/pinned', data)

      // dispatch success action
      dispatch(addPinnedCountryFulfilled(data))
    } catch (error) {

      // log error
      console.error(error)

      // dispatch failure action
      dispatch(addPinnedCountryRejected())
    } finally {
      done()
    }
  }
})

/*
Redux logic to remove an existing pinned country's data from server by it's
alpha3Code
*/
const removePinnedCountryLogic = createLogic({
  type: REMOVE_PINNED_COUNTRY,
  latest: false,
  async process({ action, axios }, dispatch, done) {

    // destructure action data
    const { alpha3Code } = action.payload

    try {

      // delete a pinned country from server
      await axios.delete(`http://localhost:4000/pinned/${alpha3Code}`)

      // dispatch success action
      dispatch(removePinnedCountryFulfilled(alpha3Code))
    } catch (error) {

      // log error
      console.error(error)

      // dispatch failure action
      dispatch(removePinnedCountryRejected())
    } finally {
      done()
    }
  }
})

export default [
  getPinnedCountriesLogic,
  addPinnedCountryLogic,
  removePinnedCountryLogic
]
