import React, {useEffect} from "react"
import {ReactComponent as Redpalm} from '../images/bloodyHandPrint.svg';
import {ReactComponent as Bear} from '../images/bear5.svg';
import {ReactComponent as Wolf} from '../images/wolf.svg';
import {ReactComponent as Eagle} from "../images/eagle.svg";
import Mel from '../images/MelanieMarieJames.jpg';
import {Container, Card, Row, Button, Col, Image, Carousel, } from "react-bootstrap";
import Graph from '../images/graph.png';
import Gabby from '../images/gabbyPetito.png';
import Tribes from '../images/tribeMap.png';
import style from "./Home.module.css"

/*import {useDispatch, useSelector} from "react-redux";
import {fetchAllWomen} from "../store/women"; */


export const Home = () => {
  /*  // returns the users store from Redux and assigns it to the users variable
    const women = useSelector(state => state.women ? state.women : []);

    // assigns useDispatch reference to the dispatch variable for later use.
    const dispatch = useDispatch();

    // Define the side effects that will occur in the application.
    // E.G code that handles dispatches to redux, API requests, or timers.
    function sideEffects() {
        // The dispatch function takes actions as arguments to make changes to the store/redux.
        dispatch(fetchAllWomen())
    }

    /**
     * Pass both sideEffects and sideEffectInputs to useEffect.
     * useEffect is what handles rerendering of components when sideEffects resolve.
     * E.g when a network request to an api has completed and there is new data to display on the dom.

    useEffect(sideEffects, [dispatch])*/
    return (
        <>
            <Container fluid className={style.Background}>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center mt-5 mb-5">
                        <Card className="mt-5 mt-5"  style={{width: '36rem'}}>
                            <Card.Img variant="top" src={Graph}/>
                            <Card.Body>
                                <Card.Title> Missing? Murdered? lost? Alive? </Card.Title>
                                <Card.Text>
                                    This is the Justice Department's unsettling graph of untold stories.
                                    A graph that doesn't get the attention it deserves and lacking data from state,
                                    county, and tribal governments. Due to these facts the reality of the trend is
                                    higher than what you see here. Those that know about this data have started a movement
                                    called #MMIW which stands for Missing Murdered Indigenous Women.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center mt-5 mb-5">
                        <Card className="mt-5 mt-5"  style={{width: '36rem'}}>
                            <Card.Img variant="top" src={Gabby}/>
                            <Card.Body>
                                <Card.Title>Gabby Petito</Card.Title>
                                <Card.Text>
                                    In August of 2021 Gabby went missing. September 19, 2021 is the date human remains
                                    consistent with her description was found. The disappearance of Gabby sparked a
                                    national interest and an unofficial campaign to find Gabby. How was she found so
                                    quick? Maybe, it was partly due to the power of the Interwebs and People with a
                                    thirst for real life crime and drama, with skills to become what is known as an
                                    Internet Sleuth.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col className={"p-0"}><Redpalm style={{background: "black"}}/></Col>
                    <Col  className={"text-center col-8"} style={{background: "black"}}><h1 className={"text-white"} style={{background: "black"}}>Welcome To Redpalm</h1><br/>
                     A community where family, friends, and curious web sleuths can come together to share their stories.
                        Most importantly its a place where new clues can be shared, theories can examined, and
                        an interactive website were where
                    </Col>
                </Row>
            </Container>
            <Container>

                <Row>
                     <Col className="d-flex justify-content-center mt-5 mb-5">
                        <Carousel style={{width: '18rem'}}>
                            <Carousel.Item interval={5000} >

                                <img
                                    className="d-block w-100 "
                                    src=""
                                    alt="First slide"

                                />
                                <Carousel.Caption>
                                    <h3 className="text-danger">MelanieMarieJames</h3>
                                    <p className="text-danger">Missing since 1599.</p>
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
                    <Col className="d-flex justify-content-center mt-5 mb-5">
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
                    <Col className="d-flex justify-content-center mt-5 mb-5">
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
                    <Col className="d-flex justify-content-center mt-5 mb-5">
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
                    <Col  className="d-flex justify-content-center mt-5 mb-5">
                        <Card className="mt-5 mt-5"  style={{width: '18rem'}}>
                            <Card.Img variant="top" src={Graph}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Map with missing person's last known location
                                </Card.Text>
                                <Button variant="primary">Map</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  className="d-flex justify-content-center mt-5 mb-5">
                        <Card className="mt-5 mt-5"  style={{width: '18rem'}}>
                            <Eagle/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Map with missing person's last known location
                                </Card.Text>
                                <Button variant="primary">Map</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  className="d-flex justify-content-center mt-5 mb-5">
                        <Card className="mt-5 mt-5"  style={{width: '18rem'}}>
                            <Bear/>
                            <Card.Body>
                                <Card.Title>The bear</Card.Title>
                                <Card.Text>
                                    Map with missing person's last known location
                                </Card.Text>
                                <Button variant="primary">Map</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  className="d-flex justify-content-center mt-5 mb-5">
                        <Card className="mt-5 mt-5"  style={{width: '18rem'}}>
                            <Wolf/>
                            <Card.Body>
                                <Card.Title>Wolf</Card.Title>
                                <Card.Text>
                                    alone he is usually nothing but with a pack...
                                </Card.Text>
                                <Button variant="primary">Map</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </Container>

        </>
    )
}
