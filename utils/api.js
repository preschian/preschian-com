import database from './firebase'

export const GetPosts = (page = 1, eachPage = 4) => {
  const start = (eachPage * (page - 1) + 1)

  return database.ref('/').orderByChild('order').startAt(start).limitToFirst(eachPage).once('value')
}

export const GetPostDetail = (slug) => {
  return database.ref('/').orderByChild('slug').equalTo(slug).once('value')
}

export const GetTotalPosts = () => {
  return database.ref('/').orderByChild('order').limitToLast(1).once('value')
}