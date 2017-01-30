import database from './firebase'

class Api {
  posts(page = 1, eachPage = 4) {
    const start = eachPage * (page - 1) + 1

    return database
      .ref('/')
      .orderByChild('order')
      .startAt(start)
      .limitToFirst(eachPage)
      .once('value')
  }

  postDetail(slug) {
    return database
      .ref('/')
      .orderByChild('slug')
      .startAt(slug)
      .limitToFirst(1)
      .once('value')
  }

  count() {
    return database.ref('/').orderByChild('order').limitToLast(1).once('value')
  }

  getImage(id) {
    return database.ref(`/${id}/image`).once('value')
  }
}

const api = new Api()

export default api
