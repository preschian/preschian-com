const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const pathMatch = require('path-match')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.port || 3000
const app = next({ dev })
const handle = app.getRequestHandler()
const route = pathMatch()
const match = route('/:slug')

app.prepare().then(() => {
  createServer((req, res) => {
    const { pathname } = parse(req.url)
    const params = match(pathname)

    if (params === false) {
      handle(req, res)
      return
    }
    
    app.render(req, res, '/article', params)
  })
  .listen(port, (err) => {
    if (err) throw err

    if (port === 3000) {
      console.log('> Ready on http://localhost:3000')
    } else {
      console.log('> Ready on:', port)
    }
  })
})