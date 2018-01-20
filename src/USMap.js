import React, {Component} from 'react'
import { connect } from 'react-redux'
import './Map/map.css'
import states from './states'

class USMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      states: states,
      selectedStates: [],
      activeFill: [],
      wantToGo: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = e => {
    let stateArr = this.state.states
    let currentId = e.target.id
    let currentSelectedStates = this.state.selectedStates
    currentSelectedStates.push(currentId)

    if(!this.state.wantToGo.includes(currentId)){
      this.state.wantToGo.push(currentId)
    }

    for(var singleState in stateArr){
      if(stateArr[singleState].id === e.target.id){
        let currentFill = stateArr[singleState].fill
        this.setState({currentFill: '#ff656c'})
      }
    }
  }

    render() {
      return(
        <div>
        <div className='us-map'>
        <svg
        xmlns='http://www.w3.org/2000/svg' width='1500' height='1500'>
          <g id='outlines'>
            { this.state.states.map(state => {
              return(
              <path className="stateBody" id={state.id} d={state.coords} fill={this.state.selectedStates.includes(state.id) ? '#FF656C' : state.fill} onClick={this.handleClick} />
              )
            })
            }
          </g>
          <path id='frames' fill='none' stroke='#A9A9A9' strokeWidth='2' d='M215,493v55l36,45 M0,425h147l68,68h85l54,54v46'
          />
        </svg>
        </div>
        <div>

        </div>
        </div>
      )
    }
  }

  export default USMap
