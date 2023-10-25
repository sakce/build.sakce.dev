import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

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
        <Seo title='Who is sakce?' />
        <meta name="description" content="Where sakce gives a short intro." />
    </>
)

export default AboutPage
