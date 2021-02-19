import { Grid } from '@material-ui/core'
import React from 'react'

import StatsHead from './StatsHead'
import GraphTabs from './graphTabs'
import '../../../../node_modules/react-vis/dist/style.css'

function Stats() {
    return (
        <Grid item sm={11} xs={12}>
            <Grid container direction="column" style={{ flexGrow: 1, height: "100%" }} justify="space-between">
                <StatsHead />
                <Grid container direction="column" style={{ flexGrow: 1, marginTop: "5%", padding: 10 }}>
                    <GraphTabs />
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Stats
