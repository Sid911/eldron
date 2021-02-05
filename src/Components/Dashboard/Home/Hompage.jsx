import React, { Component } from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import firebase from "firebase/app";

export default class Hompage extends Component {
    render() {
        return (
            <Grid container xs={11}>
                <Typography color="textPrimary"> This is the HomePage</Typography>
                <Button onClick={() => { firebase.auth().signOut() }}>SignOut</Button>
            </Grid>
        )
    }
}
