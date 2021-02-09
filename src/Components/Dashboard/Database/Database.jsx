import React, { Component } from 'react'
import { Grid, } from '@material-ui/core'
import DataInfoGrid from './DataInfoGrid'

class Database extends Component {
    render() {
        return (
            <Grid item xs={11} style={{ padding: 20, height: "100%" }}>
                <Grid item sm={4} style={{ height: "100%", padding: 20 }}>
                    <DataInfoGrid />
                </Grid>
                <Grid item sm={8}>
                </Grid>
            </Grid>
        )
    }
}



export default Database