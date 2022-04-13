import React from "react";
import {ReactComponent as Redpalm} from '../images/bloodyHandPrint.svg';
import Mel from '../images/MelanieMarieJames.jpg';
import {Container, Card, Row, Col,} from "react-bootstrap";
import Graph from '../images/graph.png';
import Gabby from '../images/gabbyPetito.png';
import style from "./Home.module.css"
import Button1 from "./shared/components/Button1";
import {ReactComponent as Logo1} from '../images/reactLogo.svg';






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
            <div className={style.Background}>
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center mt-5 mb-5">
                            <Card className="mt-5" style={{width: '36rem'}}>
                                <Card.Img variant="top" src={Graph}/>
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
                <Container fluid>
                    <Row className="d-flex justify-content-center">

                        <Col className={"text-center col-8"} style={{background: "black"}}><Redpalm></Redpalm><h1
                            className={"text-white"} style={{background: "black"}}>Welcome To Redpalm</h1><br/>
                            <p className={"text-center text-white"}>
                                A community where family, friends, and curious web sleuths can come together to share
                                their stories.
                                Most importantly its a place where new clues can be shared, theories can be examined, and
                                families can update the users of the app to collectively examine new data.

                                The goal of this app is to combine data from the Justice's Department NAMUS missing
                                person data base
                                and the New Mexico Department of Public Safety data base into one easy to use resource.
                                Our hope is that the
                                information passed here keeps the stories of our lost girls and women in the spot light
                                and hopefully solve these
                                mysteries.

                                If you wanna help please sign in and choose a profile avatar and take a look at our case
                                of the week. After
                                reviewing the case ONLY post a question, observation, or theory if you so choose and
                                remember that this is real
                                life so be respectful. All data shown is publicly accessible information, for instance
                                you can do what is known as
                                a FOIA request (Freedom of Information Act) for police reports on cases that have gone
                                cold at your local police station.
                                That police report contains a wealth of data that can be used to a web sleuth's (you)
                                advantage. So tear that data apart,
                                examine it, and you just might find something someone missed. Good luck and thank you
                                for your interest.


                            </p>
                        </Col>
                    </Row>
                </Container>
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



                <Container fluid className="mt-5">
                    <Row>
                        <Col className="d-flex justify-content-center mt-5">
                            <Logo1/>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}


