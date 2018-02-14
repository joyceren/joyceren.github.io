import React, { Component } from 'react'
import {Switch, Route} from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Article from './components/ArticlePage'
import Account from'./components/Account'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

// import firebaseui auth here
// pass the user down as props to Navbar, Homepage and Account

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, createLogger({ collapsed: true })))
  )

export default () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/article/:articleId" component={Article} />
          <Route path="=*" component={() => (<div>Page not found</div>)} />
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}
