'use strict'
import '../public/stylesheet.css'
import React, { Component } from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchArticles } from './reducers/articles'

import store from './store'

import Articles from './components/Articles'
import Starting from './components/Starting'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'

const mapState = ({ auth }) => ({ user: auth })

const mapDispatch = (dispatch) => ({
  loadInitialData() {
    dispatch(fetchArticles())
    console.log('initial data loaded!')
  }
})

class Main extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const { user, children } = this.props
    return (
      <div>
        <nav>
          <div>
            <h1>0-F-F: ZER0 F*CKS FOR...</h1>
            <select>
              <option value="Donald Trump">Donald Trump</option>
              <option value="Terrorism">Terrorism</option>
              <option value="Kim Kardashian">Kim Kardashian</option>
              <option>Other...</option>
            </select>
          </div>
          <div>
            <p>Log in : </p>
            {user ? <WhoAmI/> : <Login/>}
          </div>
        </nav>
        {children}
      </div>
    )
  }
}

const App = connect(mapState, mapDispatch)(Main)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route exact path="/" component={Starting} />
        <Route path="/articles" component={Articles} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
