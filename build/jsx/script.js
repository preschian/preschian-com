import React from 'react' // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom'
import { IndexRoute, Router, Route, browserHistory, hashHistory } from 'react-router'

import Menu from './component/Menu'
import Home from './component/Home'
import Works from './component/Works'
import Post from './component/Post'

const app = document.getElementById('app')

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Menu}>
      <IndexRoute component={Home}/>
      <Route path='/works' component={Works} />
      <Route path='/:post' component={Post} />
    </Route>
  </Router>,
  app
)
