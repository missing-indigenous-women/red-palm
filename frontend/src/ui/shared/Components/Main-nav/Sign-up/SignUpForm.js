import React from 'react';
import {httpConfig} from "../../../utils/http-config";
import * as Yup from "yup";
import {Formik} from "formik";

import {SignUpFormContent} from "./SignUpFormContent";

export const SignUpForm = () => {
    const signUp = {
        appUserPassword: "",
        appUserDisplayName: "",
        appUserEmail: "",
        appUserFirstName: "",
        appUserLastName: "",
        appUserPasswordConfirm: "",
    };

    const validator = Yup.object().shape({
        appUserPassword: Yup.string()
            .required("Password Required")
            .min(8,'Password must have at least 8 characters'),
        appUserDisplayName: Yup.string()
            .required("Display name is required"),
        appUserEmail: Yup.string()
            .email("Please enter a valid Email")
            .required( "Email is required"),
        appUserFirstName: Yup.string()
            .required (" First name is needed " ),
        appUserLastName: Yup.string()
            .required("Last name is needed"),
        appUserPasswordConfirm: Yup.string()
            .required("Password Confirm is required")
            .min(8, "Password must be at least eight characters"),

    });

    const submitSignUp = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/sign-up/", values)
            .then(reply => {
                    let {message, type} = reply;

                    if(reply.status === 200) {
                        resetForm();
                    }
                    setStatus({message, type});
                }
            );
    };


    return (

        <Formik
            initialValues={signUp}
            onSubmit={submitSignUp}
            validationSchema={validator}
        >
            {SignUpFormContent}
        </Formik>

    )
};
