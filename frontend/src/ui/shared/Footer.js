import React from 'react'
import {Col, Nav, Row} from "react-bootstrap";

export function Footer() {
    return (
        <footer className="container-fluid bg-dark p-3 text-center">
            <Row>
                <Col>
                    <a href={'https://www.cindynikolai.us/'}>Cindy</a><br/>
                </Col>
                <Col>
                    <a href={'http://emmanuelpricemars.com/'}>Emmanuel</a>
                </Col>
                <Col>
                    <a href={'http://mariaebarboareyes.com/'}>Maria</a>
                </Col>
                <Col>
                    <a href={'http://www.cp3develops.com/'}>Carlos</a>
                </Col>
                <p className="m-0 text-light">created by</p>
            </Row>

        </footer>
    )
}