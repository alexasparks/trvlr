import React, {Component} from 'react'
import countries from './countries'
import './Map/map.css'

class WorldMap extends Component {
  constructor() {
    super()
    this.state = {
      countries: countries,
      selectedCountry: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = e => {
    console.log('e', e.target.id)
    let countryArr = this.state.countries
    let idToChange = e.target.id
    let currentSelectedCountry = this.state.selectedCountry
    currentSelectedCountry.push(idToChange)

    for(var country in countryArr){
      if(countryArr[country].id === e.target.id){
        let currentFill = countryArr[country].fill
        this.setState({currentFill})
      }
    }
  }

  render(){
    return (
      <svg className='world-map' xmlns='http://www.w3.org/2000/svg' height='1001' width='2000'>
        <g>
          {
            this.state.countries.map(country => {
              return (
                <path className='countryBody' id={country.id} d={country.d} fill={this.state.selectedCountry.includes(country.id) ? '#FF656C' : country.fill} onClick={this.handleClick}/>
              )
            })
          }
        </g>
      </svg>
    )
  }
}

export default WorldMap
