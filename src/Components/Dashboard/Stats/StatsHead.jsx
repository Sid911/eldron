import React from 'react'

import { Typography, Box } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import Typewriter from 'typewriter-effect'
function StatsHead() {
    const type = (t) => {
        t.typeString("Statistics").pauseFor(2000).deleteAll().typeString("Private Statistics 😎").start()
    }

    return (
        <Typography color="textPrimary" variant="h6" component="div" style={{ padding: 10 }}>
            Test Org's
            <Box fontWeight="bold" color={grey[400]}><Typewriter onInit={type} options={{ autoStart: true }} /></Box>
        </Typography>
    )
}

export default StatsHead
