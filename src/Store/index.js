import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import destinations from './destinations'

const reducer = combineReducers({destinations})

const middleware = applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true}
))

export const store = createStore(reducer, middleware)

export default store
export * from './destinations'
