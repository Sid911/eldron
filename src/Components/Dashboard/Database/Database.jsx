import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core'
import DataInfoGrid from './DataInfoGrid'
import DataSearch from './DataSearch'

class Database extends Component {
    render() {
        return (
            <Grid item xs={11} style={{ padding: 10, height: "100%" }}>
                <Grid item sm={4} style={{ height: "100%" }}>
                    <Paper style={{ height: "100%", padding: "5%", backgroundColor: "#1E1E1E" }}>
                        <DataInfoGrid />
                    </Paper>
                </Grid>
                <Grid item sm={8}>
                    <DataSearch />
                </Grid>
            </Grid>
        )
    }
}



export default Database