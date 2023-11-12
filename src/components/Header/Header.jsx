import React from 'react'
import Container from '../Container/Container'
// import { NavLink } from 'react-router-dom'
import { LinkLogo, LinkStyled, Section, Wrapper } from './Header.styled'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Section>
            <Container>
                <Wrapper>
                    <p><LinkLogo to='/'>SwiftWheels Rentals</LinkLogo></p>
                    <nav>
                        {/* <LinkStyled to='/'>Home Page</LinkStyled> */}
                        <LinkStyled to='/catalog'>Catalog</LinkStyled>
                        <LinkStyled to='/favorites'>Favorites</LinkStyled>
                    </nav>
                </Wrapper>
            </Container>
        </Section>
    )
}

export default Header