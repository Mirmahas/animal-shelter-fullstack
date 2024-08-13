//   const cats = [
//     {
//       name: "Luna",
//       image: "https://source.unsplash.com/400x300/?cat",
//       age: "2 años",
//       breed: "Persa",
//       description: "Luna es una gata tranquila y amorosa en busca de un hogar.",
//     },
//     {
//       name: "Simba",
//       image: "https://source.unsplash.com/400x300/?kitten",
//       age: "1 año",
//       breed: "Siamés",
//       description: "Simba es un gatito curioso y juguetón.",
//     },
//     {
//       name: "Milo",
//       image: "https://source.unsplash.com/400x300/?cat-face",
//       age: "3 años",
//       breed: "Maine Coon",
//       description: "Milo es muy sociable y le encanta estar rodeado de gente.",
//     },

//   ];

import React, { useState, useEffect } from "react";

function CatsPage() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const URL = import.meta.env.VITE_LOCAL_URL;
  useEffect(() => {
    fetch(`${URL}/api/animal/cats`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos de los gatos");
        }
        return response.json();
      })
      .then((data) => {
        setCats(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-16">Cargando gatos...</div>;
  }

  if (error) {
    return <div className="text-center mt-16 text-red-500">Error: {error}</div>;
  }
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
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-orange-900">
                    {cat.name}
                  </h3>
                  <p className="text-gray-700 mb-2">Raza: {cat.breed}</p>
                  <p className="text-gray-700 mb-2">Edad: {cat.age}</p>
                  <p className="text-gray-600 mb-4">{cat.description}</p>
                  {/* <button className="bg-orange-600 text-white py-2 px-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition duration-300">
                    Adopt
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
