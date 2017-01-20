import styled from 'styled-components'
import Link from 'next/prefetch'

import Container from './container'

const Head = styled.h1`
  font-size: 1.75rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;

  a {
    color: #111;
  }

  @media (max-width: 768px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`

export default () => (
  <Container>
    <Head><Link href="/">Preschian Febryantara</Link></Head>
  </Container>
)
