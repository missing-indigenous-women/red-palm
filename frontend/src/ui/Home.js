import React from "react";
import {ReactComponent as Redpalm} from './images/bloodyHandPrint.svg';
import Mel from './images/MelanieMarieJames.jpg';
import {Container, Card, Row, Col,} from "react-bootstrap";

import Gabby from './images/gabbyPetito.png';
import style from "./Home.module.css"
import Alien from './images/alienThrone.jpeg';

import Button1 from "./shared/components/Button1";
import {ReactComponent as Logo1} from './images/reactLogo.svg';
import Map from './images/tribeMap.png';
import Graphs from "./shared/components/Graphs";
import Missing from "./shared/components/Missing";






export const Home = () => {


    return (
        <>

            <div className={style.Background}>
              <Graphs/>
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
               <Missing/>
                <Container  className="d-flex justify-content-center mt-5">
                    <img src={Map} alt='Map' style={{borderRadius: '30px'}} />
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


