import firebase from 'firebase'

try {
  firebase.initializeApp({
    databaseURL: 'https://preschian-com.firebaseio.com'
  })
} catch(err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

export default firebase.database()
