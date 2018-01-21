import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom'
import '../css/Landing.css';
import { auth, provider } from '../firebase'

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
})

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
}

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {...INITIAL_STATE};

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) => {
    const {
      email,
      password
    } = this.state

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({...INITIAL_STATE}))
        this.props.history.push('/worldmap')
      })
      .catch(error => {
        this.setState(byPropKey('error', error))
      })
    e.preventDefault()
  }

  render() {
    const {
      email,
      password,
      error
    } = this.state

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div className="login-block">
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <input
        value={email}
        onChange={e => this.setState(byPropKey('email', e.target.value))}
        placeholder='email'
        />
        <input
        value={password}
        onChange={e => this.setState(byPropKey('password', e.target.value))}
        type='password'
        placeholder='password'
        />
        <button disabled={isInvalid} type="submit">Submit</button>
        { error && <p>{error.message}</p>}
      </form>
      <p className="signupText">Don't have an account? <NavLink to="/"> Create New Account</NavLink></p>
      </div>
    );
  }
}



export default Login;
