import React from 'react'
import {connect} from 'react-redux'

const UserProfile = props => {
  if (!props) return null
  const {selectSource, sources, user} = props
  return (
    <div className='main'>
      <h1>Welcome {user.displayName}!</h1>
      <div className='account-page'>
        <div className="account-left">
          <h3>Your Saved Articles</h3>
        </div>
        <div className="account-right">
          <div className="filter-term saved-sources">
            <h3>Your filter terms:</h3>
            <form>
              What are you tired of reading about? <input type="text"/>
              <input type="submit"/>
            </form>
          </div>
          <div className="saved-sources">
            <h3>Select your sources:</h3>
            {Object.keys(sources).map(sourceName => (
              <div className={sources[sourceName] ? 'selected' : 'source-name'} onClick={()=>{selectSource(sourceName)}}>
                {sourceName}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapState = state => state

const mapDispatch = dispatch => ({
  selectSource(sourceName) {
    dispatch({type: "SELECT_SOURCE", sourceName})
  }
})


export default connect(mapState, mapDispatch)(UserProfile)
