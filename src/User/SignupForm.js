import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../Landing.css'
import { auth, provider } from '../firebase'

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
})

class Signup extends Component {
  constructor(props){
    super(props)
    this.state={...INITIAL_STATE}

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = e => {
    const {
      name,
      email,
      passwordOne
    } = this.state

    auth.createUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState(() => ({...INITIAL_STATE}))
      })
      .catch(error => {
        this.setState(byPropKey('error', error))
      })
    e.preventDefault()
  }

  render() {
    const {
      name,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' |
      name === ''

    return (
      <div className="login-block">
      <form onSubmit={this.handleSubmit}>
        <h1>Signup</h1>
        <input
        value={name}
        onChange={event => this.setState(byPropKey('name', event.target.value))}
        type="text"
        placeholder="name"/>
        <input
        value={email}
        onChange={event => this.setState(byPropKey('email', event.target.value))}
        type="text"
        placeholder="email address"/>
        <input
        value={passwordOne}
        onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
        type="password"
        placeholder="password"/>
        <input
        value={passwordTwo}
        onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
        type="password"
        placeholder="confirm password"/>
        <button disabled={isInvalid} type="submit">Submit</button>
        { error && <p>{error.message}</p>}
      </form>
      <p className="signupText">Already have an account? <NavLink to="/login">Login</NavLink></p>
      </div>
    );
  }
}

export default Signup

