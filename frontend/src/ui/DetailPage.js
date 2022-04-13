import React, {useEffect} from "react";
import {Container, Card, Button, Image, Row, Col, InputGroup, FormControl} from "react-bootstrap";
import {Link} from "react-router-dom";
import style from "./Home.module.css"
import {useDispatch, useSelector} from "react-redux";
import {fetchWomanByWomanId} from "../store/women";
import {PostLogic} from "./Posts";
import {PostOutput} from "./Output";
import {fetchPostsByWomanId} from "../store/posts";
import mFpd from "./images/melanieFpd4.png";
import mFpd1 from "./images/melanieFpd1.png";
import mFpd2 from "./images/melanieFpd2.png";
import mFpd3 from "./images/melanieFpd3.png";

import mFpd5 from "./images/melanieFpd5.png";
import mFpd6 from "./images/melanieFpd6.png";
import mFpd7 from "./images/melanieFpd7.png";
import mFpd8 from "./images/melanieFpd8.png";
import mFpd9 from "./images/melanieFpd9.png";
import mFpd10 from "./images/melanieFpd9.png";
import mFpd11 from "./images/melanieFpd9.png";

import sFpd from "./images/stephanieJBrown.png";
import sFpd1 from "./images/stephanieJBrown1.png";
import sFpd2 from "./images/stephanieJBrown2.png";
import sFpd3 from "./images/stephanieJBrown3.png";
import sFpd4 from "./images/stephanieJBrown4.png";
import sFpd5 from "./images/stephanieJBrown5.png";
import sFpd6 from "./images/stephanieJBrown6.png";
import sFpd7 from "./images/stephanieJBrown7.png";
import sFpd8 from "./images/stephanieJBrown8.png";


import melaniePdf from "../pdf/melaniePoliceReport.pdf";





import {MissingWoman} from "./MissingWoman";


import { Document, Page } from 'react-pdf';








