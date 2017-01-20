import Link from 'next/link'
import styled from 'styled-components'

export const Post = styled.div`
  box-sizing: border-box;
  display: block;
  font-size: 0;
  letter-spacing: 0;
  margin-right: -1rem;
  margin-left: -1rem;
  padding-right: 0;
  padding-left: 0;
  text-align: left;
  width: calc(100% + 2rem);
`

const PostItem = styled.div`
  box-sizing: border-box;
  display: inline-block;
  font-size: 1rem;
  min-height: 1px;
  margin-bottom: 2rem;
  padding-right: 1rem;
  padding-left: 1rem;
  vertical-align: top;
  width: 50%;

  &:nth-child(3n + 1) {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    width: 100%;
  }
`

const PostBackground = styled.div`
  background-image: url('${props => props.image}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 25rem;
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

  @media (max-width: 768px) {
    height: 10rem;
  }
`

const PostText = styled.div`
  padding: 3rem;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

export const PostTextTitle = styled.span`
  border-bottom: 1px solid transparent;
  color: white;
  cursor: pointer;
  font-size: 2.25rem;
  font-weight: 700;
  transition-duration: 0.2s;
  text-decoration: none;
  text-transform: capitalize;

  &:hover {
    border-color: #ffee58;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`

export const PostTextMeta = styled.p`
  color: #CCC;
  font-size: 0.75rem;
  letter-spacing: 1px;
  margin-top: 0.5rem;
  text-transform: uppercase;
`

const PostTextBtn = styled.span`
  border: 2px solid white;
  color: white;
  cursor: pointer;
  display: inline-block;
  padding: 0.5rem 1.25rem;
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  transition-duration: 0.2s;

  &:hover {
    background-color: #ffee58;
    border-color: #ffee58;
    color: #111;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export default ({ data }) => (
  <PostItem>
    <PostBackground image={data.image}>
      <PostText>
        <Link href={`/post/?slug=${data.slug}`} as={`/post/${data.slug}`}>
          <PostTextTitle>{data.title}</PostTextTitle>
        </Link>
        <PostTextMeta>{data.date}</PostTextMeta>
        <Link href={`/post/?slug=${data.slug}`} as={`/post/${data.slug}`}>
          <PostTextBtn>Read More</PostTextBtn>
        </Link>
      </PostText>
    </PostBackground>
  </PostItem>
)