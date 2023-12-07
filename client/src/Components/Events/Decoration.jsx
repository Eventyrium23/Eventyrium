import { FaRegEye } from "react-icons/fa";
import "react-calendar/dist/Calendar.css";
// import data from "../../DataDeco.json";
import {  NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { MyContext } from "../../MyContext.jsx";

function Decoration() {
  const {decorations}=useContext(MyContext)
  const DecorationComponent = ({ decoration }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="deco-tile bg-white relative flex justify-center items-center drop-shadow-md p-8 hover:opacity-80 transition-opacity"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <NavLink to={`/events/decorations/${decoration.name}`}>
          <FaRegEye
            className={`${
              isHovered ? "opacity-100" : "opacity-0"
            } absolute w-20 top-1/2 left-1/2 text-5xl text-[#ffffff99] transition-opacity translate-x-[-50%] translate-y-[-50%]`}
          />

          <img
            className="min-w-[230px] h-[250px] md:h-[300px] rounded"
            src={decoration.img}
            alt={decoration.name}
          />
          <div className="deco-info text-center mt-4">
  <h3 className="text-xl font-semibold text-gray-800">{decoration.name}</h3>
  <p className="text-sm text-gray-600">{decoration.stack} in stock</p>
  <p className="text-lg font-bold text-green-600">${decoration.price}</p>
</div>
        </NavLink>
      </div>
    );
  };

  return (
    <div className="box container grid grid-cols-1 auto-cols-fr md:grid-cols-2 xl:grid-cols-3 gap-10 p-10 justify-center justify-items-center z-20">
      {decorations.map((decoration, i) => (
        <DecorationComponent key={i} decoration={decoration} />
      ))}
    </div>
  );
}

export default Decoration;