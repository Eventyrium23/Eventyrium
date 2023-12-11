import { toast } from "react-toastify";
import { IoCloseCircleOutline } from "react-icons/io5";
import "react-toastify/dist/ReactToastify.css";
import { Card, Input, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useRef } from "react";

function ConfirmeOrganization({ confirm }) {
  const mainColor = "#9ca38a";
  // -----------------------------------------------------------------------
  // parse localstorge
  const addedPlaces = JSON.parse(window.localStorage.getItem("places"));
  const addedFoods = JSON.parse(window.localStorage.getItem("foods"));
  const addedDecorations = JSON.parse(
    window.localStorage.getItem("decorations")
  );
  const addedPacks = JSON.parse(window.localStorage.getItem("packs"));
  // -----------------------------------------------------------------------
  const calendarRef = useRef(null);
  const personRef = useRef(null);
  const phoneRef = useRef(null);

  const checkOrganization = (e) => {
    e.preventDefault();
    const date = customizeDate(calendarRef.current.value);
    const person = personRef.current.value;
    const phoneNumber = phoneRef.current.value;
    const confirmed = window.localStorage.getItem("confirmed");
    if (!confirmed) {
      confirm.setCardOpen(false);
      if (addedPlaces) {
        createUserPlace(addedPlaces, date, person, phoneNumber);
      }
      if (addedDecorations) {
        createUserDeco(addedDecorations[addedDecorations.length - 1]);
      }
      if (addedFoods) {
        createUserFood(addedFoods[addedFoods.length - 1]);
      }
      if (addedPacks) {
        createUserPack(addedPacks, date, person, phoneNumber);
      }
    } else {
      toast.info("You already confirmed to update Send Email", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: "w-[450px]",
      });
    }
  };

  return confirm.isCardOpen ? (
    <>
      <Card
        className={`justify-self-center absolute z-20 left-1/2 translate-x-[-50%] bg-mainHeader py-10 `}
        color="transparent"
        shadow={false}
      >
        <IoCloseCircleOutline
          className="absolute text-3xl right-[-5px] top-[-4px] cursor-pointer"
          onClick={() => confirm.setCardOpen(false)}
        />
        <Typography variant="h4" color="white">
          Confirmation
        </Typography>
        <Typography color="white" className="mt-1 font-normal">
          Nice to meet you.
        </Typography>
        <form
          onSubmit={(e) => checkOrganization(e)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6 justify-center items-center">
            <Typography
              variant="h6"
              style={{ color: { mainColor } }}
              className="-mb-3"
            >
              Your Phone
            </Typography>

            <input
              className="shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              placeholder="Your Phone Number"
              ref={phoneRef}
              required
            />

            <Typography
              variant="h6"
              style={{ color: { mainColor } }}
              className="-mb-3"
            >
              Date Organization
            </Typography>
            <input
              className="shadow appearance-none w-72 border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              ref={calendarRef}
              required
            />

            <Typography
              variant="h6"
              style={{ color: { mainColor } }}
              className="-mb-3"
            >
              How many person
            </Typography>

            <input
              className="shadow appearance-none w-72 border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Number"
              ref={personRef}
              required
            />
          </div>

          <button className="font-medium text-gray-900 bg-white p-3 px-8 mt-5 rounded-md text-lg">
            Confirm
          </button>
        </form>
      </Card>
    </>
  ) : (
    ""
  );
}

export default ConfirmeOrganization;

function customizeDate(inputDate) {
  const dateObject = new Date(inputDate);
  const day = dateObject.getDate().toString().padStart(2, "0");
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
  const year = dateObject.getFullYear();

  return `${day}/${month}/${year}`;
}

const createUserPlace = async (place, date, persons, phoneNumber) => {
  let data = {
    name: place.name,
    location: place.location,
    image: place.image,
    price: place.price,
    description: place.description,
    persons: persons,
    date: date,
    userId: place.userId,
    phoneNumber: phoneNumber,
  };
  try {
    const response = await axios.post(
      "http://localhost:8080/user/createPlace",
      data
    );
    ConfirmUserOrganization(place.userId);
    toast.success("check your SMS.", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  } catch (err) {
    toast.error("Confirmation failed. Please check your information.", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};
const createUserDeco = async (deco) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/user/createDecoration",
      deco
    );
  } catch (err) {
    toast.error("Confirmation failed. Please check your information.", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};

const createUserFood = async (food) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/user/createFood",
      food
    );
  } catch (err) {
    toast.error("Confirmation failed. Please check your information.", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};

const createUserPack = async (pack, date, persons, phoneNumber) => {
  let data = {
    name: pack.name,
    location: pack.location,
    image: pack.image,
    price: pack.price,
    description: pack.description,
    date,
    max_guests:persons,
    userId: pack.userId,
    phoneNumber: phoneNumber,
  };

  try {
    const response = await axios.post(
      "http://localhost:8080/user/createPack",
      data
    );
    ConfirmUserOrganization(pack.userId);
    toast.success("check your SMS.", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  } catch (err) {
    toast.error("Confirmation failed. Please check your information.", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};

const ConfirmUserOrganization = async (userId) => {
  console.log(userId);
  try {
    const response = await axios.put(
      "http://localhost:8080/user/confirmOrganisation",
      {userId:userId}
    );
    window.localStorage.setItem("confirmed", true);
    window.location.reload()
  } catch (err) {
    console.log(err);
  }
};
