import React from 'react'
import {Col, Nav, Row} from "react-bootstrap";
import {ReactComponent as Logo} from '../images/reactLogo.svg';

export function Footer() {
    return (
        <footer className="container-fluid bg-dark p-3 text-center">
            <Row>
                <Col>
                    <a href={'https://www.cp3develops.com/'}>Carlos</a><br/>

                </Col>
                <Col>
                    <a href={'https://www.cindynikolai.us/'}>Cindy </a>
                </Col>
                <Col>
                    <p className="m-0 text-light">created by</p>
                    <p className="m-0 text-light">2022</p>
                </Col>
                <Col>
                    <a href={'https://mariaebarboareyes.com/'}>Maria</a>
                </Col>
                <Col>
                    <a href={'https://emmanuelpricemars.com/'}>Emmanuel </a>
                </Col>
            </Row>
        </footer>
    )
}