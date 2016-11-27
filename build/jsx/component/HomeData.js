import { action, observable } from 'mobx'
import api from '../api'

import LoadingData from './LoadingData'

class Post {
  @observable title
  @observable image
  @observable date
  @observable slug
  @observable id

  constructor(title, image, date, slug, id) {
    this.title = title
    this.image = image
    this.date = date
    this.slug = slug
    this.id = id
  }
}

class HomeData {
  @observable posts = []
  @observable page = 1
  @observable eachPage = 4
  @observable totalPages = 0

  nextPage = () => {
    this.renderHome(this.page += 1)
  }

  prevPage = () => {
    this.renderHome(this.page -= 1)
  }

  @action renderHome(page = this.page, eachPage = this.eachPage) {
    // set loading for waiting the data
    LoadingData.goLoading()

    // clear posts because show posts based on @observable achPage
    this.posts = []

    // call firebase function from api.js
    api.posts(page, eachPage).then((snapshot) => {
      snapshot.forEach((data) => {
        const val = data.val()

        // insert data into @observable posts
        this.posts.push(new Post(val.title, val.image, val.date, val.slug, val.id))
      })
    }).then(() => {
      LoadingData.doneLoading()
    }).catch((err) => {
      console.log(err)
    })
  }

  @action countData() {
    api.count().then((snapshot) => {
      const getKey = Object.keys(snapshot.val())[0]
      const getOrder = snapshot.val()[getKey].order

      this.totalPages = getOrder / this.eachPage
    })
  }

  constructor() {
    this.countData()
    this.renderHome()
  }
}

export default new HomeData
