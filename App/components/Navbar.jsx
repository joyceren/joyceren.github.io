import React from 'react'
import { Link } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import PowerLogo from 'material-ui/svg-icons/action/power-settings-new'
import AddButton from 'material-ui/svg-icons/content/add'
import RemoveButton from 'material-ui/svg-icons/content/remove'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

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
