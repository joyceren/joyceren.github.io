import React from 'react'
import {auth, google, email} from '~/fire'

window.auth=auth

export default Component => class extends React.Component {
  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(user => this.setState({signedIn: !!user}))
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe()
  }

  getProfiles(){
    console.log('getting profiles')
    db.collection('userProfiles').doc('Joyce Ren').get()
    .then(doc => {
      const data = doc.data()
      this.setState({profiles: data.profiles, doneLoading: true})
    })
    .catch(console.error)
  }

  render() {
    // Auth is not ready.
    if (!this.state) return null

    // Get the user off auth.
    const {signedIn} = this.state

    // Render our nested component with the user.
    return (
      <Component {...this.props}
      signedIn={signedIn}
      auth={auth}
      />
    )
  }
}
