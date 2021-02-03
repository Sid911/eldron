import { createMuiTheme } from "@material-ui/core";
import "@material-ui/core/colors/index";
import { blue, blueGrey } from "@material-ui/core/colors/index";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[900],
    },
  },
});

export default theme;
