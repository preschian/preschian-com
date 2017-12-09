import React from 'react'
import { format } from 'date-fns'

import { Container } from '../components/Container'
import { PostContent, PostFeatured, PostFeaturedText, PostTextTitle, PostTextMeta } from '../components/Post'

export default class Blog extends React.Component {
  disqus() {
    // disqus comment
    if (window.DISQUS === undefined) {
      var d = document,
        s = d.createElement('script')
      s.src = '//preschian.disqus.com/embed.js'
      s.setAttribute('data-timestamp', +new Date())
      ;(d.head || d.body).appendChild(s)
    } else {
      window.DISQUS.reset({ reload: true })
    }
  }

  componentDidMount() {
    this.disqus()
  }

  componentDidUpdate() {
    this.disqus()
  }

  render() {
    const post = this.props.data.markdownRemark
    return (
      <div>
        <PostFeatured style={{ backgroundImage: `url(${post.frontmatter.image.childImageSharp.featured.src})` }}>
          <PostFeaturedText>
            <PostTextTitle to={post.fields.slug}>{post.frontmatter.title}</PostTextTitle>
            <PostTextMeta>{format(post.frontmatter.date, 'MMMM DD, YYYY')}</PostTextMeta>
          </PostFeaturedText>
        </PostFeatured>
        <Container>
          <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
          <PostContent>
            <br />
            <div id="disqus_thread" />
          </PostContent>
        </Container>
      </div>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
    }
  }
`
