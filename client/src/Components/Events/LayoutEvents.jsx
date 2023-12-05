import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
function LayoutEvents() {
  return (
    <div className="flex">
     <SideBar/>
      <Outlet />
    </div>
  );
}

export default LayoutEvents;
