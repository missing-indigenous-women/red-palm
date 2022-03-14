import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";


export const ProfilePage = ({appUser}) => {

    const {
        appUserDisplayName,
        appUserEmail,
        appUserFirstName,
        appUserHash,
        appUserLastName,
    } = appUser

    return(
        <>
        <Container>
            <Row>
                <Col>
            <h1> Profile Page</h1>
                    <p> Display Name:</p>
                    <p> E-mail:</p>
                    <p> First Name:</p>
                    <p> Last Name:</p>
                    <p> Your password:</p>
                </Col>
            </Row>
            <Button> Edit</Button> <Button> close</Button>
        </Container>


        </>
    )
}