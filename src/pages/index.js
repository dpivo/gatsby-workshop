import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
export default ({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div>
          <Link to={`/${node.slug}`}>
            <p>{node.title}</p>
          </Link>
          {node.featured_media && node.featured_media.localFile.childImageSharp && <img src={node.featured_media.localFile.childImageSharp.fluid.src} alt={node.title} title={node.title} />}
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          wordpress_id
          title
          excerpt
          slug
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1024) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`