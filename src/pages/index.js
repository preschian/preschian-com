import React from 'react'
import { format } from 'date-fns'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import localStorage from 'local-storage'

import { Container } from '../components/Container'
import { Pagination } from '../components/Pagination'
import { Post, PostItem, PostBackground, PostText, PostTextTitle, PostTextMeta } from '../components/Post'

@observer
export default class Index extends React.Component {
  @observable page = parseInt(localStorage.get('page')) || 1
  @observable perPage = 4
  @observable totalPost = this.props.data.allMarkdownRemark.totalCount
  @observable totalPage = Math.ceil(this.totalPost / this.perPage)

  nextPage = () => {
    this.renderPost((this.page += 1))
  }

  prevPage = () => {
    this.renderPost((this.page -= 1))
  }

  renderPost = (page = this.page) => {
    const start = this.perPage * page - this.perPage
    const end = this.perPage * page

    localStorage.set('page', page)

    return this.props.data.allMarkdownRemark.edges.slice(start, end)
  }

  render() {
    return (
      <Container>
        <Post>
          {this.renderPost().map(({ node }) => {
            return (
              <PostItem key={node.id}>
                <PostBackground
                  style={{ backgroundImage: `url(${node.frontmatter.image.childImageSharp.featured.src})` }}
                >
                  <PostText>
                    <PostTextTitle to={node.fields.slug}>{node.frontmatter.title}</PostTextTitle>
                    <PostTextMeta>{format(node.frontmatter.date, 'MMMM DD, YYYY')}</PostTextMeta>
                  </PostText>
                </PostBackground>
              </PostItem>
            )
          })}
        </Post>

        <Pagination>
          {this.page !== 1 && (
            <a href="#!" onClick={this.prevPage}>
              PREV
            </a>
          )}

          <span>{`PAGE ${this.page} of ${this.totalPage}`}</span>

          {this.page !== this.totalPage && (
            <a href="#!" onClick={this.nextPage}>
              NEXT
            </a>
          )}
        </Pagination>
      </Container>
    )
  }
}

export const query = graphql`
  query MyFilesQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date
            image {
              childImageSharp {
                featured: responsiveSizes(maxWidth: 1440) {
                  src
                }
              }
            }
          }
          fields {
            slug
          }
          id
          html
        }
      }
      totalCount
    }
  }
`
