import styled from "styled-components"
import Hero from "../components/Hero"
import Post from "../components/Post"
import TrendingPost from "../components/TrendingPost"

const images = {
  "first": "https://images.unsplash.com/photo-1685123466319-d7d8bae569d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
  "second": "https://images.unsplash.com/photo-1685596411704-56c5dff3b84c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  "third": "https://images.unsplash.com/photo-1685566177611-a607e0b46d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"

}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;
  background-color: #f5f5f5;
  color: #000;
  overflow: hidden;
`

const Main = styled.div`
  display: flex;
  gap: 1rem;
`  

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
  
`

const Title = styled.div`
  font-size: 2rem;
  font-weight: 500;
  font-style: italic;
`

const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
  border-left: 4px solid #000;
  padding-left: 4rem;
`

function Home() {
  return (
    <Container>
      <Hero />
      <Main>
        <PostContainer>
          <Title>Latest Posts</Title>
          <Post images={images.first} id={"e21aw"}/>
          <Post images={images.second} id={"e21aw"}/>
          <Post images={images.third} id={"e21aw"}/>
          <Post images={images.first} id={"e21aw"}/>
        </PostContainer>
        <TrendingContainer>
          <Title>Trending Posts</Title>
          <TrendingPost images={images.first} id={"e21aw"}/>
          <TrendingPost images={images.second} id={"e231aw"}/>
          <TrendingPost images={images.third} id={"e31aw"}/>
          <TrendingPost images={images.first} id={"e781aw"}/>
        </TrendingContainer>
      </Main>
    </Container>
  )
}

export default Home