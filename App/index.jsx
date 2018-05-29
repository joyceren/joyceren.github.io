import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import StickyNav from './components/StickyNav'
import Article from './components/ArticlePage'
import NewsProfile from './components/NewsProfile'
import Account from'./components/Account'
import Footer from './components/Footer'
import Hero from './components/Hero'



import { Provider } from 'react-redux'
import store from './store'
import firebase, { db, google, auth, profilesById } from '~/fire'

export default class extends Component {

  state = {
    signedIn: null,
    profiles: {},
    displaySignUpBanner: true,
  }

  componentDidMount(){
    this.getProfiles()
    
    this.unsubscribe = auth.onAuthStateChanged(
      user => {
        this.setState({signedIn: !!user, displaySignUpBanner: !user})
      }
    )
  }
  
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe()
  }

  getProfiles(){
    db.collection('userProfiles').doc('Joyce Ren').collection('profiles').get()
    .then(querySnap => {
      querySnap.forEach(doc => this.setState({profiles: {[doc.id]: doc.data().profileName, ...this.state.profiles}}))
      console.log(this.state)
    })
    .catch(console.error)
  }
  
  signOut = () => {
    auth.signOut()
    this.setState({signedIn: false})
  }

  signInWithGoogle = () => {
    auth.signInWithPopup(google).catch(error => console.log(error.message))
  }

  render() {
    return (
        <Router>
          <div>
            <Navbar signedIn={this.state.signedIn} signOut={this.signOut}/>

            <Switch>
              <Redirect from='/' to={"/"+Object.keys(this.state.profiles)[0]} exact={true}/>
              <Route exact path='/:profileId' render={(p) => (
                <div>
                  {this.state.displaySignUpBanner ? <Hero close={() => this.setState({displaySignUpBanner:false})} /> : null }
                  <StickyNav profiles={this.state.profiles} />
                  <NewsProfile {...p} signedIn={this.state.signedIn} />
                </div>
              )} />
              <Route exact path="/account/log-in" component={Account} />
              <Route exact path="/article/:articleId" component={Article} />
            </Switch>


            <Footer />
          </div>
        </Router>
    )
  }
}
