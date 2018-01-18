import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom'
import '../App.css';
import { auth, provider } from '../firebase'

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
})

class Login extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null
    }
    this.login = this.login.bind(this)
    this.signup = this.signup.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    })
  }

  signup(e) {
    console.log('signup')
    let email = e.target.signupEmail.value
    let password = e.target.signupPassword.value
    auth.createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error.message))
  }

  login(e) {
    console.log('login')
    let email = e.target.loginEmail.value
    let password = e.target.loginPassword.value
    auth.signInWithEmailAndPassword(email, password)
      .catch(error => console.log(error.message))
  }

  // handleSubmit(e) {

  // }
  //if pw invalid, extend the form
  render() {
    return (
      <div className="login-block">
      <form>
        <h1>Login</h1>
        <input
        id="loginEmail"
        type="text"
        placeholder="email address"/>
        <input
        id="loginPassword"
        type="text"
        placeholder="password"/>
        <button onClick={this.login}>Submit</button>
      </form>
      <p className="signupText">Don't have an account? <NavLink to="/signup"> Create New Account</NavLink></p>
      </div>
    );
  }
}



export default Login;
