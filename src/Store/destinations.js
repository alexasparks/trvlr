import * as firebase from 'firebase'

//actions
const STORE_SELECTED_DESTINATIONS = 'STORE_SELECTED_DESTINATIONS'
const CLEAR_SELECTED_DESTINATIONS = 'CLEAR_SELECTED_DESTINATIONS'

//default state
let defaultState = []

//action creators
const storeSelectedDestinations = destinations => ({type: 'STORE_SELECTED_DESTINATIONS', destinations})
const clearSelectedDestinations = destinations  => ({type: 'CLEAR_SELECTED_DESTINATIONS'})

//reducer
export default function (state=defaultState, action) {
  let newState = state.slice()
  switch (action.type) {
    case STORE_SELECTED_DESTINATIONS:
      newState.push(action.destinations)
      return newState

    case CLEAR_SELECTED_DESTINATIONS:
      return state

    default:
      return state
  }
}

//thunks
let storeDestinations = placeName => dispatch => {
  firebase.ref('/destinations').set({
    place: placeName
  })
}
