import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import Mel from "../../images/MelanieMarieJames.jpg";
import Button1 from "./Button1";

const Missing = () => {
    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center mt-5">
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={Mel}/>
                        <Card.Body className="bg-danger">
                            <Card.Title>Case of the Week</Card.Title>
                            <Card.Text>
                                Melanie Marie james
                            </Card.Text>
                            <Button1/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Missing;