import React from 'react'
import { Grid, Avatar, Paper, Typography, Divider, IconButton, Fade, Box } from '@material-ui/core'
import { EditOutlined } from '@material-ui/icons'

function DataSearchResults(props) {
    return (
        <Fade in key={props.key}>
            <Grid container orientation="row" style={{ marginTop: 10 }}>
                <Grid item sm={2}>
                    <Grid container style={{ flexGrow: 1 }} justify="center">
                        <Avatar src={props.src}>{props.name}</Avatar>
                    </Grid>
                </Grid>
                <Grid item sm={10}>
                    <Paper style={{ backgroundColor: "#1E1E1E", flexGrow: 1, padding: 10 }}>
                        <Grid container alignContent="center">
                            <Grid item xs={6}>
                                <Typography color="textSecondary" >
                                    <Box component="span" fontWeight="fontWeightLight">{props.name}</Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Divider variant="fullWidth" orientation="vertical" />
                            </Grid>
                            <Grid item xs={3}>
                                <Typography color="textSecondary">
                                    <Box component="span" fontWeight="fontWeightLight">{props.mobile}</Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Divider variant="fullWidth" orientation="vertical" />
                            </Grid>
                            <Grid item>
                                <IconButton size="small">
                                    <EditOutlined fontSize="small" />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Fade>
    )
}

export default DataSearchResults
