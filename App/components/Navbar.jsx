import React from 'react'
import { Link } from 'react-router-dom'
import unpluggedPic from '~/public/unplugged.png'
import userPic from '~/public/user-icon.png'

const Navbar = props => {

  // takes in props:
  // signedIn

  if(!props) return null
  return (
    <nav>
      <Link to='/' className="logo-box">
        <img src={unpluggedPic} className='navbar-logo'/>
        <h1>filter bubble</h1>
      </Link>
      { props.signedIn ?
        //signed in
          <div className="nav-btn-container">
            <Link to='/account' className='nav-btn login-btn'>account</Link>
            <div className='nav-btn login-btn' onClick={props.signOut}>log out</div>
          </div>
        : 
        //not signed in
          <div className="nav-btn-container">
            <Link to='/account/log-in' className='nav-btn login-btn'>log in</Link>
            <Link to='/account' className='nav-btn signup-btn'>sign up</Link>
          </div>
      }
    </nav>
  )
}


export default Navbar


