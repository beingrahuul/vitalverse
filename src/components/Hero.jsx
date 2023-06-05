import { Link } from "react-router-dom"
import ARROW from "../assets/arrow.svg"
import styled from "styled-components"


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0.8rem;
`

const HeadingContainer = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 1rem;
    margin-bottom: 1rem;
`

const Heading = styled.h1`
    font-size: 4rem;
    font-weight: 500;
    font-style: italic;
`

const LinkDiv = styled.div`
    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
    padding-bottom: 1rem;
    &:hover {
        text-decoration: underline;
    }
`

const Main = styled.div`
    display: flex;   
    gap: 1rem;
`

const MainPost = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
    border-radius: 1rem;
    position: relative;
    img{
        height: 600px;
    }
`

const Post = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 300px;
    border-radius: 1rem;
    img{
        height: 500px;
    }
`
const PostImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
`

const GenreContainer = styled.div`
    display: flex;
    gap: 0.4rem;
    margin: 0.8rem;
    align-items: center;
`

const Dot = styled.div`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #000;
`

const Genre = styled.div`
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        text-decoration: underline;
    }
`

const BlogTile = styled.div`
    display: flex;
    margin: 0.4rem 0.8rem;
    font-size: 2rem;
    font-weight: 500;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`

const ArrowContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
    transition: all 0.1s ease;
    &:hover {
        background-color: #717171;
    }
`

const Arrow = styled.img`
    max-width: 20px;
    max-height: 20px;
    transform: rotate(315deg);
`

function Hero() {
  return (
    <Container>
        <HeadingContainer>
            <Heading>New Posts.</Heading>
            <LinkDiv>See all Post</LinkDiv>
        </HeadingContainer>
        <Main>
            <MainPost>
                <Link to="/blog/1">
                <ArrowContainer>
                    <Arrow src={ARROW} />
                </ArrowContainer>
                </Link>
                <PostImage src="https://images.unsplash.com/photo-1685570788011-9a136a8582fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" />
                <GenreContainer>
                    <Dot />
                    <Genre>Travel</Genre>
                </GenreContainer>
                <BlogTile>
                    <Link to="/blog/1">The story behind every song on japanese breakfasts new album</Link>
                </BlogTile>
            </MainPost>

            <Post>
                <Link to="/blog/2">
                    <ArrowContainer>
                        <Arrow src={ARROW} />
                    </ArrowContainer>
                </Link>
                <PostImage src="https://images.unsplash.com/photo-1685714629963-2f078268e215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=802&q=80" />
                <GenreContainer>
                    <Dot />
                    <Genre>Space</Genre>
                </GenreContainer>
                <BlogTile>
                    <Link to="/blog/3">The story behind every song on japanese breakfasts new album</Link>
                </BlogTile>
            </Post>

            <Post>
                <Link to="/blog/3">
                    <ArrowContainer>
                        <Arrow src={ARROW} />
                    </ArrowContainer>
                </Link>
                <PostImage src="https://images.unsplash.com/photo-1685644072593-b0e42d185d03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" />
                <GenreContainer>
                    <Dot />
                    <Genre>Music</Genre>
                </GenreContainer>
                <BlogTile>
                    <Link to="/blog/2">The story behind every song on japanese breakfasts new album</Link>
                </BlogTile>
            </Post>
        </Main>
    </Container>
  )
}

export default Hero