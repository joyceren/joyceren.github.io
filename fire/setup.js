module.exports = firebase =>
// Copy and paste this into your JavaScript code to initialize the Firebase SDK.
// You will also need to load the Firebase SDK.
// See https://firebase.google.com/docs/web/setup for more details.

firebase.initializeApp({
  "apiKey": require("~/keys").googleAPIKey,
  "databaseURL": "https://zero-f-for.firebaseio.com",
  "storageBucket": "zero-f-for.appspot.com",
  "authDomain": "zero-f-for.firebaseapp.com",
  "messagingSenderId": "1079584658631",
  "projectId": "zero-f-for"
});
