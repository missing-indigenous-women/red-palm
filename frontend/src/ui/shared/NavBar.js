import React from 'react'
import {Container, Nav, Navbar } from "react-bootstrap";



export function NavBar() {
    return (
        <Navbar bg="dark" expand="lg" className="ps-3">
            <Container fluid>
                <Navbar.Brand href="#home">Title</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#link">Link1</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}