export const DetailPage = ({match}) => {
    console.log(match)


    // const clickLike = () => {
    //     httpConfig.post("/apis/post/", {   postAppUserId, postWomanId: match.params.womanId,
    //         postDate:
    //         postText})
    //         .then(reply => {
    //                 if(reply.status === 200) {
    //                     console.log(reply)
    //                     dispatch(getAllTweets())
    //                 }
    //                 console.log(reply)
    //             }
    //         );
    // }



    // Returns the the userPosts store from redux and assigns it to the userPosts variable.
    const dispatch = useDispatch();

    const sideEffects = () => {
        // The dispatch function takes actions as arguments to make changes to the store/redux.
        dispatch(fetchPostsByWomanId(match.params.womanId))
        dispatch(fetchWomanByWomanId(match.params.womanId));
    };

    /**
     * Pass both sideEffects and sideEffectInputs to useEffect.
     * useEffect is what handles rerendering of components when sideEffects resolve.
     * E.g when a network request to an api has completed and there is new data to display on the dom.
     **/
    useEffect(sideEffects, [match.params.womanId, dispatch]);
    const posts = useSelector(state => state.posts ? state.posts : []);
    console.log(posts)

    const woman = useSelector(state => (
        state.women
            ? state.women.find( woman => woman.womanId === match.params.womanId)
            : null
    ));

    const datefunction = (dateparameter) => {
        let myDate = new Date(dateparameter);
        return (myDate.getMonth() + 1) + '/' + myDate.getDate() + '/' + myDate.getFullYear();
    }

    return (
        <>
            <Container fluid className={style.Background}>
                <Container>



                    <Row>
                        {woman && <>
                            <Col>
                                <Image className={" mx-auto"} fluid roundedCircle src={woman.womanPhoto1}/>
                                <Card className={'border border-dark m-2'}>


                                    <div className={style.Info}>
                                        <p><strong>Aliases:</strong>{'  '} {woman.womanAliases}</p>
                                        <p><strong>Date Of Disappearance:</strong>{'  '} {datefunction(woman.womanDateOfDisappearance)}</p>
                                        <p><strong>Date Of Birth:</strong>{'  '}  {datefunction(woman.womanDateOfBirth)}</p>
                                        <p><strong>Eye Color:</strong> {'  '}  {woman.womanEyeColor}</p>
                                        <p><strong>Favorite Hangout Places:</strong> {'  '}  {woman.womanFavoriteHangoutPlaces}</p>
                                        <p><strong>FirstName:</strong>{'  '}  {woman.womanFirstName}</p>
                                        <p><strong>Hair Color:</strong>{'  '}  {woman.womanHairColor}</p>
                                        <p><strong>Height:</strong> {'  '}  {woman.womanHeight}</p>
                                        <p><strong>Hobbies And Interests:</strong>{'  '}  {woman.womanHobbiesAndInterests}</p>
                                        <p><strong>Identifying Marks:</strong> {'  '}  {woman.womanIdentifyingMarks}</p>
                                        <p><strong>Last Location:</strong> {'  '}  {woman.womanLastLocation}</p>
                                        {/*<p>Latitude: {woman.womanLatitude}</p>*/}
                                        {/*<p> Longitude: {woman.womanLongitude}</p>*/}
                                        <p><strong>Tribe:</strong>{'  '}  {woman.womanTribe}</p>
                                        <p><strong>Weight:</strong>{'  '}  {woman.womanWeight}</p>

                                        {
                                            woman.womanFirstName === "Melanie"
                                            &&
                                            <>
                                            <a href={mFpd2} target="_blank">Police report</a>
                                                <br/>
                                            <a href={mFpd3} target="_blank">Police report</a>
                                                <br/>
                                                <a href={mFpd} target="_blank">Police report</a>
                                                <br/>
                                                <a href={mFpd1} target="_blank">Police report</a>
                                                <br/>
                                                <a href={mFpd5} target="_blank">Police report</a>
                                                <br/>
                                                <a href={mFpd6} target="_blank">Police report</a>
                                                <br/>
                                                <a href={mFpd7} target="_blank">Police report</a>
                                                <br/>
                                                <a href={mFpd8} target="_blank">Police report</a>
                                                <br/>
                                                <a href={mFpd9} target="_blank">Police report</a>
                                                <br/>
                                                <a href={mFpd10} target="_blank">Police report</a>
                                                <br/>
                                                <a href={mFpd11} target="_blank">Police report</a>

                                            </>

                                            }
                                            {
                                            woman.womanFirstName === "Stephanie"
                                            &&
                                            <>
                                                <a href={sFpd} target="_blank">Police report</a>
                                                <br/>
                                                <a href={sFpd1} target="_blank">Police report</a>
                                                <br/>
                                                <a href={sFpd2} target="_blank">Police report</a>
                                                <br/>
                                                <a href={sFpd3} target="_blank">Police report</a>
                                                <br/>
                                                <a href={sFpd4} target="_blank">Police report</a>
                                                <br/>
                                                <a href={sFpd5} target="_blank">Police report</a>
                                                <br/>
                                                <a href={sFpd6} target="_blank">Police report</a>
                                                <br/>
                                                <a href={sFpd7} target="_blank">Police report</a>
                                                <br/>
                                                <a href={sFpd8} target="_blank">Police report</a>


                                                </>

                                                }







                                    </div>
                                </Card>
                            </Col>

                        </>}
                    </Row>

                </Container>

                <Container className={style.PostBox}  style={{width: 300, height: 200}}>

                    <h1>POSTS</h1>
                    {posts.map((post,index) => <PostOutput post={post} key={index}/>)}
                </Container>


                <PostLogic postWomanId={woman.womanId} />

                <div className="mt-3 justify-content-center">
                     <Link to="/map"
                           className="btn btn-primary">Close</Link>
                </div>
            </Container>
        </>
    )
}





