import { Grid } from '@material-ui/core'
import React, { Component } from 'react'
import Powered from './powered'

export default class Search extends Component {
    render() {
        return (
            <Grid item sm={11} xs={12} style={{ padding: 10 }}>
                <Grid container direction="row" justify="space-between">
                    <Powered />

                </Grid>
            </Grid>
        )
    }
}
