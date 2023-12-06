import React, { useEffect, useState } from "react";
import axios from "axios";
import Load from "../Load/Load.jsx";
import { useParams } from "react-router-dom";

export default function EventsDetails() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
const {place}=useParams()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `http://localhost:8080/places/place/${place.toLowerCase()}`
        );
        setData(result.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Load />;
  }

  if (!data) {
    return <p>Error loading data</p>;
  }

  return (
    <div className="box flex flex-col justify-center items-center pt-5">
      <img className="w-2/3 lg:w-2/4" src={data.image} alt="" />
      <div className="text">
        <h1>{data.namePlace}</h1>
        <h3>
          <strong>Location:</strong>
          {data.place}
        </h3>
        <p>
          <strong>Description:</strong>
          {data.description}
        </p>
        <p>
          <strong>Price:</strong> {data.price}
        </p>
        <p>
          <strong>Available:</strong>{" "}
          {data.date
            ? "this place available "
            : "sorry this place is not available"}
        </p>
        <button>Add To Organisation</button>
      </div>
    </div>
  );
}
