import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/index.css'

let PageNotFound = () => {
  return(
    <div className='message'>
    <NavLink to='/login'><img src="https://cdn.iconscout.com/public/images/icon/premium/png-512/earth-global-globe-international-map-planet-world-39a57358f3ca41ec-512x512.png"/></NavLink>
    <h1>You must be logged in to view this page.</h1>
    </div>
  )
}

export default PageNotFound
