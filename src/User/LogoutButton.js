import React from 'react'
import {NavLink} from 'react-router-dom'
import { auth } from '../firebase'
import '../css/index.css'
import {database} from '../firebase'

const LogoutButton = () => {
  return(
    <NavLink
    to='/login'
    onClick={() => {
      auth.signOut()
      database.ref('destinations').set({destinations: null})
    }}
    ><img alt='logout' className="logoutImage" src="https://png.icons8.com/material/50/000000/shutdown.png"/>
    </NavLink>
  )
}

export default LogoutButton
