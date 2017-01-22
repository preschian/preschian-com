import styled from 'styled-components'

const Footer = styled.div`
  background-color: #111;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  padding: 1rem;

  a {
    color: white;
    margin: 0 0.5rem;

    &:hover {
      color: #FFEE58;
    }
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`

export default () => (
  <Footer>
    <a href="https://twitter.com/preschian" target="_blank">twitter</a>
    <a href="http://steamcommunity.com/id/preschian" target="_blank">steam</a>
    <a href="https://github.com/preschian" target="_blank">github</a>
    <a href="https://github.com/preschian/preschian-com/tree/ssr-next" target="_blank">source</a>
  </Footer>
)
