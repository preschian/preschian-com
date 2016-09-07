import { action, observable } from 'mobx'
import { map, forEach } from 'lodash'
import moment from 'moment'
import fetch from 'axios'
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
    this.date  = date
    this.slug  = slug
    this.id    = id
  }
}

class HomeData {
  @observable posts   = []

  @observable page        = 1
  @observable perPage     = 4
  @observable totalPages

  nextPage = () => {
    this.page     += 1

    this.fetchHome(this.page)
  }

  prevPage = () => {
    this.page     -= 1

    this.fetchHome(this.page)
  }

  @action fetchHome(page = this.page, perPage = this.perPage) {
    LoadingData.goLoading()
    this.posts    = []

    api.getPosts(page, perPage).then(data => {

      this.totalPages = data._paging.totalPages

      const image = map(data, val => {
        return api.getMedia(val.featured_media)
      })

      fetch.all(image).then(fetch.spread((...featured) => {
        forEach(data, (val, key) => {
          const title = val.title.rendered
          const image = featured[key].source_url
          const date  = moment(new Date(val.date)).format('MMMM DD, YYYY')
          const slug  = val.slug
          const id    = val.id

          this.posts.push(new Post(title, image, date, slug, id))
        })
      })).then(() => LoadingData.doneLoading()).catch(err => console.log(err))

    }).catch(err => console.log(err))
  }

  constructor() {
    this.fetchHome()
  }
}

export default new HomeData
