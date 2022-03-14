import React, {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";



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




            <div className={" border-dark border-bottom "}>

                    <p> {post.postText}</p>
                </div>




        </>

    )
}