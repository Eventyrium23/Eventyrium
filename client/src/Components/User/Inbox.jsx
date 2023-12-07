import { useContext } from "react";
import { MyContext } from "../../MyContext";

function Inbox() {
  const { placeCheck } = useContext(MyContext);
  const addedPlace = JSON.parse(window.localStorage.getItem("place"));

  if (placeCheck) {
    window.localStorage.setItem("place", JSON.stringify(placeCheck));
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-screen">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              items
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">place</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">name of place</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Price</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {"place"}
            </th>
            <td className="px-6 py-4">{addedPlace.namePlace}</td>
            <td className="px-6 py-4">{addedPlace.place}</td>
            <td className="px-6 py-4">{addedPlace.price}DT</td>
            <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Inbox;
