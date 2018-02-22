import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import ReactHtmlParser from 'react-html-parser'

class ArticlePage extends Component {
  parseArticle(url) {
    axios.get(
        `https://mercury.postlight.com/parser?url=${url}`,
        {
          headers: {
            'content-type': 'application/json',
            'x-api-key': '7GjHxpveaOM0THd5BJpse5pL0v9QmdlWtoGEJygT'
          }
        }
      )
    .then(res => res.data)
    .then(parsed => {this.setState(parsed)})
  }

  componentDidMount() {
    const {articleId} = this.props.match.params,
      url = this.props.articles[articleId].url
    this.parseArticle(url)
  }

  render() {
    return (
      <div className='main'>
        <div className="article-page">
          <h2>{this.state && this.state.title}</h2>
          {this.state && ReactHtmlParser(this.state.content)}
        </div>
      </div>
    )
  }
}

// at bottom of page, reveal the source of the news article

const mapState = state => state

export default connect(mapState)(ArticlePage)
