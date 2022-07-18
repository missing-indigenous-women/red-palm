import Graph from "../../images/graph.png";


import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import Gabby from "../../images/gabbyPetito.png";

const Graphs = () => {
    return (
        <div>
            <Container>
                <Row style={{padding: '3rem'}}>
                    <Col className="d-flex justify-content-center mt-5 mb-5">
                        <Card className="mt-5" style={{width: '36rem', borderRadius:'30px'}}>
                            <Card.Img variant="top" src={Graph} style={{borderRadius: '30px'}}/>
                            <Card.Body>
                                <Card.Title> Missing? Murdered? lost? Alive? Traffic?</Card.Title>
                                <Card.Text>
                                    This is the Justice Department's unsettling graph of untold stories.
                                    A graph that doesn't get the attention it deserves and lacking data from state,
                                    county, and tribal governments. Due to these facts the reality of the trend is
                                    higher than what you see here. Those that know about this data have started a
                                    movement
                                    called <a href={"https://www.youtube.com/watch?v=ib0GDAPeymo"}>#MMIW</a> #MMIW
                                    which stands for Missing Murdered Indigenous Women.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center mt-5 mb-5">
                        <Card className="mt-5 mt-5" style={{width: '36rem'}}>
                            <Card.Img variant="top" src={Gabby}/>
                            <Card.Body>
                                <Card.Title>Gabby Petito</Card.Title>
                                <Card.Text>
                                    In August of 2021 Gabby went missing. September 19, 2021 is the date human
                                    remains
                                    consistent with her description was found. The disappearance of Gabby sparked a
                                    national interest and an unofficial campaign was underway. How was
                                    she found so
                                    quick? Maybe, it was partly due to the power of the interWebs and people with a
                                    thirst for real life crime and drama, with skills to become what is known as an
                                    Internet Sleuth.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Graphs;