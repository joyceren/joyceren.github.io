import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  articles: require('./articles').default,
})

export default rootReducer
