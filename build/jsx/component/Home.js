import React from 'react'
import { observer } from 'mobx-react'
import { Link } from 'react-router'

import HomeData from './HomeData'

@observer
export default class Home extends React.Component {
  render() {
    const { posts, nextPage, prevPage, page, totalPages } = HomeData
    let anchorNext = ''
    let anchorPrev = ''

    const latestPosts = posts.map((data) => {
      const background = {
        backgroundImage: `url('${data.image}')`
      }

      return <div key={data.title} className="post-item">
        <div className="post-background" style={background}>
          <div className="post-text">
            <Link to={data.slug} id={data.id} className="post-text-title">{data.title}</Link>
            <p className="post-text-meta">by <a href="#!">Preschian</a> on {data.date}</p>
            <Link className="post-text-more btn" to={data.slug}>READ MORE</Link>
          </div>
        </div>
      </div>
    })

    if (page != totalPages) {
      anchorNext = <div className="pagination-col"><a className="btn btn-primary pagination-nav" onClick={nextPage}><i className="fa fa-fw fa-angle-right" aria-hidden="true"></i></a></div>
    }

    if (page != 1) {
      anchorPrev = <div className="pagination-col"><a className="btn btn-primary pagination-nav" onClick={prevPage}><i className="fa fa-fw fa-angle-left" aria-hidden="true"></i></a></div>
    }

    return <div>
      <div className="container">
        <div className="post">
          {latestPosts}
        </div>
      </div>
      <div className="container">
        <div className="pagination">
          {anchorPrev}
          <div className="pagination-col">
            PAGE {page} OF {totalPages}
          </div>
          {anchorNext}
        </div>
      </div>
    </div>
  }
}
