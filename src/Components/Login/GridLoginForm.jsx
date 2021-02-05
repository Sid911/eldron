import React, { Component } from 'react'
import firebase from "firebase/app"
import "firebase/auth"
import { Grid, Typography, Box, TextField, Button } from "@material-ui/core";
import { grey } from "@material-ui/core/colors/index";

export class GridForm extends Component {
    state = {
        'Email': "",
        'Password': "",
        'Orgnization key': "",
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    handleSubmit = (e) => {
        console.log(this.state);
        firebase.auth().signInWithEmailAndPassword(this.state.Email, this.state.Password)
    }
    render() {
        return (
            <Grid item sm={6} xs={12} style={{ height: '100%' }}>
                <Grid container style={{ height: '100%' }} justify="space-between" >
                    <Grid item>
                        <Typography variant="h4" color="textSecondary">
                            LOGIN
                        </Typography>
                        <br />
                        <Typography>
                            <Box color={grey[600]} fontStyle="italic" fontSize="15px">Note: This application only allows orgnization member to login</Box>
                        </Typography>
                    </Grid>
                    <Grid container alignContent="space-between">
                        <Grid item>
                            <form autoComplete="false" noValidate>
                                <TextField id="Orgnization key" onChange={this.handleChange} label="Orgnization key (if present)" variant="outlined" color="primary" style={{ width: "100%" }} />
                                <TextField required id="Email" onChange={this.handleChange} label="Email" variant="outlined" color="primary" style={{ width: "100%", marginTop: 5 }} />
                                <TextField required id="Password" onChange={this.handleChange} label="Password" variant="outlined" color="primary" type="password" style={{ width: "100%", marginTop: 5 }} />
                            </form>
                        </Grid>
                        <Grid container justify="space-between">
                            <Button variant="outlined" color="primary">
                                DISCOVER ELDRON
                            </Button>
                            <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                                LOGIN
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>


            </Grid >
        )
    }
}
