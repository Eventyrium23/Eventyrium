import React, { useContext } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RouterProvider } from "react-router";
import { MyContext } from "./MyContext.jsx";

//
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Pages/Home.jsx";
//About
import About from "./Components/Pages/About.jsx";
import Who from "./Components/AboutLayout/Who-are.jsx";
import Location from "./Components/AboutLayout/Location.jsx";
import History from "./Components/AboutLayout/History.jsx";
import Getint from "./Components/AboutLayout/Getintouch.jsx";
import Register from "./Components/authenticateUser/Register.jsx";
//login
import Login from "./Components/authenticateUser/Login.jsx";
import Verified from "./Components/authenticateUser/Verified.jsx";
//events
import LayoutEvents from "./Components/Events/LayoutEvents.jsx";
import Places from "./Components/Events/Places.jsx";
import Services from "./Components/Pages/services.jsx";
// Admin:
import LoginAdmin from "./Components/authenticateUser/Admin/Login.jsx";
// import RegisterAdmin from "./Components/authenticateUser/Admin/Register.jsx"

// Team:
import Team from "./Components/Pages/OurTeam.jsx"

import Foods from "./Components/Events/Foods.jsx";
import Decoration from "./Components/Events/Decoration.jsx";
import Packs from "./Components/Events/Packs.jsx";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />

          <Route path="about" element={<About />}>
            <Route index element={<Who />} />
            <Route path="location" element={<Location />} />
            <Route path="history" element={<History />} />
            <Route path="getintouch" element={<Getint />} />
          </Route>

          <Route path="events/" element={<LayoutEvents />}>
            <Route path="places" index element={<Places />} />
            <Route path="places/:place" index element={<Places />} />
            <Route path="foods" element={<Foods />} />
            <Route path="foods/:food" element={<Foods />} />
            <Route path="decoration" element={<Decoration />} />
            <Route path="decoration/:deco" element={<Decoration />} />
            <Route path="packs" element={<Packs />} />
            <Route path="packs/:pack" element={<Packs />} />
          </Route>
          <Route path="services" element={<Services />} />
        </Route>
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/confirm/:token" element={<Verified />} />

        {/* <Route path="/admin/register" element={<RegisterAdmin />} /> */}
        <Route path="/admin/login" element={<LoginAdmin />} />
        {/* <Route path="/admin/confirm/:token" element={<Verified />} /> */}

      </>
    )
  );

  return (
    <div className="App ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
