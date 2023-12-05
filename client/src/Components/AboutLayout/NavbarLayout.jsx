import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faHistory, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div className="text-white p-4" style={{ background: "#9ca38a" }}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-60">
          <NavLink
            to="/about/who"
            activeClassName="border-b-2 border-white"
            className="flex items-center text-lg font-semibold hover:text-gray-900 transition duration-300"
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Who we are
          </NavLink>
          <NavLink
            to="/about/getintouch"
            activeClassName="border-b-2 border-white"
            className="flex items-center text-lg font-semibold hover:text-gray-900 transition duration-300"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Get in Touch
          </NavLink>
          <NavLink
            to="/about/history"
            activeClassName="border-b-2 border-white"
            className="flex items-center text-lg font-semibold hover:text-gray-900 transition duration-300"
          >
            <FontAwesomeIcon icon={faHistory} className="mr-2" />
            History
          </NavLink>
          <NavLink
            to="/about/location"
            activeClassName="border-b-2 border-white"
            className="flex items-center text-lg font-semibold hover:text-gray-900 transition duration-300"
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            Location
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



