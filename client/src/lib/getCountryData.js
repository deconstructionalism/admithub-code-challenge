const axios = require('axios')

/*
Search country data in REST Countries API for countries containing text matching
a sub string query. If API request fails, will return an empty array. Otherwise,
will return first five results.
*/
const getCountryData = (subString) => {
  return axios.get(`https://restcountries.eu/rest/v2/name/${subString}`)
    .then(({ data = [] }) => data.slice(0, 5))
    .catch(() => [])
}

export default getCountryData
