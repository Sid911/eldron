import React from 'react'
import { Grid } from "@material-ui/core";
import logo from "./Logo_Splash_Final.gif"

export function Splash(props) {
    return (
        < Grid container justify="center" alignContent="center" style={{ height: "100%" }}>
            <img alt="ELDRON logo" src={logo} height="300px" />

        </Grid >
    )
}

export default Splash
