import React from "react"
import {Container, FormControl, InputGroup} from "react-bootstrap";

export const InfoForm = () => {
    return (
        <>
            <h1>Info Form</h1>
            <InputGroup className="mb-3">
                <InputGroup.Text>First and last name:</InputGroup.Text>
                <FormControl aria-label="First and Last name"/>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>Nick Nam:</InputGroup.Text>
                <FormControl aria-label="Nick Name"/>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>Missing Since:</InputGroup.Text>
                <FormControl aria-label="Missing Since:"/>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>Date of Birth</InputGroup.Text>
                <FormControl aria-label="Date Of Birth"/>
            </InputGroup>
            <InputGroup ClassName="mb=3">
                <InputGroup.Text>Race</InputGroup.Text>
                <FormControl aria-label=""/>

            </InputGroup>
                </>
                )
                }
