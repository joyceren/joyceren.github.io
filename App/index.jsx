import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {BrowserRouter as Router, history} from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Article from './components/ArticlePage'
import Account from'./components/Account'
import Footer from './components/Footer'
import Hero from './components/Hero'
import StickyNav from './components/StickyNav'
import NewsProfile from './components/NewsProfile'
import Home from './components/Home'
import Login from './components/Login'


import { Provider } from 'react-redux'
import store from './store'
import firebase, { db, google, auth, profilesById } from '~/fire'

export default class extends Component {

  state = {
    signedIn: null,
    profiles: [],
    openSignIn: false
  }

  componentDidMount(){
    this.unsubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        this.setState({signedIn: !!user, uid: user.uid})
        this.getProfiles(user.uid)
      }
    })
  }

  getProfiles = (userId=this.state.uid) => {
    db.collection('userProfiles').doc(userId).get()
    .then(doc => {
      if(doc.exists) this.setState(doc.data())
    })
  }

  updateUserProfiles = (profileId, newProfileName) => {
    const {profiles, uid} = this.state
    const newProfiles = profiles.map(p => p.id==profileId ? {id: profileId, name: newProfileName} : p)

    db.collection('userProfiles').doc(uid).set({profiles: newProfiles})
    .then(res => this.setState({profiles: newProfiles}))
    .catch(console.error)
  }

  addProfile = (id, name) => {
    const profiles = [...this.state.profiles, {id, name}]
    db.collection('userProfiles').doc(this.state.uid).set({profiles})
    .then(res => this.setState({profiles}))
    .catch(console.error)
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe()
  }

  signOut = () => {
    auth.signOut()
    this.setState({signedIn: false, uid: null})
  }

  render() {
    const {signedIn, profiles, openSignIn} = this.state
    return (
      <Router>
        <div>
          {openSignIn ? <Login closeSignIn={() => this.setState({openSignIn: false})}/> : null}
          <Navbar openSignIn={() => this.setState({openSignIn: true})} signedIn={signedIn} signOut={this.signOut}/>
          {signedIn ? <StickyNav profiles={profiles}/> : <Hero />}
          <Route exact path="/" component={Home}/>
          <Route exact path='/profile/:profileId' render={props => (
            <NewsProfile {...props} signedIn={signedIn} profiles={profiles} updateUserProfiles={this.updateUserProfiles} addProfile={this.addProfile}/>
          )} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/article/:articleId" component={Article} />

          <Footer />
        </div>
      </Router>
    )
  }
}


//

// {this.state.signedIn && this.state.profiles.length ?
//   <Redirect from='/' to={'/'+this.state.profiles[0].id} exact={true}/>
//   : <Route exact path='/' component={Home} />
// }
