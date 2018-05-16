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
import firebase, { google, auth, profilesById } from '~/fire'

export default class extends Component {

  state = {
    signedIn: null,
    profiles: (Math.random()*9)+1,
    displaySignedInBanner: true,
  }

  componentDidMount(){
    this.unsubscribe = auth.onAuthStateChanged(
      user => {
        this.setState({signedIn: !!user, displaySignedInBanner: !user})
      }
    )
  }
  
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe()
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
            {this.state.displaySignedInBanner ? <Hero close={() => this.setState({displaySignedInBanner:false})} /> : null }

            <Switch>
              <Redirect from='/' to='/ExampleLink1' exact={true}/>
              <Route exact path='/:profileName' render={(p) => (
                <div>
                  <StickyNav profiles={this.state.profiles} />
                  <NewsProfile {...p} signedIn={this.state.signedIn} />
                </div>
              )} />
              <Route exact path="/account/:userId" component={Account} />
              <Route exact path="/article/:articleId" component={Article} />
            </Switch>


            <Footer />
          </div>
        </Router>
    )
  }
}
