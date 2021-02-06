import React from 'react'
import { useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import { grey } from "@material-ui/core/colors";
import { Grid, Avatar } from '@material-ui/core'
import { HomeOutlined, SearchOutlined, BookOutlined, EqualizerOutlined, SupervisedUserCircleOutlined } from '@material-ui/icons'
import NavButtons from './NavButtons';
import { useFirestoreConnect } from 'react-redux-firebase';


var isExpanded = false
const useStyles = makeStyles(() => ({
    nav: {
        height: "100%", backgroundColor: grey[900],
    },
    full: {
        height: "100%"
    }
}))
export default function Navbar() {
    const uid = useSelector(state => state.firebase.auth.uid)
    useFirestoreConnect({ collection: "testorg", doc: "orgMembers", subcollections: [{ collection: "members", doc: uid }], storeAs: "userDetails" })

    const classes = useStyles();
    var navMargin = isExpanded ? "0" : "50%"
    return (
        <Grid container xs={1} className={classes.full}>
            <Grid container className={classes.nav} style={{ marginRight: navMargin }} alignContent="space-around" justify="center">
                <Grid item >
                    <Avatar>S</Avatar>
                </Grid>
                <Grid container justify="center">
                    <NavButtons isExpanded={isExpanded} text="Home" icon={<HomeOutlined fontSize="small" />} />
                    <NavButtons isExpanded={isExpanded} isSelected text="Search" icon={<SearchOutlined />} />
                    <NavButtons isExpanded={isExpanded} text="Databse" icon={<BookOutlined fontSize="small" />} />
                    <NavButtons isExpanded={isExpanded} text="Stats" icon={<EqualizerOutlined fontSize="small" />} />
                    <NavButtons isExpanded={isExpanded} text="Org" icon={<SupervisedUserCircleOutlined fontSize="small" />} />
                </Grid>
            </Grid>
        </Grid >
    )
}
