import React from "react"
import {ReactComponent as Redpalm} from '../images/bloodyHandPrint.svg';
import Mel from '../images/MelanieMarieJames.jpg';
import {Container, Card, Row, Button, Col, Image, Carousel, } from "react-bootstrap";

import style from "./Home.module.css"


export const Home = () => {
    return (
        <>
            <Container fluid className={style.Background}>
            <Container>
                <img src={require("../images/magnifyingGlass.png")}/>
            </Container>
            <Container fluid>
                <Row>
                    <Col className={"p-0"}><Redpalm style={{background: "black"}}/></Col>
                    <Col  className={"text-center col-8"} style={{background: "black"}}><h1 className={"text-white"} style={{background: "black"}}>Welcome To Redpalm</h1></Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className="justify-content-center mt-5">

                    <Col className="d-flex justify-content-center mt-5 mb-5">
                        <Card className="mt-5 mt-5"  style={{width: '18rem'}}>

                            <Card.Body style={{background: "red"}}>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Map with missing person's last known location
                                </Card.Text>
                                <Button variant="primary">Map</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center mt-5 mb-5">
                        <Card className="mt-5 mb-5"  style={{width: '18rem'}}>
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
                    <Col className="d-flex justify-content-center mt-5 mb-5">
                        <Card className="mt-5 mb-5 "  style={{width: '18rem'}}>
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
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Carousel style={{width: '18rem'}}>
                            <Carousel.Item interval={5000} >

                                <img
                                    className="d-block w-100 "
                                    src={Mel}
                                    alt="First slide"

                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img
                                    className="d-block w-100"
                                    src="https://www.namus.gov/api/CaseSets/NamUs/MissingPersons/Cases/39942/Images/77999/Thumbnail"
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://www.namus.gov/api/CaseSets/NamUs/MissingPersons/Cases/39942/Images/77997/Original"
                                    alt="Third slide of missing person"
                                />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Carousel style={{width: '18rem'}}>
                            <Carousel.Item interval={5000} >

                                <img
                                    className="d-block w-100 "
                                    src={Mel}
                                    alt="First slide"

                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img
                                    className="d-block w-100"
                                    src="https://www.namus.gov/api/CaseSets/NamUs/MissingPersons/Cases/39942/Images/77999/Thumbnail"
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://www.namus.gov/api/CaseSets/NamUs/MissingPersons/Cases/39942/Images/77997/Original"
                                    alt="Third slide of missing person"
                                />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Carousel style={{width: '18rem'}}>
                            <Carousel.Item interval={5000} >

                                <img
                                    className="d-block w-100 "
                                    src={Mel}
                                    alt="First slide"

                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img
                                    className="d-block w-100"
                                    src="https://www.namus.gov/api/CaseSets/NamUs/MissingPersons/Cases/39942/Images/77999/Thumbnail"
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://www.namus.gov/api/CaseSets/NamUs/MissingPersons/Cases/39942/Images/77997/Original"
                                    alt="Third slide of missing person"
                                />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Carousel style={{width: '18rem'}}>
                            <Carousel.Item interval={5000} >

                                <img
                                    className="d-block w-100 "
                                    src={Mel}
                                    alt="First slide"

                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img
                                    className="d-block w-100"
                                    src="https://www.namus.gov/api/CaseSets/NamUs/MissingPersons/Cases/39942/Images/77999/Thumbnail"
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://www.namus.gov/api/CaseSets/NamUs/MissingPersons/Cases/39942/Images/77997/Original"
                                    alt="Third slide of missing person"
                                />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            </Container>

        </>
    )
}
