import React from "react";
import {Container, Card, Button, Image, Row, Col} from "react-bootstrap";
import "./InfosPage.css"





export const InfoPage = () => {
   // width: ${(Dimensions.get('window').width)}px;
    return (
        <>
            <Container style={{width: 400}} >
                <Row>
                    <Col>

                <Image className={" mx-auto"} fluid roundedCircle src="https://via.placeholder.com/150"></Image>
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
            <Container className={'border border-dark mt-3'} style={{width: 400, height: 200}}>
                <Row>
                    <Col>
                        <div className={" border-dark border-bottom container-fluid"  } >
                        <h1>POSTS</h1>
                        </div>

                    </Col>
                </Row>
            </Container>

<Container style={{width: 400}} >
    <Row>
        <Col>
            <Card className={'border border-dark mt-3'}>
    <Card.Title>NEW POST</Card.Title>
    <textarea> </textarea>
    <Button>SUBMIT NEW POST</Button>
</Card>
                <div className="mt-3" >
                <Button className={'m-2'}>Submit new info</Button><Button>Close</Button>
                </div>
        </Col>
    </Row>
</Container>

        </>
    )
}