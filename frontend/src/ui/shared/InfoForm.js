import React from "react"
import {Col, Container, FormControl, InputGroup, Row, Image, Button} from "react-bootstrap";
import flower from "../images/flower.jpg"

//<input type="file" id="myFile" 
export const InfoForm = () => {
    return (
        <>
            <Container className="mb-3">
            <h1>Information Form</h1>
                <Image src={flower} alt={flower} height="200px"/>
            </Container>
            <Container>
                <Row>
                    <Col md={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>First and last name:</InputGroup.Text>
                            <FormControl aria-label="First-and-Last-name"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Nick Name:</InputGroup.Text>
                            <FormControl aria-label="Nick-Name"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Missing Since:</InputGroup.Text>
                            <FormControl aria-label="Missing-Since:"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Date of Birth</InputGroup.Text>
                            <FormControl aria-label="Date-Of-Birth"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Age at time of Differences:</InputGroup.Text>
                            <FormControl aria-label="age"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Race</InputGroup.Text>
                            <FormControl aria-label="race"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>More information you think is important:</InputGroup.Text>
                            <FormControl aria-label="info"/>
                        </InputGroup>
                        </Col>
                    <Col md={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Eye Color:</InputGroup.Text>
                            <FormControl aria-label="eyecolor"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Weight and Body Type:</InputGroup.Text>
                            <FormControl aria-label="body type"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Tattoo, and other Identifying marks:</InputGroup.Text>
                            <FormControl aria-label="Tattoo"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Last outfit seen in:</InputGroup.Text>
                            <FormControl aria-label="clothes"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Weight and Body Type:</InputGroup.Text>
                            <FormControl aria-label="body type"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Hight:</InputGroup.Text>
                            <FormControl aria-label="Tattoo"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Hair Color:</InputGroup.Text>
                            <FormControl aria-label="hair color"/>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col mb={2}>
                        <Button variant="primary">Submit</Button>
                        <Button variant="danger">Cancel</Button>
                    </Col>
                </Row>
            </Container>
                </>
                )
                }
