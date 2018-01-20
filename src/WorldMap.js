import React, { Component } from 'react'
import countries from './countries'
import './Map/map.css'

class WorldMap extends Component {
    constructor() {
        super()
        this.state = {
            countries: countries
        }
    }
    render() {
        return (
            <svg className='world-map' xmlns='http://www.w3.org/2000/svg' height='1001' width='2000'>
                <g>
                    {
                        this.state.countries.map(country => {
                            return (
                                <path className='countryBody' id={country.id} d={country.d} fill={country.fill} />
                            )
                        })
                    }
                </g>
            </svg>
        )
    }
}


export default WorldMap
