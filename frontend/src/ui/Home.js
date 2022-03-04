import React from "react"
import { ReactComponent as Redpalm } from '../images/bloodyHandPrint.svg';
import {Container, Card, Row, Button, Col} from "react-bootstrap";
import nativeSouthWest from '../images/native.jpg'
import "./Home.css"



export const Home = () => {
    return (
        <>
            <>
                <Container fluid className={"p-0"}>
                    <Row>
                        <Col className={"p-0"}><Redpalm style={{background: "black"}}/></Col>
                        <Col xs={"8"} className={"p-0 text-center"} style={{background: "black"}}><h1 className={"text-white"} style={{background: "black"}}>Welcome To Redpalm</h1></Col>
                    </Row>
                </Container>
            </>
            <>

                <Row style={{backgroundImage:  `url(${nativeSouthWest})`  }}>

                    <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Redpalm/>
                        <Card.Body style={{background:"red"}}>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Redpalm/>
                        <Card.Body style={{background:"red"}}>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                       <Redpalm/>
                        <Card.Body style={{background:"red"}}>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                </Row>

            </>
        </>
    )
}
