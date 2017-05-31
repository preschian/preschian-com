import React from 'react'
import { Link } from 'react-router'

export default ({ children }) => (
  <div>
    <div className="container">
      <div className="menu">
        <div className="menu-col">
          <h1>
            <Link to="/" className="menu-name">PRESCHIAN FEBRYANTARA</Link>
          </h1>
        </div>
        <div className="menu-col">
          <ul className="menu-list">
            <li><Link to="/" className="btn btn-primary">BLOG</Link></li>
            <li><Link to="/works" className="btn btn-primary">WORK</Link></li>
          </ul>
        </div>
      </div>
    </div>

    {children}

    <div className="footer">
      <a
        className="footer-col"
        href="https://twitter.com/preschian"
        target="_blank"
      >
        twitter
      </a>
      <a
        className="footer-col"
        href="https://steamcommunity.com/id/preschian"
        target="_blank"
      >
        steam
      </a>
      <a
        className="footer-col"
        href="https://github.com/preschian"
        target="_blank"
      >
        github
      </a>
      <a
        className="footer-col"
        href="https://github.com/preschian/preschian-com"
        target="_blank"
      >
        source
      </a>
    </div>
  </div>
)
