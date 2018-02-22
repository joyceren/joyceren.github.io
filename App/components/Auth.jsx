import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import {auth, google, email} from '~/fire'


export default class extends React.Component {

  state = {
    signedIn: false
  }

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [ google, email ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(
        (user) => this.setState({signedIn: !!user})
    );
  }

  render() {
    if (!this.state.signedIn){
      return (
        <div className="auth-page">
          <div className='auth-intro'>
            Take control of your news.
          </div>
          <div className='auth-form'>
            Please Sign In:
            <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={auth} />
          </div>
        </div>
      )
    }
    return (
      <div>
        <h1>Welcome {auth.currentUser.displayName}! You are now signed-in!</h1>
        <a onClick={() => auth.signOut()}>Sign-out</a>
      </div>
    );
  }
}

const testFunc = e => {
  console.log(e)
}
