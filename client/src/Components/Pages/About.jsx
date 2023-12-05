import { Outlet } from "react-router-dom";
import Navbar from "../AboutLayout/NavbarLayout";
function About() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default About;
