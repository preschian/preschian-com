import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import works from '../store/works.json'

@observer
export default class Works extends React.Component {
  @observable worksData

  constructor() {
    super()

    this.worksData = works.map((val, key) => {
      const tags = val.tags.map((v, k) => {
        return <span key={k} className="work-tech">{v}</span>
      })

      return(
        <div key={key} className="work-item">
          <div className="work-image">
            <img src={'/assets/img/' + val.image} />
          </div>
          <div className="work-content">
            <p className="work-title">{val.name}</p>
            <p className="work-desc">{val.type}</p>
            {tags}
          </div>
        </div>
      )
    })
  }

  render() {
    return <div className="container">
      <div className="work">
        {this.worksData}
      </div>
    </div>
  }
}
