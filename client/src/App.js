import React, { useState } from 'react'

import Search from './components/Search.js'
import SelectedCountries from './components/SelectedCountries.js'

/*
The entire app that gets rendered in the "root"
element of the page
*/
const App = () => {

  // STATE

  const [pinned, setPinned] = useState([])

  // EVENT HANDLERS

  // add or remove country data from `pinned` state
  const togglePinned = (data) => {

    // determine if country in `data` is pinned
    const isPinned = pinned.find(({ name }) => name === data.name)

    // remove country if in `pinned`, otherwise add it
    const nextPinned = isPinned
      ? pinned.filter(({ name }) => name !== data.name)
      : [...pinned, data]

    setPinned(nextPinned)
  }

  return (
    <div className="row p-4">

      <div className="col">

        <Search
          pinned={ pinned }
          togglePinned={ togglePinned }
        />

      </div>

      <div className="col">

        <SelectedCountries
          pinned={ pinned }
          togglePinned={ togglePinned }
        />

      </div>

    </div>
  )
}

export default App
