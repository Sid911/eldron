import React from 'react'
import { Button, Typography } from '@material-ui/core'
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
    var cl = props.isSelected ? classes.selectedTab : classes.nselectedTab
    var color = props.isSelected ? "primary" : "default"
    var variant = props.isSelected ? "contained" : "text"
    return (
        <Button variant={variant} color={color} className={cl} disableElevation id={props.text}>
            {props.icon}
            {props.isExpanded ? <Typography color="inherit" variant="caption" style={{ marginLeft: 10 }}>{props.text}</Typography> : ""}
        </Button>
    )
}

export default NavButtons
