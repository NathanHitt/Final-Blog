import React from 'react'
import { Link } from 'gatsby'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

export default function MyNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
                <img src="https://livingtoyourownbeat.com/wp-content/uploads/2020/06/beat-beat-heading.png" height="40" width ="150" alt="Living to Your Own Beat"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav as="ul" className="ml-auto">
                    <Nav.Item as="li">
                        <Link to="/" className="nav-link" activeClassName="active">Home</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link to="/blog" className="nav-link" activeClassName="active">Blog</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link to="/contact" className="nav-link" activeClassName="active">Contact</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link to="#" className="nav-link disabled" activeClassName="active">Sign Up</Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
</Navbar>
    )
}

