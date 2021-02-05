import { Button, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import firebase from "firebase/app";

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Typography color="textPrimary"> This is the dashboard</Typography>
                <Button onClick={() => { firebase.auth().signOut() }}>SignOut</Button>
            </div>
        )
    }
}
