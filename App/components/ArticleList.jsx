import React from 'react'
import ArticleCard from './ArticleCard'
import axios from 'axios'
import {newsKey} from '~/keys'
import {addArticles} from '~/fire'

export default class Homepage extends React.Component {

  state = {
    sources: ['bbc-news', 'abc-news', 'techcrunch'], // filler for now
    formDisplay: 'none'
  }

  componentDidMount() {
    if(this.props.currentView){
      const {currentView, profileSources} = this.props
      if(currentView==="What You\'re Missing"){
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

          <div style={{display: this.state.formDisplay}} className="article-card">
            <form>
              your sources:
              <select>
              <option value="">Choose a source</option>
              <option value="the-new-york-times">The New York Times</option>
              <option value="bbc-news">BBC News</option>
              <option value="fox-news">Fox News</option>
            </select>
              sentiment: <input type="range" name='sentiment' />
              <input type='submit' value='update' onClick={e => {
                e.preventDefault()
                console.log("clicked!")
              }}/>
            </form>
          </div>
        </div>


        <div className= "article-list">
          {this.state.articles.map((a, i) => <ArticleCard article={a} id={i} key={i}/>)}
        </div>
      </div>
    )
  }
}
