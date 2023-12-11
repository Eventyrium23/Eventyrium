import { FaRegEye } from "react-icons/fa";
import "react-calendar/dist/Calendar.css";
<<<<<<< HEAD
// import data from "../../Datafood.json";
=======
>>>>>>> 8431062b1fe158cec689ffee32eeabf3e8629e4b
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { MyContext } from "../../MyContext.jsx";
function Foods() {
  const { foods } = useContext(MyContext);
  const FoodComponent = ({ food }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="food-tile bg-white relative flex justify-center items-center drop-shadow-md p-8 hover:opacity-80 transition-opacity"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <NavLink to={`/events/foods/${food.name}`}>
          <FaRegEye
            className={`${
              isHovered ? "opacity-100" : "opacity-0"
            }  absolute w-20 top-1/2 left-1/2 text-5xl   text-[#ffffff99] transition-opacity translate-x-[-50%] translate-y-[-50%]`}
          />

          <img
            className="min-w-[230px] h-[250px] md:h-[300px] rounded"
            src={food.image}
            alt={food.name}
          />
          <div className="food-info">
            <h3 className="text-xl font-semibold text-gray-800">{food.name}</h3>
            <p className="text-sm text-gray-600">{food.specialite}</p>
            <p className="text-lg font-bold text-green-600">${food.price}</p>
            <p className="text-sm text-gray-600">{food.review}</p>
          </div>
        </NavLink>
      </div>
    );
  };

  return (
    <div className="box container grid grid-cols-1 auto-cols-fr md:grid-cols-2 xl:grid-cols-3 gap-10 p-10 justify-center justify-items-center z-20">
      {foods.map((food, i) => (
        <FoodComponent key={i} food={food} />
      ))}
    </div>
  );
}

export default Foods;
