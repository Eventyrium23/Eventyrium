import React, { useState } from "react";
import { Drawer } from "@material-tailwind/react";
import LOGO from "../../../assets/AdminsPic/LOGO.png";
import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";

const SideBardDashboard = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const [view, setView] = useState("drawer");

  function logout() {
    window.localStorage.removeItem("adminToken")
  }
  return (
    <>
      <div className="h-screen max-w-[90px] w-full  flex justify-center items-center cursor-pointer  " onMouseEnter={openDrawer}>
        <CiMenuBurger />
      </div>
      <Drawer open={open} onMouseLeave={closeDrawer} className="w-[300px] ">
        <div className="grid g rid-cols-1 justify-center justify-items-center items-center  pb-2">
          <img className="w-3/5" src={LOGO} />
          {view !== "drawer" && (
            <MdOutlineBackspace onClick={() => setView("drawer")} />
          )}
        </div>
        <ul className=" relative flex w-full flex-col gap-10 text-md mt-8">
          <li className=" relative ml-7 rounded-l-md bg-mainHeader text-white text-xl rounded-sm hover:bg-[#eee] hover:text-[#383030] cursor-pointer transition-colors h-12 flex items-center">
            <NavLink
              to=""
              className={`pl-10 ${({ isActive }) => {

                isActive && "bg-[#eee] w-full h-full"
              }}`
              }
            >
              Profile
            </NavLink>
          </li>
          <li className=" relative ml-7 rounded-l-md bg-mainHeader text-white text-xl rounded-sm hover:bg-[#eee] hover:text-[#383030] cursor-pointer transition-colors h-12 flex items-center">
            <NavLink
              to="organization"
              className={`pl-10 ${({ isActive }) => {

                isActive && "bg-[#eee] w-full h-full"
              }}`
              }
            >
              Organization
            </NavLink>
          </li>
          <li className=" relative ml-7 rounded-l-md bg-mainHeader text-white text-xl rounded-sm hover:bg-[#eee] hover:text-[#383030] cursor-pointer transition-colors h-12 flex items-center">
            <NavLink
              to="clientsTable"
              className={`pl-10 ${({ isActive }) => {

                isActive && "bg-[#eee] w-full h-full"
              }}`
              }
            >
              Clients Table
            </NavLink>
          </li>
          <li className=" relative ml-7 rounded-l-md bg-mainHeader text-white text-xl rounded-sm hover:bg-[#eee] hover:text-[#383030] cursor-pointer transition-colors h-12 flex items-center">
            <NavLink
              to="feedBacks"
              className={`pl-10 ${({ isActive }) => {

                isActive && "bg-[#eee] w-full h-full"
              }}`
              }
            >
              FeedBacks
            </NavLink>
          </li>
          <li className=" relative ml-7 rounded-l-md bg-mainHeader text-white text-xl rounded-sm hover:bg-[#eee] hover:text-[#383030] cursor-pointer transition-colors h-12 flex items-center">
            <NavLink
              to="/admin/register"
              className={`pl-10 ${({ isActive }) => {

                isActive && "bg-[#eee] w-full h-full"
              }}`
              }
            >
              Register
            </NavLink>
          </li>
          <li onClick={logout} className=" cursor-pointer text-center">
            <NavLink
              to="/admin/login"

            >
              Logout
            </NavLink>
          </li>
        </ul>
      </Drawer>
    </>
  );
};
export default SideBardDashboard;
