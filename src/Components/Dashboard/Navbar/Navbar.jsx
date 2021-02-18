import React from 'react'
import { useSelector } from 'react-redux'
import firebase from 'firebase/app'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Avatar, Dialog, DialogContent, DialogTitle, DialogActions, useMediaQuery, Button, DialogContentText } from '@material-ui/core'
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
    // Dilog
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Grid item md={1} className={classes.full}>
            <Grid container className={classes.full}>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"

                >
                    <DialogTitle id="responsive-dialog-title" style={{ backgroundColor: "#1E1E1E" }}>{"Are you sure you want to Sign Out?"}</DialogTitle>
                    <DialogContent style={{ backgroundColor: "#1E1E1E" }}>
                        <DialogContentText>
                            All the cached data and downloaded data will be deleted on sign out for privacy pourposes. Make sure you copy everything you need first.
                     </DialogContentText>
                    </DialogContent>
                    <DialogActions style={{ backgroundColor: "#1E1E1E" }}>
                        <Button autoFocus onClick={handleClose} color="default">Cancel</Button>
                        <Button onClick={() => { handleClose(); firebase.auth().signOut() }} color="primary" autoFocus>Sign Out</Button>
                    </DialogActions>
                </Dialog>
                <Grid container className={classes.nav} style={{ marginRight: "50%" }} alignContent="space-around" justify="center">
                    <Grid item >
                        <Avatar src={user ? user.profilePic : "bla"} onClick={handleClickOpen}>{user ? user.name[0] : "?"}</Avatar>
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
