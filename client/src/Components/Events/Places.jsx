import { useState } from "react";
import Calendar from "react-calendar";
import { BsCalendarDate } from "react-icons/bs";

import "react-calendar/dist/Calendar.css";
import { IoIosArrowForward } from "react-icons/io";
import data from "../../data.json";
import { Link, useParams } from "react-router-dom";
function Places() {
  const [value, onChange] = useState(new Date());
  const [calander, setCalander] = useState(false);
  const { places } = useParams();
  const placee = data.map((van) => (
    <div key={van.id} className="van-tile bg-white  flex justify-center items-center  shadow-lg shadow-cyan-500/50 p-8 " >
      <Link to={`/events/places/${van.id}`}>
        <img className="min-w-[200px] h-[300px] rounded" src={van.img} />
        <div className="van-info text-center">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>${van.place}</span>
          </p>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="relative w-full  flex flex-col">
      <nav className="border-[gray] border-b-2 sticky top-16 bg-[#f7f7f7d6]  h-20 flex items-center justify-around ">

        <div className=" left-32 lg:text-lg md:left-96 flex items-center justify-center font-thin">
          <h3 className="">Category</h3>
          <IoIosArrowForward className=" " />
          <h3 className="">{places}</h3>
        </div>
        <BsCalendarDate
          className="text-2xl  right-10 md:right-20 cursor-pointer"
          onClick={() => setCalander(!calander)}
        />
        <Calendar
          className={`fixed  top-40 transition-all duration-200 right-5	 md:right-20    ${calander ? "visible " : "invisible opacity-0"
            }`}
          onChange={onChange}
          value={value}
        />
      </nav>
      <div className="box container	  grid grid-cols-1 auto-cols-fr	 md:grid-cols-2  xl:grid-cols-3  gap-10 p-10 justify-center   justify-items-center">{placee}</div>
    </div>
  );
}

export default Places;
