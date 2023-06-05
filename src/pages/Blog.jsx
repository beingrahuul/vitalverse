import HeaderBlog from "../components/HeaderBlog"
import styled from "styled-components"
import TrendingPost from "../components/TrendingPost"

const images = {
  "first": "https://images.unsplash.com/photo-1685123466319-d7d8bae569d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
  "second": "https://images.unsplash.com/photo-1685596411704-56c5dff3b84c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  "third": "https://images.unsplash.com/photo-1685566177611-a607e0b46d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"

}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 auto;
  width: 1600px;
  padding: 0 1rem;
  background-color: #f5f5f5;
  color: #000;
  overflow: hidden;
`

const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: #fff;
    border-radius: 1rem;
    margin: 1rem 0rem;
`

const Main = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width: 60%;
    padding: 1rem;
`

const Paragraph = styled.div`
    font-size: 1rem;
    font-weight: 500;
    margin: 1rem 0rem;
    line-height: 1.5rem;
`

const ParagraphImageContainer = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
`

const ParagraphImage = styled.img`
    width: 80%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 1rem;
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem;
`

const SuggestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
  border-left: 4px solid #000;
  padding-left: 4rem;
`

const Title = styled.div`
  font-size: 2rem;
  font-weight: 500;
  font-style: italic;
  margin: 1rem;
`

function Blog() {
  return (
    <Container>
      <HeaderBlog />
      <BottomContainer>
            <Main>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem eos cumque asperiores, soluta non quo? Aperiam error cumque, optio laudantium neque voluptatem blanditiis? Temporibus maiores quaerat voluptatum provident praesentium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem eos cumque asperiores, soluta non quo? Aperiam error cumque, optio laudantium neque voluptatem blanditiis? Temporibus maiores quaerat voluptatum provident praesentium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem eos cumque asperiores, soluta non quo? Aperiam error cumque, optio laudantium neque voluptatem blanditiis? Temporibus maiores quaerat voluptatum provident praesentium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem eos cumque asperiores, soluta non quo? Aperiam error cumque, optio laudantium neque voluptatem blanditiis? Temporibus maiores quaerat voluptatum provident praesentium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem eos cumque asperiores, soluta non quo? Aperiam error cumque, optio laudantium neque voluptatem blanditiis? Temporibus maiores quaerat voluptatum provident praesentium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem eos cumque asperiores, soluta non quo? Aperiam error cumque, optio laudantium neque voluptatem blanditiis? Temporibus maiores quaerat voluptatum provident praesentium.
                </Paragraph>
                <ParagraphImageContainer>
                    <ParagraphImage src={images.second} />
                </ParagraphImageContainer>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem eos cumque asperiores, soluta non quo? Aperiam error cumque, optio laudantium neque voluptatem blanditiis? Temporibus maiores quaerat voluptatum provident praesentium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem eos cumque asperiores, soluta non quo? Aperiam error cumque, optio laudantium neque voluptatem blanditiis? Temporibus maiores quaerat voluptatum provident praesentium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem eos cumque asperiores, soluta non quo? Aperiam error cumque, optio laudantium neque voluptatem blanditiis? Temporibus maiores quaerat voluptatum provident praesentium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem eos cumque asperiores, soluta non quo? Aperiam error cumque, optio laudantium neque voluptatem blanditiis? Temporibus maiores quaerat voluptatum provident praesentium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem eos cumque asperiores, soluta non quo? Aperiam error cumque, optio laudantium neque voluptatem blanditiis? Temporibus maiores quaerat voluptatum provident praesentium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem eos cumque asperiores, soluta non quo? Aperiam error cumque, optio laudantium neque voluptatem blanditiis? Temporibus maiores quaerat voluptatum provident praesentium.
                </Paragraph>
                <ParagraphImageContainer>
                    <ParagraphImage src={images.third} />
                </ParagraphImageContainer>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem eos cumque asperiores, soluta non quo? Aperiam error cumque, optio laudantium neque voluptatem blanditiis? Temporibus maiores quaerat voluptatum provident praesentium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem eos cumque asperiores, soluta non quo? Aperiam error cumque, optio laudantium neque voluptatem blanditiis? Temporibus maiores quaerat voluptatum provident praesentium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem eos cumque asperiores, soluta non quo? Aperiam error cumque, optio laudantium neque voluptatem blanditiis? Temporibus maiores quaerat voluptatum provident praesentium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem eos cumque asperiores, soluta non quo? Aperiam error cumque, optio laudantium neque voluptatem blanditiis? Temporibus maiores quaerat voluptatum provident praesentium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem eos cumque asperiores, soluta non quo? Aperiam error cumque, optio laudantium neque voluptatem blanditiis? Temporibus maiores quaerat voluptatum provident praesentium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem eos cumque asperiores, soluta non quo? Aperiam error cumque, optio laudantium neque voluptatem blanditiis? Temporibus maiores quaerat voluptatum provident praesentium.
                </Paragraph>
            </Main>
            <Left>
                <SuggestionContainer>
                    <Title>Related Posts</Title>
                    <TrendingPost images={images.first} id={"2wdjsn"}/>
                    <TrendingPost images={images.first} id={"2wcjsn"}/>
                    <TrendingPost images={images.first} id={"2w2jsn"}/>
                </SuggestionContainer>
            </Left>
      </BottomContainer>
    </Container>
  )
}

export default Blog