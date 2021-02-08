import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./theme";
import App from "./Components/App";
import "./index.css"
import CssBaseline from '@material-ui/core/CssBaseline';

import { data, rrfProps, persistor } from "./Redux/indexReducer"
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

ReactDOM.render(
	<React.StrictMode>
		<CssBaseline />
		<div style={{ height: "100%" }}>
			<Provider store={data}>
				<PersistGate loading={null} persistor={persistor} >
					<ReactReduxFirebaseProvider {...rrfProps}>
						<ThemeProvider theme={Theme}>
							<App />
						</ThemeProvider>
					</ReactReduxFirebaseProvider>
				</PersistGate>
			</Provider>
		</div>
	</React.StrictMode >,
	document.getElementById("root")
);
reportWebVitals();
