import React from 'react'

export default props => (
  <div style={{display: props.formDisplay}} className="article-card">
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
)
