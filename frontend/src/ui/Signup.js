import React from "react";
import {Container, FormControl, Image, InputGroup} from "react-bootstrap";
import flower from "./images/flower.jpg";








export const Signup = () => {
    return(
        <>
<Container className={'mx-auto'}>

    <h1>Please Create A User Profile</h1>

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
</Container>

        </>
    )
}