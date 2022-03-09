import React from "react";
import {Button, Col, Container, FormControl, Image, InputGroup, Row} from "react-bootstrap";

 import style from "./InfosPage.module.css"
import {Link} from "react-router-dom";







export const Signup = () => {
    return(
        <>
            <Container fluid >
<Container  >
    <Row>
        <Col className='mb-xl-5'>

    <h1>Please Create A User Profile</h1>
            <p> Already A User? Log-in  <Link to="/Signin"> here </Link> </p>

            <InputGroup className="mb-3">
                <InputGroup.Text>Password:</InputGroup.Text>
                <FormControl aria-label="First-and-Last-name"/>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text> Display name:</InputGroup.Text>
                <FormControl aria-label="Nick-Name"/>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text> Email:</InputGroup.Text>
                <FormControl aria-label="Nick-Name"/>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>First Name:</InputGroup.Text>
                <FormControl aria-label="Nick-Name"/>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text>Last Name:</InputGroup.Text>
                <FormControl aria-label="Nick-Name"/>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text>Password Confirm:</InputGroup.Text>
                <FormControl aria-label="Nick-Name"/>
            </InputGroup>

            <Button>Submit</Button>  <Link to="/Map" className="btn btn-primary">Cancel </Link>
        </Col>
    </Row>
</Container>
            </Container>
        </>
    )
}