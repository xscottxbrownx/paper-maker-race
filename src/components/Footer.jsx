// React Router Imports
import { Link as RouterLink } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
// Material UI Imports
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
// React Icons Imports
import { IconContext } from "react-icons";
// Component Imports
import ROUTES from "../constants/NavlinkList";
import SOCIALS from "../constants/SocialsList";
import theme from "../theme";
// Asset Imports
import fullLogoGrey from "../assets/PaperMakerLogoGrey.png";

export default function Footer() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isNormalScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const determineNavlinkMargin = isNormalScreen ? "0.5rem" : "1.5rem";

  return (
    <footer
      style={{
        width: "100vw",
        backgroundColor: theme.palette.secondary.main,
        textAlign: "center",
        paddingBottom: "2rem",
      }}
    >
      <Container>
        <Stack
          direction={isSmallScreen ? "column" : "row"}
          justifyContent="space-between"
          alignItems="center"
          mb={isSmallScreen ? null : 6}
        >
          {/* SOCIALS */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mb: isSmallScreen ? "2rem" : null,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                background: theme.palette.primary.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Connect With Us
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: isNormalScreen ? "10px" : "20px",
              }}
            >
              <IconContext.Provider
                value={{ color: theme.palette.primary.main, size: "2rem" }}
              >
                {SOCIALS.map(({ url, icon }) => (
                  <Link
                    key={icon}
                    component={RouterLink}
                    to={url}
                    target="_blank"
                    rel="noopener"
                    underline="none"
                    className="button-grow"
                  >
                    {icon}
                  </Link>
                ))}
              </IconContext.Provider>
            </Box>
          </Box>

          {/* NAVLINKS */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mb: isSmallScreen ? "3.5rem" : null,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                background: theme.palette.primary.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Links
            </Typography>
            <Box
              sx={{
                display: "flex",
              }}
            >
              {ROUTES.map((item) => (
                <NavLink
                  key={item}
                  to={
                    item === "Volunteer" || item === "Sponsor"
                      ? `#Opportunities`
                      : `#${item}`
                  }
                  style={{
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                    marginLeft:
                      item === ROUTES[0] ? null : determineNavlinkMargin,
                  }}
                >
                  {item}
                </NavLink>
              ))}
            </Box>
          </Box>

          {/* LOGO */}
          {!isSmallScreen && (
            <NavLink to="/Home#top">
              <img src={fullLogoGrey} width={300} />
            </NavLink>
          )}
        </Stack>

        {/* LEGALS */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color={theme.palette.tertiary.main}>
            © 2023 Paper Maker Inc.
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            variant="body2"
            color={theme.palette.tertiary.main}
            sx={{ cursor: "pointer" }}
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="body2"
            color={theme.palette.tertiary.main}
            sx={{ mx: "0.5rem" }}
          >
            |
          </Typography>
          <Typography
            variant="body2"
            color={theme.palette.tertiary.main}
            sx={{ cursor: "pointer" }}
          >
            Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </footer>
  );
}
