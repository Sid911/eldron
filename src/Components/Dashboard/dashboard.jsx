import { Grid } from '@material-ui/core'
import React, { Component } from 'react'

import Navbar from './Navbar';
import Hompage from './Home/Hompage';

export default class Dashboard extends Component {
    render() {
        return (
            <Grid container xs={12} style={{ height: "100%" }}>
                <Navbar />
                <Hompage />
            </Grid>
        )
    }
}
