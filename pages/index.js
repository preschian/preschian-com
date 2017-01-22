import React from 'react'
import 'isomorphic-fetch'

import { GetPosts, GetTotalPosts } from '../utils/api'

import { Container } from '../components/container'
import Layout from '../components/layout'
import Page from '../components/page'
import PostItem, { Post } from '../components/post'

export default class Index extends React.Component {
  static async getInitialProps({ query }) {
    // get posts
    const ref = await GetPosts(query.page)
    const val = ref.val()
    let result = []

    for (let value in val) {
      result.push(val[value])
    }

    // get total posts
    const getTotalPosts = await GetTotalPosts()
    const getKey = Object.keys(getTotalPosts.val())[0]
    const getOrder = getTotalPosts.val()[getKey].order

    return {
      page: parseInt(query.page) || 1,
      result: result.reverse(),
      totalPages: Math.ceil(getOrder / 4)
    }
  }

  render() {
    return (
      <Layout>
        <Container>
          <Post>
            {this.props.result.map((value) => {
              return <PostItem key={value.id} data={value} />
            })}
          </Post>

          <Page page={this.props.page} totalPages={this.props.totalPages} />
        </Container>
      </Layout>
    )
  }
}
