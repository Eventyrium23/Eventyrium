import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [admins, setAdmins] = useState([])
  const [places, setPlaces] = useState([]);
  const [foods, setFoods] = useState([]);
  const [decorations, setDecoretions] = useState([]);
  const [packs, setPacks] = useState([]);
  // --------------------
  const [placeChecked, setPlaceChecked] = useState("");
  const [foodChecked, setFoodChecked] = useState([]);
  const [decorationChecked, setDecorationChecked] = useState([]);
  const [packChecked, setPackChecked] = useState("");
  useEffect(() => {

    fetchPlaces(setPlaces);
    fetchDecoration(setDecoretions);
    fetchFoods(setFoods);
     fetchAdmins(setAdmins);
    // fetchPacks(setPacks);
  }, []);

  return (
    <MyContext.Provider
      value={{
        places,
        foods,
        decorations,
        packs,
        placeChecked,
        setPlaceChecked,
        foodChecked,
        setFoodChecked,
        decorationChecked,
        setDecorationChecked,
        packChecked,
        setPackChecked,admins
      }}
    >
      {children}
    </MyContext.Provider>
  );
};


const fetchPlaces = async (setPlaces) => {
  try {
    const result = await axios.get("http://localhost:8080/places/all");
    setPlaces(result.data);
  } catch (err) {
    console.log(err);
  }
};
const fetchFoods = async (setPlaces) => {
  try {
    const result = await axios.get("http://localhost:8080/foods/all");
    setPlaces(result.data);
  } catch (err) {
    console.log(err);
  }
};
const fetchDecoration = async (setDecoretions) => {
  try {
    const result = await axios.get("http://localhost:8080/decorations/all");
    setDecoretions(result.data);
  } catch (err) {
    console.log(err);
  }
};
const fetchPacks = async (setPacks) => {
  try {
    const result = await axios.get("http://localhost:8080/packs/all");
    setPacks(result.data);
  } catch (err) {
    console.log(err);
  }
};

const fetchAdmins = (setAdmins) => {
  axios.get(`http://localhost:8080/admin/getAll`).then((response) => {
    let adminData = response.data
    setAdmins(adminData)
  }).catch((err) => {
    console.log(err);
  })

}

