import React, {useEffect, useState} from 'react'
import {Col, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {ReactComponent as Redpalm} from "../images/bloodyHandPrint.svg";
import {Route} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../../store/auth";
import {Link} from "react-router-dom";
import {SignOutComponent} from "../Sign-out";



export function NavBar() {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const effects = () => {
        dispatch(fetchAuth());
    };
    const inputs = [];
    useEffect(effects, inputs);
    // const [show, setShow] = useState(false);



    // const isModalOpen = ()=> {
    //     if(!auth) {
    //         return !auth
    //     } else if(show === true && auth  ) {
    //         return true
    //     }
    // }


    return (

        <Navbar expand="lg" className="ps-3 sticky-top">
            <Container fluid>
                <Navbar.Brand href="/"><Col className='mt-3'><Redpalm  style={{height:70, width:70, background: "black"}}/></Col></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ms-auto">

                        <Route render={({history}) => (
                            <>
                                {auth !== null && (
                                    <NavDropdown className="nav-link navbar-username" title={auth?.appUserDisplayName ?? ""} >
                                        <div className="dropdown-item">
                                            <Link to={`/profile-page/${auth?.appUserId}`} className="btn btn-outline-dark">
                                                profile
                                            </Link>
                                        </div>
                                        <SignOutComponent />
                                        <Link to="/InfoForm"
                                              className="btn btn-outline-dark"> Submit New Info </Link>
                                    </NavDropdown>
                                )}
                                <Nav.Link onClick={() => {
                                    history.push(`/`)}}>Home</Nav.Link>

                                <Nav.Link onClick={() => {
                                    history.push(`/MissingWoman`)}}>MissingWoman</Nav.Link>
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






