import React from "react";
import { GridLeft } from "./GridInfo"
import { GridForm } from "./GridForm"
import { Grid, Divider } from "@material-ui/core";

export default function Login() {

	return (
		<Grid container style={{ padding: "40px", flexGrow: 1, height: "100%" }}>
			<GridLeft />
			<GridForm />
		</Grid>
	);
}
