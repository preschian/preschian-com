import { action, observable } from 'mobx'
import api from '../api'

import LoadingData from './LoadingData'

import articles from '../store/articles.json'

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

  constructor() {
    this.countData()
    this.renderHome()
  }

  nextPage = () => {
    this.renderHome(this.page += 1)
  }

  prevPage = () => {
    this.renderHome(this.page -= 1)
  }

  @action renderHome(page = this.page, eachPage = this.eachPage) {
    // clear posts because show posts based on @observable achPage
    this.posts = []

    const start = (eachPage * page) - eachPage
    const end = eachPage * page - 1

    for (let i = start; i <= end; i ++) {
      try {
        const article = articles[i]

        this.posts.push(new Post(
          article.title,
          article.imageID,
          article.date,
          article.slug,
          article.id
        ))
      } catch (e) {
        return
      }
    }
  }

  @action countData() {
    this.totalPages = Math.ceil(articles.length / this.eachPage)
  }
}

export default new HomeData
