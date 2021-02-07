import React from 'react'
import { Grid, Typography, Box } from "@material-ui/core"

export default function FieldValue(props) {
    const second_color = props.scolor ? props.scolor : "textSecondary"
    return (
        <Grid container>
            <Typography color="textSecondary" variant="caption">
                {props.field} :
        </Typography>
            <Typography color={second_color} variant="caption">
                <Box fontWeight="fontWeightLight" marginLeft="10px">
                    {props.value}
                </Box>
            </Typography>
        </Grid>
    )
}
