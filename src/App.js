import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './User/Login'
import Signup from './User/Signup'
import firebase from './firebase'

//this is like main, you put your components in this

class App extends Component {

  render() {
    return(
      <div>
        <Login />
      </div>
    )
  }
}

export default App;
