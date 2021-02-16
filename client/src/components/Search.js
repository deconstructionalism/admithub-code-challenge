import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { getCountries } from '../redux/actions/countryActions.js'
import CountryListItem from './CountryListItem.js'

/*
The search bar and search results.
*/
const Search = ({
  countries,
  getCountries,
  isLoading,
  pinned,
  togglePinned
}) => {

  // STATE

  const [query, setQuery] = useState('')

  // EVENTS HANDLERS

  // update `query` state on changes to input element
  const handleChange = ({ target: { value } }) => setQuery(value)

  // EFFECTS HOOKS

  // get country data from API as long as `query` is not empty
  useEffect(() => query !== '' && getCountries(query), [query])

  // LOGIC

  // filter out pinned country data and show top 5 results
  const pinnedCountries = pinned.map(({ name }) => name)
  const unpinnedData = countries
    .filter(({ name }) => !pinnedCountries.includes(name))
    .splice(0, 5)

  // generate list of countries
  const CountryList = (() => {

    // if results are loading, show loading message
    if (isLoading === true) { return <div>Loading Results...</div> }

      // if there are 0 countries found, show not found message
    if (unpinnedData.length === 0) { return <div>No countries found</div> }

    // otherwise, show list of `CountryListItem` components
    return unpinnedData
      .map((data, index) => (
        <CountryListItem
          data={ data }
          isPinned={ false }
          key={ index }
          togglePinned={ togglePinned }
        />
      ))
  })()

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
    <div>

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

// PROP TYPES

Search.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object),
  getCountries: PropTypes.func,
  isLoading: PropTypes.bool,
  pinned: PropTypes.arrayOf(PropTypes.object),
  togglePinned: PropTypes.func
}

// REDUX CONNECT CONFIG

const mapStateToProps = ({ country, pinned }) => ({
  countries: country.countries,
  isLoading: country.isLoading,
  pinned: pinned.countries
})

const mapDispatchToProps = (dispatch) => ({
  getCountries: (subString) => dispatch(getCountries(subString))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
