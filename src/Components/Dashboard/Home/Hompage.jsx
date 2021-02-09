import React, { Component } from 'react'
import firebase from "firebase/app"
import { Box, Button, Grid, Typography, Paper } from '@material-ui/core'
import { connect } from 'react-redux'
import UserInfo from './UserInfo';
import { grey } from '@material-ui/core/colors';
import RecentViews from './RecentViews';

class Hompage extends Component {
    render() {
        return (
            <Grid item xs={11} >
                <Grid container style={{ padding: 10, height: "100%" }}>
                    <Grid item md={5} xs={12} style={{ height: "100%" }}>
                        <Paper style={{ height: "100%", backgroundColor: "#1E1E1E" }}>
                            <Grid container direction="column" justify="space-between" style={{ height: "100%", padding: "5%" }}>
                                <UserInfo name={this.props.user.name} org={this.props.org.orgName} job={this.props.user.jobTitle} access={this.props.user.accessLevel} />
                                <Grid container>
                                    <Typography color="textSecondary" component="div">
                                        <Box color={grey[100]} component="p">Org Moto : </Box>
                                        <Box fontWeight="fontWeightLight" component="p">{this.props.org.orgMoto}</Box>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item md={7} xs={12} style={{ height: "100%" }}>
                        <Grid container direction="column" justify="space-between" style={{ height: "100%", padding: "5%" }}>
                            <Button variant="outlined" onClick={() => { firebase.auth().signOut() }} >Sign Out</Button>
                            <RecentViews />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid >
        )
    }
}
const mapToState = (state) => {
    return {
        user: state.firestore.data.userDetails,
        org: state.firestore.data.orgDetails
    }
}
export default connect(mapToState)(Hompage)
