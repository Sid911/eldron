import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./theme";
import App from "./Components/App";
import "./index.css"
import CssBaseline from '@material-ui/core/CssBaseline';

import { data, persistor } from "./Redux/indexReducer"
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.render(
	<React.StrictMode>
		<CssBaseline />
		<Provider store={data}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider theme={Theme}>
					<App />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode >,
	document.getElementById("root")
);
reportWebVitals();
