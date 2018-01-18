import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import LoginForm from './User/LoginForm'
import SignupForm from './User/SignupForm'
import Landing from './Landing'
import firebase from './firebase'
import worldMap from './worldMap'

//this is like main, you put your components in this

class App extends Component {

  render() {
    return(
      <Router>
      <div>
        <Landing />
        <Route
          exact path="/signup"
          component={SignupForm} />

        <Route
          exact path="/login"
          component={LoginForm} />

        <Route
          exact path="/map"
          component={worldMap}/>
      </div>
      </Router>
    )
  }
}

export default App;
