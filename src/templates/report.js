import React from "react"
import Layout from "../components/layout"
import Finding from "../components/finding"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <Layout>
      {data.hawkeyeJson.findings.map((finding, index) => {
        return <Finding key={index} data={finding} />
      })}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    hawkeyeJson(fields: { slug: { eq: $slug } }) {
      findings {
        module
        level
        offender
        description
        mitigation
      }
    }
  }
`
