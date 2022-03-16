import React, {useEffect} from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchAppUserByAppUserId} from "../store/users";
import {fetchAuth} from "../store/auth";
import {ReactComponent as Eagle} from "../images/eagle.svg";
import Button2 from "./shared/components/Button2";
import {ReactComponent as Bear} from "../images/bear5.svg";
import {ReactComponent as Wolf} from "../images/wolf.svg";
import style from "./Home.module.css";
import {Link} from "react-router-dom";


export const ProfilePage = ({match}) => {

    const users = useSelector(state => state.users ? state.users : []);
    const auth = useSelector(state => state.auth ? state.auth : []);
    const dispatch = useDispatch();
    const sideEffects = () => {
        // The dispatch function takes actions as arguments to make changes to the store/redux.
        dispatch(fetchAuth())
        if (auth !== null) {
            dispatch(fetchAppUserByAppUserId(auth.appUserId))
        }

    };

    useEffect(sideEffects, [match.params.appUserId, dispatch]);

    console.log(users)

    const appUser = useSelector(state => (
        state.users
            ? state.users.find(appUser => appUser.appUserId === match.params.appUserId)
            : null
    ));

    useEffect(sideEffects, [auth.appUserId, dispatch]);
    console.log(users)




    return (
        <>
<Container fluid className={style.Background}>
            <Container >
                <Row>
                    {appUser && <>

                    <Col>
                        <h1> Profile Page</h1>
                        <p> <strong>Display Name:</strong>{'  '}{appUser.appUserDisplayName}</p>
                        <p><strong> E-mail:</strong>{'  '}{appUser.appUserEmail}</p>
                        <p> <strong>First Name:</strong>{'  '}{appUser.appUserFirstName}</p>
                        <p> <strong>Last Name:</strong>{'  '}{appUser.appUserLastName}</p>
                        <p> <strong>Your password:</strong></p>
                    </Col>
                    </>

                    }
                </Row>


                <Button>Edit </Button> <Link to="/"
                                         className="btn btn-primary">Close</Link>
            </Container>

            <Container fluid className="mt-5">
                <Row>
                    <Col className="d-flex justify-content-center mt-5 mb-5">
                        <Card className="mt-5 bg-black" style={{width: '18rem'}}>
                            <Eagle/>
                            <Card.Body className="bg-danger">
                                <Card.Title>Eagle</Card.Title>
                                <Card.Text>
                                    Bird's eye view
                                </Card.Text>
                                <Button2/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center mt-5 mb-5">
                        <Card className="mt-5 bg-black" style={{width: '18rem'}}>
                            <Bear/>
                            <Card.Body className="bg-danger">
                                <Card.Title>Bear</Card.Title>
                                <Card.Text>
                                    Prepares for hardships to come.
                                </Card.Text>
                                <Button2/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center mt-5 mb-5">
                        <Card className="mt-5 bg-black" style={{width: '18rem'}}>
                            <Wolf/>
                            <Card.Body className="bg-danger">
                                <Card.Title>Wolf</Card.Title>
                                <Card.Text>
                                    alone he is usually nothing but with a pack...
                                </Card.Text>
                                <Button2/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
</Container>


        </>
    )
}