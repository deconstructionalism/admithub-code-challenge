export const GET_PINNED_COUNTRIES = 'GET_PINNED_COUNTRIES'

export const GET_PINNED_COUNTRIES_FULFILLED = 'GET_PINNED_COUNTRIES_FULFILLED'

export const GET_PINNED_COUNTRIES_REJECTED = 'GET_PINNED_COUNTRIES_REJECTED'

export const ADD_PINNED_COUNTRY = 'ADD_PINNED_COUNTRY'

export const ADD_PINNED_COUNTRY_FULFILLED = 'ADD_PINNED_COUNTRY_FULFILLED'

export const REMOVE_PINNED_COUNTRY = 'REMOVE_PINNED_COUNTRY'

export const REMOVE_PINNED_COUNTRY_FULFILLED = 'REMOVE_PINNED_COUNTRY_FULFILLED'

export const getPinnedCountries = () => ({
  type: GET_PINNED_COUNTRIES
})

export const getPinnedCountriesFulfilled = (countries) => ({
  type: GET_PINNED_COUNTRIES_FULFILLED,
  payload: { countries }
})

export const getPinnedCountriesRejected = () => ({
  type: GET_PINNED_COUNTRIES_REJECTED
})

export const addPinnedCountry = (data) => ({
  type: ADD_PINNED_COUNTRY,
  payload: { data }
})

export const addPinnedCountryFulfilled = (data) => ({
  type: ADD_PINNED_COUNTRY_FULFILLED,
  payload: { data }
})

export const removePinnedCountry = (alpha3Code) => ({
  type: REMOVE_PINNED_COUNTRY,
  payload: { alpha3Code }
})

export const removePinnedCountryFulfilled = (alpha3Code) => ({
  type: REMOVE_PINNED_COUNTRY_FULFILLED,
  payload: { alpha3Code }
})

