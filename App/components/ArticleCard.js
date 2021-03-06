import React from 'react'
import { Link } from 'react-router-dom'

export default ({article, id}) => {
  const {title, publishedAt, urlToImage, url} = article,
  author = article.author || ''

  return (
    <Link to={`/article/${id}`}>
      <div className="article-card">
        {urlToImage ? <img src={urlToImage} className="article-img"/> : <div></div>}
        <div className="card-title">{title}</div>
        <div className="card-author">{author.startsWith('http') ? <div></div> : author }</div>
        <div className="card-time">{publishedAt}</div>
      </div>
    </Link>
  )
}
