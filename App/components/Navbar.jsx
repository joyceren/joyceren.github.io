import React from 'react'
import IconButton from 'material-ui/IconButton'
import PowerLogo from 'material-ui/svg-icons/action/power-settings-new'
import AddButton from 'material-ui/svg-icons/content/add'
import RemoveButton from 'material-ui/svg-icons/content/remove'
import FlatButton from 'material-ui/FlatButton'

export default () => {
  return (
    <nav>
      <IconButton>
        <PowerLogo color="white"/>
      </IconButton>
      <div>
        <IconButton>
          <AddButton color='white'/>
        </IconButton>
        <IconButton>
          <RemoveButton color='white'/>
        </IconButton>
      </div>
      <FlatButton label="my account" primary={true}/>
    </nav>
  )
}
