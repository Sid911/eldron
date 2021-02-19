import { Typography } from '@material-ui/core'
import React from 'react'

function PatientProfile(props) {
    return (
        <div>
            <Typography color="textPrimary">
                {props.path}
            </Typography>
        </div>
    )
}

export default PatientProfile
