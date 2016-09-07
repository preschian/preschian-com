import React from 'react'
import { observer } from 'mobx-react'

import PostData from './PostData'

@observer
export default class Post extends React.Component {
  componentWillMount() {
    if (this.props.params.post != PostData.slug)
      PostData.fetchPost(this.props.params.post)
    else
      window.scrollTo(0, 0)
  }

  render() {
    const { title, date, content, featured } = PostData

    const postBackground = {
      backgroundImage: `url('${featured}')`
    }

    return (
      <div>
        <div className="post-detail post-background" style={postBackground}>
          <div className="post-text">
              <a className="post-text-title">{title}</a>
              <p className="post-text-meta">by <a href="#!">Preschian</a> on {date}</p>
          </div>
        </div>
        <div className="post-content" dangerouslySetInnerHTML={{__html: content}}></div>
      </div>
    )
  }
}
