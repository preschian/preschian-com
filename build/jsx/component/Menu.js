import React from 'react'
import { Link } from 'react-router'

import Loading from './Loading'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Loading />
        <div className="container">
          <div className="menu">
            <div className="menu-col">
              <Link to="/" className="menu-name">PRESCHIAN FEBRYANTARA</Link>
            </div>
            <div className="menu-col">
              <ul className="menu-list">
                <li><Link to="/" className="btn btn-primary">BLOG</Link></li>
                <li><Link to="/works" className="btn btn-primary">WORK</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container-height">
          {this.props.children}
        </div>

        <div className="footer">
          <div className="container">

            <div className="footer-wrap">
              <div className="footer-col">
                <ul className="footer-social">
                  <li><a className="btn btn-dark" href="https://twitter.com/preschian" target="_blank"><i className="fa fa-fw fa-twitter"></i></a></li>
                  <li><a className="btn btn-dark" href="https://steamcommunity.com/id/preschian" target="_blank"><i className="fa fa-fw fa-steam"></i></a></li>
                  <li><a className="btn btn-dark" href="https://github.com/preschian" target="_blank"><i className="fa fa-fw fa-github"></i></a></li>
                </ul>
              </div>

              <div className="footer-col">
                <p className="footer-text">source on <a href="https://github.com/preschian/preschian-com" target="_blank">github</a></p>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
