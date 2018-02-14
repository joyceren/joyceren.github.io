import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArticleCard from './ArticleCard'

const Homepage = () => {
  return (
    <div className="main">
      <div className="intro">
          Take control of your news.
      </div>
      <div className="nav-btn-container">
        <div className='nav-btn'>Top Headlines</div>
        <hr />
        <div className='nav-btn'>My Newsstand</div>
        <hr />
        <div className='nav-btn'>What You're Missing</div>
      </div>
      <div className= "article-list">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  )
}

const mapState = () => {}

const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(Homepage)

// if not logged in, put in a hero card at top explaining what the site is
// refresh server every 30 seconds (2880x per day)
// update articles from server
// for now, clear past articles older than a day
