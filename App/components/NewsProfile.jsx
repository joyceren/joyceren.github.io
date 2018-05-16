import React from 'react'

export default (props) => {
  return (
    <div className="news-profile">
      <h3>{props.match.params.profileName}</h3>
      <div className="article-list">
        articles here!
      </div>
    </div>
  )
}
