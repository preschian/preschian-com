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

const database = firebase.database()

export const GetPosts = (page = 1, eachPage = 4) => {
  const start = (eachPage * (page - 1) + 1)

  return database.ref('/post').orderByChild('order').startAt(start).limitToFirst(eachPage).once('value')
}

export const GetPostDetail = (slug) => {
  return database.ref('/post').orderByChild('slug').equalTo(slug).once('value')
}

export const GetTotalPosts = () => {
  return database.ref('/post').orderByChild('order').limitToLast(1).once('value')
}
