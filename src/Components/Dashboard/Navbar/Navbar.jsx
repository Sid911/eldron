import React from 'react'
import { useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar } from '@material-ui/core'
import { HomeOutlined, SearchOutlined, BookOutlined, EqualizerOutlined, SupervisedUserCircleOutlined } from '@material-ui/icons'
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
                        <NavButtons isSelected icon={<HomeOutlined fontSize="small" />} />
                        {org ? org.hasIndexing ? <NavButtons icon={<SearchOutlined fontSize="small" />} /> : "" : ""}
                        <NavButtons icon={<BookOutlined fontSize="small" />} />
                        <NavButtons icon={<EqualizerOutlined fontSize="small" />} />
                        {user ? user.accessLevel > 2 ? <NavButtons icon={<SupervisedUserCircleOutlined fontSize="small" />} /> : "" : ""}
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}
