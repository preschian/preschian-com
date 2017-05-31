const wpapi = require('wpapi')
const moment = require('moment')
const firebase = require('firebase')
const writeJson = require('write-json-file')
const path = require('path')
require('dotenv').config({ silent: true })

// wordpress
const domain = `https://${process.env.DOMAIN}/wp-json`
const wp = new wpapi({ endpoint: domain })

// firebase
firebase.initializeApp({ databaseURL: process.env.databaseURL })
const database = firebase.database()

// json
let jsonPosts = []

const insertLastPost = () => {
  wp
    .posts()
    .perPage(1)
    .then(value => {
      const post = value[0]
      const id = post.id
      const title = post.title.rendered
      const content = post.content.rendered.replace(
        new RegExp('http://', 'g'),
        'https://'
      )
      const date = moment(new Date(post.date)).format('MMMM DD, YYYY')
      const slug = post.slug
      const imageId = post.featured_media
      const image = ''
      const order = 0

      // console.log({ id, title, content, date, slug, imageId, image, order })
      database
        .ref(`/post/${id}`)
        .set({ id, title, content, date, slug, imageId, image, order })
      console.log('insert :', title)

      return Promise.resolve(wp.media().id(imageId))
    })
    .then(value => {
      database.ref(`/post/${value.post}`).update({
        image: value.media_details.sizes.full.source_url
      })
      console.log('update image')
    })
    .then(() => {
      database.ref('/post').once('value').then(snapshot => {
        let count = snapshot.numChildren()

        snapshot.forEach(value => {
          const { id, date, imageId, slug, title } = value.val()

          // push json
          jsonPosts.push({ id, date, imageId, slug, title })

          // update order
          database.ref(`/post/${id}`).update({
            order: count
          })
          count -= 1

          // process json
          if (count == 0) {
            console.log('update order')
            processJson()
          }
        })
      })
    })
}

function processJson() {
  writeJson(
    path.join(__dirname, '../jsx/store/articles.json'),
    jsonPosts.reverse()
  )
    .then(() => {
      console.log('write json done')
    })
    .then(() => {
      setTimeout(() => {
        process.exit()
      }, 1000)
    })
}

insertLastPost()
