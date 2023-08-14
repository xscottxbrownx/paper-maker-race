// React Imports
import { useState } from "react";
import PropTypes from "prop-types";
// React Router Imports
import { NavHashLink as NavLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
// Material UI Imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
// Component Imports
import ROUTES from "../constants/NavlinkList";
import theme from "../theme";
// Asset Imports
import fullLogoGrey from "../assets/PaperMakerLogoGrey.png";
import pLogoGrey from "../assets/PaperMakerLogoPGrey.png";

export default function DrawerAppBar({ window }) {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  // NOT WORKING
  let location = useLocation();

  // ====== EVERYTHING FOR DRAWER, MOBILE NAVIGATION ======
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        paddingTop: "3rem",
        backgroundColor: "secondary.main",
        height: "100vh",
      }}
    >
      <NavLink to="/Home#top">
        <img src={pLogoGrey} width={200} />
      </NavLink>
      <Divider />
      <List>
        {ROUTES.map((item) => (
          <ListItem
            key={item}
            disablePadding
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <NavLink
              key={item}
              to={
                item === "Volunteer" || item === "Sponsor"
                  ? `#Opportunities`
                  : `#${item}`
              }
              style={{
                fontWeight: location.pathname === `/Home#${item}` ? "bold" : "",
                color:
                  location.pathname === `/Home#${item}`
                    ? null
                    : theme.palette.primary.main,
                textDecoration: "none",
                background:
                  location.pathname === `/Home#${item}`
                    ? theme.palette.primary.gradient
                    : null,
                WebkitBackgroundClip:
                  location.pathname === `/Home#${item}` ? "text" : null,
                WebkitTextFillColor:
                  location.pathname === `/Home#${item}` ? "transparent" : null,
              }}
            >
              {item}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav" color="secondary" elevation={8}>
        <Toolbar>
          <NavLink to="/#top">
            <img src={fullLogoGrey} width={isSmallScreen ? 200 : 300} />
          </NavLink>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {ROUTES.map((item) => {
              return (
                <NavLink
                  key={item}
                  to={
                    item === "Volunteer" || item === "Sponsor"
                      ? `#Opportunities`
                      : `#${item}`
                  }
                  style={{
                    color:
                      location.pathname === `/Home#${item}`
                        ? null
                        : theme.palette.primary.main,
                    textDecoration: "none",
                    margin: "0 10px",
                    fontWeight:
                      location.pathname === `/Home#${item}` ? "bold" : "",
                    background:
                      location.pathname === `/Home#${item}`
                        ? theme.palette.primary.gradient
                        : null,
                    WebkitBackgroundClip:
                      location.pathname === `/Home#${item}` ? "text" : null,
                    WebkitTextFillColor:
                      location.pathname === `/Home#${item}`
                        ? "transparent"
                        : null,
                  }}
                >
                  {item}
                </NavLink>
              );
            })}
          </Box>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE NAV DRAWER */}
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "240px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

DrawerAppBar.propTypes = { window: PropTypes.object };
