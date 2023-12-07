import { useContext } from "react";
import { MyContext } from "../../MyContext";

function Inbox() {
  const { placeChecked, foodChecked, decorationChecked, packChecked } =
    useContext(MyContext);
  // parse localstorge
  const addedPlaces = JSON.parse(window.localStorage.getItem("places")) || [];
  const addedFoods = JSON.parse(window.localStorage.getItem("foods")) || [];
  const addedDecorations =
    JSON.parse(window.localStorage.getItem("decorations")) || [];
  const addedPacks = JSON.parse(window.localStorage.getItem("packs")) || [];

  // Update local storage with the checked items
  if (placeChecked.length) {
    window.localStorage.setItem("places", JSON.stringify(placeChecked));
  }
  if (foodChecked.length > 0) {
    window.localStorage.setItem(
      "foods",
      JSON.stringify([...addedFoods, foodChecked])
    );
  }
  if (decorationChecked.length > 0) {
    window.localStorage.setItem(
      "decorations",
      JSON.stringify([...addedDecorations, decorationChecked])
    );
  }
  if (packChecked.length ) {
    window.localStorage.setItem("packs", JSON.stringify(packChecked));
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-screen p-10">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-md">
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
              <div className="flex items-center">edit</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            {addedPlaces.length && (
              <>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {addedPlaces[0].name}
                </th>
                <td className="px-6 py-4">{addedPlaces[0].location}</td>
                <td className="px-6 py-4">{addedPlaces[0].price}DT</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    delete
                  </a>
                </td>
              </>
            )}
          </tr>
          {addedDecorations[addedDecorations.length - 1].map((deco, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {deco.name}
              </th>

              <td className="px-6 py-4">empty</td>
              <td className="px-6 py-4">empty</td>
              <td className="px-6 py-4">{deco.price}DT</td>

              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  delete
                </a>
              </td>
            </tr>
          ))}
          {addedFoods[addedFoods.length - 1].map((food, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {food.name}
              </th>

              <td className="px-6 py-4">empty</td>
              <td className="px-6 py-4">empty</td>
              <td className="px-6 py-4">{food.price}DT</td>

              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  delete
                </a>
              </td>
            </tr>
          ))}
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            {addedPlaces.length && (
              <>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {addedPacks[0].name}
                </th>
                <td className="px-6 py-4">{addedPlaces[0].location}</td>
                <td className="px-6 py-4">{addedPlaces[0].price}DT</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    delete
                  </a>
                </td>
              </>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Inbox;
