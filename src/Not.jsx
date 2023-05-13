import React, { useState } from "react";
import { logo } from "./assets";

const Not = () => {
  const backgroundImageUrl = "https://i.postimg.cc/kggTgDcc/demo2.jpg";
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the email to the database here (you'll need to implement this part)

    // Clear the email input field
    setEmail("");
  };

  return (
    <div
      className="bg-gray-900 min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: "cover" }}
    >
      <img src={logo} alt="Logo" className="absolute top-0 left-0 w-20 h-20 m-4" />
      <h1 className="text-4xl text-center absolute top-0 w-full">Coming Soon!</h1>
      <div className="max-w-md w-full p-8 bg-gray-800 rounded-lg shadow-lg relative mt-20">
        <h2 className="text-3xl font-bold text-white mb-6">Coming Soon!</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="bg-gray-700 focus:ring-blue-500 focus:border-blue-500 flex-1 rounded-lg border-transparent text-white py-2 px-4 sm:text-sm border-gray-300"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 focus:border-blue-500 rounded-lg text-white py-2 px-4 sm:text-sm ml-2"
              onClick={() => {
                alert("Thank You For Joining Us");
              }}
            >
              Notify Me
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Not;
