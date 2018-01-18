import React, { Component } from 'react';
import '../App.css';
import Signup from './Signup'
import { auth, provider } from '../firebase'

class Login extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
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

  render() {
    return (
      <div className="logo">
      <div className="login-block">
      <form>
        <h1>Login</h1>
        <input id="loginEmail" type="text" placeholder="email address"/>
        <input id="loginPassword" type="text" placeholder="password"/>
        <button onClick={this.login}>Submit</button>
      </form>
      </div>
      </div>
    );
  }
}

export default Login;
