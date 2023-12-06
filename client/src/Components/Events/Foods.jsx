import data from "../../Datafood.json"


import { useRef, useState } from "react";
import Calendar from "react-calendar";
import { BsCalendarDate } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

import "react-calendar/dist/Calendar.css";
import { IoIosArrowForward } from "react-icons/io";

import { Link, useParams } from "react-router-dom";
function Foods() {
  const [value, onChange] = useState(new Date());
  const [calander, setCalander] = useState(false);

  const { places } = useParams();

  const VanComponent = ({ van }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="van-tile bg-white relative  flex justify-center items-center drop-shadow	 p-8 hover:opacity-80 transition-opacity "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={`foods/$`}>
          <AiOutlinePlus
            className={`${
              isHovered ? "opacity-100" : "opacity-0"
            }  absolute w-20 top-1/2 left-1/2 text-6xl   text-white transition-opacity translate-x-[-50%] translate-y-[-50%]`}
          />

          <img
            className="min-w-[230px] h-[250px] md:h-[300px] rounded"
            src={van.img}
          />
          <div className="van-info text-center">
            <h3>{van.name}</h3>
            <p>
              ${van.price}
              <span>${van.place}</span>
            </p>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div className="relative w-full  flex flex-col">
      <nav className="border-[gray] border-b-2 sticky z-30 top-16 bg-[#f7f7f7d6]  h-20 flex items-center justify-around ">
        <div className=" left-32 lg:text-lg md:left-96 flex items-center justify-center font-thin">
          <h3 className="capitalize">Category</h3>
          <IoIosArrowForward className=" " />
          <h3 className="capitalize">{places}</h3>
        </div>
        <BsCalendarDate
          className="text-2xl  right-10 md:right-20 cursor-pointer"
          onClick={() => setCalander(!calander)}
        />
        <Calendar
          className={`fixed  top-40 transition-all duration-200 right-5	 md:right-20    ${
            calander ? "visible " : "invisible opacity-0"
          }`}
          onChange={onChange}
          value={value}
        />
      </nav>
      <div className="box container	grid grid-cols-1 auto-cols-fr	 md:grid-cols-2  xl:grid-cols-3  gap-10 p-10 justify-center   justify-items-center z-20">
        {data.map((van, i) => (
          <VanComponent key={i} van={van} />
        ))}
      </div>
    </div>
  );
}

export default Foods;
