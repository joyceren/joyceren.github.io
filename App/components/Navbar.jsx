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
      <div className="navbar-button-container">
        <div className="navbar-button-container">
          <div className='navbar-button login-btn'>log in</div>
          <div className='navbar-button signup-btn'>sign up</div>
        </div>
      </div>
    </nav>
  )
}
