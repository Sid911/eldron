import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./theme";
import Login from "./Components/Login/Login";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={Theme}>
			<Login />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
reportWebVitals();
