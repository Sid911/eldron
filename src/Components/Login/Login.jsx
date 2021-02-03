import React from "react";
import { GridLeft } from "./GridInfo"
import { GridForm } from "./GridForm"
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		height: "100%"
	}
}))

export default function Login() {
	return (
		<Grid container className={useStyles} style={{ padding: "40px" }}>
			<GridLeft />
			<Divider orientation="vertical" flexItem variant="fullWidth" style={{ padding: "2px", marginLeft: "10px" }} />
			<GridForm />
		</Grid>
	);
}
