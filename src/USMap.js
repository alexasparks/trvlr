import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Popup } from 'semantic-ui-react'
import './css/map.css'
import states from './dataForMaps/states'
import {storeDestinations} from './Store/destinations'
import Destination from './Destination'
import {database} from './firebase'

class USMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      states: states,
      selectedStates: [],
      destinations: [],
      finalDestination: {}
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = e => {
    let stateArr = this.state.states
    let currentId = e.target.id
    let currentSelectedStates = this.state.selectedStates
    currentSelectedStates.push(currentId)

    for(var singleState in stateArr){
      if(stateArr[singleState].id === e.target.id){
        let currentFill = stateArr[singleState].fill
        let stateData = stateArr[singleState]

        if(!this.state.destinations.includes(stateData)){
          this.state.destinations.push(stateData)
        }

        this.setState({currentFill})
      }
    }

    let addDestination = database.ref('/destinations');
    addDestination.push({
      destination: this.state.destinations
    })

    console.log(this.state.destinations)
  }

  render() {
    return(
      <div className='us-map'>
      <svg
      xmlns='http://www.w3.org/2000/svg' width='1500' height='1500'>
        <g id='outlines'>
          { this.state.states.map(state => {
            return(
            <Popup
            trigger={<path className="stateBody" id={state.id} d={state.coords} fill={this.state.selectedStates.includes(state.id) ? '#FF656C' : state.fill} onClick={this.handleClick} />}
            content={state.name} />
            )
          })
          }
        </g>
        />
      </svg>
      </div>
    )
  }
}

export default USMap
