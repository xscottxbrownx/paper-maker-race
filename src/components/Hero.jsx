// Material UI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "../theme";
import useMediaQuery from "@mui/material/useMediaQuery";
// Asset Imports
import HeroPhoto from "../assets/Slides3.png";

export default function Hero() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        paddingTop: "65px",
        height: "100vh",
        width: "100vw",
        backgroundColor: "secondary",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <img
        src={HeroPhoto}
        alt="athlete crawling through mud pit"
        height="100%"
        width="100%"
        style={{ objectFit: "cover" }}
      />
      <Box
        id="Register"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          px: "25px",
          py: "10px",
          backgroundColor: "rgba(48,13,13,0.5)",
        }}
      >
        <Typography
          variant={isSmallScreen ? "h4" : "h2"}
          component="h1"
          sx={{
            background: theme.palette.primary.gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ADVENTURE AWAITS
          <br />
          AT PAPER MAKER 2024
        </Typography>
      </Box>
    </Box>
  );
}
