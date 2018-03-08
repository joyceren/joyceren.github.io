import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserInfo from'./UserInfo'
import ArticleList from './ArticleList'
import NavBtn from './NavBtn'

class Homepage extends Component {

  state = {
    currentView: 'Top Headlines'
  }

  componentWillReceiveProps(nextProps){
    if(this.props !== nextProps) this.props=nextProps
  }

  render() {
    if(!this.props || !this.state) return null
    const {currentView} = this.state
    const {profiles, signedIn} = this.props
    return (
      <div className="main">
        {!signedIn ? <div className="intro">Take control of your news.</div>:null}

        <div className="nav-btn-container">
          {profiles && Object.keys(profiles).map(p => (
            <div className="nav-btn-container">
              <NavBtn key={p} label={p} selected={currentView===p} onClick={()=>this.setState({currentView: p})} />
              <hr />
            </div>
          ))}
          <NavBtn key={"What You\'re Missing"} label={"What You\'re Missing"} selected={currentView=="What You\'re Missing"} onClick={()=>this.setState({currentView: "What You\'re Missing"})} />
        </div>

        <ArticleList currentView={currentView}/>

      </div>
    )
  }
}


export default UserInfo(Homepage)

// if not logged in, put in a hero card at top explaining what the site is
// refresh server every 30 seconds (2880x per day)
// update articles from server
// for now, clear past articles older than a day

// give people option to see the news source or not ?
