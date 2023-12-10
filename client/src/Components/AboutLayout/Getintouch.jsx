import React from "react";
import { IoMdMailOpen } from "react-icons/io";
import { FaMobileRetro } from "react-icons/fa6";
import { VscOrganization } from "react-icons/vsc";
import { MdLocationCity } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";

const backgroundImageUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRryUaTbXJ-YSAFca7Ry_3KyOkz681-UzkW7w&usqp=CAU";

const GetinT = () => {
  return (
    <div className="flex">
      {/* Visit Card */}
      <div
        className="rounded-lg shadow-md p-4 max-w-xs mx-auto mt-8 hover:shadow-lg transform hover:scale-150 transition-transform"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          padding: "2rem", // Adjusted padding
          margin: "15rem", // Adjusted margin
        }}
      >
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          Contact Information
        </h2>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <VscOrganization className="text-gray-600" />
            <p className="text-lg font-semibold">
              <strong>Eventyruim</strong>
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <MdLocationCity className="text-gray-600" />
            <p>
              <strong className="text-gray-600">Address:</strong> Soussa 5055,
              Sahloul 1
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <IoMdMailOpen className="text-gray-600" />
            <p>
              <strong className="text-gray-600">Email:</strong>{" "}
              Eventyruim@gmail.com
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FaMobileRetro className="text-gray-600" />
            <p>
              <strong className="text-gray-600">Phone (Fix):</strong> 73114854
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FaMobileAlt className="text-gray-600" />
            <p>
              <strong className="text-gray-600">Mobile:</strong> 96107732 /
              58012204
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form className="p-10 max-w-md mx-auto mt-40">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h2>
        <div className="space-y-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Your Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              rows="4"
              className="w-full p-3 border rounded-md"
            ></textarea>
          </div>
          <div className="flex items-center space-x-2">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GetinT;
