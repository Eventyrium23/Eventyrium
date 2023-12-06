import { IoIosArrowForward } from "react-icons/io";
import { BiCategoryAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { MdOutlinePlace } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";
import { LuPackage } from "react-icons/lu";
import { GiClover } from "react-icons/gi";

function SideBar() {
  const navList = [
    {
      label: "Places",
      path: "/events/places",
      icon: <MdOutlinePlace className="md:hidden text-xl" />,
    },
    {
      label: "Decoration",
      path: "/events/decoration",
      icon: <GiClover className="md:hidden text-xl" />,
    },
    {
      label: "Foods",
      path: "/events/foods",
      icon: <IoFastFoodSharp className="md:hidden text-xl" />,
    },
    {
      label: "Packs",
      path: "/events/packs",
      icon: <LuPackage className="md:hidden text-xl" />,
    },
  ];

  return (
    <div className=" md:flex truncate h-screen w-[75px]  sticky top-0 min-w-[75px] md:w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
      <div className="flex items-center gap-4 p-4 mb-2">
        <BiCategoryAlt />

        <h5 className=" hidden md:block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Categories
        </h5>
      </div>

      <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
        <div className="relative block w-full">
          <div className="overflow-hidden">
            <div className="block w-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-700">
              <nav className="flex min-w-[240px] flex-col gap-1 p-0 font-sans text-base font-normal text-blue-gray-700">
                {navList.map(({ label, path, icon }, i) => {
                  return (
                    <NavLink
                      to={path}
                      key={i}
                      role="button"
                      className="md:flex  items-center md:w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                    >
                      <IoIosArrowForward className="mr-4 md:block hidden" />

                      {icon}
                      <span className="hidden md:block">{label}</span>
                    </NavLink>
                  );
                })}   
              </nav>
            </div>
          </div>
        </div>

        <hr className="hidden md:block my-2 border-blue-gray-50" />
      </nav>
    </div>
  );
}

export default SideBar;
