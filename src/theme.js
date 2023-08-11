import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: { fontFamily: "Roboto, sans-serif" },
  palette: {
    primary: {
      main: "#300D0D",
      // main: "#510D0D",
      // mainGradient:
      //   "linear-gradient(225deg, rgba(17,108,192,1) 2%, rgba(95,171,241,1) 97%)",
      gradient:
        "linear-gradient(225deg, rgba(246,54,68,0.9) 20%, rgba(246,152,119,0.9) 80%)",
      // "linear-gradient(225deg, rgba(246,79,55,0.9) 20%, rgba(246,152,119,0.9) 80%)",
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
