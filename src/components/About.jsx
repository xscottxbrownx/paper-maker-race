// Material UI Imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import FestivalOutlinedIcon from "@mui/icons-material/FestivalOutlined";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
// React Icons Imports
import { IconContext } from "react-icons";
import { BiRun, BiSolidTrafficBarrier } from "react-icons/bi";
import { FaPeopleCarry } from "react-icons/fa";
import {
  GiJumpAcross,
  GiJumpingRope,
  GiMusicalNotes,
  GiSportMedal,
} from "react-icons/gi";
import { GrSwim } from "react-icons/gr";
import { MdOutlineForest } from "react-icons/md";
import { PiMountainsBold } from "react-icons/pi";
// Component Imports
import theme from "../theme";

export default function About() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="About"
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "secondary.main",
        px: "3rem",
        py: "4rem",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography
          variant={isSmallScreen ? "h4" : "h3"}
          component="h2"
          color="primary"
        >
          WHAT IS PAPER MAKER?
        </Typography>
        <Divider
          sx={{ borderBottomWidth: 2, bgcolor: "secondary.main", mt: 1 }}
        />
        <Stack
          direction={isSmallScreen ? "column" : "row"}
          justifyContent="center"
          alignItems="center"
          spacing={isSmallScreen ? 6 : 12}
          mt={6}
        >
          <IconContext.Provider value={{ size: isSmallScreen ? "3em" : "4em" }}>
            <Stack sx={{ justifyContent: "space-between" }}>
              <Typography
                variant={isSmallScreen ? "h5" : "h4"}
                component="h3"
                mb={1}
                sx={{
                  background: theme.palette.primary.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                4+ MILES
              </Typography>
              <Grid container justifyContent="center">
                <Grid item xs={5}>
                  <BiRun style={{ color: theme.palette.primary.main }} />
                </Grid>
                <Grid item xs={5}>
                  <MdOutlineForest
                    style={{ color: theme.palette.primary.main }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <PiMountainsBold
                    style={{ color: theme.palette.primary.main }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <GrSwim style={{ color: theme.palette.primary.main }} />
                </Grid>
              </Grid>
            </Stack>
            <Stack alignItems="center">
              <Typography
                variant={isSmallScreen ? "h5" : "h4"}
                component="h3"
                mb={1}
                sx={{
                  background: theme.palette.primary.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                10+ OBSTACLES
              </Typography>
              <Grid container justifyContent="center">
                <Grid item xs={5}>
                  <BiSolidTrafficBarrier
                    style={{ color: theme.palette.primary.main }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <GiJumpAcross style={{ color: theme.palette.primary.main }} />
                </Grid>
                <Grid item xs={5}>
                  <GiJumpingRope
                    style={{ color: theme.palette.primary.main }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <FaPeopleCarry
                    style={{ color: theme.palette.primary.main }}
                  />
                </Grid>
              </Grid>
            </Stack>
            <Stack alignItems="center">
              <Typography
                variant={isSmallScreen ? "h5" : "h4"}
                component="h3"
                mb={1}
                sx={{
                  background: theme.palette.primary.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                FESTIVAL
              </Typography>
              <Grid container justifyContent="center">
                <Grid item xs={5}>
                  <FestivalOutlinedIcon color="primary" sx={{ fontSize: 60 }} />
                </Grid>
                <Grid item xs={5}>
                  <FastfoodOutlinedIcon color="primary" sx={{ fontSize: 60 }} />
                </Grid>
                <Grid item xs={5}>
                  <GiMusicalNotes
                    style={{ color: theme.palette.primary.main }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <GiSportMedal style={{ color: theme.palette.primary.main }} />
                </Grid>
              </Grid>
            </Stack>
          </IconContext.Provider>
        </Stack>
      </Container>
    </Box>
  );
}
