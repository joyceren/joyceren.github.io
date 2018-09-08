import * as firebase from 'firebase'
import 'firebase/firestore'
import setup from './setup'

setup(firebase)

export default firebase
export const db = firebase.firestore()
db.settings({timestampsInSnapshots: true})

// authentication
export const auth = firebase.auth()
export const emailID = firebase.auth.EmailAuthProvider.PROVIDER_ID
export const googleID = firebase.auth.GoogleAuthProvider.PROVIDER_ID
export const google = new firebase.auth.GoogleAuthProvider()



// models
export const profilesById = (uid = '1') => (
  db.collection('profiles').doc(uid).get()
  .then(doc => {
    if(doc.exists) return doc.data()
  })
)

export const addProfile = (uid, profileName, newProfileObj) => {
  db.collection('profiles').doc(uid).update({
    [profileName]: newProfileObj
  })
  .catch(console.error)
}

export const addArticles = articles => {
  console.log("adding articles")
  articles.forEach(article => {
    const source = article.source.id || article.source.name
    db.collection('articles').doc(source+article.publishedAt).set(article)
  })
}

export const articleById = articleId => (
  db.collection('articles').doc(articleId).get()
  .then(res => res.data())
)
