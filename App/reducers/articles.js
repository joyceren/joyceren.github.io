export default function reducer(state=[], action) {
  switch (action.type) {
    case "SET_ARTICLES":
      return action.articles
    default:
      return state
  }
}
