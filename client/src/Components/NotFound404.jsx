import React from 'react';
import NotFound from "../assets/NotFound.png"

const NotFound404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen  bg-mainHeader">
      <div className="bg-white p-5 rounded-lg shadow-md text-center">
        <img src={NotFound} alt="404 Image" className=" " />
        <h1 className="text-4xl font-bold text-red-500 mb-4">Oops! Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-4">Sorry, the page you are looking for cannot be found.</p>
        <p className="text-blue-500 hover:underline"><a href="/">Go back to Home</a></p>
      </div>
    </div>
  );
};

export default NotFound404;
