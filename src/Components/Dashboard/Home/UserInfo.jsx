import React from 'react'
import { Grid, Divider, Typography, Box } from "@material-ui/core"
import { grey } from '@material-ui/core/colors'
import FieldValue from './FieldValue'
import Typewriter from 'typewriter-effect';

export default function UserInfo(props) {
    const type = (t) => {
        t.typeString("User").pauseFor(2500).deleteAll().typeString(props.name).start()
    }
    return (

        <Grid container direction="column" alignContent="space-between">
            <Grid item>
                <Typography variant="h5" color="textPrimary" aria-orientation="horizontal">
                    Hi There,
                    <Box fontWeight="bold" color={grey[400]}><Typewriter onInit={type} options={{ autoStart: true }} /></Box>
                </Typography>
            </Grid>
            <Divider style={{ width: "90%", backgroundColor: grey[100], padding: 2, marginTop: "10%", marginBottom: "10%" }} />
            <FieldValue field="Organization" value={props.org} variant="caption" />
            <FieldValue field="Job Tittle" value={props.job} variant="caption" />
            <FieldValue field="Access Level" value={props.access} scolor="primary" variant="caption" />
        </Grid>
    )
}
