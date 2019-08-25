/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === "HawkeyeJson") {
    const { createNodeField } = actions
    createNodeField({
      node,
      name: `slug`,
      value: path.join(`/reports`, node.id),
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query MyQuery {
      allHawkeyeJson {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allHawkeyeJson.edges.forEach(({ node }) => {
    console.log(`Adding page ${node.fields.slug}`, {
      context: { slug: node.fields.slug },
    })
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/report.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
