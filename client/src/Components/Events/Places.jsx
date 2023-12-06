import { AiOutlinePlus } from "react-icons/ai";

import "react-calendar/dist/Calendar.css";
import data from "../../data.json";
import { Link } from "react-router-dom";
import { useState } from "react";
function Places() {
  const EventComponent = ({ event }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="event-tile bg-white relative  flex justify-center items-center drop-shadow-md p-8 hover:opacity-80 transition-opacity "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={`/events/places/${event.id}`}>
          <AiOutlinePlus
            className={`${
              isHovered ? "opacity-100" : "opacity-0"
            }  absolute w-20 top-1/2 left-1/2 text-6xl   text-white transition-opacity translate-x-[-50%] translate-y-[-50%]`}
          />

          <img
            className="min-w-[230px] h-[250px] md:h-[300px] rounded"
            src={event.img}
          />
          <div className="event-info ">
            <h3>{event.name}</h3>
            <p>${event.price}</p>
            <p>{event.place}</p>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div className="box container	grid grid-cols-1 auto-cols-fr	 md:grid-cols-2  xl:grid-cols-3  gap-10 p-10 justify-center   justify-items-center z-20">
      {data.map((event, i) => (
        <EventComponent key={i} event={event} />
      ))}
    </div>
  );
}

export default Places;
