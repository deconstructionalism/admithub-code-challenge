import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { getPinnedCountries } from './redux/actions/pinnedCountryActions.js'
import Search from './components/Search.js'
import SelectedCountries from './components/SelectedCountries.js'

/*
The entire app that gets rendered in the "root"
element of the page
*/
const App = ({ getPinnedCountries }) => {

  // EFFECTS HOOKS

  // get pinned countries from server when app first loads
  useEffect(() => {
    getPinnedCountries()
  }, [])

  return (
    <div className="row p-4">

      <div className="col">

        <Search />

      </div>

      <div className="col">

        <SelectedCountries />

      </div>

    </div>
  )
}

// PROP TYPES

App.propTypes = {
  getPinnedCountries: PropTypes.func
}

// REDUX CONNECT CONFIG

const mapDispatchToProps = (dispatch) => ({
  getPinnedCountries: () => dispatch(getPinnedCountries())
})

export default connect(null, mapDispatchToProps)(App)
