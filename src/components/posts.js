import React from 'react'
import { container } from './css/post.module.css'

const BuildPosts = () => {
    return (
      <div>
        <h1>Build Posts</h1>
        <p>Here are all the posts I've written about building things.</p>

        <Post date="20-10-2023" title="Kickoff" markdownContent="This is my first post!"/>
        <Post date="24-10-2023" title="Great Gatsby" markdownContent="Cooking things up with Gatsby!"/>
      </div>
    )
  }

const Post = (props) => {
    return (
        <div className={container}>
            <h1>{props.date} | {props.title}</h1>
            <p>{props.markdownContent}</p>
        </div>
    )
}

export default BuildPosts
