import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '~/fire'

export default class extends React.Component {
  state = {
    signedIn: false
  }

  componentDidMount() {
    auth.onAuthStateChanged(
        (user) => this.setState({signedIn: !!user})
    );
  }

  render() {
    return (
      <nav>
        <Link to='/'>
          <img src='http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Power-icon.png' className='navbar-logo'/>
        </Link>
        { this.state.signedIn ?
            <div className="nav-btn-container">
              <Link to='/account' className='nav-btn login-btn'>account</Link>
              <Link to='/account' className='nav-btn signup-btn' onClick={() => auth.signOut()}>log out</Link>
            </div>
          : (
            <div className="nav-btn-container">
              <Link to='/account' className='nav-btn login-btn'>log in</Link>
              <Link to='/account' className='nav-btn signup-btn'>sign up</Link>
            </div>
          )
        }
      </nav>
    )
  }
}
/*
  pass down a function from Index that changes user to login if there is no user.
*/
