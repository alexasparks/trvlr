import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './css/App.css';
import LoginForm from './User/LoginForm'
import SignupForm from './User/SignupForm'
import Landing from './Landing'
import {auth} from './firebase'
import USMap from './USMap'
import WorldMap from './WorldMap'
import Navbar from './Navbar'
import PageNotFound from './PageNotFound'
import Destination from './Destination'

//this is like main, you put your components in this

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      authUser: null
    }
  }

  componentDidMount () {
    auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }))
    })
  }

  render() {
    return(
      <Router>
        {this.state.authUser
          ? <div>
            <Navbar />
            <Route
            exact path="/"
            component={WorldMap} />

            <Route
            exact path="/usmap"
            component={USMap}/>

            <Route
            exact path="/worldmap"
            component={WorldMap}/>

            <Route
            exact path="/destination"
            component={Destination} />
            </div>

          : <div>
            <Route
            exact path="/"
            component={SignupForm} />

            <Route
            exact path="/login"
            component={LoginForm} />
            <Route
            exact path="/usmap"
            component={PageNotFound}/>

            <Route
            exact path="/worldmap"
            component={PageNotFound}/>

            <Route
            exact path="/destination"
            component={PageNotFound} />
            </div>
        }
      </Router>
    )
  }
}

export default App;
