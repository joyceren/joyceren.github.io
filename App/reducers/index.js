const sources = {
  "ABC News": false,
  'Al Jazeera English': false,
  'Ars Technica': false,
  'Associated Press': false,
  'Axios': false,
  'BBC News': false,
  'Bloomberg': false,
  'Business Insider': false,
  'Breitbart News': false,
  Buzzfeed: false,
  'CBS News': false,
  CNBC: false,
  CNN: false
}

const initialState = {articles:[], sources}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case "SET_ARTICLES":
      return {...state, articles: action.articles}
    case "CONTENT":
      return {...state, parsed:action.parsed}
    case "SELECT_SOURCE":
      return {...state, sources:{...state.sources, [action.sourceName]: !state.sources[action.sourceName]}}
    default:
      return state
  }
}
