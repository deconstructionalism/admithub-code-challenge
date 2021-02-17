import React from 'react'
import PropTypes from 'prop-types'

/*
Takes an image URL and a country name, and renders a
list item that can be pinned to or removed from the
"Selected Countries" list.
*/
const CountryListItem = ({
  data,
  isPinned,
  togglePinned
}) => {

  // DESTRUCTURE VALUES

  const { flag, name } = data

  // EVENT HANDLERS

  const handleClick = () => togglePinned(data)

  // LOGIC

  const imgAlt = `flag of ${name}`
  const imgStyle = { width: '3rem' }
  const buttonIcon = isPinned ? '\u2715' : '\uFF0B'
  const buttonClass = `btn ${isPinned ? 'btn-danger' : 'btn-success'}`

  return (
    <li className="d-flex flex-row align-items-center list-group-item">

      <img
        alt={ imgAlt }
        src={ flag }
        style={ imgStyle }
      />

      <span className="mr-auto ml-4">{ name }</span>

      <button
        className={ buttonClass }
        onClick={ handleClick }
      >
        { buttonIcon }
      </button>

    </li>
  )
}

CountryListItem.propTypes = {
  data: PropTypes.object,
  isPinned: PropTypes.bool,
  togglePinned: PropTypes.func
}

export default CountryListItem
