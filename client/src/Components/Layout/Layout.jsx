import { Outlet } from "react-router";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Layout() {
  return (
    <>
      <Header />
      <div className="mainPage w-full pt-[72.50px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
