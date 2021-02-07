import React, { Component } from 'react'
import { Button, Grid } from '@material-ui/core'

import firebase from "firebase/app";
import UserInfo from './UserInfo';

export default class Hompage extends Component {
    render() {
        return (
            <Grid item xs={11} >
                <Grid container style={{ padding: 10, height: "100%" }}>
                    <Grid item md={5} xs={12} style={{ height: "100%" }}>
                        <Grid container direction="column">
                            <UserInfo name="Admin Panda🐼" org="Test org" job="CEO" access="4" />
                        </Grid>
                    </Grid>
                    <Grid item md={7} xs={12}>
                        <Button onClick={() => { firebase.auth().signOut() }}>SignOut</Button>
                    </Grid>
                </Grid>

            </Grid >
        )
    }
}
