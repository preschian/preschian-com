import firebase from 'firebase'

firebase.initializeApp({
  databaseURL: 'https://preschian-com.firebaseio.com'
})

const database = firebase.database()

class Api {
  posts(page = 1, eachPage = 4) {
    const start = eachPage * (page - 1) + 1

    return database
      .ref('/post')
      .orderByChild('order')
      .startAt(start)
      .limitToFirst(eachPage)
      .once('value')
  }

  postDetail(slug) {
    return database
      .ref('/post')
      .orderByChild('slug')
      .startAt(slug)
      .limitToFirst(1)
      .once('value')
  }

  count() {
    return database
      .ref('/post')
      .orderByChild('order')
      .limitToLast(1)
      .once('value')
  }

  getImage(id) {
    return database.ref(`/post/${id}/image`).once('value')
  }
}

export default new Api()
