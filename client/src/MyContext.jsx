import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [admins, setAdmins] = useState([])
  const [places, setPlaces] = useState([]);
  const [placeCheck, setPlaceCheck] = useState("");
  useEffect(() => {
    fetchAdmins(setAdmins);
  }, []);

  return (
    <MyContext.Provider value={{ admins, places, setPlaces, placeCheck, setPlaceCheck }}>
      {children}
    </MyContext.Provider>
  );
};
const fetchAdmins = (setAdmins) => {
  axios.get(`http://localhost:8080/admin/getAll`).then((response) => {
    let adminData = response.data
    setAdmins(adminData)
  }).catch((err) => {
    console.log(err);
  })

}