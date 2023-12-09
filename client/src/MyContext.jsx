import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [reserved, setReserved] = useState(true);
  const [itemDetails,setItemDetails]=useState(null)
  const [places, setPlaces] = useState([]);
  const [foods, setFoods] = useState([]);
  const [admins, setAdmins] = useState([]);
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
    fetchPacks(setPacks);
    fetchAdmins(setAdmins);
  }, []);
  useEffect(()=>{
    fetchCheckReservedPack(date, itemDetails, setReserved);
    fetchCheckReservedPlace(date, itemDetails, setReserved);

  },[date,itemDetails])
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
        setPackChecked,
        admins,
        date,
        setDate,
        reserved,
        setReserved,
        setItemDetails,itemDetails
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
  axios
    .get(`http://localhost:8080/admin/getAll`)
    .then((response) => {
      let adminData = response.data;
      setAdmins(adminData);
    })
    .catch((err) => {
      console.log(err);
    });
};

const fetchCheckReservedPack = async (date, itemDetails, setReserved) => {
  try {
    const response = await axios.post(
      'http://localhost:8080/packs/checkReserved',
      { date, name: itemDetails }
    );


    if (response.status === 200) {
      setReserved(false);
    } else if (response.status === 230) {
      setReserved(true);
    } else {
      console.error(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error during reservation check:', error.message);
  }
};


const fetchCheckReservedPlace = async (date, itemDetails, setReserved) => {
  try {
    const response = await axios.post(
      'http://localhost:8080/places/checkReserved',
      { date, name: itemDetails }
    );

    if (response.status === 200) {
      setReserved(false);
    } else if (response.status === 230) {
      setReserved(true);
    }
  } catch (error) {
    console.error('Error during reservation check:', error.message);
  }
};

