import React from "react";
import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import {ReactComponent as Redpalm} from '../images/bloodyHandPrint.svg';
import {Link} from "react-router-dom";



export const Signin = ( ) => {

    return(
        <>

            <Container  >
                <Row>
                    <Col className='mt-3'><Redpalm  style={{height:100, width:100, background: "black"}}/> </Col>
                <h1>Log-In</h1>
                    <p> Not a user? Sign-up  <Link to="/Signup"> here </Link> </p>

                <InputGroup className="mb-3">
                <InputGroup.Text>Email:</InputGroup.Text>
                <FormControl aria-label="First-and-Last-name"/>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text> Password:</InputGroup.Text>
                <FormControl aria-label="Nick-Name"/>
            </InputGroup>
                </Row>
                <Button> Login</Button>  <Link to="/Map" className="btn btn-primary"> Cancel</Link>
            </Container>


        </>
    )

}