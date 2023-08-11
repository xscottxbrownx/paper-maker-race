// React Router Imports
import { Routes, Route } from "react-router-dom";
// Component Imports
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import Layout from "../src/layouts/Layout";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Layout />}>
        <Route path="Home" element={<Home />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
