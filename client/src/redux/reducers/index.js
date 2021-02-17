import { combineReducers } from 'redux'

import countryReducer from './countryReducer.js'
import pinnedCountryReducer from './pinnedCountryReducer.js'

const rootReducer = combineReducers({
  country: countryReducer,
  pinnedCountry: pinnedCountryReducer
})

export default rootReducer
