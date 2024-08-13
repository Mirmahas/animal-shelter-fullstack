import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-orange-600 shadow-lg fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-white text-3xl font-extrabold tracking-wide"
        >
          Adoption of animals
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link
            to="/dogs"
            className="text-white text-lg bg-orange-500 hover:bg-orange-400 py-2 px-4 rounded transition duration-300 hover:text-orange-300"
          >
            Dogs
          </Link>
          <Link
            to="/cats"
            className="text-white text-lg bg-orange-500 hover:bg-orange-400 py-2 px-4 rounded transition duration-300 hover:text-orange-300"
          >
            Cats
          </Link>
          <Link
            to="/how-to-adopt"
            className="text-white text-lg bg-orange-500 hover:bg-orange-400 py-2 px-4 rounded transition duration-300 hover:text-orange-300"
          >
            How to Adopt
          </Link>
          <Link
            to="/donations"
            className="text-white text-lg bg-orange-500 hover:bg-orange-400 py-2 px-4 rounded transition duration-300 hover:text-orange-300"
          >
            Donations
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg bg-orange-500 hover:bg-orange-400 py-2 px-4 rounded transition duration-300 hover:text-orange-300"
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="text-white text-lg bg-orange-500 hover:bg-orange-400 py-2 px-4 rounded transition duration-300 hover:text-orange-300"
          >
            Login
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-orange-600 shadow-lg">
          <Link
            to="/dogs"
            className="block text-white text-lg bg-orange-500 hover:bg-orange-400 py-2 px-4 transition duration-300 hover:text-orange-300"
          >
            Dogs
          </Link>
          <Link
            to="/cats"
            className="block text-white text-lg bg-orange-500 hover:bg-orange-400 py-2 px-4 transition duration-300 hover:text-orange-300"
          >
            Cats
          </Link>
          <Link
            to="/how-to-adopt"
            className="block text-white text-lg bg-orange-500 hover:bg-orange-400 py-2 px-4 transition duration-300 hover:text-orange-300"
          >
            How to Adopt
          </Link>
          <Link
            to="/donations"
            className="block text-white text-lg bg-orange-500 hover:bg-orange-400 py-2 px-4 transition duration-300 hover:text-orange-300"
          >
            Donations
          </Link>
          <Link
            to="/contact"
            className="block text-white text-lg bg-orange-500 hover:bg-orange-400 py-2 px-4 transition duration-300 hover:text-orange-300"
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="block text-white text-lg bg-orange-500 hover:bg-orange-400 py-2 px-4 transition duration-300 hover:text-orange-300"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
