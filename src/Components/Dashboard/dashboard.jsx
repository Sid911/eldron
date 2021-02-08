import { Grid, Hidden, LinearProgress } from '@material-ui/core'
import React, { Component } from 'react'

import Navbar from './Navbar/Navbar';
import { Route } from 'react-router-dom';

import Search from './Search/Search'
import Homepage from './Home/Hompage';
import Database from './Database/Database'
import Stats from './Stats/Stats'
import Organization from './Organization/Organization'
import Loaddata from "../../Firebase/loadData";

export default class Dashboard extends Component {
    state = {
        isLoading: true
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 2000)
    }
    render() {
        return (
            <Grid container style={{ height: "100%" }}>
                <Loaddata />
                { this.state.isLoading ?
                    <Grid container style={{ height: "100%" }} alignContent="center" justify="center">
                        <LinearProgress color="secondary" style={{ width: "70%", flexShrink: 1 }} />
                    </Grid>
                    :
                    <Grid container>
                        <Route exact path="/" ><Hidden smDown><Navbar /></Hidden><Homepage /></Route>
                        <Route exact path="/search"><Hidden smDown><Navbar /></Hidden><Search /></Route>
                        <Route exact path="/database"><Hidden smDown><Navbar /></Hidden><Database /></Route>
                        <Route exact path="/stats"><Hidden smDown><Navbar /></Hidden><Stats /></Route>
                        <Route exact path="/org"><Hidden smDown><Navbar /></Hidden><Organization /></Route>
                    </Grid>
                }
            </Grid>
        )
    }
}
