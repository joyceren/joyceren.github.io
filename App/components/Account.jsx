import React from 'react'
import { auth, googleID, emailID } from '~/fire'

const Account = props => {
  return (
    <div className='main'>
      <h1>Welcome!</h1>
      <div className='account-page'>
        <div className="account-left">
          <h3>Your Saved Articles</h3>
        </div>
        <div className="account-right">
          <h3>Your profiles:</h3>
          {props.profiles ? Object.keys(props.profiles).map(name => <div key={name}>{name}</div>):null}
          <div className="color-btn">Add Profile</div>
        </div>
      </div>
    </div>
  )
}

export default Account
