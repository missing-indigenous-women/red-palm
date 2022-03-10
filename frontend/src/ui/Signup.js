import React from "react";
import {Button, Col, Container, FormControl, Image, InputGroup, Row} from "react-bootstrap";
import {Formik} from 'formik'

import style from "./InfosPage.module.css"
import {Link} from "react-router-dom";
import * as Yup from "yup";
import {httpConfig} from "../utils/http-config";
import {DisplayError} from "./shared/Components/DisplayError";
import {FormDebugger} from "./shared/Components/FormDebugger";


export const Signup = (props) => {

    const validator = Yup.object().shape({
        appUserPassword: Yup.string()
            .required("Password Required")
            .min(8, 'Password must have at least 8 characters'),
        appUserDisplayName: Yup.string()
            .required("Display name is required"),
        appUserEmail: Yup.string()
            .email("Please enter a valid Email")
            .required("Email is required"),
        appUserFirstName: Yup.string()
            .required(" First name is needed "),
        appUserLastName: Yup.string()
            .required("Last name is needed"),
        appUserPasswordConfirm: Yup.string()
            .required("Password Confirm is required")
            .min(8, "Password must be at least eight characters"),

    })

    const initialValues = {
        appUserPassword: "",
        appUserDisplayName: "",
        appUserEmail: "",
        appUserFirstName: "",
        appUserLastName: "",
        appUserPasswordConfirm: "",
    };

    const submitSignUp = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/sign-up/", values)
            .then(reply => {
                    let {message, type} = reply;

                    if (reply.status === 200) {
                        resetForm();
                    }
                    setStatus({message, type});
                }
            );
    };


    return (
        <>
            <Container fluid>

                <Formik initialValues={initialValues} onSubmit={submitSignUp} validationSchema={validator}>
                    {

                        SignUpFormContent
                    }
                </Formik>
            </Container>
        </>
    )
}

function SignUpFormContent(props) {
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

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Container>
                    <Row>
                        <Col className='mb-xl-5'>

                            <h1>Please Create A User Profile</h1>
                            <p> Already A User? Log-in <Link to="/Signin"> here </Link></p>

                            <InputGroup className="mb-3">

                                <InputGroup.Text>Password:</InputGroup.Text>
                                <FormControl
                                    aria-label="Password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.appUserPassword}
                                    name={'appUserPassword'}
                                />
                            </InputGroup>
                            <DisplayError errors={errors}
                            touched={touched}
                                          field={"appUserPassword"}
                            />
                            <InputGroup className="mb-3">
                                <InputGroup.Text> Display name:</InputGroup.Text>
                                <FormControl aria-label="display-name"

                                             onChange={handleChange}
                                             onBlur={handleBlur}
                                             value={values.appUserDisplayName}
                                             name={'appUserDisplayName'}

                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text> Email:</InputGroup.Text>
                                <FormControl aria-label="email"

                                             onChange={handleChange}
                                             onBlur={handleBlur}
                                             value={values.appUserEmail}
                                             name={'appUserEmail'}

                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>First Name:</InputGroup.Text>
                                <FormControl aria-label="first-name"

                                             onChange={handleChange}
                                             onBlur={handleBlur}
                                             value={values.appUserFirstName}
                                             name={'appUserFirstName'}



                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text>Last Name:</InputGroup.Text>
                                <FormControl aria-label="last-name"

                                             onChange={handleChange}
                                             onBlur={handleBlur}
                                             value={values.appUserLastName}
                                             name={'appUserLastName'}

                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text>Password Confirm:</InputGroup.Text>
                                <FormControl aria-label="Password-confirm"

                                             onChange={handleChange}
                                             onBlur={handleBlur}
                                             value={values.appUserPasswordConfirm}
                                             name={'appUserPasswordConfirm'}

                                />
                            </InputGroup>

                            <Button type={"submit"}>Submit</Button> <Link to="/Map" className="btn btn-primary">Cancel </Link>
                        </Col>
                    </Row>
                </Container>
            </form>

            {
                status && (<div className={status.type}>{status.message}</div>)
            }
        </>
    )

}