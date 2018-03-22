import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { auth, googleID, emailID } from '~/fire'
import UserInfo from './UserInfo'

const uiConfig = {
  signInFlow: 'redirect',
  signInOptions: [emailID, googleID],
  callbacks: {
    signInSuccess: '/account'
  },
  credentialHelper: 'none'
}

const Account = props => {
  if(!props.signedIn){
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
    console.log(props.profiles)
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
            <div className="signup-btn">Add Profile</div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserInfo(Account)
