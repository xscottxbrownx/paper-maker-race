import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: { fontFamily: "Roboto, sans-serif" },
  palette: {
    primary: {
      main: "#300D0D",
      gradient:
        "linear-gradient(225deg, rgba(246,54,68,0.9) 20%, rgba(246,152,119,0.9) 80%)",
    },
    secondary: {
      main: "#EBEBEB",
    },
    tertiary: {
      main: "#707070",
    },
  },
});

export default theme;
