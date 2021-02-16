import {
  GET_COUNTRIES,
  GET_COUNTRIES_FULFILLED,
  GET_COUNTRIES_REJECTED
} from '../actions/countryActions.js'

const initialState = {
  countries: [],
  isLoading: false
}

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES: {
      return {
        ...state,
        isLoading: true
      }
    }

    case GET_COUNTRIES_FULFILLED: {
      const { countries } = action.payload

      return {
        ...state,
        countries,
        isLoading: false
      }
    }

    case GET_COUNTRIES_REJECTED: {
      return {
        ...state,
        countries: [],
        isLoading: false
      }
    }

    default: {
      return state
    }
  }
}

export default countryReducer
