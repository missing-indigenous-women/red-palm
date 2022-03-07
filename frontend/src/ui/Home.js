import React from "react"
import {ReactComponent as Redpalm} from '../images/bloodyHandPrint.svg';
import {Container, Card, Row, Button, Col, Image,} from "react-bootstrap";

import style from "./Home.module.css"


export const Home = () => {
    return (
        <>
            <Container fluid className={style.Background}>
            <Container>
                <Image src="native.jpg" className={style.MagnifyingGLass}/>
            </Container>
            <Container fluid>
                <Row>
                    <Col className={"p-0"}><Redpalm style={{background: "black"}}/></Col>
                    <Col  className={"text-center"} style={{background: "black"}}><h1 className={"text-white"} style={{background: "black"}}>Welcome To Redpalm</h1></Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className="justify-content-md-between col-lg  p-5">

                    <Col lg={4}>
                        <Card  style={{width: '18rem'}}>
                            <Redpalm style={{background: "black"}}/>
                            <Card.Body style={{background: "red"}}>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Map with missing person's last known location
                                </Card.Text>
                                <Button variant="primary">Map</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card  style={{width: '18rem'}}>
                            <Redpalm style={{background: "black"}}/>
                            <Card.Body style={{background: "red"}}>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Missing person's case info
                                </Card.Text>
                                <Button variant="primary">Info</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card  style={{width: '18rem'}}>
                            <Redpalm style={{background: "black"}}/>
                            <Card.Body style={{background: "red"}}>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    New information that you or anyone looking into the case might have
                                </Card.Text>
                                <Button variant="primary">Post info</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
            </Container>
        </>
    )
}
