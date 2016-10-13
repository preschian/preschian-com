import { action, observable } from 'mobx'
import moment from 'moment'
import { replace } from 'lodash'

import api from '../api'
import LoadingData from './LoadingData'

class PostData {
  @observable title
  @observable date
  @observable content
  @observable featured
  @observable slug

  @action resetObs() {
    this.title    = ''
    this.date     = ''
    this.content  = ''
    this.featured = ''
  }

  fetchPost(slug) {
    this.slug = slug
    this.resetObs()
    LoadingData.goLoading()

    api.getPost(slug).then(data => {
      this.title    = data[0].title.rendered
      this.date     = moment(new Date(data[0].date)).format('MMMM DD, YYYY')
      this.content  = replace(data[0].content.rendered, new RegExp('http://', 'g'), 'https://')

      return data[0].featured_media
    }).then(data => {
      return api.getMedia(data).then(featured => {
        this.featured = featured.source_url.replace('http://', 'https://')
        return featured.source_url
      })
    }).then(() => {
      LoadingData.doneLoading()
    }).catch(err => console.log(err))
  }
}

export default new PostData
