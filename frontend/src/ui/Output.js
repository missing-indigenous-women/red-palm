import React, {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";



export const PostOutput = () => {


    return(

        <>





    <Container className={'border border-dark mt-3'} style={{width: 300, height: 200}}>
        <Row>
            <Col>

                <div className={" border-dark border-bottom "}>
                    <h1>POSTS</h1>
                    {/*<p> {post.postText}</p>*/}
                </div>

            </Col>
        </Row>
    </Container>
        </>

    )
}