import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchArticles } from '../reducers/articles'


class Articles extends React.Component {
  componentDidMount() {
    const { selectedSources, loadArticles } = this.props
    selectedSources.forEach(source => loadArticles(source))
    console.log("getting articles")
  }

  render() {
    let panic = 0;
    const articles = this.props.articles.filter(article => {
      if(article.title.includes('Trump')) panic++
      return !article.title.includes('Trump')
    })
    return (
      <div>
        <h1>Panic-o-meter: {panic}</h1><br/>
        {
          articles.length ?
            articles.map(article => (
              <div key={article.url} className="article-box">
                <a href={article.url}>
                  <h3>{article.title}</h3>
                  <img src={article.urlToImage} className="article-image"/>
                </a>
              </div>
            ))

        : <div>
          <h2>Wah wah waaaaaaaaaaaaaaaahhhhhhhh...</h2>
          <p>No articles</p>
        </div>
    }
    </div>
    )
  }
}

const mapState = ({ articles, selectedSources, filterTerm }) => ({ articles, selectedSources })

const mapDispatch = dispatch => ({
  loadArticles (source) {
    dispatch(fetchArticles(source))
  }
})

export default connect(mapState, mapDispatch)(Articles)
