import React from 'react'
import IconButton from 'material-ui/IconButton'
import PowerLogo from 'material-ui/svg-icons/action/power-settings-new'
import AddButton from 'material-ui/svg-icons/content/add'
import RemoveButton from 'material-ui/svg-icons/content/remove'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
// import Logo from '../../public/Power-icon.png'

export default () => {
  return (
    <nav>
      <img src='http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Power-icon.png' className='navbar-logo'/>
      <div className="nav-btn-container">
        <div className='nav-btn login-btn'>log in</div>
        <div className='nav-btn signup-btn'>sign up</div>
      </div>
    </nav>
  )
}

/*
<div className="nav-btn-container">
  <div className='nav-btn'>Top Headlines</div>
  <hr />
  <div className='nav-btn'>Selected Sources</div>
</div>
*/
