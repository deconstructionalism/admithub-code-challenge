import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import CountryListItem from './CountryListItem.js'
import getCountryData from '../lib/getCountryData.js'
import useDebounceCallback from '../lib/useDebounceCallback.js'

/*
The search bar and search results.
*/
const Search = ({
  pinned,
  togglePinned
}) => {

  // STATE

  const [countryData, setCountryData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState('')

  // EVENTS HANDLERS

  // update `query` state on changes to input element
  const handleChange = ({ target: { value } }) => setQuery(value)

  // get country data from API and set it in state. if `subString` is empty,
  // do not make API call and empty country data in state
  const handleGetCountries = async () => {
    if (query === '') { return setCountryData([]) }

    const nextCountryData = await getCountryData(query)
    setCountryData(nextCountryData)
  }

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

  // filter out pinned country data and show top 5 results
  const pinnedCountries = pinned.map(({ name }) => name)
  const unpinnedData = countryData
    .filter(({ name }) => !pinnedCountries.includes(name))
    .splice(0, 5)

  // generate list of countries. if results are loading, show loading message
  const CountryList = isLoading === true
    ? <div>Loading Results...</div>

      // if there are 0 countries found, show not found message
      : unpinnedData.length === 0
        ? <div>No countries found</div>

        // otherwise, show list of `CountryListItem` components
        : unpinnedData
          .map((data, index) => (
            <CountryListItem
              data={ data }
              isPinned={ false }
              key={ index }
              togglePinned={ togglePinned }
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

Search.propTypes = {
  handleGetCountries: PropTypes.func,
  pinned: PropTypes.arrayOf(PropTypes.string),
  togglePinned: PropTypes.func
}

export default Search
