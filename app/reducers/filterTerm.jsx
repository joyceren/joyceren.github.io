import axios from 'axios'

const SET_FILTERTERM = 'SET_FILTERTERM'

/* ACTION CREATORS */

export const setFilterTerm = term => ({ type: SET_FILTERTERM, filterTerm })

/* REDUCERS */

export default function reducer(state="Trump ", action) {
  switch (action.type) {
    case SET_FILTERTERM:
      return action.filterTerm
    default:
      return state
  }
}
