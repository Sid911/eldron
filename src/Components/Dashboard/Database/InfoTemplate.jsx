import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import FieldValue from '../Home/FieldValue'

export default function InfoTemplate(props) {
    return (
        <Grid container direction="column">
            <Typography color="textPrimary" >
                {props.Title}
            </Typography>
            <br />
            {props.keyValue.map((kv) => (<FieldValue field={kv[0]} value={kv[1].toString()} key={kv[0] + kv[1].toString()} variant={props.variant} />))}
        </Grid>
    )
}
