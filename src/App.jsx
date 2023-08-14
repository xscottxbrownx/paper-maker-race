// React Router Imports
import { Routes, Route } from "react-router-dom";
// Component Imports
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
// import Layout from "../layouts/Layout.jsx";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* <Route exact path="/" element={<Layout />} >
        <Route path="Home" element={<Home />} />
      </Route> */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
