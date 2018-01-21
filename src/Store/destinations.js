import * as firebase from 'firebase'

//actions
const INIT_DESTINATIONS = 'INIT_DESTINATIONS'
const STORE_SELECTED_DESTINATIONS = 'STORE_SELECTED_DESTINATIONS'
const CLEAR_SELECTED_DESTINATIONS = 'CLEAR_SELECTED_DESTINATIONS'

//default state
let defaultState = []

//action creators
const initDestinations = destinations => ({type: 'INIT_DESTINATIONS', destinations})
const storeSelectedDestinations = destinations => ({type: 'STORE_SELECTED_DESTINATIONS', destinations})
const clearSelectedDestinations = destinations  => ({type: 'CLEAR_SELECTED_DESTINATIONS'})

//reducer
export default function (destinations=defaultState, action) {
  let newState = destinations.slice()
  switch (action.type) {
    case
    INIT_DESTINATIONS:
      return destinations

    case
    STORE_SELECTED_DESTINATIONS:
      newState.push(action.destinations)
      return newState

    case CLEAR_SELECTED_DESTINATIONS:
      return destinations

    default:
      return destinations
  }
}

//thunks
let storeDestinations = placeName => dispatch => {
  firebase.ref('/destinations').set({
    place: placeName
  })
}
