import React from 'react'
import { auth, testProfile, profilesById } from '~/fire'

export default Component => (

  class extends React.Component {

    state = {
      signedIn: false,
      profiles: {'Top Headlines':{}, 'Personalized Newsstand':{}}
    }

    componentDidMount(){
      auth.onAuthStateChanged(user => {
        this.setState({
          signedIn: !!user,
          name: user.displayName || null
        })
        profilesById().then(profiles => this.setState({profiles}))
      })
    }

    signOut = () => {
      auth.signOut()
      this.setState({signedIn: false})
    }

    render() {
      if(!this.state.signedIn===null) return null
      const {signedIn, name, profiles} = this.state
      return (
        <Component
          profiles={profiles}
          signedIn={signedIn}
          userName={name}
          signOut={this.signOut}
        />
      )
    }
  }
)
