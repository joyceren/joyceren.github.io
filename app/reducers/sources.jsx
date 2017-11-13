import axios from 'axios'

const GET_SOURCES = 'GET_SOURCES'

/* ACTION CREATORS */

const getSources = sources => ({ type: GET_SOURCES, sources })

/* REDUCERS */

export default function reducer(state=[], action) {
  switch (action.type) {
    case GET_SOURCES:
      return action.sources
    default:
      return state
  }
}

/* THUNK */

export function fetchSources() {
  return (dispatch) =>
    axios.get(' https://newsapi.org/v1/sources')
      .then(res => res.data)
      .then(({sources}) => dispatch(getSources(sources)))
}
