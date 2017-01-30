import React from 'react'
import {observable} from 'mobx'
import {observer} from 'mobx-react'
import {Link} from 'react-router'

import api from '../api'
import HomeData from './HomeData'

const Home = observer(() => {
  const {posts, nextPage, prevPage, page, totalPages} = HomeData
  let anchorNext = ''
  let anchorPrev = ''

  if (page != totalPages) {
    anchorNext = (
      <div className="pagination-col">
        <a className="btn btn-primary pagination-nav" onClick={nextPage}>
          <i className="fa fa-fw fa-angle-right" aria-hidden="true" />
        </a>
      </div>
    )
  }

  if (page != 1) {
    anchorPrev = (
      <div className="pagination-col">
        <a className="btn btn-primary pagination-nav" onClick={prevPage}>
          <i className="fa fa-fw fa-angle-left" aria-hidden="true" />
        </a>
      </div>
    )
  }

  return (
    <div>
      <div className="container">
        <div className="post">
          {posts.map(data => {
            return <HomeCard key={data.id} data={data} />
          })}
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
  )
})

export default Home

@observer
class HomeCard extends React.Component {
  @observable image = ''

  constructor(props) {
    super(props)

    api.getImage(props.data.id).then(snapshot => {
      this.image = snapshot.val()
    })
  }

  render() {
    const {data} = this.props
    const background = {
      backgroundColor: '#111',
      backgroundImage: `url('${this.image}')`,
    }

    return (
      <div className="post-item">
        <div className="post-background" style={background}>
          <div className="post-text">
            <Link to={data.slug} id={data.id} className="post-text-title">
              {data.title}
            </Link>
            <p className="post-text-meta">{data.date}</p>
            <Link className="post-text-more btn" to={data.slug}>READ MORE</Link>
          </div>
        </div>
      </div>
    )
  }
}
