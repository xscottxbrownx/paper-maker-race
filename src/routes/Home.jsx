// React Imports
import { useEffect, useState } from "react";
// Material UI Imports
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useTheme } from "@mui/material/styles";
// Component Imports
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Opportunities from "../components/Opportunities";
import Photos from "../components/Photos";
import Register from "../components/Register";
import Team from "../components/Team";

export default function Home() {
  const theme = useTheme();

  // Hide FAB until user has scrolled down page a ways
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 425 && !showFab) {
        setShowFab(true);
      } else if (window.scrollY < 425 && showFab) {
        setShowFab(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Register />
        <About />
        <Photos />
        <Opportunities />
        <Team />
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
