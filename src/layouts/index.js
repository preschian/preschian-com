import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'

import { Container } from '../components/Container'

require('../css/prism-okaidia.min.css')

injectGlobal`
  * {
    box-sizing: border-box;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: 'Montserrat', sans-serif;
  }

  a {
    border-bottom: 1px solid transparent;
    color: inherit;
    font-size: inherit;
    text-decoration: none;
    transition-duration: 0.2s;

    &:hover {
      border-color: #ffee58;
    }
  }

  pre {
    background-color: #111 !important;
    border-radius: 0 !important;
    color: white;
    font-family: Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace !important;
    font-size: 1rem;
    line-height: 1.5;
    overflow: auto;
    padding: 0.5rem 1rem;
    text-align: left;
    word-break: break-all;
    white-space: pre;

    code {
      font-family: Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace !important;
    }

    a {
      border-color: transparent !important;
      color: white !important;
      font-family: Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace !important;
      text-decoration: none;
    }
  }

  h1 {
    font-size: 2rem;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  h2 {
    font-size: 1.5rem;
  }
`

const footerLink = [
  ['twitter', 'https://twitter.com/preschian'],
  ['steam', 'https://steamcommunity.com/id/preschian'],
  ['github', 'https://github.com/preschian'],
  ['source', 'https://github.com/preschian/preschian-com'],
]

export default ({ children }) => (
  <div>
    <Helmet
      title="Preschian Febryantara"
      meta={[
        { name: 'author', content: 'Preschian Febryantara' },
        { name: 'keywords', content: 'tech, blog, opinion, front end web' },
        { name: 'viewport', content: 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
        {
          name: 'description',
          content:
            'Preschian Febryantara. Atlet Front End Developer. Penikmat Esport dan paru goreng. Blog tentang techies dan pengalaman pribadi.',
        },
      ]}
    >
      <style>{`
        @import 'https://fonts.googleapis.com/css?family=Montserrat:400,700';
        @import 'https://fonts.googleapis.com/css?family=Droid+Serif:400,400i,700,700i';
      `}</style>
    </Helmet>
    <Container>
      <Header>
        <Link to="/">
          <h1>PRESCHIAN FEBRYANTARA</h1>
        </Link>
      </Header>
    </Container>

    {children()}

    <Footer>
      {footerLink.map(function(value) {
        return (
          <a key={value[0]} href={value[1]} target="_blank">
            {value[0]}
          </a>
        )
      })}
    </Footer>
  </div>
)

const Header = styled('div')`
  font-size: 0;
  padding: 2rem 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`

const Footer = styled('div')`
  align-items: center;
  background-color: #111;
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  padding: 1rem;

  a {
    border: 0;
    margin: 0 0.5rem;

    &:hover {
      color: #ffee58;
    }
  }
`
