import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../context/auth.context";

function DogDetailPage({ dogs }) {
  const { dogId } = useParams();
  const [dog, setDog] = useState([]);
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthContext();

  //Make a request to the API and get the data for a specific dog when dogId changes, and store that data in the state.
  useEffect(() => {
    axios
      .get("http://localhost:5005/api/animal/animals/" + dogId)
      .then((response) => {
        setDog(response.data);
      })
      .catch((error) => {
        console.error("Error fetching dogs:", error);
      });
  }, [dogId]);

  console.log(dog);

  // Function for handling the ‘Adopt’ button click
  const handleAdoptClick = () => {
    // Navigate to the adoption form page and enter the dog's information.
    navigate("/adoption-form", { state: { dog } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-teal-200 to-blue-200 p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-2/3 p-6 flex justify-center items-center">
          <img
            src={dog.image_url}
            alt={dog.name}
            className="w-full h-auto max-w-2xl object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/3 p-6">
          <h2 className="text-4xl font-bold text-orange-900">{dog.name}</h2>
          <p className="text-gray-700 mt-4">Breed: {dog.breed}</p>
          <p className="text-gray-700 mt-4">Age: {dog.age}</p>
          <p className="text-gray-600 mt-4">Status: {dog.status}</p>
          <p className="text-gray-600 mt-4">{dog.description}</p>
          <p className="text-gray-600 mt-4">Gender: {dog.gender}</p>

          {isLoggedIn ? (
            <button
              disabled={dog.status === "with-adopter"}
              onClick={handleAdoptClick}
              className={
                dog.status !== "with-adopter"
                  ? "bg-orange-600 text-white py-2 px-4 rounded-full text-lg font-semibold mt-8 hover:bg-orange-700 transition duration-300"
                  : "px-8 py-3 text-white bg-gray-300 rounded focus:outline-none"
              }
            >
              Adopt {dog.name}
            </button>
          ) : (
            <p className="text-green-500 mt-8">
              If you want to adopt {dog.name} please first login.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DogDetailPage;
