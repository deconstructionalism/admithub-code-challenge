import React from 'react'

import CountryListItem from './CountryListItem.js'

/*
The search bar and search results. Add a handler that makes
a rest-countries API request on key press, and returns the
first 5 results as <CountryListItem /> components.
Show a loading state while API request is not resolved!
*/
const Search = () => {
  return (
    <div className="flex-grow-1 m-1">
      <input
        type="text"
        className="w-100"
        placeholder="Start typing a country name here"
      />
      <h4 className="mt-2">Search Results (part 2): </h4>
      <ul className="list-group pr-2">
        <CountryListItem />
        <CountryListItem />
        <CountryListItem />
      </ul>
    </div>
  )
}

export default Search
