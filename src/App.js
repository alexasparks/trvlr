import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './css/App.css';
import LoginForm from './User/LoginForm'
import SignupForm from './User/SignupForm'
import Landing from './Landing'
import firebase from './firebase'
import USMap from './USMap'
import WorldMap from './WorldMap'
import Navbar from './Navbar'

//this is like main, you put your components in this

class App extends Component {

  render() {
    return(
      <Router>
      <div>
        <Navbar />
        <Route
          exact path="/"
          component={SignupForm} />

        <Route
          exact path="/login"
          component={LoginForm} />

        <Route
          exact path="/usmap"
          component={USMap}/>

        <Route
          exact path="/worldmap"
          component={WorldMap}/>
      </div>
      </Router>
    )
  }
}

export default App;
