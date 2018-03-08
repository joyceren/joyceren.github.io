import React from 'react'
import { Link } from 'react-router-dom'
import UserInfo from './UserInfo'
// import userPic from '~/public/user-icon.png'

const Navbar = props => {
  if(!props) return null
  return (
    <nav>
      <Link to='/'>
        <img src='http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Power-icon.png' className='navbar-logo'/>
      </Link>
      { props.signedIn ?
          <div className="nav-btn-container">
            <Link to='/account' className='nav-btn login-btn'>account</Link>
            <Link to='/account'className='nav-btn login-btn' onClick={props.signOut}>log out</Link>
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


export default UserInfo(Navbar)
