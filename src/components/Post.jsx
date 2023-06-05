import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    background-color: #f5f5f5;
    color: #000;
    width: 1000px;
`

const PostImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    border-radius: 1rem;
    cursor: pointer;
    img{
        height: 100%;
        width: 400px;
        object-fit: cover;
        border-radius: 1rem;
    }
`

const InfoContainer = styled.div`
    display: flex;
    padding: 1rem;
    flex-direction: column;
`

const GenreContainer = styled.div`
    display: flex;
    gap: 0.4rem;
    margin: 0.2rem 0.8rem;
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
    margin: 0rem 0.8rem;
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`

const AuthorContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0.8rem;
    gap: 0.4rem;
`

const AuthorImage = styled.img`
    width: 30px;
    height: 30px;
    border: 2px solid #000;
    border-radius: 50%;
    object-fit: cover;
`

const AuthorName = styled.div`
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`

const Date = styled.div`
    margin: 0.2rem 0.2rem;
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    color: gray;
    &:hover {
        text-decoration: underline;
    }
`

function Post({images, id}) {

    const Navigate = useNavigate()
    const handleClick = () => {
        Navigate(`/blog/${id}`)
    }
  return (
    <Container>
        <PostImageContainer onClick={handleClick}>
            <img src={images} />    
        </PostImageContainer>
        <InfoContainer>
            <GenreContainer>
                <Dot />
                <Genre>Music</Genre>
            </GenreContainer>
            <BlogTile onClick={handleClick}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </BlogTile>
            <AuthorContainer>
                <AuthorImage src="https://images.unsplash.com/photo-1685736475052-18a3533c0a94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80" />
                <AuthorName>John Doe</AuthorName>
                <Dot />
                <Date>1 hour ago</Date>
            </AuthorContainer>
        </InfoContainer>
    </Container>
  )
}

export default Post