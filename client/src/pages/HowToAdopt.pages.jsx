import React from "react";
import { useNavigate } from "react-router-dom";

const HowToAdopt = () => {
  const navigate = useNavigate();

  const handleFormButtonClick = () => {
    // Navega a la página del formulario de adopción
    navigate("/adoption-form");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 mt-16">
      {" "}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          How to Adopt a Pet
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Adopting a pet is a wonderful way to add a new member to your family.
          Here are the steps you need to follow:
        </p>
        <ul className="list-decimal list-inside mb-6 text-gray-700">
          <li className="mb-2">
            Create an account or log in if you already have one.
          </li>
          <li className="mb-2">
            Browse through our available pets and find one that suits your
            family.
          </li>
          <li className="mb-2">
            Fill out the adoption form with your information and details about
            the pet you want to adopt.
          </li>
          <li className="mb-2">
            Wait for our team to review your application and contact you.
          </li>
        </ul>
        <p className="text-lg text-gray-700 mb-6">
          Once your application is approved, we will arrange a meeting to
          finalize the adoption.
        </p>
        <button
          onClick={handleFormButtonClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Form
        </button>
      </div>
    </div>
  );
};

export default HowToAdopt;
