import React, {Component} from 'react'
import {database} from './firebase'
import WorldMap from './WorldMap'
import states from './dataForMaps/states'
import countries from './dataForMaps/countries'
import Fade from 'react-reveal/Fade'

class Destination extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomFill: '#aa6fdf',
      countryFill: '#f9fb00',
      placeToGo: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = e => {
    database.ref('destinations').set({destinations: null})
  }

  componentDidMount() {
    let assortment = []
    let dbDestination = database.ref('/destinations')
    //maybe add in d-coords and try to do a modal render
    dbDestination.on('child_added', snap => {
      assortment.push(snap.val().destination)
    })

    let randomIndex = Math.floor(Math.random() * (assortment.length))

    for(let i = 0; i < assortment.length; i++){
      if(assortment[i] !== assortment[randomIndex]){
        countries.map(country => {
          if(country.name === assortment[i]){
            country.fill = this.state.randomFill
          }
        })
      }
    }

    countries.map(country => {
      if(country.name === assortment[randomIndex]){
        country.fill = this.state.countryFill
      }
    })
  }

  render(){
    return(
      <div>
      <WorldMap />
      <button onClick={this.handleClick}>Refresh</button>
      </div>
    )
  }
}

export default Destination
