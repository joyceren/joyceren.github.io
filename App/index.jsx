import React, { Component } from 'react'
import {Switch, Route} from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Article from './components/ArticlePage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default () => {
  return (
    <MuiThemeProvider>
      <div>
        <Navbar />
        <Router>
          <div>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/:articleId" component={Article} />
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  )
}
