import React from 'react'
import ArticleCard from './ArticleCard'
import axios from 'axios'
import {newsKey} from '~/keys'
import {addArticles} from '~/fire'

export default class Homepage extends React.Component {

  state = {
    sources: ['bbc-news', 'abc-news', 'techcrunch'], // filler for now
  }

  componentDidMount() {
    if(this.props.currentView=='Personalized Newsstand'){
      this.state.sources.forEach(source => {
        axios.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${newsKey}`)
          .then(res => res.data)
          .then(({articles}) => {
            addArticles(articles)
            this.setState({articles})
          })
      })
    }
    else if(this.props.currentView=='Top Headlines'){
      axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsKey}`)
        .then(res => res.data)
        .then(({articles}) => {
          addArticles(articles)
          this.setState({articles})
        })
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props !== nextProps) this.props=nextProps
    this.setState({articles:[]})
    if(this.props.currentView=='My Newsstand'){
      this.state.sources.forEach(source => {
        axios.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${newsKey}`)
          .then(res => res.data)
          .then(({articles}) => {
            addArticles(articles)
            this.setState({articles})
          })
      })
    }
    else if(this.props.currentView=='Top Headlines'){
      axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsKey}`)
        .then(res => res.data)
        .then(({articles}) => {
          addArticles(articles)
          this.setState({articles})
        })
    }

  }

  render() {
    if(!this.state.articles) return null
    return (
      <div className= "article-list">
        {this.state.articles.map((a, i) => <ArticleCard article={a} id={i} key={i}/>)}
      </div>
    )
  }
}
