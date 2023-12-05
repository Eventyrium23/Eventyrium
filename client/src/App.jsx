import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { RouterProvider } from "react-router";
import { useContext } from "react";

import Layout from "./Components/Layout/Layout";
import Home from "./Components/Pages/Home.jsx";
import Register from "./Components/authenticateUser/Register.jsx";
import Login from "./Components/authenticateUser/Login.jsx";
import Verified from "./Components/authenticateUser/Verified.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/user/register" element={<Register />} />

        <Route path="/user/login" element={<Login />} />
        <Route path="/user/confirm/:token" element={<Verified />} />
      </>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
