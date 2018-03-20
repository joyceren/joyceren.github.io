import React from 'react'
import { auth, profilesById } from '~/fire'

export default Component => (

  class extends React.Component {

    state = {
      signedIn: null
    }

    componentDidMount(){
      this.unsubscribe = auth.onAuthStateChanged(user => {
        if(!!user) {
          const {displayName, uid} = user
          profilesById(uid)
          .then(profiles => this.setState({
            signedIn: !!user,
            displayName,
            uid,
            profiles
            })
          )
        }
        else {
          profilesById()
          .then(profiles => this.setState({
            signedIn: !!user,
            profiles
          }))
        }
      })
    }

    componentWillUnmount() {
      this.unsubscribe && this.unsubscribe()
    }

    signOut = () => {
      auth.signOut()
      this.setState({signedIn: false})
    }

    render() {
      if(this.state.signedIn==null) return null

      else {
        const {signedIn, displayName, profiles, uid} = this.state
        return (
          <Component
            profiles={profiles}
            signedIn={signedIn}
            userName={displayName}
            uid={uid}
            signOut={this.signOut}
          />
        )
      }
    }
  }
)
