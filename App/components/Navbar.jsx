import React from 'react'
import { Link } from 'react-router-dom'

export default ({user}) => (
  <nav>
    <Link to='/'>
      <img src='http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Power-icon.png' className='navbar-logo'/>
    </Link>
    { user ?
      <img src='http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Power-icon.png' className='navbar-logo'/>
      : (
        <div className="nav-btn-container">
          <Link to='/account' >
            <div className='nav-btn login-btn'>log in</div>
          </Link>
          <Link to='/account'>
            <div className='nav-btn signup-btn'>sign up</div>
          </Link>
        </div>
      )
    }

  </nav>
)
/*
  pass down a function from Index that changes user to login if there is no user.
*/
