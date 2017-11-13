import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  articles: require('./articles').default,
  sources: require('./sources').default,
  selectedSources: require('./selectedSources').default,
  filterTerm: require('./filterTerm').default,
})

export default rootReducer
