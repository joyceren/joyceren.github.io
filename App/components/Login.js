import React, {Component} from 'react'
import '~/public/login.css'

import {auth} from '~/fire'

export default class extends Component {


  signInHandler = e => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(e.target.email.value, e.target.password.value)
    .then(res => {
      this.props.closeSignIn()
    })
    .catch(error => {
      if(error.code == "auth/user-not-found") {
        this.setState({errorMessage: "There is no user with this username"})
      }
    })
  }

  render() {
    return (
      <div>
        <div className='login-overlay' onClick={this.props.closeSignIn}></div>
        <div className='login-box'>
          <div className='close-btn' onClick={this.props.closeSignIn}>X</div>
          <h2>Enter your email to sign in</h2>
          <form className='login-form-box' onSubmit={this.signInHandler}>
            <input type="email" className="input-text" name='email' placeholder='email' autoFocus/>
            <input type='password' className='input-text' name='password' placeholder='password' />
            <input type='submit' className='submit-btn' />
          </form>
        </div>
      </div>
    )
  }
}
