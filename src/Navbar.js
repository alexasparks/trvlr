import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import './navbar.css'

let Navbar = props => {
  return(
    <div className='navbar'>
    <ul>
      <li><NavLink to='/usmap'>US Map</NavLink></li>
      <li><NavLink to='/worldmap'>World Map</NavLink></li>
      <li><NavLink to='/logout'>Logout</NavLink></li>
    </ul>
    </div>
  )
}

export default Navbar
