import React from 'react'
import {Col, Container, Nav, Navbar} from "react-bootstrap";
import {ReactComponent as Redpalm} from "../../images/bloodyHandPrint.svg";
import {Route} from "react-router";



export function NavBar() {
    return (

        <Navbar expand="lg" className="ps-3 sticky-top">
            <Container fluid>
                <Navbar.Brand href="/"><Col className='mt-3'><Redpalm  style={{height:70, width:70, background: "black"}}/> </Col></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Route render={({history}) => (
                            <>
                        <Nav.Link onClick={() => {
                            history.push(`/`)}}>Home</Nav.Link>
                        <Nav.Link onClick={() => {
                            history.push(`/sign-in`)}}>Sign-in</Nav.Link>
                            <Nav.Link onClick={() => {
                            history.push(`/map`)}}> Map</Nav.Link>
                            </>
                            )}/>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}