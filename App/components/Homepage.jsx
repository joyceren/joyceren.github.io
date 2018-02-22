import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArticleCard from './ArticleCard'
import axios from 'axios'

class Homepage extends Component {

  componentDidMount() {
    this.props.fetchArticles()
  }

  render() {
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
          {this.props && this.props.articles.map((a, i) => <ArticleCard article={a} id={i} key={i}/>)}
        </div>
      </div>
    )
  }

}

const mapState = state => state

const mapDispatch = dispatch => ({
  fetchArticles() {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=12be6d006ecc4c40840e28ae12a7fd77`)
      .then(res => res.data)
      .then(({articles}) => dispatch({type:"SET_ARTICLES", articles}))
  }
})

export default connect(mapState, mapDispatch)(Homepage)

// if not logged in, put in a hero card at top explaining what the site is
// refresh server every 30 seconds (2880x per day)
// update articles from server
// for now, clear past articles older than a day

// give people option to see the news source or not ?
