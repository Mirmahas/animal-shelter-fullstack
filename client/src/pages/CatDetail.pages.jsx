import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../context/auth.context";

function CatDetailPage({ cats }) {
  const { catId } = useParams();
  const [cat, setCat] = useState([]);
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthContext();

  useEffect(() => {
    axios
      .get("http://localhost:5005/api/animal/animals/" + catId)
      .then((response) => {
        setCat(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cats:", error);
      });
  }, [catId]);

  console.log(cat);
  const handleAdoptClick = () => {
    navigate("/adoption-form", { state: { cat } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-teal-200 to-blue-200 p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-2/3 p-6 flex justify-center items-center">
          <img
            src={cat.image_url}
            alt={cat.name}
            className="w-full h-auto max-w-2xl object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/3 p-6">
          <h2 className="text-4xl font-bold text-orange-900">{cat.name}</h2>
          <p className="text-gray-700 mt-4">Breed: {cat.breed}</p>
          <p className="text-gray-700 mt-4">Age: {cat.age}</p>
          <p className="text-gray-600 mt-4">Status: {cat.status}</p>
          <p className="text-gray-600 mt-4">{cat.description}</p>
          <p className="text-gray-600 mt-4">Gender: {cat.gender}</p>

          {isLoggedIn ? (
            <button
              disabled={cat.status === "with-adopter"}
              onClick={handleAdoptClick}
              className={
                cat.status !== "with-adopter"
                  ? "bg-orange-600 text-white py-2 px-4 rounded-full text-lg font-semibold mt-8 hover:bg-orange-700 transition duration-300"
                  : "px-8 py-3 text-white bg-gray-300 rounded focus:outline-none"
              }
            >
              Adopt {cat.name}
            </button>
          ) : (
            <p className="text-green-500 mt-8">
              If you want to adopt {cat.name} please first login.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CatDetailPage;
