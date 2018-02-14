const initialState = {articles:[]}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case "SET_ARTICLES":
      return {articles: action.articles}
    case "CONTENT":
      return {...state, parsed:action.parsed}
    default:
      return state
  }
}
