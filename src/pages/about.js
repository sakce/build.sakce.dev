import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="Who is sakce?">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </Layout>
    </main>
  )
}

export const Head = () => (
    <>
        <title>Who is sakce?</title>
        <meta name="description" content="Where sakce gives a short intro." />
    </>
)

// Step 3: Export your component
export default AboutPage
