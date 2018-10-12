import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {newsKey} from '~/keys'

import {addArticles} from '~/fire'

import StickyNav from './StickyNav'
import ArticleCard from './ArticleCard'


class Home extends Component {

  state = {
    articles: [],
    noImageArticles: []
  }

  componentDidMount() {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsKey}`)
    .then(({data: {articles}}) => {
      addArticles(articles)
      articles.forEach(a => {
        if(!a.urlToImage) this.setState({noImageArticles: [...this.state.noImageArticles, a]})
        else this.setState({articles: [...this.state.articles, a]})
      })
    })
  }

  render() {
    return (
      <div>
        <div className='profile-box'>
          <div className='profile-title-box profile-name'>Featured Articles</div>
          <div className='article-list'>
            {this.state.articles.map(a => <ArticleCard article={a} id={a.source.id+a.publishedAt}/>)}
            <div>
              {this.state.noImageArticles.map(a => <Link to={`/article/${a.source.id+a.publishedAt}`} key={a.publishedAt}><div className="card-title article-list-item">{a.title}</div></Link>)}
            </div>
          </div>
        </div>
        <div>
          Featured Profiles
        </div>
      </div>
    )
  }
}

export default Home
