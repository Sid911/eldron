import { Grid } from '@material-ui/core'
import React from 'react'

function DiseaseGraphs() {
    return (
        <Grid container style={{ flexGrow: 1 }}>
            <Grid item md={8} sm={12}>
                Graph will be here
            </Grid>
            <Grid item md={4} sm={12}>
                Other info
            </Grid>
        </Grid>
    )
}

export default DiseaseGraphs
