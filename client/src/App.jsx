import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RouterProvider } from "react-router";
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
//servecies i
import Services from "./Components/Pages/services.jsx";
import Foods from "./Components/Events/Foods.jsx"
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<About />}>
            <Route index element={<Who />} />
            <Route path="location" element={<Location />} />
            <Route path="history" element={<History />} />
            <Route path="getintouch" element={<Getint />} />
          </Route>

          <Route path="/events/:places" element={<LayoutEvents />}>
            <Route index element={<Places />} />
            <Route path="foods" element={<Foods />} />
          </Route>

          <Route path="services" element={<Services />} />

        </Route>

        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/confirm/:token" element={<Verified />} />
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
