import axios from 'axios'

const SET_SOURCE = 'ADD_SOURCE'

/* ACTION CREATORS */

export const setSources = sources => ({ type: SET_SOURCE, sources })

/* REDUCERS */

export default function reducer(state=[], action) {
  switch (action.type) {
    case SET_SOURCE:
      return action.sources
    default:
      return state
  }
}
