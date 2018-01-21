import axios from 'axios'

//actions
const SHOW_SELECTED_DESTINATIONS = 'SHOW_SELECTED_DESTINATIONS'
const CLEAR_SELECTED_DESTINATIONS = 'CLEAR_SELECTED_DESTINATIONS'

//default state
let defaultState = []

//action creators
const showSelectedDestinations = destinations => ({type: 'SHOW_SELECTED_DESTINATIONS', destinations})
const clearSelectedDestinations = destinations  => ({type: 'CLEAR_SELECTED_DESTINATIONS'})

//reducer
export default function (state=defaultState, action) {
  let newState = state.slice()
  switch (action.type) {
    case SHOW_SELECTED_DESTINATIONS:
      newState.push(action.destinations)
      return newState

    case CLEAR_SELECTED_DESTINATIONS:
      return state

    default:
      return state
  }
}

