import styled from 'styled-components'
import SEARCH from "../assets/search.svg"
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    height: 80px;
    max-width: 1920px;
    margin: 0 auto;
    background-color: #f5f5f5;
    color: #000;
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

const Logo = styled.div`
    font-size: 2rem;
    font-weight: 500;
    font-style: italic;
`

const Center = styled.div`
    flex: 1;
    height: 100%;
    margin: 0 1rem;
    display: flex;
    align-items: center;
    a{
        height: 100%;
    }
`

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 3rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    &:hover {
        background-color: #000;
        color: #f5f5f5;
    }
`

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
`

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #000;
    cursor: pointer;
`

const Search = styled.img`
    width: 20px;
    height: 20px;
`




function Navbar() {
  return (
    <Container>
        <LogoContainer>
            <Link to="/">
                <Logo>Vital Verse.</Logo>
            </Link>
        </LogoContainer>
        <Center>
            <Link to="/">
                <Item>Home</Item>
            </Link>
            <Link to="/about">
                <Item>About</Item>
            </Link>
            <Link to="/contact">
                <Item>Contact Us</Item>
            </Link>
        </Center>
        <Right>
            <SearchContainer>
                <Search src={SEARCH} />
            </SearchContainer>
        </Right>
    </Container>
  )
}

export default Navbar