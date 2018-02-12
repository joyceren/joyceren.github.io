import React from 'react'
import ArticleCard from './ArticleCard'

export default () => {
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

// if not logged in, put in a hero card at top explaining what the site is
