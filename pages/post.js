import React from 'react'
import 'isomorphic-fetch'

import { GetPostDetail } from '../utils/api'

import Article from '../components/article'

export default class ArticleDetail extends React.Component {
  static async getInitialProps({ query: { slug }}) {
    const ref = await GetPostDetail(slug)
    const val = ref.val()

    // get first child Object
    const getKey = Object.keys(val)[0]
    const data = val[getKey]

    return { data }
  }

  render() {
    return <Article data={this.props.data} />
  }
}
