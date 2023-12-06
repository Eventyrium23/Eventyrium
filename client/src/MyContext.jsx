import axios from "axios";
import { createContext, useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [places, setPlaces] = useState([]);

  axios
    .get("http://localhost:8080/places/all")
    .then((result) => {
      console.log(result);
      setPlaces(result.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <MyContext.Provider value={{ places,setPlaces }}>
      {children}
    </MyContext.Provider>
  );
};
