import React from 'react'
import { Grid, Divider, Typography, Box } from "@material-ui/core"
import { grey } from '@material-ui/core/colors'
import FieldValue from './FieldValue'
export default function UserInfo(props) {
    return (
        <Grid container style={{ padding: "5%" }} direction="column" alignContent="space-between">
            <Grid item>
                <Typography variant="h5" color="textPrimary" aria-orientation="horizontal">
                    Hi There,
                    <Box fontWeight="bold" color={grey[400]}>{props.name}!</Box>
                </Typography>
            </Grid>
            <Divider style={{ width: "60%", backgroundColor: grey[100], padding: 2, marginTop: "10%", marginBottom: "10%" }} />
            <FieldValue field="Organization" value={props.org} />
            <FieldValue field="Job Tittle" value={props.job} />
            <FieldValue field="Access Level" value={props.access} scolor="primary" />
        </Grid>
    )
}
