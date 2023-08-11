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

  const style = {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 50,
    left: "auto",
    position: "fixed",
    background: theme.palette.primary.gradient,
  };

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Fab
        color="primary"
        style={style}
        aria-label="scroll back to top"
        href="#top"
        className="button-grow"
      >
        <KeyboardArrowUpIcon />
      </Fab>
      {/* <Newsletter /> */}
      <Footer />
    </>
  );
}
