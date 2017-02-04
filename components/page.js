import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

const PageNav = styled.a`
  border: 2px solid #111;
  color: #111;
  display: inline-block;
  font-weight: bold;
  line-height: 2rem;
  text-align: center;
  transition-duration: 0.2s;
  height: 2rem;
  width: 2rem;

  &:hover {
    background-color: #FFEE58;
    border-color: #FFEE58;
  }
`

const PageInfo = styled.p`
  line-height: 2rem;
  text-align: center;
  text-transform: uppercase;
`

export default ({page, totalPages}) => {
  let prevNav = <div></div>
  let nextNav = <div></div>

  if (page !== 1) {
    prevNav = <PageNav href={`/?page=${page - 1}`}>＜</PageNav>
  }

  if (page !== totalPages) {
    nextNav = <PageNav href={`/?page=${page + 1}`}>＞</PageNav>
  }

  return(
    <Page>
      {prevNav}
      <PageInfo>Page {page} of {totalPages}</PageInfo>
      {nextNav}
    </Page>
  )
}
