import React from 'react'

export default props => (
  <div className="profile-options">
    <div>
      <h3>Your Sources:</h3>
      <div className="source-list">
        {props.sources.map(source => 
          <div key={source}>
            {source}
            <button className="remove-btn" onClick={e => props.updateProfile({sources: props.sources.filter(s => s!==source)})}>
              x
            </button>
          </div>)}

      <select value="" onChange={e => {
          props.updateProfile({sources: [e.target.value, ...props.sources]})
        }}>
        <option value='' disabled >Add a source</option>
        <option value="The New York Times">The New York Times</option>
        <option value="BBC News">BBC News</option>
        <option value="Fox News">Fox News</option>
        <option value="ABC News">ABC News</option>
        <option value="The Guardian">The Guardian</option>
        <option value="The Wall Street Journal">The Wall Street Journal</option>
        <option value="The Economist">The Economist</option>
      </select>

      </div>
    </div>

    <div>
      sentiment: <input type="range" name='sentiment' />
    </div>

    <div>
      <input type='submit' value='update' onClick={e => {
          e.preventDefault()
          console.log("clicked!")
      }}/>
    </div>

  </div>
)


// all sources here

