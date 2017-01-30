import React from 'react'
import {observer} from 'mobx-react'

import LoadingData from './LoadingData'

const Loading = observer(() => (
  <div className={LoadingData.loading ? 'loading' : 'loading loading-hide'}>
    <p className="loading-text">loading . . .</p>
  </div>
))

export default Loading