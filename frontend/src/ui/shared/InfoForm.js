import React from "react"
import {Col, Container, FormControl, InputGroup, Row, Image, Button} from "react-bootstrap";
import flower from "../images/flower.jpg"
import * as Yup from 'yup'
import moment from 'moment'
//<input type="file" id="myFile" 
export const Help = (props) => {
const validator = Yup.object().shape({
    womanAliases: Yup.string()
        .required()
        .max(40,"Woman Aliases cant exceed 4o characters"),
    womanDateOfDisappearance: Yup.date()
        .required("Date Of disappearance is required")
        .transform(value => {
        return value ? moment(value).toDate() : value;
    })
,
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

    womanLatitude: Yup.string()
        .required("Latitude format")
        .max(),

    womanLongitude: Yup.string()
        .required("Please provide valid longitude format")
        .max(),
    womanPhoto1: Yup.string()
        .required()
        .max(),
    womanTribe: Yup.string()
        .required("Tribe Name")
        .max(150,"trive name cannot be over 150 characters"),
    womanWeight: Yup.number()
        .required("Weight")
        .max(4, "max number is 4")




})
}





const InfoForm = (props) => {
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
            <Container className="mb-3">
            <h1>Information Form</h1>
                <Image src={flower} alt={flower} height="200px"/>
            </Container>
            <form onSubmit={handleSubmit}>
            <Container>
                <Row>
                    <Col md={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>First and last name:</InputGroup.Text>
                            <FormControl aria-label="First-and-Last-name"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Nick Name:</InputGroup.Text>
                            <FormControl aria-label="Nick-Name"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Missing Since:</InputGroup.Text>
                            <FormControl aria-label="Missing-Since:"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Date of Birth</InputGroup.Text>
                            <FormControl aria-label="Date-Of-Birth"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Age at time of Differences:</InputGroup.Text>
                            <FormControl aria-label="age"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Race</InputGroup.Text>
                            <FormControl aria-label="race"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>More information you think is important:</InputGroup.Text>
                            <FormControl aria-label="info"/>
                        </InputGroup>
                        </Col>
                    <Col md={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Eye Color:</InputGroup.Text>
                            <FormControl aria-label="eyecolor"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Weight and Body Type:</InputGroup.Text>
                            <FormControl aria-label="body type"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Tattoo, and other Identifying marks:</InputGroup.Text>
                            <FormControl aria-label="Tattoo"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Last outfit seen in:</InputGroup.Text>
                            <FormControl aria-label="clothes"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Weight and Body Type:</InputGroup.Text>
                            <FormControl aria-label="body type"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Height:</InputGroup.Text>
                            <FormControl aria-label="Tattoo"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Hair Color:</InputGroup.Text>
                            <FormControl aria-label="hair color"/>
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
            <Container>

            </Container>
                </>
                )
                }
