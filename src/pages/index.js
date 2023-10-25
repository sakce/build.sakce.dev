import * as React from 'react'
import { container, h1 } from '../styles/theme.module.css'

const IndexPage = () => {

  return (
    <main className={ container }>
      <h1 className={ h1 }>
        Welcome to <span style={{ color: '#6B7FD7' }}>build.sakce.dev</span>! This is a WIP. 🚀
      </h1>
    </main>
  );
};

export const Head = () => <title>Home</title>;

export default IndexPage;
