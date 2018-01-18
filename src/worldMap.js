import React, {Component} from 'react'
import worldMapSVG from './Map/worldMapHTML.svg'


class worldMap extends Component {
  render() {
    return(
      <img src={worldMapSVG} />
    )
  }
}

export default worldMap
