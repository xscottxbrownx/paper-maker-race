// React Router Imports
import { Link as RouterLink } from "react-router-dom";
// Material UI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import DirectionsRunOutlinedIcon from "@mui/icons-material/DirectionsRunOutlined";
import Typography from "@mui/material/Typography";
// Component Imports
import theme from "../theme";

export default function Register() {
  return (
    <Box
      // id="Register"
      sx={{
        minHeight: "35rem",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "primary.main",
        px: "3rem",
        py: "6rem",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        {/* <Typography
          variant="h2"
          component="h1"
          mb={4}
          sx={{
            background: theme.palette.primary.gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          MUDDY ADVENTURE AWAITS
          <br />
          AT PAPER MAKER 2024
        </Typography> */}
        <Typography
          variant="h5"
          component="p"
          color="secondary"
          mb={8}
          lineHeight={2}
        >
          The Paper Maker is returning to Round Lake in Camas, WA for 2024!
          <br />
          Join us on August 10<sup>th</sup> for a race that not only is great
          for families, but the competitive athlete as well.
          <br /> We will have cash prizes for the top 3 finishers of the
          competitive wave, as well as many friendly volunteers and
          photographers for the open wave.
          <br /> Bring your friends and support a local OCR created by those who
          love the sport!
        </Typography>
        <Button
          variant="contained"
          component={RouterLink}
          to="https://fwb.pushpress.com/open/events?fbclid=IwAR1tdsvyhGv0JAXYbUWncd2GoepXo2jrMEI8ZHlESHBcGyw0Br3fqPjcfm4"
          target="_blank"
          rel="noopener"
          size="large"
          startIcon={<DirectionsRunOutlinedIcon />}
          className="button-grow"
          sx={{
            background: theme.palette.primary.gradient,
            color: "secondary",
            fontWeight: "bold",
          }}
        >
          REGISTER NOW
        </Button>
      </Container>
    </Box>
  );
}
