import React from "react";




export const  DisplayError = (props) => {
    const { errors, touched, field} = props

    if( errors[field] && touched[field]) {
        return  <div className="alert alert-danger">
            {errors[field]}
        </div>
    } else {
        return(<></>)

    }

}