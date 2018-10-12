import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import ReactHtmlParser from 'react-html-parser'
import {articleById} from '~/fire'
import loadingPic from '~/public/loading.png'
import {mercuryAPIkey} from '~/keys'

class ArticlePage extends Component {
  state = {
    revealSource: "none",
    loading: true,
  }

  parseArticle(url) {
    axios.get(
        `https://mercury.postlight.com/parser?url=${url}`,
        {
          headers: {
            'content-type': 'application/json',
            'x-api-key': mercuryAPIkey
          }
        }
      )
    .then(res => res.data)
    .then(parsed => {
      this.setState({loading: false})
      this.setState(parsed)
    })
  }

  componentDidMount() {
    const {articleId} = this.props.match.params
    articleById(articleId).then(a => {
      this.setState({
        url: a.url,
        content:this.parseArticle(a.url),
        source: a.source
      })
    })
  }

  render() {
    if(!this.state) return null
    else if(this.state.loading) return <div className='loading-pic-box'><img src={loadingPic} className='loading-pic'/> </div>
    return (
      <div className='main'>
        <div className="article-page">
          <h2>{this.state && this.state.title}</h2>
          <a href={this.state.url}>see original</a>
          {this.state && ReactHtmlParser(this.state.content)}

          <div className="main">
            {"What's the source?"}
            <select>
              <option value="">Choose a source</option>
              <option value="the-new-york-times">The New York Times</option>
              <option value="bbc-news">BBC News</option>
              <option value="fox-news">Fox News</option>
            </select>

            <div className="nav-btn color-btn" onClick={() => {
                const newSetting = this.state.revealSource=='none'? 'block':'none';
                this.setState({revealSource: newSetting})
              }}>
              reveal source
            </div>
            <div style={{display: this.state.revealSource}}>
              {this.state.source ? this.state.source.name : 'unknown'}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// at bottom of page, reveal the source of the news article

// add profile info to userInfo page to identify whether or not they want to guess sources?
// or submit whether or not guess was correct to user profile and reveal their guess percentage


export default ArticlePage
