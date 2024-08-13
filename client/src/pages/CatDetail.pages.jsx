import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DogDetailPage({ cats }) {
  const { catId } = useParams();
  const [cat, setCat] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5005/api/animal/animals/" + catId)
      .then((response) => {
        setCat(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cats:", error);
      });
  }, []);
  console.log(cat);

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={cat.image}
          alt={cat.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-4xl font-bold text-orange-900">{cat.name}</h2>
          <p className="text-gray-700 mt-4">Raza: {cat.breed}</p>
          <p className="text-gray-700">Edad: {cat.age}</p>
          <p className="text-gray-600 mt-4">{cat.description}</p>
          <button
            onClick={() => navigate("/adoption-form")}
            className="bg-orange-600 text-white py-2 px-4 rounded-full text-lg font-semibold mt-8 hover:bg-orange-700 transition duration-300"
          >
            Adopt {cat.name}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DogDetailPage;
