import React, { useRef } from 'react'
import { Grid, Typography, Box, TextField, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { grey } from "@material-ui/core/colors/index";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: "2%",
            width: '100%',
        },
    },
}));


export function GridForm() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const orgnizationRef = useRef();

    const classes = useStyles();
    return (
        <Grid container xs={6}>
            <Grid item style={{ marginLeft: "10%", height: '100%' }} alignItems="center" justify="space-between">
                <Typography variant="h4" color="textSecondary">
                    LOGIN
                </Typography>
                <br />
                <Typography>
                    <Box color={grey[600]} fontStyle="italic" fontSize="15px">Note: This application only allows orgnization member to login</Box>
                </Typography>

                <form className={classes.root} autoComplete="false" noValidate style={{ marginTop: "10ch" }}>
                    <TextField required id="Orgnization" ref={orgnizationRef} label="Orgnization" variant="outlined" color="primary" />
                    <TextField required id="Username" ref={usernameRef} label="Username" variant="outlined" color="primary" />
                    <TextField required id="Password" ref={passwordRef} label="Password" variant="outlined" color="primary" type="password" />
                </form>
                <Grid container style={{ marginTop: "15%" }} justify="space-between">
                    <Button variant="outlined" color="primary">
                        DISCOVER ELDRON
                    </Button>
                    <Button variant="contained" color="primary">
                        LOGIN
                    </Button>
                </Grid>
            </Grid>


        </Grid >
    )
}
