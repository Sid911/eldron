import { Grid, Table, TableBody, TableContainer, Paper, Typography, Box } from '@material-ui/core';
import React, { Component } from 'react'
import { connect } from "react-redux";
import RecentRow from './RecentRow';

class RecentViews extends Component {
    // state = {
    //     data: [{
    //         name: "Sid", age: "18", gender: "Male", no: "342543542", uid: "3892fpbbidfaufdg",
    //         history: [{ key: "dahofadfsnv", date: "blabla", issue: "brain", attend: "dr.peanut Brain" },
    //         { key: "afdhiosfnvbndsfa", date: "blabla2", issue: "liver ", attend: "dr.big Brain" }]
    //     },
    //     {
    //         name: "Goku", age: "17", gender: "Male", no: "342543542", uid: "asdffff435ga",
    //         history: [{ key: "dahofadfsnv", date: "blabla", issue: "brain", attend: "dr.peanut Brain" },
    //         { key: "afdhiosfnvbndsfa", date: "blabla2", issue: "liver ", attend: "dr.big Brain" }]
    //     }]
    // }

    render() {
        return (
            <Grid container style={{ padding: "5%" }} direction="column">
                <Typography variant="h5" color="textSecondary" >
                    <Box fontWeight="fontWeightLight" >Recently Viewed Profiles :</Box>
                </Typography>
                {this.props.recent ?
                    <Typography variant="overline" color="textPrimary" >
                        No Recently Viewed files on the device ❌
                </Typography>
                    :
                    <TableContainer component={Paper} style={{ marginTop: 20, backgroundColor: "#1E1E1E" }}>
                        <Table aria-label="collapsible recent table">
                            <TableBody>
                                {this.props.recent.map((row) => (
                                    <RecentRow key={row.uid} row={row} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                }
            </Grid>
        )
    }
}
const mapStatesToProps = (state) => {
    return {
        recent: state.data.recent
    }
}
export default connect(mapStatesToProps)(RecentViews)
