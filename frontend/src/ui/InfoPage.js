import React, {useEffect} from "react";
import {Container, Card, Button, Image, Row, Col} from "react-bootstrap";
// import style from "./InfosPage.module.css";
import {Link} from "react-router-dom";
import style from "./Home.module.css"
import {useDispatch, useSelector} from "react-redux";
import {fetchWomanByWomanId} from "../store/women";

export const InfoPage = ({match}) => {

    // Returns the the userPosts store from redux and assigns it to the userPosts variable.
    const dispatch = useDispatch();

    const sideEffects = () => {
        // The dispatch function takes actions as arguments to make changes to the store/redux.
        dispatch(fetchWomanByWomanId(match.params.womanId));
    };

    /**
     * Pass both sideEffects and sideEffectInputs to useEffect.
     * useEffect is what handles rerendering of components when sideEffects resolve.
     * E.g when a network request to an api has completed and there is new data to display on the dom.
     **/
    useEffect(sideEffects, [match.params.womanId, dispatch]);

    const woman = useSelector(state => (
        state.women
            ? state.women.find( woman => woman.womanId === match.params.womanId)
            : null
    ));

    return (
        <>
            <Container fluid className={style.Background}>
                <Container>
                    <Row>
                        {woman && <>
                            <Col>
                                <Image className={" mx-auto"} fluid roundedCircle src={woman.womanPhoto1}/>
                                <Card className={'border border-dark m-2'}>

                                    <Card.Title></Card.Title>
                                    <div className={style.Info}>
                                        <p>Aliases: {woman.womanAliases}</p>
                                        <p>DateOfDisappearance: {woman.womanDateOfDisappearance}</p>
                                        <p>DateOfBirth: {woman.womanDateOfBirth}</p>
                                        <p>EyeColor:m {woman.womanEyeColor}</p>
                                        <p>FavoriteHangoutPlaces: {woman.womanFavoriteHangoutPlaces}</p>
                                        <p>FirstName: {woman.womanFirstName}</p>
                                        <p>HairColor: {woman.womanHairColor}</p>
                                        <p>Height: {woman.womanHeight}</p>
                                        <p>HobbiesAndInterests: {woman.womanHobbiesAndInterests}</p>
                                        <p>IdentifyingMarks: {woman.womanIdentifyingMarks}</p>
                                        <p>LastName: {woman.womanLastName}</p>
                                        <p>LastLocation: {woman.womanLastLocation}</p>
                                        <p>Latitude: {woman.womanLatitude}</p>
                                        <p> Longitude: {woman.womanLongitude}</p>
                                        <p>Tribe: {woman.womanTribe}</p>
                                        <p>Weight: {woman.womanWeight}</p>
                                    </div>
                                </Card>
                            </Col>

                        </>}
                    </Row>
                </Container>

                <Container className={'border border-dark mt-3'} style={{width: 300, height: 200}}>
                    <Row>
                        <Col>
                            <div className={" border-dark border-bottom "}>
                                <h1>POSTS</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container style={{width: 300}}>
                    <Row>
                        <Col>
                            <Card className={'border border-dark mt-3'}>
                                <Card.Title>NEW POST</Card.Title>
                                <textarea> </textarea>
                                <Button>SUBMIT NEW POST</Button>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <div className="mt-3 justify-content-center">
                    <Button className={'m-2'}>Submit new missing person</Button>{' '} <Link to="/map"
                                                                                      className="btn btn-primary">Close</Link>
                </div>
            </Container>
        </>
    )
}