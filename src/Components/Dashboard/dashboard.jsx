import { Grid, LinearProgress } from '@material-ui/core'
import React, { Component } from 'react'


import Navbar from './Navbar/Navbar';
import Homepage from './Home/Hompage';
//import Search from './Search/Search'
import Loaddata from "../../Firebase/loadData";

export default class Dashboard extends Component {
    state = {
        isLoading: true
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 1000)
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
                        <Navbar />
                        <Homepage />
                    </Grid>
                }
            </Grid>
        )
    }
}
