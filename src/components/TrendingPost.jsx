import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const Container = styled.div`
    display: flex;
    background-color: #f5f5f5;
    flex-direction: column;
    color: #000;
    width: 240px;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
`

const PostImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    border-radius: 1rem;
    cursor: pointer;
    img{
        height: 100%;
        width: 240px;
        object-fit: cover;
        border-radius: 1rem;
    }
`

const InfoContainer = styled.div`
    display: flex;
    padding: 1rem 0px;
    flex-direction: column;
`

const GenreContainer = styled.div`
    display: flex;
    gap: 0.4rem;
    margin: 0rem 0.8rem;
    align-items: center;
`

const Dot = styled.div`
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #000;
`

const Genre = styled.div`
    font-size: 0.6rem;
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
    text-align: center;
    margin: 0rem 0.8rem;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`

function TrendingPost({images, id}) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/blog/${id}`)
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
            <BlogTile onClick={handleClick} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. </BlogTile>
        </InfoContainer>
    </Container>
  )
}

export default TrendingPost