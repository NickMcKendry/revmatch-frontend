import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducers from './reducers'

const middleware = [
  promiseMiddleware(),
  thunk
]

if(__DEV__){
  const { createLogger } = require('redux-logger')

  middleware.push(createLogger())
}


export default createStore(
  reducers,
  undefined,
  composeWithDevTools(applyMiddleware(...middleware))
);
