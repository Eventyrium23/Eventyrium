import { Outlet } from "react-router-dom";
import Sidebar from "./LayoutComponants/Sidebar.jsx";
function LayoutDashboard() {
  return (
    <div className="dashboard flex  ">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default LayoutDashboard;
