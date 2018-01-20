import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import USMap from '../USMap'
import WorldMap from '../WorldMap'

// const reducer = combineReducers({})

const middleWare = applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true}
))

export const store = createStore(reducer, middleware)

export default store
