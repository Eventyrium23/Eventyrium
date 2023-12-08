import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyContext } from "../../MyContext.jsx";
export default function EventsDetails() {
  const [data, setData] = useState(null);
  const {
    placeChecked,
    setPlaceChecked,
    foodChecked,
    setFoodChecked,
    decorationChecked,
    setDecorationChecked,
    packChecked,
    setPackChecked,
  } = useContext(MyContext);
  const location = useLocation();
  const { route } = useParams();
  const paths = location.pathname.split("/");
  const url = paths.slice(2, paths.length - 1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/${url}/${route}`);
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
    const path = boxElement.getAttribute("data-value");

    if (url == "places") {
      return place(path);
    } else if (url == "decorations") {
      return decoration(path);
    } else if (url == "foods") {
      return food(path);
    } else if (url == "packs") {
      if (packStored) {
        return pack(path);
      }
    }
  };
  // checked items
  const place = (path) => {
    if (data.date) {
      return showWarning("Sorry, this place is reserved!");
    } else {
      const alreadyAdded = placeChecked.name == path;
      if (alreadyAdded) {
        return showWarning(`You already added this ${path}!`);
      } else {
        setPlaceChecked(data);
        return showSuccess(`This place has been added to your inbox!`);
      }
    }
  };
  const food = (path) => {
    const alreadyAdded = foodChecked.some((ele) => {
      return ele.name == path;
    });
    if (alreadyAdded) {
      return showWarning(`You already added this ${path}!`);
    } else {
      setFoodChecked([...foodChecked, data]);
      return showSuccess(`This Food has been added to your inbox!`);
    }
  };
  const decoration = (path) => {
    const alreadyAdded = decorationChecked.some((ele) => {
      return ele.name == path;
    });
    if (alreadyAdded) {
      return showWarning(`You already added this ${path}!`);
    } else {
      setDecorationChecked([...decorationChecked, data]);
      return showSuccess(`This Decoretion has been added to your inbox!`);
    }
  };
  const pack = (path) => {
    const alreadyAdded = packChecked.name == path;
    if (alreadyAdded) {
      return showWarning(`You already added this ${path}!`);
    } else {
      setPackChecked(data);
      return showSuccess(`This pack has been Update in your inbox!`);
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
      className: `${theme}  w-[400px]`,
    };
  };

  //check url to show details
  if (url == "places") {
    return showDetailsPlace(data, Save);
  } else if (url == "decorations") {
    return showDetailsDeco(data, Save);
  } else if (url == "foods") {
    return showDetailsFood(data, Save);
  } else if (url == "packs") {
    return showDetailsPack(data, Save);
  }
}
//show details items...
function showDetailsPlace(data, Save) {
  return (
    <div
      className="box truncate flex flex-col lg:flex-row gap-10 justify-start lg:justify-start items-start pt-5 pl-5 md:pl-10"
      data-value={data.name}
    >
      <img
        className="	 w-3/3 h-[300px] lg:w-2/4 lg:h-[400px]"
        src={data.image}
        alt=""
      />
      <div className="text text-xl flex flex-wrap leading-10	w-full max-w-[200px]">
        <h1 className=" font-bold text-4xl capitalize">{data.name}</h1>

        <h3>
          <strong>Location: </strong>
          {data.location}
        </h3>
        <p>
          <strong>Description: </strong>
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
function showDetailsFood(data, Save) {
  return (
    <div
      className="box truncate flex flex-col lg:flex-row gap-10 justify-start lg:justify-start items-start pt-5 pl-5 md:pl-10"
      data-value={data.name}
    >
      <img
        className="	 w-3/3 h-[300px] lg:w-2/4 lg:h-[400px]"
        src={data.image}
        alt=""
      />
      <div className="text text-xl flex flex-wrap leading-10	w-full max-w-[200px]">
        <h1 className=" font-bold text-4xl capitalize">{data.name}</h1>

        <p>
          <strong>Specialite:</strong>
          {data.specialite}
        </p>
        <p>
          <strong>Price:</strong> {data.price}DT
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
function showDetailsDeco(data, Save) {
  return (
    <div
      className="box truncate flex flex-col lg:flex-row gap-10 justify-start lg:justify-start items-start pt-5 pl-5 md:pl-10"
      data-value={data.name}
    >
      <img
        className="	 w-3/3 h-[300px] lg:w-2/4 lg:h-[400px]"
        src={data.image}
        alt=""
      />
      <div className="text text-xl flex flex-wrap leading-10	w-full max-w-[200px]">
        <h1 className=" font-bold text-4xl capitalize">{data.name}</h1>

        <p>
          <strong>Stock:</strong>
          {data.stock}
        </p>
        <p>
          <strong>Price:</strong> {data.price}DT
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
function showDetailsPack(data, Save) {
  return (
    <div
      className="box truncate flex flex-col lg:flex-row gap-10 justify-start lg:justify-start items-start pt-5 pl-5 md:pl-10"
      data-value={data.name}
    >
      <img
        className="	 w-3/3 h-[300px] lg:w-2/4 lg:h-[400px]"
        src={data.image}
        alt=""
      />
      <div className="text text-xl flex flex-wrap leading-10	w-full max-w-[200px]">
        <h1 className=" font-bold text-4xl capitalize">{data.name}</h1>

        <h3>
          <strong>Location: </strong>
          {data.location}
        </h3>
        <p>
          <strong>Description: </strong>
          {data.description}
        </p>
        <p>
          <strong>Max Guests: </strong>
          {data.max_guests}
        </p>
        <p>
          <strong>Price:</strong> {data.price}DT
        </p>
        <p>
          <strong>Available:</strong>{" "}
          {data.date
            ? " sorry this pack is not available "
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
