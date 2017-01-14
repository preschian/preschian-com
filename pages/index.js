import React from 'react'
import 'isomorphic-fetch'

import { GetPosts } from '../utils/api'

import { ContainerHeight } from '../components/container'
import Head from '../components/head'
import PostItem, { Post } from '../components/post'

export default class Index extends React.Component {
  static async getInitialProps({ query }) {
    const ref = await GetPosts(query.page)
    const val = ref.val()
    let result = []

    for (let value in val) {
      result.push(val[value])
    }

    return {
      result: result.reverse()
    }
  }

  render() {
    return (
      <div>
        <Head />

        <ContainerHeight>
          <Post>
            {this.props.result.map((value) => {
              return <PostItem key={value.id} data={value} />
            })}
          </Post>
        </ContainerHeight>
      </div>
    )
  }
}
