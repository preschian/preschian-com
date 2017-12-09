module.exports = {
  siteMetadata: {
    title: 'Preschian Febryantara',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              linkImagesToOriginal: true,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'post',
        path: `${__dirname}/post/`,
      },
    },
  ],
}
