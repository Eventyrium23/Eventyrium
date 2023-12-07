import { useContext, useRef } from "react";
import { MyContext } from "../../MyContext.jsx";

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
  if (packChecked.length) {
    window.localStorage.setItem("packs", JSON.stringify(packChecked));
  }

  const Delete = (event) => {
    const targetElement = event.target;
    const itemName = targetElement.getAttribute("data-name");

    if (addedPlaces.length && addedPlaces[0].name === itemName) {
      const updatedPlaces = addedPlaces.slice(1);
      window.localStorage.setItem("places", JSON.stringify(updatedPlaces));
    } else if (
      addedDecorations.length &&
      addedDecorations[addedDecorations.length - 1].some(
        (deco) => deco.name === itemName
      )
    ) {
      const updatedDecorations = addedDecorations.map((decoArray) =>
        decoArray.filter((deco) => deco.name !== itemName)
      );
      window.localStorage.setItem(
        "decorations",
        JSON.stringify(updatedDecorations)
      );
    } else if (
      addedFoods.length &&
      addedFoods[addedFoods.length - 1].some((food) => food.name === itemName)
    ) {
      const updatedFoods = addedFoods.map((foodArray) =>
        foodArray.filter((food) => food.name !== itemName)
      );
      window.localStorage.setItem("foods", JSON.stringify(updatedFoods));
    } else if (addedPacks.length && addedPacks[0].name === itemName) {
      const updatedPacks = addedPacks.slice(1);
      window.localStorage.setItem("packs", JSON.stringify(updatedPacks));
    }
    window.location.reload();
  };

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
            {addedPlaces.length ? (
              <>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {addedPlaces[0].name}
                </th>
                <td className="px-6 py-4">{addedPlaces[0].location}</td>
                <td className="px-6 py-4">{addedPlaces[0].price}DT</td>
                <td className="px-6 py-4 text-left">
                  <button
                    data-name={addedPlaces[0].name}
                    onClick={Delete}
                    className="text:lg text-center bg-none text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    delete
                  </button>
                </td>
              </>
            ) : (
              ""
            )}
          </tr>
          {addedDecorations.length
            ? addedDecorations[addedDecorations.length - 1].map(
                (deco, index) => (
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

                    <td className="px-6 py-4 text-left">
                      <button
                        data-location={deco.name}
                        data-name={deco.name}
                        onClick={Delete}
                        className="text-lg bg-none text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                )
              )
            : ""}
          {addedFoods.length
            ? addedFoods[addedFoods.length - 1].map((food, index) => (
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

                  <td className="px-6 py-4 text-left">
                    <button
                      data-location={food.name}
                      data-name={food.name}
                      onClick={Delete}
                      className="text-lg bg-none text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))
            : ""}

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            {addedPacks.length ? (
              <>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {addedPacks[0].name}
                </th>
                <td className="px-6 py-4">{addedPacks[0].location}</td>
                <td className="px-6 py-4">{addedPacks[0].price}DT</td>
                <td className="px-6 py-4 text-left">
                  <button
                    data-name={addedPacks[0].name}
                    onClick={Delete}
                    className="text-lg bg-none text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    delete
                  </button>
                </td>
              </>
            ) : (
              ""
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Inbox;
