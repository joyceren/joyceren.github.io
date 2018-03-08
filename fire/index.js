import * as firebase from 'firebase'
import 'firebase/firestore'
import setup from './setup'

setup(firebase)

export default firebase
export const db = firebase.firestore()

// authentication
export const auth = firebase.auth()
export const emailID = firebase.auth.EmailAuthProvider.PROVIDER_ID
export const googleID = firebase.auth.GoogleAuthProvider.PROVIDER_ID

// models
export const profiles = userId => db.collection('profiles').doc(userId)
export const testProfile = () => db.collection('profiles').doc('1')

export const profilesById = (userId = '1') => (
  db.collection('profiles').doc(userId).get()
  .then(res => res.data())
)
