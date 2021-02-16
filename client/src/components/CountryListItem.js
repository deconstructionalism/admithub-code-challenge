import React from 'react'
import PropTypes from 'prop-types'

/*
Takes an image URL and a country name, and renders a
list item that can be pinned to or removed from the
"Selected Countries" list.
*/
const CountryListItem = ({ flag, name }) => {
  return (
    <li className="d-flex flex-row align-items-center list-group-item">

      <img
        alt={ `flag of ${name}` }
        src={ flag }
        style={ { width: '3rem' } }
      />

      <span class="mr-auto ml-4">{ name }</span>

      <button
        class="btn"
      >
        &#10133;
      </button>

    </li>
  )
}

// temporary; for testing layout only
CountryListItem.defaultProps = {
  flag: 'https://restcountries.eu/data/mex.svg',
  name: 'Mexico'
}

CountryListItem.propTypes = {
  flag: PropTypes.string,
  name: PropTypes.string
}

export default CountryListItem
