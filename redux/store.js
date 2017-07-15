import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

import reducers from './reducers'

const middlewares = [
  promiseMiddleware()
]

if(__DEV__){
  const { createLogger } = require('redux-logger')

  middlewares.push(createLogger())
}

const enhancers = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose

export default createStore(
  reducers,
  undefined,
  enhancers(applyMiddleware(...middlewares))
)
