import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FormDebugger} from "../../FormDebugger";
import React from "react";

export const SignUpFormContent = (props) => {
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
                {/*controlId must match what is passed to the initialValues prop*/}
                <div className="form-group">
                    <label htmlFor="appUserEmail">Email Address</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">

                            </div>
                        </div>
                        <input
                            className="form-control"
                            name="appUserEmail"
                            type="email"
                            value={values.appUserEmail}
                            placeholder="Enter email"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </div>
                    {
                        errors.appUserEmail && touched.appUserEmail && (
                            <div className="alert alert-danger">
                                {errors.profileEmail}
                            </div>
                        )

                    }
                </div>
                {/*controlId must match what is defined by the initialValues object*/}
                <div className="form-group">
                    <label htmlFor="appUserPassword">Password</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <FontAwesomeIcon icon="key"/>
                            </div>
                        </div>
                        <input
                            name="appUserPassword"
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            value={values.appUserPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.appUserPassword && touched.appUserPassword && (
                        <div className="alert alert-danger">{errors.appUserPassword}</div>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="appUserPasswordConfirm">Confirm Your Password</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <FontAwesomeIcon icon="key"/>
                            </div>
                        </div>
                        <input

                            className="form-control"
                            type="password"
                            name="appUserPasswordConfirm"
                            placeholder="Password Confirm"
                            value={values.appUserPasswordConfirm}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.appUserPasswordConfirm && touched.appUserPasswordConfirm && (
                        <div className="alert alert-danger">{errors.appUserPasswordConfirm}</div>
                    )}
                </div>


                <div className="form-group">
                    <label htmlFor="appUserDisplayName">Display name</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">

                            </div>
                        </div>
                        <input
                            className="form-control"
                            name="appUserDisplayName"
                            type="text"
                            value={values.appUserDisplayName}
                            placeholder="Display name"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </div>
                    {
                        errors.appUserDisplayName && touched.appUserDisplayName && (
                            <div className="alert alert-danger">
                                {errors.appUserDisplayName}
                            </div>
                        )
                    }
                </div>


                <div className="form-group">
                    <label htmlFor="appUserFirstName">First Name</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">

                            </div>
                        </div>
                        <input
                            className="form-control"
                            name="appUserFirstName"
                            type="text"
                            value={values.appUserFirstName}
                            placeholder="Enter First Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {
                        errors.appUserFirstName && touched.appUserFirstName && (
                            <div className="alert alert-danger">
                                {errors.appUserFirstName}
                            </div>
                        )

                    }
                </div>

                <div className="form-group">
                    <label htmlFor="appUserLastName">Last Name</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">

                            </div>
                        </div>
                        <input
                            className="form-control"
                            name="appUserLastName"
                            type="text"
                            value={values.appUserLastName}
                            placeholder="Enter last Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {
                        errors.appUserLastName && touched.appUserLastName && (
                            <div className="alert alert-danger">
                                {errors.appUserLastName}
                            </div>
                        )

                    }
                </div>

                <div className="form-group">
                    <button className="btn btn-primary mb-2" type="submit">Submit</button>
                    <button
                        className="btn btn-danger mb-2"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >Reset
                    </button>
                </div>


                <FormDebugger {...props} />
            </form>
            {
                status && (<div className={status.type}>{status.message}</div>)
            }
        </>


    )
};
