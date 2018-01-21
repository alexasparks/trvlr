import React from 'react'
import { auth } from '../firebase'

const LogoutButton = () => {
  return(
    <button
    type="button"
    onClick={() => auth.signOut()}
    ><img src="https://png.icons8.com/material/50/000000/shutdown.png"/>
    </button>
  )
}

export default LogoutButton
