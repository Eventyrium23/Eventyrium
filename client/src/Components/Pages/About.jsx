import { Outlet } from "react-router-dom";
import Navbar from "../AboutLayout/NavbarLayout";
function About() {
  return (
    <div className="about h-screen w-screen ">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default About;
