import React from 'react'
import { Grid, Avatar, Paper, Typography, Divider, IconButton, Fade } from '@material-ui/core'
import { EditOutlined } from '@material-ui/icons'

function DataSearchResults() {
    return (
        <Fade in>
            <Grid container orientation="row" style={{ marginTop: 10 }}>
                <Grid item sm={2}>
                    <Grid container style={{ flexGrow: 1 }} justify="center">
                        <Avatar>B</Avatar>
                    </Grid>
                </Grid>
                <Grid item sm={10}>
                    <Paper style={{ backgroundColor: "#1E1E1E", flexGrow: 1, padding: 10 }}>
                        <Grid container alignContent="center">
                            <Grid item xs={7}>
                                <Typography variant="caption" color="textSecondary">Name</Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Divider variant="fullWidth" orientation="vertical" />
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="caption" color="textSecondary">Age</Typography>
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
