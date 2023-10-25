import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import ExtLinks from './external_links'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './css/layout.module.css'


const Layout = ({ pageTitle, children }) => {
  const siteTitleData = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)

  return (
    <div className={container}>
      <header className={siteTitle}>{siteTitleData.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Build Posts</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>Who is sakce?</Link>
          </li>
        </ul>
        <ExtLinks/>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
