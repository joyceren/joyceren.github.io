import React from 'react'
import ArticleCard from './ArticleCard'
import ProfileOptions from './ProfileOptions'
import axios from 'axios'
import {newsKey} from '~/keys'
import {addArticles} from '~/fire'

export default class NewsProfile extends React.Component {

  state = {
    sources: ['bbc-news', 'abc-news', 'techcrunch'], // filler for now
    formDisplay: 'none'
  }

  componentDidMount() {
    if(this.props.profileSources){
      const {currentView, profileSources} = this.props
      if(currentView==="What You\'re Missing"){
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsKey}`)
          .then(res => res.data)
          .then(({articles}) => {
            addArticles(articles)
            this.setState({articles})
          })
      }
      else if(currentView==="Top Headlines"){
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsKey}`)
          .then(res => res.data)
          .then(({articles}) => {
            addArticles(articles)
            this.setState({articles})
          })
      }
      else{
        profileSources.forEach(source => {
          axios.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${newsKey}`)
            .then(res => res.data)
            .then(({articles}) => {
              addArticles(articles)
              this.setState({articles})
            })
        })
      }
    }
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    if(this.props !== nextProps) this.props=nextProps
    this.setState({articles:[]})
    const {currentView, profileSources} = nextProps
    if(currentView=="What You\'re Missing"){
      axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsKey}`)
        .then(res => res.data)
        .then(({articles}) => {
          addArticles(articles)
          this.setState({articles})
        })
    }
    else if(currentView==="Top Headlines"){
      axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsKey}`)
        .then(res => res.data)
        .then(({articles}) => {
          addArticles(articles)
          this.setState({articles})
        })
    }
    else{
      profileSources.forEach(source => {
        axios.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${newsKey}`)
          .then(res => res.data)
          .then(({articles}) => {
            addArticles(articles)
            this.setState({articles})
          })
      })
    }

  }

  render() {
    if(!this.state.articles) return null
    return (
      <div className= "article-list">

        <div className="main">
          <div className='nav-btn' onClick={() => this.setState({formDisplay: this.state.formDisplay==='none'? 'block':'none'})}>
            {this.state.formDisplay=='none'? 'options' : 'X'}
          </div>
          <ProfileOptions formDisplay={this.state.formDisplay} />
        </div>


        <div className= "article-list">
          {this.state.articles.map((a, i) => <ArticleCard article={a} id={i} key={i}/>)}
        </div>
      </div>
    )
  }
}
