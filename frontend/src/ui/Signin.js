import React from "react";
import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import {ReactComponent as Redpalm} from '../images/bloodyHandPrint.svg';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import * as Yup from "yup";
import {getAuth} from "../store/auth";
import {httpConfig} from "../utils/http-config";
import {Formik} from "formik";
import jwtDecode from "jwt-decode";
import {DisplayError} from "./shared/Components/DisplayError";


export const Signin = () => {
    const dispatch = useDispatch()

    const validator = Yup.object().shape({
        appUserEmail: Yup.string()
            .email("email must be a valid email")
            .required('email is required'),
        appUserPassword: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least eight characters")
    });

    const SignIn = {
        appUserEmail: "",
        appUserPassword: "",
    };


    const submitSignIn = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/sign-in/", values)
            .then(reply => {
                let {message, type} = reply;
                setStatus({message, type});
                if(reply.status === 200 && reply.headers["authorization"]) {
                    window.localStorage.removeItem("authorization");
                    window.localStorage.setItem("authorization", reply.headers["authorization"]);
                    resetForm();
                    let jwtToken = jwtDecode(reply.headers["authorization"])
                    dispatch(getAuth(jwtToken))
                }
                setStatus({message, type});
            });
    };


return (
    <>
        <Formik onSubmit={submitSignIn} initialValues={SignIn} validationSchema={validator}>
            {
            SignInFormContent
            }
        </Formik>

    </>
)}



 function SignInFormContent (props) {
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
<form onSubmit={handleSubmit}>
            <Container  >
                <Row>
                    <Col className='mt-3'><Redpalm  style={{height:100, width:100, background: "black"}}/> </Col>
                <h1>Log-In</h1>
                    <p> Not a user? Sign-up  <Link to="/sign-up"> here </Link> </p>

                <InputGroup className="mb-3">
                <InputGroup.Text>Email:</InputGroup.Text>
                <FormControl aria-label="email"

                             onChange={handleChange}
                             onBlur={handleBlur}
                             value={values.appUserEmail}
                             name={'appUserEmail'}

                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text> Password:</InputGroup.Text>
                <FormControl aria-label="password"

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
                </Row>
                <Button type={"submit"}> Login</Button>  <Link to="/Map" className="btn btn-primary"> Cancel</Link>
            </Container>
</form>
            {
                status && (<div className={status.type}>{status.message}</div>)
            }

        </>
    )

}