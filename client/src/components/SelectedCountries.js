import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'

import { removePinnedCountry } from '../redux/actions/pinnedCountryActions.js'
import CountryListItem from './CountryListItem.js'

/*
A list of selected countries (no duplicates). Replace
the singular <CountryListItem /> below with the list of
all selected countries.
*/
const SelectedCountries = ({
  pinnedCountries,
  togglePinned
}) => {

  // LOGIC

  // do not render anything if no countries are pinned
  if (pinnedCountries.length === 0) { return null }

  // generate list of pinned countries
  const CountryList = pinnedCountries
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

// PROP TYPES

SelectedCountries.propTypes = {
  pinnedCountries: PropTypes.arrayOf(PropTypes.string),
  togglePinned: PropTypes.func
}

// REDUX CONNECT CONFIG

const mapStateToProps = ({ pinnedCountry }) => ({
  pinnedCountries: pinnedCountry.countries,
})

const mapDispatchToProps = (dispatch) => ({
  togglePinned: ({ alpha3Code }) => dispatch(removePinnedCountry(alpha3Code))
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectedCountries)
