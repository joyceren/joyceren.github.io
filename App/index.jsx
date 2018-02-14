import React, { Component } from 'react'
import {Switch, Route} from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Article from './components/ArticlePage'
import Account from'./components/Account'
import Footer from './components/Footer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// import firebaseui auth here
// pass the user down as props to Navbar, Homepage and Account

export default () => {
  return (
    <MuiThemeProvider>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/article/:articleId" component={Article} />
          <Footer />
        </div>
      </Router>
    </MuiThemeProvider>
  )
}
