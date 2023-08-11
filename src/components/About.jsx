// Material UI Imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import FestivalOutlinedIcon from "@mui/icons-material/FestivalOutlined";
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
        minHeight: "35rem",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "secondary.main",
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
            <Stack alignItems="center" spacing={2}>
              <Typography
                variant={isSmallScreen ? "h5" : "h4"}
                component="h3"
                sx={{
                  background: theme.palette.primary.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                4+ MILES
              </Typography>
              <Stack
                direction={isSmallScreen ? "row" : "column"}
                alignItems="center"
                spacing={isSmallScreen ? 6 : 12}
              >
                <BiRun style={{ color: theme.palette.primary.main }} />
                <MdOutlineForest
                  style={{ color: theme.palette.primary.main }}
                />
                <PiMountainsBold
                  style={{ color: theme.palette.primary.main }}
                />
                <GrSwim style={{ color: theme.palette.primary.main }} />
              </Stack>
            </Stack>
            <Stack alignItems="center" spacing={2}>
              <Typography
                variant={isSmallScreen ? "h5" : "h4"}
                component="h3"
                sx={{
                  background: theme.palette.primary.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                10+ OBSTACLES
              </Typography>
              <Stack
                direction={isSmallScreen ? "row" : "column"}
                alignItems="center"
                spacing={isSmallScreen ? 6 : 12}
              >
                <BiSolidTrafficBarrier
                  style={{ color: theme.palette.primary.main }}
                />
                <GiJumpAcross style={{ color: theme.palette.primary.main }} />
                <GiJumpingRope style={{ color: theme.palette.primary.main }} />
                <FaPeopleCarry style={{ color: theme.palette.primary.main }} />
              </Stack>
            </Stack>
            <Stack alignItems="center" spacing={2}>
              <Typography
                variant={isSmallScreen ? "h5" : "h4"}
                component="h3"
                sx={{
                  background: theme.palette.primary.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                FESTIVAL
              </Typography>
              <Stack
                direction={isSmallScreen ? "row" : "column"}
                alignItems="center"
                spacing={isSmallScreen ? 6 : 12}
              >
                <FestivalOutlinedIcon color="primary" sx={{ fontSize: 60 }} />
                <FastfoodOutlinedIcon color="primary" sx={{ fontSize: 60 }} />
                <GiMusicalNotes style={{ color: theme.palette.primary.main }} />
                <GiSportMedal style={{ color: theme.palette.primary.main }} />
              </Stack>
            </Stack>
          </IconContext.Provider>
        </Stack>
      </Container>
    </Box>
  );
}
