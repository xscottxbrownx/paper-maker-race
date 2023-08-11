// Material UI Imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
// Component Imports
import TeamCard from "./TeamCard";
import theme from "../theme";
// Asset Imports
import Bennie from "../assets/Bennie.png";
import Ryan from "../assets/Ryan.png";

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
        background: theme.palette.primary.gradient,
        px: "3rem",
        py: "6rem",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography
          variant={isSmallScreen ? "h4" : "h3"}
          component="h2"
          color="primary"
        >
          MEET THE TEAM
        </Typography>
        <Divider sx={{ borderBottomWidth: 2, mt: 1 }} />
        <Stack
          direction={isSmallScreen ? "column" : "row"}
          justifyContent="center"
          alignItems="center"
          spacing={4}
          mt={6}
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
      </Container>
    </Box>
  );
}
