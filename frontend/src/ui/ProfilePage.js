import React, {useEffect} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchAppUserByAppUserId} from "../store/users";
import {fetchAuth} from "../store/auth";



export const ProfilePage = () => {

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

    useEffect(sideEffects, [auth.appUserId, dispatch]);
    console.log(users)



    // const {
    //     appUserDisplayName,
    //     appUserEmail,
    //     appUserFirstName,
    //     appUserHash,
    //     appUserLastName,
    //     appUserAvatarUrl,
    // } = appUser

    return(
        <>
        <Container>
            <Row>
                <Col>
            <h1> Profile Page</h1>
                    <p> Display Name:</p>
                    <p> E-mail:</p>
                    <p> First Name:</p>
                    <p> Last Name:</p>
                    <p> Your password:</p>
                </Col>
            </Row>
            <Button> </Button> <Button> close</Button>
        </Container>


        </>
    )
}