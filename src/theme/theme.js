import { createTheme } from "@mui/material/styles";
import typography from "./typography";

// ----------------------------------------------------------------------

const theme = createTheme({
  mode: "light",
  typography: typography,

  palette: {
    primary: {
      main: "#FA541A",
      dark: "#212B36",
      darker: "#770508",
    },
    secondary: {
      light: "#FFFFF",
      main: "#212B36",
    },
    text: {
      primary: "#212B36",
    },
    info: {
      main: "#2094D5",
    },
    error: {
      main: "#B40516",
    },
  },
});

export default theme;
