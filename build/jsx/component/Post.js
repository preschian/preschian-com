import React from 'react'
import Helmet from 'react-helmet'
import { observer } from 'mobx-react'

import PostData from './PostData'

@observer
export default class Post extends React.Component {
  componentWillMount() {
    PostData.fetchPost(this.props.params.post)
  }

  render() {
    const { title, date, content, featured } = PostData

    const postBackground = { backgroundImage: `url('${featured}')` }

    // scroll to top page
    window.scrollTo(0, 0)

    if (content.length > 0) {
      // syntax highlight
      window.Prism.highlightAll()

      // disqus comment
      var d = document, s = d.createElement('script')
      s.src = '//preschian.disqus.com/embed.js'
      s.setAttribute('data-timestamp', +new Date())
      ;(d.head || d.body).appendChild(s)
    }

    return (
      <div>
        <Helmet
          title={`${title} | Preschian Febryantara`}
          meta={[
            { name: 'twitter:site', content: '@preschian' },
            { name: 'twitter:card', content: 'summary' }
          ]}
        />

        <div className="post-detail post-background" style={postBackground}>
          <div className="post-text">
            <a className="post-text-title">{title || 'loading...'}</a>
            <p className="post-text-meta">on {date}</p>
          </div>
        </div>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="post-content">
          <br />
          <div id="disqus_thread" />
        </div>
      </div>
    )
  }
}
