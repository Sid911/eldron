import { createMuiTheme } from "@material-ui/core";
import "@material-ui/core/colors/index";
import { yellow } from "@material-ui/core/colors";

const theme = createMuiTheme({
	neon: {
		accent: "#FFF700",
	},
	palette: {
		type: "dark",
		primary: {
			main: yellow["A400"]
		},
	},
});

export default theme;
