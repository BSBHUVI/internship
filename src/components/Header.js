import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet } from "react-router-dom"

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" style={{height:"60px"}}>
                <Container>
                    <NavLink to="/Navbar/Home" className="text-decoration-none text-light mx-2">Home</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/Navbar/Register" className="text-decoration-none text-light mx-2">Register</NavLink>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    )
}

export default Header