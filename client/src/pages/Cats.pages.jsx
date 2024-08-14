import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CatsPage() {
  const [cats, setCats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5005/api/animal/cats")
      .then((response) => {
        console.log(response.data); // Verifica los datos aquí
        setCats(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cats:", error);
      });
  }, []);

  return (
    <>
      <header className="bg-orange-600 py-16 text-center mt-16">
        <h1 className="text-white text-5xl font-extrabold">
          Cats Available for Adoption
        </h1>
        <p className="text-white text-lg mt-4">
          Find your new feline friend today.
        </p>
      </header>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cats.map((cat, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                onClick={() => navigate(`/cats/${cat._id}`)}
              >
                <img
                  src={cat.image_url} // Asegúrate de que el campo de la imagen se llame `image_url`
                  alt={cat.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-900">
                    {cat.name}
                  </h3>
                  <p className="text-gray-700 mb-2">Breed: {cat.breed}</p>
                  <p className="text-gray-700 mb-2">Age: {cat.age} years</p>
                  <p className="text-gray-600 mb-4">{cat.description}</p>
                  {/* <button
                    onClick={() => navigate("/adoption-form")}
                    className="bg-blue-600 text-white py-2 px-4 rounded-full text-lg font-semibold mt-8 hover:bg-blue-700 transition duration-300"
                  >
                    Adopt {cat.name}
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CatsPage;
