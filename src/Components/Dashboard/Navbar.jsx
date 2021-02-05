import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { grey } from "@material-ui/core/colors";
import { Grid, Button, Avatar, Typography } from '@material-ui/core'
import { HomeOutlined, SearchOutlined, BookOutlined, EqualizerOutlined, SupervisedUserCircleOutlined } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    selectedTab: {
        marginTop: 10,
        marginBottom: 10,
        flexGrow: 1
    },
    nselectedTab: {
        marginTop: 5, marginBottom: 5,
    },
    nav: {
        height: "100%", backgroundColor: grey[900],
    }
}))

export default function Navbar() {
    const classes = useStyles();
    var isExpanded = false
    var navMargin = isExpanded ? "0" : "50%"
    return (
        <Grid container xs={1} style={{ height: "100%" }}>
            <Grid container className={classes.nav} style={{ marginRight: navMargin }} alignContent="space-around" justify="center">
                <Grid item >
                    <Avatar>S</Avatar>
                </Grid>
                <Grid container justify="center">
                    <Button variant="contained" color="primary" className={classes.selectedTab} disableElevation>
                        <HomeOutlined fontSize="default" color="#0000" />
                        {isExpanded ? <Typography color="inherit" variant="caption" style={{ marginLeft: 10 }}>Home</Typography> : ""}
                    </Button>
                    <Button variant="text">
                        <SearchOutlined fontSize="small" color={grey[900]} className={classes.nselectedTab} />
                        {isExpanded ? <Typography color="textPrimary" variant="caption" style={{ marginLeft: 10 }}>Search</Typography> : ""}
                    </Button>
                    <Button variant="text">
                        <BookOutlined fontSize="small" color={grey[900]} className={classes.nselectedTab} />
                        {isExpanded ? <Typography color="textPrimary" variant="caption" style={{ marginLeft: 10 }}>Database</Typography> : ""}
                    </Button>
                    <Button variant="text">
                        <EqualizerOutlined fontSize="small" color={grey[900]} className={classes.nselectedTab} />
                        {isExpanded ? <Typography color="textPrimary" variant="caption" style={{ marginLeft: 10 }}>Surveys</Typography> : ""}
                    </Button>
                    <Button variant="text">
                        <SupervisedUserCircleOutlined fontSize="small" color={grey[900]} className={classes.nselectedTab} />
                        {isExpanded ? <Typography color="textPrimary" variant="caption" style={{ marginLeft: 10 }}>Org</Typography> : ""}
                    </Button>
                </Grid>
            </Grid>
        </Grid >
    )
}
