import React from 'react'
import ArticleCard from './ArticleCard'
import axios from 'axios'
import {newsKey} from '~/keys'

export default class Homepage extends React.Component {

  state = {
    articles: [],
    sources: ['bbc-news', 'abc-news', 'techcrunch'], // filler for now
  }

  componentDidMount() {
    if(this.props.currentView=='My Newsstand'){
      this.state.sources.forEach(source => {
        axios.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${newsKey}`)
          .then(res => res.data)
          .then(({articles}) => this.setState({articles: (this.state.articles.concat(articles)).sort((a, b) => a.publishedAt - b.publishedAt)}))
      })
    }
    else if(this.props.currentView=='Top Headlines'){
      axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=newsKey`)
        .then(res => res.data)
        .then(({articles}) => this.setState({articles}))
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props !== nextProps) this.props=nextProps
    this.setState({articles:[]})
    if(this.props.currentView=='My Newsstand'){
      this.state.sources.forEach(source => {
        axios.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=12be6d006ecc4c40840e28ae12a7fd77`)
          .then(res => res.data)
          .then(({articles}) => this.setState({articles: (this.state.articles.concat(articles)).sort((a, b) => a.publishedAt - b.publishedAt)}))
      })
    }
    else if(this.props.currentView=='Top Headlines'){
      axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=12be6d006ecc4c40840e28ae12a7fd77`)
        .then(res => res.data)
        .then(({articles}) => this.setState({articles}))
    }

  }

  render() {
    return (
      <div className= "article-list">
        {this.state.articles.map((a, i) => <ArticleCard article={a} id={i} key={i}/>)}
      </div>
    )
  }
}
