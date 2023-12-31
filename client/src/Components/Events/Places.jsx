import { FaRegEye } from "react-icons/fa";

<<<<<<< HEAD
// import data from "../../data.json";
=======
>>>>>>> 8431062b1fe158cec689ffee32eeabf3e8629e4b
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { MyContext } from "../../MyContext.jsx";

function Places() {
  const { places ,reserved} = useContext(MyContext);

  const EventComponent = ({ event }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="event-tile bg-white relative  flex justify-center items-center drop-shadow-md p-5 hover:opacity-80 transition-opacity "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <NavLink to={`/events/places/${event.name}`}>
          <FaRegEye
            className={`${isHovered ? "opacity-100" : "opacity-0"
              }  absolute w-20 top-1/2 left-1/2 text-5xl   text-[#ffffff99] transition-opacity translate-x-[-50%] translate-y-[-50%]`}
          />

          <img
            className="min-w-[230px] h-[250px] md:h-[300px] rounded"
            src={event.image}
          />
          <div className="event-info mt-5">
            <h2 className="font-bold text-xl text-center">{event.name}</h2>
            <p className="text-lg">
              <strong>Price :</strong> ${event.price}
            </p>
            <p className="text-lg">
              <strong>Location :</strong> {event.location}
            </p>

         
          </div>
        </NavLink>
      </div>
    );
  };

  return (
    <div className="box container	grid grid-cols-1 auto-cols-fr	 md:grid-cols-2  xl:grid-cols-3  gap-10 p-10 justify-center   justify-items-center z-20">
      {places.map((event, i) => (
        <EventComponent key={i} event={event} />
      ))}
    </div>
  );
}

export default Places;
