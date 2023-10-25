import * as React from 'react'
import BuildPosts from '../components/posts'
import Layout from '../components/layout'
import Seo from '../components/seo'

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

export const Head = () => <Seo title='Home' />

export default IndexPage
