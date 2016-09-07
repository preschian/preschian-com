import React from 'react'
import { observer } from 'mobx-react'

import LoadingData from './LoadingData'

@observer
export default class Loading extends React.Component {
  render() {
    window.scrollTo(0, 0)

    return (
      <div className={(LoadingData.loading) ? 'loading' : 'loading loading-hide'}>
        <p className="loading-text">loading . . .</p>
      </div>
    )
  }
}
