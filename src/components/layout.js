import * as React from 'react'
import { Link } from 'gatsby'
import ExtLinks from './external_links'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './css/layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
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
