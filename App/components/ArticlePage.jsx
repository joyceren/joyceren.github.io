import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import ReactHtmlParser from 'react-html-parser'

export default class extends Component {
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
    console.log(this.props)
  }

  render() {
    return (
      <div className='main'>
        <div className="article-page">
          <h2>{this.state && this.state.title}</h2>
        </div>
      </div>
    )
  }

}


// const ArticlePage = ({match, parseArticle, articles, parsed}) => {
//
//   const {url, title, publishedAt} = articles[match.params.articleId]
//   const updatePage = () => parseArticle(url)
//
//   return (
//     <div className='main'>
//       <div className="article-page" onClick={updatePage}>
//         <h2>{title}</h2>
//         {parsed && ReactHtmlParser(parsed.content)}
//       </div>
//     </div>
//   )
// }
//
// const mapState = state => state
//
// const mapDispatch = dispatch => ({
//   parseArticle (url) {
//     axios.get(
//         `https://mercury.postlight.com/parser?url=${url}`,
//         {
//           headers: {
//             'content-type': 'application/json',
//             'x-api-key': '7GjHxpveaOM0THd5BJpse5pL0v9QmdlWtoGEJygT'
//           }
//         }
//       )
//     .then(res => res.data)
//     .then(parsed => {dispatch({type: "CONTENT", parsed})})
//   }
// })
//
// export default connect(mapState, mapDispatch)(ArticlePage)
