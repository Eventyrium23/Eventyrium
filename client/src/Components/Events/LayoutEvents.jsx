import { Outlet } from "react-router-dom";
import SideBar from "./SideBar.jsx";
import SmallHead from "./SmallHead.jsx";
function LayoutEvents() {
  return (
    <div className="flex ">
      <SideBar />
      <div className="events flex flex-col">
        <SmallHead />
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutEvents;
