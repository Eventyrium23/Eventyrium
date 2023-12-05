
import { Outlet } from "react-router-dom";
import Navbar from "../AboutLayout/NavbarLayout";
function About() {
  return (
    <div className="about  mt-4">
    
      <Navbar />
      <Outlet />
    </div>
  );
}

export default About;