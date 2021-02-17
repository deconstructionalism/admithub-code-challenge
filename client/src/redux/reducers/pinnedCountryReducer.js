import {
  GET_PINNED_COUNTRIES,
  GET_PINNED_COUNTRIES_FULFILLED,
  GET_PINNED_COUNTRIES_REJECTED,

  ADD_PINNED_COUNTRY,
  ADD_PINNED_COUNTRY_FULFILLED,
  ADD_PINNED_COUNTRY_REJECTED,

  REMOVE_PINNED_COUNTRY,
  REMOVE_PINNED_COUNTRY_FULFILLED,
  REMOVE_PINNED_COUNTRY_REJECTED
} from '../actions/pinnedCountryActions.js'

const initialState = {
  countries: [],
  isLoading: false
}

const pinnedCountryReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_PINNED_COUNTRIES: {
      return {
        ...state,
        isLoading: true
      }
    }

    case GET_PINNED_COUNTRIES_FULFILLED: {
      const { countries } = action.payload

      return {
        ...state,
        countries,
        isLoading: false
      }
    }

    case GET_PINNED_COUNTRIES_REJECTED: {
      return {
        ...state,
        countries: [],
        isLoading: false
      }
    }

    case ADD_PINNED_COUNTRY: {
      return {
        ...state,
        isLoading: true
      }
    }

    case ADD_PINNED_COUNTRY_FULFILLED: {
      const { data } = action.payload

      return {
        ...state,
        countries: [
          ...state.countries,
          data
        ],
        isLoading: false
      }
    }

    case ADD_PINNED_COUNTRY_REJECTED: {
      return {
        ...state,
        isLoading: false
      }
    }

    case REMOVE_PINNED_COUNTRY: {
      return {
        ...state,
        isLoading: true
      }
    }

    case REMOVE_PINNED_COUNTRY_FULFILLED: {
      const { alpha3Code } = action.payload

      const nextCountries = state.countries
        .filter(({ alpha3Code: _a }) => _a !== alpha3Code)

      return {
        ...state,
        countries: nextCountries,
        isLoading: false
      }
    }

    case REMOVE_PINNED_COUNTRY_REJECTED: {
      return {
        ...state,
        isLoading: false
      }
    }

    default: {
      return state
    }
  }
}

export default pinnedCountryReducer
