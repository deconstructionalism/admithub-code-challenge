import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './App.js'
import store from './lib/store.js'

ReactDOM.render(
  <Provider store={ store }>

    <App />

  </Provider>,
  document.getElementById('root')
)
