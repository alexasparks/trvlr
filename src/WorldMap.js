import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import countries from './dataForMaps/countries'
import USMap from './USMap'
import {Popup} from 'semantic-ui-react'
import './css/map.css'
import {database} from './firebase'

class WorldMap extends Component {
  constructor() {
    super()
    this.state = {
      countries: countries,
      selectedCountry: [],
      destinations: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = e => {
    let countryArr = this.state.countries
    let idToChange = e.target.id
    let currentSelectedCountry = this.state.selectedCountry
    currentSelectedCountry.push(idToChange)

    for(var country in countryArr){
      if(countryArr[country].id === e.target.id){
        let currentFill = countryArr[country].fill
        let countryData = countryArr[country]

        if(!this.state.destinations.includes(countryData) && e.target.id !== 'US'){
          let addDestination = database.ref('/destinations');
          addDestination.push({
            destination: countryData
          })
        }
        this.setState({currentFill})
      }
    }

  }

  render(){
    return (
      <div className='world-map'>
      <svg xmlns='http://www.w3.org/2000/svg' height='1001' width='2000'>
        <g>
          {
            this.state.countries.map(country => {
              return (
                country.id === 'US' ?

                <Popup className='popup'
                  trigger={<Link to='/usmap'>
                  <path className='countryBody' id={country.id} d={country.d} fill={this.state.selectedCountry.includes(country.id) ? '#FF656C' : country.fill} onClick={this.handleClick}/> </Link>}
                  content={country.name}/> :

                <Popup
                  trigger={<path className='countryBody' id={country.id} d={country.d} fill=    {this.state.selectedCountry.includes(country.id) ? '#FF656C' : country.fill} onClick= {this.handleClick}/>}
                  content={country.name} />
              )
            })
          }
        </g>
      </svg>
      </div>
    )
  }
}

export default WorldMap
