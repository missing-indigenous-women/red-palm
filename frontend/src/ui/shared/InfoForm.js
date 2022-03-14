import {Formik} from "formik";
import React from "react"
import {Col, Container, FormControl, InputGroup, Row, Image, Button} from "react-bootstrap";
import flower from "../images/flower.jpg"
import * as Yup from 'yup'
import moment from 'moment'
import {httpConfig} from "../../utils/http-config";
//<input type="file" id="myFile" 
export const InfoForm = (props) => {


    const validator = Yup.object().shape({
        womanAliases: Yup.string()
            .required()
            .max(40, "Woman Aliases cant exceed 4o characters"), womanDateOfDisappearance: Yup.date()
            .required("Date Of disappearance is required")
            .transform(value => {
                return value ? moment(value).toDate() : value;
            }), womanDateOfBirth: Yup.date()
            .required("Date of Birth is required")
            .transform(value => {
                return value ? moment(value).toDate() : value;
            }), womanEyeColor: Yup.string()
            .required("Eye color required")
            .max(40, "Eye color can't exceed 40 characters"), womanFavoriteHangoutPlaces: Yup.string()
            .required("Eye color required")
            .max(150, "Favorite hangout places can't exceed 150 characters."), womanFirstName: Yup.string()
            .required("First Name required")
            .max(40, "First Name can't exceed 40 characters."),

        womanHairColor: Yup.string()
            .required("Hair Color required")
            .max(40, "Hair Color can't exceed 40 characters."), womanHeight: Yup.string()
            .required("Height is required")
            .max(25, "Height cant exceed 25 characters."), womanHobbiesAndInterests: Yup.string()
            .required("Hobbies and Interests")
            .max(150, "Hobbies and Interests can't exceed 25 characters."), womanIdentifyingMarks: Yup.string()
            .required("Identifying Marks")
            .max(150, "Identifying Marks cannot exceed 150 characters."), womanLastName: Yup.string()
            .required("Last Name")
            .max(40, "Last Name cannot exceed 40 characters"), womanLastLocation: Yup.string()
            .required("Last Location seen")
            .max(60, "Last Location seen cannot exceed 60 characters"), womanLatitude: Yup.string()
            .required("Latitude format")
            .max(), womanLongitude: Yup.string()
            .required("Please provide valid longitude format")
            .max(), womanPhoto1: Yup.string()
            .required()
            .max(), womanTribe: Yup.string()
            .required("Tribe Name")
            .max(150, "Tribe name cannot be over 150 characters"), womanWeight: Yup.number()
            .required("Weight")
            .max(4, "Max number is 4"),

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
        httpConfig.post("/apis/InfoForm/", values)
            .then(reply => {
                let {message, type} = reply;

                if (reply.status === 200) {
                    resetForm();
                }
                setStatus({message, type});
            });
    };

    return (<>
        <Container>
            <Formik
                initialValues={initialValues}
                onSubmit={submitMissingPersonInfo}
                validationSchema={validator}
            >
                {InfoForms}
            </Formik>
        </Container>
    </>)

    function InfoForms(props) {
        const {
            status, values, errors, touched, dirty, isSubmitting, handledChange, handleBlur, handleSubmit, handleReset,


        } = props;
        return (<>
        <Container className="mb-3">
            <h1>Information Form</h1>
            <Image src={flower} alt={flower} height="200px"/>
        </Container>
        <form onSubmit={handleSubmit}>
            <Container>
                <Row>
                    <Col md={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>First Name:</InputGroup.Text>
                            <FormControl aria-label="First Name"
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.womanFirstName}
                                         name={'womanFirstName'}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Last Name:</InputGroup.Text>
                            <FormControl aria-label="Last name Name"
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.womanLastName}
                                         name={'womanLastName'}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Nick Name or other Names:</InputGroup.Text>
                            <FormControl aria-label="Nick-Name Or other Names"
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.womanAliases}
                                         name={'womanAliases'}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Missing Since:</InputGroup.Text>
                            <FormControl aria-label="Missing-Since"
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.womanDateOfDisappearance}
                                         name={'womanDateOfDisappearance'}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Date of Birth</InputGroup.Text>
                            <FormControl aria-label="Date-Of-Birth"
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.womanDateOfBirth}
                                         name={'womanDateOfBirth'}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Last seen address</InputGroup.Text>
                            <FormControl aria-label="age"
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.womanLastLocation}
                                         name={'womanLastLocation'}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Tribe</InputGroup.Text>
                            <FormControl aria-label="Tribe"
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.womanTribe}
                                         name={'womanTribe'}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Latitude:</InputGroup.Text>
                            <FormControl aria-label="Latitude"
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.womanLatitude}
                                         name={'womanLatitude'}
                            />
                        </InputGroup>
                    </Col>
                    <Col md={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Eye Color:</InputGroup.Text>
                            <FormControl aria-label="eye color"
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.womanEyeColor}
                                         name={'womanEyeColor'}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Weight:</InputGroup.Text>
                            <FormControl aria-label="body type"
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.womanWeight}
                                         name={'womanWeight'}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Tattoo, and other Identifying marks:</InputGroup.Text>
                            <FormControl aria-label="Tattoo"
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.womanIdentifyingMarks}
                                         name={'womanIdentifyingMarks'}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Hobbies and Interest</InputGroup.Text>
                            <FormControl aria-label="clothes"
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.womanHobbiesAndInterests}
                                         name={'womanHobbiesAndInterests'}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Favorite hangout places</InputGroup.Text>
                            <FormControl aria-label="body type"
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.womanFavoriteHangoutPlaces}
                                         name={'womanFavoriteHangoutPlaces'}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Height:</InputGroup.Text>
                            <FormControl aria-label="Tattoo"
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.womanHeight}
                                         name={'womanHeight'}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Hair Color:</InputGroup.Text>
                            <FormControl aria-label="hair color"
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.womanHairColor}
                                         name={'womanHairColor'}
                            />
                        </InputGroup>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Longitude:</InputGroup.Text>
                        <FormControl aria-label="Longitude"
                                     onChange={handleChange}
                                     onBlur={handleBlur}
                                     value={values.womanLastLocation}
                                     name={'womanLastLocation'}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Photo:</InputGroup.Text>
                        <FormControl aria-label="Longitude"
                                     onChange={handleChange}
                                     onBlur={handleBlur}
                                     value={values.womanPhoto1}
                                     name={'womanPhoto1'}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col mb={2}>
                    <Button variant="primary">Submit</Button>
                    <Button variant="danger">Cancel</Button>
                </Col>
            </Row>
        </Container>
        </form>
    </>)
    }
}