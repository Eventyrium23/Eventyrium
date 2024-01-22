import { Outlet } from "react-router-dom";
import Sidebar from "./LayoutComponants/Sidebar.jsx";
import NotFound404 from "../NotFound404.jsx";
function LayoutDashboard() {
  const checkAdmin = window.localStorage.getItem("AdminToken")

  return checkAdmin ? (
    <div className="dashboard flex">
      <Sidebar />
      <Outlet />
    </div>
  ) : <NotFound404 />

}

export default LayoutDashboard;
