import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./theme";
import App from "./Components/App";
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
	<React.StrictMode>
		<CssBaseline />
		<ThemeProvider theme={Theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
reportWebVitals();
