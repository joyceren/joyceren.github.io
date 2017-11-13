'use strict'
import '../public/stylesheet.css'
import React, { Component } from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchSources } from './reducers/sources'
import { setFilterTerm } from './reducers/filterTerm'

import store from './store'

import Articles from './components/Articles'
import Sources from './components/Sources'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'

const mapState = ({ auth, selectedSources }) => ({ user: auth, selectedSources })

const mapDispatch = (dispatch) => ({
  loadInitialData(selectedSources) {
    dispatch(fetchSources())
  },
  setNewFilterTerm(term){
    dispatch(setFilterTerm(term))
  }
})

class Main extends Component {
  componentDidMount() {
    this.props.loadInitialData(this.props.selectedSources)
  }

  render() {
    const { user, children, setNewFilterTerm } = this.props
    return (
      <div>
        <nav>
          <div>
            <h1>0-F-F: ZER0 F*CKS FOR...</h1>
            <select onChange={evt => setNewFilterTerm(evt.target.filterTerm.value)}>
              <option name="filterTerm" value="Trump ">Donald Trump</option>
              <option name="filterTerm" value="Terrorism ">Terrorism</option>
              <option name="filterTerm" value="Kim Kardashian ">Kim Kardashian</option>
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
        <IndexRedirect to="/sources" />
        <Route path="/sources" component={Sources} />
        <Route path="/articles" component={Articles} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
