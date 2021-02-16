import { createLogicMiddleware } from 'redux-logic'
import { createStore, compose, applyMiddleware } from 'redux'
import axios from 'axios'

import rootReducer from '../redux/reducers/index.js'
import rootLogics from '../redux/logics/index.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const dependencies = {
  axios
}

const middleWare = applyMiddleware(
  createLogicMiddleware(rootLogics, dependencies)
)

export default createStore(
  rootReducer,
  composeEnhancers(
    middleWare
  )
)
