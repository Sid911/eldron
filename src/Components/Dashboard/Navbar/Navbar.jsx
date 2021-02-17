import React from 'react'
import { useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar } from '@material-ui/core'
import { HomeOutlined, SearchOutlined, BookOutlined, EqualizerOutlined, SupervisedUserCircleOutlined, WatchLaterOutlined } from '@material-ui/icons'
import NavButtons from './NavButtons';


const useStyles = makeStyles(() => ({
    nav: {
        height: "100%", backgroundColor: "#202020",
    },
    full: {
        height: "100%"
    }
}))
export default function Navbar() {
    const classes = useStyles();
    const user = useSelector(state => state.firestore.data.userDetails)
    const org = useSelector(state => state.firestore.data.orgDetails)
    return (
        <Grid item md={1} className={classes.full}>
            <Grid container className={classes.full}>
                <Grid container className={classes.nav} style={{ marginRight: "50%" }} alignContent="space-around" justify="center">
                    <Grid item >
                        <Avatar src={user ? user.profilePic : "bla"} >{user ? user.name[0] : "?"}</Avatar>
                    </Grid>
                    <Grid container justify="center">
                        <NavButtons icon={<HomeOutlined fontSize="small" />} link="/" />
                        {org ? org.hasIndexing ? <NavButtons icon={<SearchOutlined fontSize="small" />} link="/search" /> : "" : ""}
                        <NavButtons icon={<WatchLaterOutlined fontSize="small" />} link="/appointment" />
                        <NavButtons icon={<BookOutlined fontSize="small" />} link="/database" />
                        <NavButtons icon={<EqualizerOutlined fontSize="small" />} link="/stats" />
                        {user ? user.accessLevel > 2 ? <NavButtons icon={<SupervisedUserCircleOutlined fontSize="small" />} link="/org" /> : "" : ""}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
