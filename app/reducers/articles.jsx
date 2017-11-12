import axios from 'axios'

const GET_ARTICLES = 'GET_ARTICLES'

/* ACTION CREATORS */

const getArticles = articles => ({ type: GET_ARTICLES, articles })

/* REDUCERS */

export default function reducer(state=[], action) {
  switch (action.type) {
    case GET_ARTICLES:
      return action.articles
    default:
      return state
  }
}

/* THUNK */

export function fetchArticles() {
  return (dispatch) =>
    axios.get(' https://newsapi.org/v1/articles?source=techcrunch&apiKey=12be6d006ecc4c40840e28ae12a7fd77')
      .then(res => res.data)
      .then(({articles}) => dispatch(getArticles(articles)))
}
