import { Outlet } from "react-router";
import Header from "./Header.jsx";
import Footer from "./Footer";

function  Layout() {
  return (
    <>
      <Header />
      <div className="mainPage w-full">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
