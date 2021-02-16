import React, { useEffect, useState } from 'react'

import CountryListItem from './CountryListItem.js'
import getCountryData from '../lib/getCountryData.js'
import useDebounceCallback from '../lib/useDebounceCallback.js'

/*
The search bar and search results.
*/
const Search = () => {

  // STATE

  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [countryData, setCountryData] = useState([])

  // EVENTS HANDLERS

  // get country data from API and set it in state. if `query` is empty,
  // do not make API call and empty country data in state
  const handleGetCountries = async () => {
    if (query === '') { return setCountryData([]) }

    const nextCountryData = await getCountryData(query)
    setCountryData(nextCountryData)
  }

  // update `query` state on changes to input element
  const handleChange = ({ target: { value } }) => setQuery(value)

  // EFFECTS HOOKS

  // debounce changes to `query` that then trigger API requests for countries
  // data based on `query` value
  useDebounceCallback(query, handleGetCountries, 400)

  // when `query` changes, set `isLoading` state to `true` unless `query` is
  // empty, in which case set `isLoading` to `false`
  useEffect(() => setIsLoading(query !== ''), [query])

  // when new country data has been retreived, set `isLoading` state to `false`
  useEffect(() => setIsLoading(false), [countryData])

  // LOGIC

  // generate list of countries. if results are loading, show loading message
  const CountryList = isLoading === true
    ? <div>Loading Results...</div>

      // if there are 0 countries found, show not found message
      : countryData.length === 0
        ? <div>No countries found</div>

        // otherwise, show list of `CountryListItem` components
        : countryData.map(({ flag, name }, index) => (
          <CountryListItem
            flag={ flag }
            key={ index }
            name={ name }
          />
        ))

  // search results will show only if `query` is not empty
  const SearchResults = query !== '' && (
    <>

      <h4 className="mt-2">Search Results</h4>

      <ul className="list-group pr-2">
        { CountryList }
      </ul>

    </>
  )

  return (
    <div className="flex-grow-1 m-1">

      <input
        className="w-100"
        placeholder="Start typing a country name here"
        onChange={ handleChange }
        type="text"
        value={ query }
      />

      { SearchResults }

    </div>
  )
}

export default Search
