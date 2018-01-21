import React from 'react'
import * as firebase from './firebase'

let Destination = props => {
  let randomizer = props => {
    return props[Math.floor(Math.random() * props.length)]
  }

  return(
    <h1>{this.randomizer}</h1>
  )
}

export default Destination
