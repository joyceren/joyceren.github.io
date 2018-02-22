import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, createLogger({ collapsed: true })))
)
