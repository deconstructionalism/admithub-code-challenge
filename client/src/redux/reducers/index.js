import { combineReducers } from 'redux'

import countryReducer from './countryReducer.js'
import pinnedReducer from './pinnedReducer.js'

const rootReducer = combineReducers({
  country: countryReducer,
  pinned: pinnedReducer
})

export default rootReducer
