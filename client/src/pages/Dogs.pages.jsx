import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function DogsPage() {
  const [dogs, setDogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5005/api/animal/dogs")
      .then((response) => {
        console.log(response.data); // Verifica los datos aquí
        setDogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching dogs:", error);
      });
  }, []);

  return (
    <>
      <header className="bg-orange-600 py-16 text-center mt-16">
        <h1 className="text-white text-5xl font-extrabold">
          Dogs Available for Adoption
        </h1>
        <p className="text-white text-lg mt-4">
          Find your new canine friend today.
        </p>
      </header>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dogs.map((dog, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                onClick={() => navigate(`/dogs/${dog._id}`)}
              >
                <img
                  src={dog.image_url} // Asegúrate de que el campo de la imagen se llame `image_url`
                  alt={dog.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-orange-900">
                    {dog.name}
                  </h3>
                  <p className="text-gray-700 mb-2">Raza: {dog.breed}</p>
                  <p className="text-gray-700 mb-2">Edad: {dog.age} años</p>
                  <p className="text-gray-600 mb-4">{dog.description}</p>{" "}
                  {/* Asegúrate de que tengas la descripción */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default DogsPage;
