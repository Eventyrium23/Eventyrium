import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Load from "../Load/Load.jsx";
import { useLocation, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyContext } from "../../MyContext.jsx";
export default function EventsDetails() {
  const [data, setData] = useState(null);
  const { placeCheck, setPlaceCheck } = useContext(MyContext);
  const location = useLocation();
  const { route } = useParams();
  const paths = location.pathname.split("/");
  const url = paths.slice(2, paths.length - 1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `http://localhost:8080/places/place/${route.toLowerCase()}`
        );
        setData(result.data);
      } catch (err) {
        console.error(err);
      } 
    };

    fetchData();
  }, [route]);



  if (!data) {
    return <p>Error loading data</p>;
  }

  const Save = (event) => {
    const token = window.localStorage.getItem("Token");

    if (!token) {
      showWarning("Please login before adding to inbox!");
      return;
    }

    const boxElement = event.target.closest(".box");
    if (!boxElement) {
      console.error('No parent element with class "box" found.');
      return;
    }

    const path = boxElement.getAttribute("data-value");

    if (url === "places" && data.date) {
      showWarning("Sorry, this place is reserved!");
    } else {
      const storageKey = `${url}`;
      const alreadyAdded = placeCheck == path;

      if (alreadyAdded) {
        showWarning(`You already added this ${path}!`);
      } else {
        setPlaceCheck(data);
        showSuccess(`This place has been added to your inbox!`);
      }
    }
  };

  const showWarning = (message) => {
    toast.warn(message, getToastConfig("bg-[red]"));
  };

  const showSuccess = (message) => {
    toast.warn(message, getToastConfig("bg-[blue]"));
  };

  const getToastConfig = (theme) => {
    return {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: { theme },
    };
  };

  return (
    <div
      className="box truncate flex flex-col lg:flex-row gap-10 justify-start lg:justify-start items-start pt-5 pl-5 md:pl-10"
      data-value={data.namePlace}
    >
      <img
        className="	 w-3/3 h-[300px] lg:w-2/4 lg:h-[350px]"
        src={data.image}
        alt=""
      />
      <div className="text text-xl flex flex-wrap leading-10	w-full max-w-[200px]">
        <h1 className=" font-bold text-4xl capitalize">{data.namePlace}</h1>
        <h3>
          <strong>Location:</strong>
          {data.place}
        </h3>
        <p>
          <strong>Description:</strong>
          {data.description}
        </p>
        <p>
          <strong>Price:</strong> {data.price}DT
        </p>
        <p>
          <strong>Available:</strong>{" "}
          {data.date
            ? " sorry this place is not available "
            : "this place available"}
        </p>
        <button
          onClick={Save}
          className="bg-mainHeader text-white p-3 rounded pointer"
        >
          Add To Organisation
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
