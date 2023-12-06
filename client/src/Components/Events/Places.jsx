import { FaRegEye } from "react-icons/fa";

import "react-calendar/dist/Calendar.css";
import data from "../../data.json";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { MyContext } from "../../MyContext.jsx";
function Places() {

 const {places}=useContext(MyContext)
console.log(places);
  const EventComponent = ({ event }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="event-tile bg-white relative  flex justify-center items-center drop-shadow-md p-5 hover:opacity-80 transition-opacity "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={`/events/places/${event.name}`}>
          <FaRegEye
            className={`${
              isHovered ? "opacity-100" : "opacity-0"
            }  absolute w-20 top-1/2 left-1/2 text-5xl   text-[#ffffff99] transition-opacity translate-x-[-50%] translate-y-[-50%]`}
          />

          <img
            className="min-w-[230px] h-[250px] md:h-[300px] rounded"
            src={event.img}
          />
          <div className="event-info mt-5">
            <h2 className="font-bold text-xl text-center">{event.name}</h2>
            <p className="text-lg">
              <strong>Price :</strong> ${event.price}
            </p>
            <p className="text-lg">
              <strong>Place :</strong> {event.place}
            </p>
          </div>
        </Link>
      </div>
    );
  };

  return (
<<<<<<< HEAD
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
=======
    <div className="box container	grid grid-cols-1 auto-cols-fr	 md:grid-cols-2  xl:grid-cols-3  gap-10 p-10 justify-center   justify-items-center z-20">
      {data.map((event, i) => (
        <EventComponent key={i} event={event} />
      ))}
>>>>>>> d6e055db1f3d2f510f38f41348dbd127ff68b8f8
    </div>
  );
}

export default Places;
