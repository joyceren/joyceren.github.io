import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setSources } from '../reducers/selectedSources'

import { browserHistory } from 'react-router'

const Sources = (props) => {
  const { sources, selectSources } = props
  return (
    <div>
      <form onSubmit={(evt)=>{
        evt.preventDefault()
        const sourcesArray = [...evt.target.sources].filter(input => input.checked).map(input => input.value)
        selectSources(sourcesArray)
      }}>
        <div className="sources-container">
          {
            sources.map(source => {
              return (
                <div key={source.url} className="article-box">
                  <input type="checkbox" name="sources" value={source.id} />
                  {source.name}
                </div>
              )
            })
          }

        </div>
        <div className="buttons-container">
          <input className="reset-button" type="reset" />
          <input className="button" type="submit" value="See Your Articles!"/>
        </div>
      </form>
    </div>
  )
}

const mapState = ({sources}) => ({
  sources,
})

const mapDispatch = dispatch => ({
  selectSources (sources) {
    dispatch(setSources(sources))
    browserHistory.push('/articles')
  }
})

export default connect(mapState, mapDispatch)(Sources)
