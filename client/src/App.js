import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { getPinnedCountries } from './redux/actions/pinnedCountryActions.js'
import Search from './components/Search.js'
import SelectedCountries from './components/SelectedCountries.js'
import ServerOfflineNotification from
  './components/ServerOfflineNotification.js'

/*
The entire app that gets rendered in the "root"
element of the page
*/
const App = ({ hasFailedToLoad, getPinnedCountries }) => {

  // EFFECTS HOOKS

  // get pinned countries from server when app first loads
  useEffect(() => {
    getPinnedCountries()
  }, [])

  return (
    <div>

      { hasFailedToLoad && <ServerOfflineNotification /> }

      <div className="row p-4">

        <div className="col">

          <Search />

        </div>

        <div className="col">

          <SelectedCountries />

        </div>

      </div>

    </div>
  )
}

// PROP TYPES

App.propTypes = {
  hasFailedToLoad: PropTypes.bool,
  getPinnedCountries: PropTypes.func
}

// REDUX CONNECT CONFIG

const mapStateToProps = ({ pinnedCountry }) => ({
  hasFailedToLoad: pinnedCountry.hasFailedToLoad
})

const mapDispatchToProps = (dispatch) => ({
  getPinnedCountries: () => dispatch(getPinnedCountries())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
