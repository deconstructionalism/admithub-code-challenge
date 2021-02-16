import React from 'react'
import PropTypes from 'prop-types'

import CountryListItem from './CountryListItem.js'

/*
A list of selected countries (no duplicates). Replace
the singular <CountryListItem /> below with the list of
all selected countries.
*/
const SelectedCountries = ({
  pinned,
  togglePinned
}) => {

  // LOGIC

  if (pinned.length === 0) { return null }

  // generate list of pinned countries
  const CountryList = pinned
    .map((data, index) => (
      <CountryListItem
        data={ data }
        isPinned={ true }
        key={ index }
        togglePinned={ togglePinned }
      />
    ))

  const containerStyle = { paddingTop: '1.875rem' }

  return (
    <div style={ containerStyle }>

      <h4 className="mt-2">Selected Countries</h4>

      <ul className="list-group pr-2">
        { CountryList }
      </ul>

    </div>
  )
}

SelectedCountries.propTypes = {
  countryData: PropTypes.arrayOf(PropTypes.object),
  pinned: PropTypes.arrayOf(PropTypes.string),
  togglePinned: PropTypes.func
}

export default SelectedCountries
