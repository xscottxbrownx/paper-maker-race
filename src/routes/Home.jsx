// Component Imports
import About from "../components/About";
import Hero from "../components/Hero";
import Opportunities from "../components/Opportunities";
import Photos from "../components/Photos";
import Register from "../components/Register";
import Team from "../components/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <Register />
      <About />
      <Photos />
      <Opportunities />
      <Team />
    </>
  );
}
