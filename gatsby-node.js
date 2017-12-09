const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    const slugSplit = `/${slug.split('/')[2]}/`

    createNodeField({
      node,
      name: 'slug',
      value: slugSplit,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.map(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/blog-post.js'),
          context: {
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
