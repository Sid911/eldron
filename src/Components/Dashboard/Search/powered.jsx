import { Typography, Box } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import React from 'react'
import Typewriter from 'typewriter-effect'
function Powered() {
    const type = (t) => {
        t.typeString("The Person 🔍").pauseFor(2500).deleteAll().typeString("Powered by Algolia").start()
    }
    return (
        <Typography color="textPrimary" variant="h5">
            Search
            <Box fontWeight="bold" color={grey[400]}><Typewriter onInit={type} options={{ autoStart: true }} /></Box>
        </Typography>
    )
}

export default Powered
