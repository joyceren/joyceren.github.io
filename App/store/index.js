import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = (state, action) => {

  switch(action.type){
    case "NEW_PROFILE":
    const {name, sources, filterTerms, sentiment} = action
      return {...state, [name]:{sources, filterTerms, sentiment}}

    case "SYNC":
      if (action.profiles) return action.profiles
      else return state

    default:
      return state
  }
}

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, createLogger({ collapsed: true })))
)
