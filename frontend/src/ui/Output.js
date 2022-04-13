import React, {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import style from "./Home.module.css"



export const PostOutput = ({post}) => {
    const {
        postId,
        postAppUserId,
        postWomanId,
        postDate,
        postText
    } = post



    return(

        <>




            <div className={style.Poster}>
                    {/*<image src = ""></image>*/}
                    <p> {post.postText}</p>
                </div>




        </>

    )
}