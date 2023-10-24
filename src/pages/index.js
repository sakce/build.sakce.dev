import * as React from 'react'
import BuildPosts from '../components/posts'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Build Posts">
        <h1>Welcome to build.sakce.dev!</h1>
        <BuildPosts />
      </Layout>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home</title>

export default IndexPage
