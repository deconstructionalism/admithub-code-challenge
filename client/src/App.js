import React from 'react'

import Search from './components/Search.js'
import SelectedCountries from './components/SelectedCountries.js'

/*
The entire app that gets rendered in the "root"
element of the page
*/
const App = () => {
  return (
    <div className="row w-100 d-flex pt-2">
      <Search />
      <SelectedCountries />
    </div>
  )
}

export default App
