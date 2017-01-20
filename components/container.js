import styled from 'styled-components'

export const Container = styled.div`
  max-width: 60rem;
  margin-right: auto;
  margin-left: auto;
  padding-right: 2rem;
  padding-left: 2rem;

  @media (max-width: 768px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`

export const ContainerHeight = styled(Container)`
  min-height: 100vh;
`

export default Container
