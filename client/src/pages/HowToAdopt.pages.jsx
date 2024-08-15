import React from "react";
import { useNavigate } from "react-router-dom";

const HowToAdopt = () => {
  const navigate = useNavigate();

  const handleFormButtonClick = () => {
    // Navega a la página del formulario de adopción
    navigate("/adoption-form");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-teal-200 to-blue-200 p-8 mt-16 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-lg p-10">
        <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-12">
          How to Adopt a Pet
        </h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Adopting a pet is a wonderful way to add a new member to your family.
          Here are the steps you need to follow:
        </p>
        <ul className="list-decimal list-inside mb-6 text-gray-700 space-y-2">
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
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Once your application has been approved, you will be contacted on the
          telephone number provided.
        </p>
      </div>
    </div>
  );
};

export default HowToAdopt;
