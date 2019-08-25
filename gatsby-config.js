module.exports = {
  siteMetadata: {
    title: `Hawkeye Reporter`,
    description: `Visualisation for Hawkeye Scanner reports`,
    author: `@urma`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/hawkeye`,
        ignore: [`**/\.*`],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
  ],
}
