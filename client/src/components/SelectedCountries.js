import React from 'react'

import CountryListItem from './CountryListItem.js'

/*
A list of selected countries (no duplicates). Replace
the singular <CountryListItem /> below with the list of
all selected countries.
*/
const SelectedCountries = () => {
  return (
    <div className="flex-grow-1">
      <h4> Selected Countries (part 3): </h4>
      <ul className="list-group pr-2">
        <CountryListItem />
      </ul>
    </div>
  )
}

export default SelectedCountries
