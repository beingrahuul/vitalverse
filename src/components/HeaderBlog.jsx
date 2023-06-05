import styled from "styled-components"
import TrendingPost from "./TrendingPost"
const images = {
    "first": "https://images.unsplash.com/photo-1685123466319-d7d8bae569d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    "second": "https://images.unsplash.com/photo-1685596411704-56c5dff3b84c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    "third": "https://images.unsplash.com/photo-1685566177611-a607e0b46d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  }

const Container = styled.div`
    display: flex;
    max-width: 1400px;
    justify-content: space-between;
    flex-direction: column;
    background-color: #f5f5f5;
    color: #000;
    overflow: hidden;
    
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
`

const HeaderImageContainer = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    
    //Ipad
    @media (min-width: 426px) and (max-width: 1000px){
        height: 400px;
    }
`
const HeaderImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 1rem;
`

const InfoContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 75%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #fff;
    border-radius: 1rem;
    //Ipad
    @media (min-width: 426px) and (max-width: 1000px){
        width: 100%;
    }
`

const GenreContainer = styled.div`
    display: flex;
    gap: 0.4rem;
    margin: 0.2rem 0.2rem;
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
    margin: 0rem 0.2rem;
    font-size: 2.5rem;
    font-weight: 500;
    text-decoration: underline;
    text-shadow: 2px 1px 5px black;
    
    //Ipad
    @media (min-width: 426px) and (max-width: 1000px){
        font-size: 1.5rem;
    }
`

const AuthorContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0.2rem 0.2rem;
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
    margin: 0.2rem 0rem;
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    color: #ffffff;
    text-shadow: none;
    &:hover {
        text-decoration: underline;
    }
`


function HeaderBlog() {
  return (
    <Container>
        <HeaderContainer>
            <HeaderImageContainer>
                <HeaderImage src={images.first} />
            </HeaderImageContainer>
            <InfoContainer>
                <BlogTile>The story behind every song on japanese breakfasts new album</BlogTile>
                <GenreContainer>
                    <Dot />
                    <Genre>Music</Genre>
                </GenreContainer>
                <AuthorContainer>
                    <AuthorImage src="https://images.unsplash.com/photo-1685736475052-18a3533c0a94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80" />
                    <AuthorName>John Doe</AuthorName>
                    <Dot />
                    <Date>May 20, 2021</Date>
                </AuthorContainer>
            </InfoContainer>
        </HeaderContainer>
    </Container>
  )
}

export default HeaderBlog