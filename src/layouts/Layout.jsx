// React Imports
import { useEffect, useState } from "react";
// React Router Imports
import { Outlet } from "react-router-dom";
// Material UI Imports
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useTheme } from "@mui/material/styles";
// Component Imports
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Newsletter from "../components/Newsletter";

export default function Layout() {
  const theme = useTheme();

  // Hide FAB until user has scrolled down page a ways
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 425) {
        setShowFab(true);
      } else {
        setShowFab(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {showFab && (
        <Fab
          color="primary"
          aria-label="scroll back to top"
          href="#top"
          className="button-grow"
          sx={{
            margin: 0,
            top: "auto",
            right: 20,
            bottom: 50,
            left: "auto",
            position: "fixed",
            background: theme.palette.primary.gradient,
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}
      {/* <Newsletter /> */}
      <Footer />
    </>
  );
}
