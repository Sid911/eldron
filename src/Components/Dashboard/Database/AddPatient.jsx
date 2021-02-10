import React, { Component } from 'react'
import { Grid, Input, Button, Avatar, Paper, Typography, Box } from "@material-ui/core";


export class AddPatient extends Component {
    state = {

    }
    render() {
        return (
            <Grid container direction="column" style={{ height: "100%", maxHeight: window.screen.availHeight }}>
                <Paper style={{ height: "100%", backgroundColor: "#1E1E1E", padding: 20 }}>
                    <Box height="100%" overflow="auto" maxHeight="100%">
                        <Grid container direction="column" style={{ height: "100%" }} justify="space-between">
                            <Typography color="textPrimary">Hello there</Typography>
                            <Grid container justify="space-around" alignContent="space-around">
                                <Button variant="text" > Cancel</Button>
                                <Button variant="outlined">Add To database</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Grid >
        )
    }
}

export default AddPatient

