import React from 'react'
import {Card, Col, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export const MissingWoman = ({woman}) => {

    const {
        womanId,
        womanAliases ,
        womanDateOfDisappearance,
        // womanDateOfBirth,
        // womanEyeColor,
        // womanFavoriteHangoutPlaces,
        womanFirstName ,
        // womanHairColor ,
        // womanHeight,
        // womanHobbiesAndInterests,
        // womanIdentifyingMarks,
        womanLastName ,
        womanLastLocation ,
        // womanLatitude,
        // womanLongitude ,
        womanPhoto1,
        womanTribe ,
        // womanWeight
    } = woman

    return (
        <>
            <Card>
                {/*<Card.Header>Featured</Card.Header>*/}
                <Card.Body>
                    <Card.Title>{womanFirstName} {womanLastName}</Card.Title>
                    <Row>
                        <Col md={2}>
                            <Image fluid roundedCircle src={womanPhoto1} alt={"missing person"}/>
                        </Col>
                        <Col md={10}>
                            <Card.Text>
                                <Row>
                                    <Col md={6} lg={3}>
                                        <h6><u>Date of Disappearance</u></h6>
                                        <p>{womanDateOfDisappearance.toLocaleString('en-US',{year: 'numeric', month: 'numeric', day: 'numeric'})}</p>
                                    </Col>
                                    <Col md={6} lg={3}>
                                        <h6><u>Aliases</u></h6>
                                        <p>{womanAliases}</p>
                                    </Col>
                                    <Col md={6} lg={3}>
                                        <h6><u>Last Seen Location</u></h6>
                                        <p>{womanLastLocation}</p>
                                    </Col>
                                    <Col md={6} lg={3}>
                                        <h6><u>Tribe</u></h6>
                                        <p>{womanTribe}</p>
                                    </Col>
                                </Row>
                                <Link to={`/InfoPage/${womanId}`} state={{ woman: woman }}>
                                    Details
                                </Link>
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}