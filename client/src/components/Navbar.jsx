import React, { useState, useEffect } from "react";
// Helps us navigate to other pages
import { Link, useNavigate } from "react-router-dom";
// To know if the user is logged in
import { useAuthContext } from "../context/auth.context";
import logo from "../assets/logo.jpg";

function Navbar() {
  //(for mobile phones) To know if the menu is open or closed
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, authenticateUser } = useAuthContext();
  // Function to open or close the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // Get the authentication token stored in the browser
  const token = localStorage.getItem("authToken");

  // When the token changes, check if the user is logged in.
  useEffect(() => {
    authenticateUser();
  }, [token]);

  // Function for logout and Sends the user back to the home page.
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
    navigate("/");
  };

  return (
    <nav className="bg-orange-500 shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Adoption of Animals"
            className="h-14 w-auto mr-3 rounded-full shadow-lg border-2 border-white transition-transform duration-300 hover:scale-105"
          />
          <span className="text-white text-3xl font-bold tracking-wide hover:text-orange-100 transition duration-300">
            Adoption of Animals
          </span>
        </Link>

        {/* Links for pages, big screens */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/dogs"
            className="text-white text-lg bg-orange-400 hover:bg-orange-300 py-2 px-4 rounded-md transition duration-300 hover:text-orange-100"
          >
            Dogs
          </Link>
          <Link
            to="/cats"
            className="text-white text-lg bg-orange-400 hover:bg-orange-300 py-2 px-4 rounded-md transition duration-300 hover:text-orange-100"
          >
            Cats
          </Link>
          <Link
            to="/how-to-adopt"
            className="text-white text-lg bg-orange-400 hover:bg-orange-300 py-2 px-4 rounded-md transition duration-300 hover:text-orange-100"
          >
            How to Adopt
          </Link>

          <Link
            to="/contact"
            className="text-white text-lg bg-orange-400 hover:bg-orange-300 py-2 px-4 rounded-md transition duration-300 hover:text-orange-100"
          >
            Contact
          </Link>
          {isLoggedIn ? (
            // Si el usuario está conectado, muestra el botón para cerrar sesión
            <button
              onClick={handleLogout}
              className="text-white text-lg bg-orange-400 hover:bg-orange-300 py-2 px-4 rounded-md transition duration-300 hover:text-orange-100"
            >
              Logout
            </button>
          ) : (
            // Si no está conectado, muestra el enlace para iniciar sesión
            <Link
              to="/login"
              className="text-white text-lg bg-orange-400 hover:bg-orange-300 py-2 px-4 rounded-md transition duration-300 hover:text-orange-100"
            >
              Login
            </Link>
          )}
        </div>

        {/* Botón para abrir o cerrar el menú en pantallas pequeñas (como móviles) */}
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

      {/* Menú que se muestra cuando está abierto en pantallas pequeñas */}
      {isOpen && (
        <div className="md:hidden bg-orange-500 shadow-md">
          <Link
            to="/dogs"
            className="block text-white text-lg bg-orange-400 hover:bg-orange-300 py-2 px-4 transition duration-300 hover:text-orange-100"
          >
            Dogs
          </Link>
          <Link
            to="/cats"
            className="block text-white text-lg bg-orange-400 hover:bg-orange-300 py-2 px-4 transition duration-300 hover:text-orange-100"
          >
            Cats
          </Link>
          <Link
            to="/how-to-adopt"
            className="block text-white text-lg bg-orange-400 hover:bg-orange-300 py-2 px-4 transition duration-300 hover:text-orange-100"
          >
            How to Adopt
          </Link>

          <Link
            to="/contact"
            className="block text-white text-lg bg-orange-400 hover:bg-orange-300 py-2 px-4 transition duration-300 hover:text-orange-100"
          >
            Contact
          </Link>
          {isLoggedIn ? (
            // Botón para cerrar sesión en pantallas pequeñas
            <button
              onClick={handleLogout}
              className="block text-white text-lg bg-orange-400 hover:bg-orange-300 py-2 px-4 transition duration-300 hover:text-orange-100"
            >
              Logout
            </button>
          ) : (
            // Enlace para iniciar sesión en pantallas pequeñas
            <Link
              to="/login"
              className="block text-white text-lg bg-orange-400 hover:bg-orange-300 py-2 px-4 transition duration-300 hover:text-orange-100"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
