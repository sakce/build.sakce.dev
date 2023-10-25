import React from 'react'
import { container } from './css/post.module.css'
import { graphql, useStaticQuery } from 'gatsby'

const BuildPosts = () => {
    const postsMdxData = useStaticQuery(graphql`
    query postsMdxQuery {
      allMdx(sort: { frontmatter: { datePublished: DESC} }) {
        nodes {
          excerpt
          id
          frontmatter {
            name
            datePublished(formatString: "YYYY-MM-DD")
            tags
            slug
          }
          parent {
            ... on File {
              modifiedTime(formatString: "MMMM D, YYYY")
            }
          }
        }
      }
    }
    `)
    return (
      <div>
        <p>Here are all the posts I've written about building things.</p>
        {
          postsMdxData.allMdx.nodes.map((node, index) => (
            <Post key={node.id}
                  date={node.frontmatter.datePublished}
                  title={node.frontmatter.name}
                  markdownContent={node.excerpt}
                  lastUpdatedAt={node.parent.modifiedTime}
            />
          ))
        }
      </div>
    )
}

const Post = (props) => {
    return (
        <div className={container}>
            <h1>{props.date} | {props.title}</h1>
            <p>{props.markdownContent}</p>
            <h5 style={{
              // textAlign: "right",
            color: "#5f8569"
            }}>Last Modified On: {props.lastUpdatedAt}</h5>
        </div>
    )
}

export default BuildPosts
