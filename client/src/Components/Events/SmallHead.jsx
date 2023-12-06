import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { BsCalendarDate } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";

function SmallHead() {
  const [value, onChange] = useState(new Date());
  const [calander, setCalander] = useState(false);
  const location = useLocation();
  const paths = location.pathname.split("/");

  const path = paths.slice(2, -1); // Extract the relevant part of the paths array

  return (
    <nav className="border-[gray] border-b-2 sticky z-30 top-16 bg-[#f7f7f7d6]  h-20 flex items-center justify-around ">
      <div className="left-32 lg:text-lg md:left-96 flex items-center justify-center font-thin">
        <h3 className="capitalize">Category</h3>
        {path.map((segment, i) => (
          <div className="flex items-center" key={i}>
            <IoIosArrowForward className=" " />
            <NavLink to={`/events/${segment}`}>
              <h3 className="capitalize">{segment}</h3>
            </NavLink>
          </div>
        ))}
        <IoIosArrowForward className=" " />
        <h3 className="capitalize">{paths[paths.length - 1]}</h3>
      </div>

      <BsCalendarDate
        className="text-2xl right-10 md:right-20 cursor-pointer"
        onClick={() => setCalander(!calander)}
      />

      <Calendar
        className={`fixed top-40 transition-all duration-200 right-5 md:right-20  ${
          calander ? "visible " : "invisible opacity-0"
        }`}
        onChange={onChange}
        value={value}
      />
    </nav>
  );
}

export default SmallHead;
