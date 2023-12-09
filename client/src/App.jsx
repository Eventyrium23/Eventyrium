import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RouterProvider } from "react-router";

//
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Pages/Home.jsx";
const Services = lazy(() => import("./Components/Pages/services.jsx"));

//About
const About = lazy(() => import("./Components/Pages/About.jsx"));
const Who = lazy(() => import("./Components/AboutLayout/Who-are.jsx"));
const Location = lazy(() => import("./Components/AboutLayout/Location.jsx"));
const History = lazy(() => import("./Components/AboutLayout/History.jsx"));
const Getint = lazy(() => import("./Components/AboutLayout/Getintouch.jsx"));
//User login && register
const Register = lazy(() =>
  import("./Components/authenticateUser/UserRegister.jsx")
);
const Login = lazy(() => import("./Components/authenticateUser/UserLogin.jsx"));
const Verified = lazy(() =>
  import("./Components/authenticateUser/Verified.jsx")
);
// Admin:
const LoginAdmin = lazy(() =>
  import("./Components/authenticateUser/Admin/LoginAdmin.jsx")
);
const RegisterAdmin = lazy(() =>
  import("./Components/authenticateUser/Admin/RegisterAdmin.jsx")
);
// Team:
const OurTeam = lazy(() => import("./Components/Pages/OurTeam.jsx"));
// FeedBacks & Ratings :
const FeedBacks = lazy(() => import("./Components/Pages/FeedBacks.jsx"));
//events
const LayoutEvents = lazy(() => import("./Components/Events/LayoutEvents.jsx"));

const Places = lazy(() => import("./Components/Events/Places.jsx"));
const Foods = lazy(() => import("./Components/Events/Foods.jsx"));
const Decoration = lazy(() => import("./Components/Events/Decoration.jsx"));
const Packs = lazy(() => import("./Components/Events/Packs.jsx"));
const EventsDetails = lazy(() =>
  import("./Components/Events/EventsDetails.jsx")
);
const Inbox = lazy(() => import("./Components/User/Inbox.jsx"));


import Load from "./Components/Load/Load.jsx";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="team" element={<OurTeam />} />
          <Route path="feedbacks" element={<FeedBacks />} />

          <Route path="about" element={<About />}>
            <Route index element={<Who />} />
            <Route path="location" element={<Location />} />
            <Route path="history" element={<History />} />
            <Route path="getintouch" element={<Getint />} />
          </Route>

          <Route path="events/" element={<LayoutEvents />}>
            <Route path="places" index element={<Places />} />
            <Route path="places/:route" index element={<EventsDetails />} />
            <Route path="foods" element={<Foods />} />
            <Route path="foods/:route" element={<EventsDetails />} />
            <Route path="decorations" element={<Decoration />} />
            <Route path="decorations/:route" element={<EventsDetails />} />
            <Route path="packs" element={<Packs />} />
            <Route path="packs/:route" element={<EventsDetails />} />
          </Route>
          <Route path="services" element={<Services />} />
          <Route path="inbox" element={<Inbox />} />
        </Route>
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/confirm/:token" element={<Verified />} />

        <Route path="/admin/register" element={<RegisterAdmin />} />
        <Route path="/admin/login" element={<LoginAdmin />} />
     
     
      </>
    )
  );
  return (
    <div className="App ">
      <Suspense fallback={<Load />}>
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </div>
  );
}

export default App;
