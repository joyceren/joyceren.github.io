import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { auth, googleID, emailID } from '~/fire'
import UserInfo from './UserInfo'

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [emailID, googleID],
  callbacks: {
    signInSuccess: () => false
  }
}

const Account = props => {
  if(!props) return null
  else if(!props.signedIn){
    return (
      <div className="auth-page">
        <div className='auth-intro'>
          Take control of your news.
        </div>
        <div className='auth-form'>
          Please Sign In:
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
      </div>
    )
  }
  else {
    return (
      <div className='main'>
        <h1>Welcome {props.userName}!</h1>
        <div className='account-page'>
          <div className="account-left">
            <h3>Your Saved Articles</h3>
          </div>
          <div className="account-right">
            <h3>Your profiles:</h3>
            {props.profiles ? Object.keys(props.profiles).map(name => <div key={name}>{name}</div>):null}
          </div>
        </div>
      </div>
    )
  }
}

export default UserInfo(Account)
