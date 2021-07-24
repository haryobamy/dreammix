import React from 'react'
import { Nav, NavLink, NavIcon, Bars, Cart } from './NavbarElements'

const Navbar = ({ toggle, cartToggle }) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    Cakes
                </NavLink>
                <NavIcon >
                    <p>Menu</p>
                    <Bars onClick={toggle} />
                    <p>Cart</p>
                    <Cart onClick={cartToggle} />
                </NavIcon>

            </Nav>
        </>
    )
}

export default Navbar
