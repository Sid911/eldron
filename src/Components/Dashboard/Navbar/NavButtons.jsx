import React from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    selectedTab: {
        marginTop: 10,
        marginBottom: 10,
        flexGrow: 1
    },
    nselectedTab: {
        marginTop: 5, marginBottom: 5,
    },
}))

function NavButtons(props) {
    const classes = useStyles();
    const history = useHistory();
    const loc = history.location.pathname
    const color = loc === props.link ? "primary" : "default";
    const variant = loc === props.link ? "contained" : "text";


    function navigateToSearch() {
        history.push(props.link);
    }

    return (
        <Button variant={variant} color={color} className={classes.nselectedTab} disableElevation onClick={navigateToSearch}>
            { props.icon}
        </Button >
    )
}

export default NavButtons
