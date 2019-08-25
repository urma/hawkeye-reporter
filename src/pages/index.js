import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ReportSummary from "../components/report_summary"

export default ({ data }) => (
  <Layout>
    {data.allHawkeyeJson.edges.map(({ node }, index) => {
      return <ReportSummary key={index} report={node} />
    })}
  </Layout>
)

export const query = graphql`
  query MyQuery {
    allHawkeyeJson {
      edges {
        node {
          id
          findings {
            level
          }
          fields {
            slug
          }
          parent {
            ... on File {
              name
              ctime
            }
          }
        }
      }
    }
  }
`
