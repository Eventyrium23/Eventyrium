import React from "react";
import { NavLink } from "react-router-dom";
import { SiCyberdefenders } from "react-icons/si";
import { MdContactMail } from "react-icons/md";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
const Navbar = () => {
  return (

    <div className="text-white p-4 w-full" style={{ background: "#9ca38a" }}>
      <div className="container mx-auto flex items-center justify-center ">
        <div className="flex items-center  justify-around gap-10">
          <NavLink
            to="/about"
            activeClassName="border-b-2 border-white"
            className="flex items-center text-lg font-semibold hover:text-gray-900 transition duration-300"
          >
            <SiCyberdefenders className="mr-2" />
            Who we are
          </NavLink>
          <NavLink
            to="/about/getintouch"
            activeClassName="border-b-2 border-white"
            className="flex items-center text-lg font-semibold hover:text-gray-900 transition duration-300"
          >
            <MdContactMail className="mr-2" />
            Get in Touch
          </NavLink>
          <NavLink
            to="/about/history"
            activeClassName="border-b-2 border-white"
            className="flex items-center text-lg font-semibold hover:text-gray-900 transition duration-300"
          >
            <MdOutlineHistoryEdu className="mr-2" />
            History
          </NavLink>
          <NavLink
            to="/about/location"
            activeClassName="border-b-2 border-white"
            className="flex items-center text-lg font-semibold hover:text-gray-900 transition duration-300"
          >
            <FaMapLocationDot className="mr-2" />
            Location
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
