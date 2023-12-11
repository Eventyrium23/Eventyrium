import { Outlet } from "react-router-dom";
import Sidebar from "./LayoutComponants/Sidebar.jsx";
<<<<<<< HEAD
function LayoutDashboard() {
  return (
=======
import NotFound404 from "../NotFound404.jsx";
function LayoutDashboard() {
  const checkAdmin = window.localStorage.getItem("AdminToken")

  return checkAdmin ? (
>>>>>>> 8431062b1fe158cec689ffee32eeabf3e8629e4b
    <div className="dashboard flex  ">
      <Sidebar />
      <Outlet />
    </div>
<<<<<<< HEAD
  );
=======
  ) : <NotFound404 />

>>>>>>> 8431062b1fe158cec689ffee32eeabf3e8629e4b
}

export default LayoutDashboard;
