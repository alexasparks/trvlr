import React, {Component} from 'react'
import '../App.css';
import { auth, provider } from '../firebase'

class Signup extends Component {
  constructor(){
    super()
    this.setState ({
      user: null
    })
  }

  render() {
    return (
      <div className="login-page">
      <div className="form">
      <form className="login-form">
      <input id="signupEmail" type="text" placeholder="email"/>
      <input id="signupPassword" type="password" placeholder="password"/>
      <button onClick={this.signup}>Sign up</button>
      <p className="message">Not registered? <a href="#">Create an account</a></p>
    </form>
    </div>
    </div>
    )
  }
}

export default Signup

