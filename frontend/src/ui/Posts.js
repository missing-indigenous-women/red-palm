import {Button, Card, Col, Container, FormControl, Row} from "react-bootstrap";
import React from "react";
import {httpConfig} from "../utils/http-config";
import {Formik} from "formik";
import * as Yup from "yup";
import {FormDebugger} from "./shared/Components/FormDebugger";



export const PostLogic = (props) => {

    const validator = Yup.object().shape({
        postText : Yup.string()
            .required()
        .max(1000, 'Post exceeds permitted number of characters '),

    })


    const initialValues = {
        postAppUserId: "",
        postWomanId: "",
        postDate: "",
        postText: ""
    };

    const submitPost = (values, {resetForm, setStatus}) => {
        console.log('made it here')
        httpConfig.post("/apis/post/", values)
            .then(reply => {
                    let {message, type} = reply;

                    if (reply.status === 200) {
                        resetForm();
                    }
                    setStatus({message, type});
                }
            );
    };

    return(
        <>

            <Container fluid>

                <Formik initialValues={initialValues} onSubmit={submitPost} validationSchema={validator}>
                    {

                        posting
                    }
                </Formik>
            </Container>

        </>
    )



}
function posting (props){
    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;

    return(
        <>
            <Container style={{width: 300}}>

                <Row>
                    <Col>


                        <form onSubmit={handleSubmit} >
                            <Card className={'border border-dark mt-3'} >
                                <Card.Title>NEW POST</Card.Title>
                                <textarea aria-label="text-area"
                                          onBlur={handleBlur}
                                          onChange={handleChange}
                                          value={values.postText}
                                          name='postText' >  </textarea>

                                <Button type={"submit"}>SUBMIT NEW POST</Button>
                            </Card>
                        </form>
                        {/*<FormDebugger {...props} />*/}
                    </Col>
                </Row>
            </Container>


        </>
    )




}
