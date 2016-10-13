import Wordpress from 'wpapi'

const domain  = 'https://preschian.com/wp-json'
const wp      = new Wordpress({ endpoint: domain })

class Api {
  getPosts(page = 1, perPage = 4) {
    return wp.posts().perPage(perPage).page(page)
  }

  getPost(slug) {
    return wp.posts().slug(slug)
  }

  getMedia(id) {
    return wp.media().id(id)
  }
}

// for testing in browser console
const api = window.api = new Api

export default api
