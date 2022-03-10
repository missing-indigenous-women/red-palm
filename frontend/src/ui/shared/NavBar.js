import React from 'react'
import {Col, Container, Nav, Navbar} from "react-bootstrap";
import {ReactComponent as Redpalm} from "../../images/bloodyHandPrint.svg";



export function NavBar() {
    return (
        <Navbar bg="dark" expand="lg" className="ps-3">
            <Container fluid>
                <Navbar.Brand href="#home"><Col className='mt-3'><Redpalm  style={{height:70, width:70, background: "black"}}/> </Col></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#link">Sign-out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}