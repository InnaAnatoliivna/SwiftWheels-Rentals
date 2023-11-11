import React from 'react'
import Container from '../Container/Container'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <Container>
            <p>Swift Wheels Rentals</p>
            <nav>
                <NavLink to='/'>Home Page</NavLink>
                <NavLink to='/catalog'>Catalog Page</NavLink>
                <NavLink to='/favorites'>Favorites Page</NavLink>
            </nav>
        </Container>
    )
}

export default Header