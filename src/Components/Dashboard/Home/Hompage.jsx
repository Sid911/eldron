import React, { Component } from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
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
                        <Grid container direction="column" justify="space-between" style={{ height: "100%" }}>
                            <UserInfo name={this.props.user.name} org={this.props.org.orgName} job={this.props.user.jobTitle} access={this.props.user.accessLevel} />
                            <Grid style={{ padding: "5%" }}>
                                <Typography color="textSecondary" >
                                    <Box color={grey[100]}>Org Moto : </Box>
                                    <Box fontWeight="fontWeightLight">{this.props.org.orgMoto}</Box>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={7} xs={12} style={{ height: "100%" }}>
                        <Grid container direction="column" justify="space-between" style={{ height: "100%" }}>
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
