export const GET_COUNTRIES = 'GET_COUNTRIES'

export const GET_COUNTRIES_FULFILLED = 'GET_COUNTRIES_FULFILLED'

export const GET_COUNTRIES_REJECTED = 'GET_COUNTRIES_REJECTED'

export const getCountries = (subString) => ({
  type: GET_COUNTRIES,
  payload: { subString }
})

export const getCountriesFulfilled = (countries) => ({
  type: GET_COUNTRIES_FULFILLED,
  payload: { countries }
})

export const getCountriesRejected = () => ({
  type: GET_COUNTRIES_REJECTED
})
