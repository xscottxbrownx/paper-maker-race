// Material UI Imports
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
// Component Imports
import TeamCard from "./TeamCard";
import theme from "../theme";
// Asset Imports
import Bennie from "../assets/Bennie.webp";
import Ryan from "../assets/Ryan.webp";

export default function Team() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="Team"
      sx={{
        minHeight: "35rem",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "secondary.main",
        px: "3rem",
        py: isSmallScreen ? null : "4rem",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: isSmallScreen ? "100vw" : "95vw",
          background: theme.palette.primary.gradient,
          px: "3rem",
          pt: "3rem",
          pb: "4rem",
          textAlign: "center",
          borderRadius: isSmallScreen ? null : "20px",
        }}
      >
        <Typography
          variant={isSmallScreen ? "h4" : "h3"}
          component="h2"
          color="primary"
          sx={{ fontFamily: "Alegreya Sans SC, sans-serif" }}
        >
          FOUNDERS
        </Typography>
        <Stack
          direction={isSmallScreen ? "column" : "row"}
          justifyContent="center"
          alignItems="center"
          spacing={12}
          mt={6}
          mb={4}
        >
          <TeamCard
            cardLink="https://www.facebook.com/bennie.crocker.9"
            imgSrc={Bennie}
            imgAlt="Bennie Crocker"
            name="Bennie Crocker"
            blurb="Owner of Fitness With Bennies, personal trainer, and lover of OCR"
            buttonLink="https://fitnesswithbennies.com/"
            buttonText="Visit Fitness With Bennies"
          />
          <TeamCard
            cardLink="https://www.facebook.com/ryan.polin.9"
            imgSrc={Ryan}
            imgAlt="Ryan Polin"
            name="Ryan Polin"
            blurb="Owner of Proprioception, personal trainer, and lover of OCR"
            buttonLink="https://www.facebook.com/proprio.ft/"
            buttonText="Visit Proprioception"
          />
        </Stack>
      </Box>
    </Box>
  );
}
