import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const loginStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

export default class Login extends Component {
	render() {
		return <Grid classes={classes.root} container></Grid>;
	}
}
