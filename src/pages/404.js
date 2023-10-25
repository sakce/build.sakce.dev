import * as React from "react"
import { Link } from "gatsby"
import { container, code, p, h1 } from '../styles/theme.module.css'

const NotFoundPage = () => {
  return (
    <main className={ container }>
      <h1 className={ h1 }>404 Page not found</h1>
      <p className={ p }>
        It appears you are lost.. 😔
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code className={ code }>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/" style={{ color: "#61dafb" }}>Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
