import styled from 'react-emotion'
import Link from 'gatsby-link'

export const Post = styled('div')`
  display: block;
  width: 100%;
  font-size: 0;
  letter-spacing: 0;
  text-align: left;
  box-sizing: border-box;
  width: calc(100% + 2rem);
  margin-left: -1rem;
  margin-right: -1rem;
  padding-left: 0;
  padding-right: 0;

  & > * {
    display: inline-block;
    vertical-align: top;
    padding-left: 16px;
    padding-right: 16px;

    &:nth-child(3n + 1) {
      width: 100%;
    }
  }
`

export const PostItem = styled('div')`
  min-height: 1px;
  font-size: 1rem;
  box-sizing: border-box;
  width: 50%;
  margin-bottom: 2rem;

  & > * {
    height: 25rem;

    @media (max-width: 768px) {
      height: 10rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const PostBackground = styled('div')`
  background-color: rgb(17, 17, 17);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &:before {
    background-color: rgba(0, 0, 0, 0.6);
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`

export const PostText = styled('div')`
  padding: 3rem;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

export const PostTextTitle = styled(Link)`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`

export const PostTextMeta = styled('p')`
  color: #ccc;
  font-size: 0.75rem;
  letter-spacing: 1px;
  margin-top: 0.5rem;
  text-transform: uppercase;
`

export const PostFeatured = styled(PostBackground)`
  align-items: center;
  background-color: #111;
  display: flex;
  height: calc(100vh - 100px);
  justify-content: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    height: calc(50vh - 100px);
  }
`

export const PostFeaturedText = styled(PostText)`
  position: initial;
  text-align: center;
`

export const PostContent = styled('div')`
  color: #666;
  font-family: Droid Serif, serif;
  font-size: 18px;
  line-height: 2rem;
  margin: 0 auto;
  max-width: 50rem;
  text-align: justify;

  & > * {
    font-family: Droid Serif, serif;
  }

  a {
    border-color: black;
    color: black;
    font-family: Droid Serif, serif;
    word-break: normal;

    &:hover {
      border-color: #ffee58;
    }

    span {
      font-size: 18px;
    }
  }

  img {
    display: block;
    margin-left: calc((50rem - 80vw) / 2);
    width: 80vw;
  }

  p {
    font-size: 18px;
  }

  p ~ p {
    margin-top: 1rem;
  }

  ul,
  ol {
    margin-top: 0;
    padding-left: 18px;

    li {
      font-size: 18px;
    }
  }

  h2 {
    margin-top: 2.5rem;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`
