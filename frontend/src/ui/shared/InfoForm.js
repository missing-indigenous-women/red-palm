import {Formik} from "formik";
import React from "react"
import Form from "react-bootstrap/Form";
import {Col, Container, Row, Image, Button} from "react-bootstrap";
import flower from "../images/flower.jpg"
import * as Yup from 'yup'
import moment from 'moment'
import {httpConfig} from "../../utils/http-config";
import {Control} from "mapbox-gl";
//<input type="file" id="myFile" 
export const InfoForm = () => {


    const validator = Yup.object().shape({
        womanAliases: Yup.string()
            .required()
            .max(40, "Woman Aliases cant exceed 4o characters"),
        womanDateOfDisappearance: Yup.date()
            .required("Date Of disappearance is required")
            .transform(value => {
                return value ? moment(value).toDate() : value;
            }),
        womanDateOfBirth: Yup.date()
            .required("Date of Birth is required")
            .transform(value => {
                return value ? moment(value).toDate() : value;
            }),
        womanEyeColor: Yup.string()
            .required("Eye color required")
            .max(40, "Eye color can't exceed 40 characters"),
        womanFavoriteHangoutPlaces: Yup.string()
            .required("Eye color required")
            .max(150, "Favorite hangout places can't exceed 150 characters."),
        womanFirstName: Yup.string()
            .required("First Name required")
            .max(40, "First Name can't exceed 40 characters."),
        womanHairColor: Yup.string()
            .required("Hair Color required")
            .max(40, "Hair Color can't exceed 40 characters."),
        womanHeight: Yup.string()
            .required("Height is required")
            .max(25, "Height cant exceed 25 characters."),
        womanHobbiesAndInterests: Yup.string()
            .required("Hobbies and Interests")
            .max(150, "Hobbies and Interests can't exceed 25 characters."),
        womanIdentifyingMarks: Yup.string()
            .required("Identifying Marks")
            .max(150, "Identifying Marks cannot exceed 150 characters."),
        womanLastName: Yup.string()
            .required("Last Name")
            .max(40, "Last Name cannot exceed 40 characters"),
        womanLastLocation: Yup.string()
            .required("Last Location seen")
            .max(60, "Last Location seen cannot exceed 60 characters"),
        womanPhoto1: Yup.string()
            .required()
            .max(), womanTribe: Yup.string()
            .required("Tribe Name")
            .max(150, "Tribe name cannot be over 150 characters"),
        womanWeight: Yup.number()
            .required("Weight")
            .max(1000, "Max number is 1000"),

    })
    const initialValues = {
        womanAliases: "",
        womanDateOfDisappearance: "",
        womanDateOfBirth: "",
        womanEyeColor: "",
        womanFavoriteHangoutPlaces: "",
        womanFirstName: "",
        womanHairColor: "",
        womanHeight: "",
        womanHobbiesAndInterests: "",
        womanIdentifyingMarks: "",
        womanLastName: "",
        womanLastLocation: "",
        womanLatitude: "",
        womanLongitude: "",
        womanPhoto1: "",
        womanTribe: "",
        womanWeight: "",

    };
    const submitMissingPersonInfo = (values, {resetForm, setStatus}) => {
        console.log("here")
        const womanLatitude = 53.77
        const womanLongitude = -108.77
        const womanPhoto1 = 'https'
        const woman = {womanLatitude, womanLongitude, womanPhoto1, ...values}

        httpConfig.post("/apis/woman/", woman)
            .then(reply => {
                let {message, type} = reply;

                if (reply.status === 200) {
                    resetForm();
                }
                setStatus({message, type});
            });
    };

    return (
        <>
            {/*<Container className="mb-1">*/}
            {/*    <h1>Information Form</h1>*/}
            {/*    <Image src={flower} alt={flower} height="200px"/>*/}
            {/*</Container>*/}

            <Container>
                <Formik
                    initialValues={initialValues}
                    onSubmit={submitMissingPersonInfo}
                    validationSchema={validator}
                >
                    {FormContent1}
                </Formik>
            </Container>
        </>
    )
}
function FormContent1(props) {
    const {
        status, values, errors, touched, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset,


    } = props;
    return (
        <>
            <Form>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-1">
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control aria-label="First Name"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.womanFirstName}
                                          name={'womanFirstName'}
                            />
                            {errors.womanFirstName && touched.womanFirstName && (
                                <div className="alert alert-danger">{errors.womanFirstName}</div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control aria-label="Last name Name"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.womanLastName}
                                          name={'womanLastName'}
                            />
                            {errors.womanLastName && touched.womanLastName && (
                                <div className="alert alert-danger">{errors.womanLastName}</div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Label>Nick Name or other Names:</Form.Label>
                            <Form.Control aria-label="Nick-Name Or other Names"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.womanAliases}
                                          name={'womanAliases'}
                            />
                            {errors.womanAliases && touched.womanAliases && (
                                <div className="alert alert-danger">{errors.womanAliases}</div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Label>Missing Since:</Form.Label>
                            <Form.Control aria-label="Missing-Since"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.womanDateOfDisappearance}
                                          name={'womanDateOfDisappearance'}
                            />
                            {errors.womanDateOfDisappearance && touched.womanDateOfDisappearance && (
                                <div
                                    className="alert alert-danger">{errors.womanDateOfDisappearance}</div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control aria-label="Date-Of-Birth"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.womanDateOfBirth}
                                          name={'womanDateOfBirth'}
                            />
                            {errors.womanDateOfBirth && touched.womanDateOfBirth && (
                                <div className="alert alert-danger">{errors.womanDateOfBirth}</div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Label>Last seen address</Form.Label>
                            <Form.Control aria-label="age"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.womanLastLocation}
                                          name={'womanLastLocation'}
                            />
                            {errors.womanLastLocation && touched.womanLastLocation && (
                                <div className="alert alert-danger">{errors.womanLastLocation}</div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Label>Tribe</Form.Label>
                            <Form.Control aria-label="Tribe"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.womanTribe}
                                          name={'womanTribe'}
                            />
                            {errors.womanTribe && touched.womanTribe && (
                                <div className="alert alert-danger">{errors.womanTribe}</div>
                            )}
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-1">
                            <Form.Label>Eye Color:</Form.Label>
                            <Form.Control aria-label="eye color"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.womanEyeColor}
                                          name={'womanEyeColor'}
                            />
                            {errors.womanEyeColor && touched.womanEyeColor && (
                                <div className="alert alert-danger">{errors.womanEyeColor}</div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Label>Weight:</Form.Label>
                            <Form.Control aria-label="body type"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.womanWeight}
                                          name={'womanWeight'}
                            />
                            {errors.womanWeight && touched.womanWeight && (
                                <div className="alert alert-danger">{errors.womanWeight}</div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Label>Tattoo, and other Identifying marks:</Form.Label>
                            <Form.Control aria-label="Tattoo"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.womanIdentifyingMarks}
                                          name={'womanIdentifyingMarks'}
                            />
                            {errors.womanIdentifyingMarks && touched.womanIdentifyingMarks && (
                                <div className="alert alert-danger">{errors.womanIdentifyingMarks}</div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Label>Hobbies and Interest</Form.Label>
                            <Form.Control aria-label="clothes"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.womanHobbiesAndInterests}
                                          name={'womanHobbiesAndInterests'}
                            />
                            {errors.womanHobbiesAndInterests && touched.womanHobbiesAndInterests && (
                                <div className="alert alert-danger">{errors.womanHobbiesAndInterests}</div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Label>Favorite hangout places</Form.Label>
                            <Form.Control aria-label="body type"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.womanFavoriteHangoutPlaces}
                                          name={'womanFavoriteHangoutPlaces'}
                            />
                            {errors.womanFavoriteHangoutPlaces && touched.womanFavoriteHangoutPlaces && (
                                <div className="alert alert-danger">{errors.womanFavoriteHangoutPlaces}</div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Label>Height:</Form.Label>
                            <Form.Control aria-label="Tattoo"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.womanHeight}
                                          name={'womanHeight'}
                            />
                            {errors.womanHeight && touched.womanHeight && (
                                <div className="alert alert-danger">{errors.womanHeight}</div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Label>Hair Color:</Form.Label>
                            <Form.Control aria-label="hair color"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.womanHairColor}
                                          name={'womanHairColor'}
                            />
                            {errors.womanHairColor && touched.womanHairColor && (
                                <div className="alert alert-danger">{errors.womanHairColor}</div>
                            )}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col mb={5}>
                        <Button type="submit" variant="primary">Submit</Button>
                        <Button disabled={!dirty || isSubmitting} onClick={handleReset}
                                variant="danger">Cancel</Button>
                    </Col>
                </Row>
            </Form>

        </>
    )
}