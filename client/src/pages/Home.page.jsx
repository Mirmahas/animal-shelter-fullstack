import React from "react";
import { Link } from "react-router-dom";
import perroygato from "../assets/perroygato.jpg"; // Asegúrate de que la ruta y el nombre del archivo son correctos

function HomePage() {
  return (
    <>
      {/* Header */}
      <header
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url(${perroygato})`,
        }}
      >
        <div className="flex flex-col justify-center items-center h-full bg-gray-800 bg-opacity-50 text-center px-6">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-4">
            Welcome to the Animal Adoption Center
          </h1>
          <p className="text-white text-lg md:text-xl mb-8">
            Adopt a friend for life and change their world.
          </p>
          <Link
            to="/how-to-adopt"
            className="bg-orange-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-orange-700 transition duration-300"
          >
            Learn How to Adopt
          </Link>
        </div>
      </header>
      {/* Categories Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-900 mb-12">
            Explore Our Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/dogs"
              className="group block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src="https://source.unsplash.com/400x300/?dogs"
                alt="Dogs"
                className="w-full h-48 object-cover group-hover:scale-105 transform transition duration-300"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-orange-900 group-hover:text-orange-600 transition-colors duration-300">
                  Dogs
                </h3>
              </div>
            </Link>
            <Link
              to="/cats"
              className="group block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src="https://source.unsplash.com/400x300/?cats"
                alt="Cats"
                className="w-full h-48 object-cover group-hover:scale-105 transform transition duration-300"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-orange-900 group-hover:text-orange-600 transition-colors duration-300">
                  Cats
                </h3>
              </div>
            </Link>
            <Link
              to="/other-animals"
              className="group block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src="https://source.unsplash.com/400x300/?small-pets"
                alt="Other Animals"
                className="w-full h-48 object-cover group-hover:scale-105 transform transition duration-300"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-orange-900 group-hover:text-orange-600 transition-colors duration-300">
                  Other Animals
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-orange-600 py-8">
        <div className="container mx-auto px-6 text-white text-center">
          <p className="text-lg font-semibold">Animal Adoption Center</p>
          <p className="text-sm mt-2">© 2024 All rights reserved</p>
          <div className="flex justify-center mt-4 space-x-6">
            <a
              href="https://github.com/Mirmahas"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub Mirmahas
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
