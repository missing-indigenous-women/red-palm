import React from "react"
import {ReactComponent as Logo} from '../images/reactbootstrap.svg';
import {ReactComponent as Logo1} from '../images/reactLogo.svg';
import style from "../ui/FourOhFour.module.css";

export const FourOhFour = () => {

    return (
        <>
            <div className={style.Background}>
                <Logo1/>
                <h1>File not found.</h1>
                <h2>Thank you to all the staff at Deep Dive Coding cohort37</h2>
                <Logo/>
            </div>
            </>
    )
};