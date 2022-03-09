import React, {useEffect} from "react";
import {Container, Card, Button, Image, Row, Col} from "react-bootstrap";
// import style from "./InfosPage.module.css";
// import {useDispatch, useSelector} from "react-redux";
// import {fetchAllWomen} from "../store/women";
import {Link} from "react-router-dom";
import style from "./Home.module.css"


export const InfoPage = () => {






    return (



        <>
<Container fluid className={style.Background}>
            <Container>

               <Row>
                    <Col>


                <Image className={" mx-auto"} fluid roundedCircle src="https://via.placeholder.com/150"/>
                <Card className={'border border-dark m-2'}>

                    <Card.Title > name:</Card.Title>
                    <div className={'m-2'}>
                    <p>Aliases:</p>
                    <p>DateOfDisappearance:</p>
                    <p>DateOfBirth:</p>
                    <p>EyeColor:</p>
                    <p>FavoriteHangoutPlaces:</p>
                    <p>FirstName:</p>
                    <p>HairColor:</p>
                    <p>Height:</p>
                    <p>HobbiesAndInterests:</p>
                    <p>IdentifyingMarks:</p>
                    <p>LastName:</p>
                    <p>LastLocation:</p>
                    <p>Latitude:</p>
                    <p> Longitude:</p>
                    <p>Photo1:</p>
                    <p>Tribe:</p>
                    <p>Weight:</p>
                    </div>
                </Card>
                    </Col>
               </Row>
            </Container>

            <Container className={'border border-dark mt-3'} style={{width: 300, height: 200}}>
                <Row>
                    <Col>
                        <div className={" border-dark border-bottom "  } >
                        <h1>POSTS</h1>
                        </div>

                    </Col>
                </Row>
            </Container>

<Container style={{width: 300}} >
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
    <div className="mt-3  justify-content-center" >
        <Button className={'m-2'}>Submit new missing person</Button><Link to="/Map" className="btn btn-primary">Close</Link>

    </div>

</Container>
        </>
    )
}