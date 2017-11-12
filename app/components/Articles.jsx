import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Articles = ({ articles }) => {
  return articles.length
    ? <div>
      {
        articles.map(article => (
          <div key={article.url} className="article-box">
            <h3>{article.title}</h3>
            <img src={article.urlToImage} className="article-image"/>
          </div>
        ))
      }
    </div>

    : <div>
      <h2>Wah wah waaaaaaaaaaaaaaaahhhhhhhh...</h2>
      <p>No articles</p>
    </div>
}

const mapState = ({ articles }) => ({ articles })

export default connect(mapState)(Articles)
