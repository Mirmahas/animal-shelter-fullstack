// Importa las herramientas necesarias de React
import React, { useState, useEffect, useContext } from "react";
// Importa axios para hacer peticiones a la API
import axios from "axios";

// Define la URL base de la API
const API_URL = "http://localhost:5005";

// Crea un contexto para compartir datos de usuario en toda la app
const AuthContext = React.createContext();
export const useAuthContext = () => useContext(AuthContext);
// Define un componente que proporcionará la autenticación a otros componentes
export function AuthProviderWrapper(props) {
  // Define tres estados:
  // isLoggedIn: si el usuario está o no logueado
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // isLoading: si la app está comprobando la autenticación
  const [isLoading, setIsLoading] = useState(true);
  // user: los datos del usuario autenticado
  const [user, setUser] = useState(null);

  // Guarda el token de autenticación en el navegador
  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  // Verifica si el usuario está autenticado
  const authenticateUser = () => {
    // Obtiene el token guardado en el navegador
    const storedToken = localStorage.getItem("authToken");

    // Si hay un token guardado
    if (storedToken) {
      // Envía el token al servidor para verificarlo
      axios
        .get(`${API_URL}/auth/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          // Si el token es válido, actualiza los estados
          const user = response.data;
          setIsLoggedIn(true); // El usuario está logueado
          setIsLoading(false); // Ya no está cargando
          setUser(user); // Guarda los datos del usuario
        })
        .catch((error) => {
          // Si el token no es válido, limpia los estados
          console.log(error);
          setIsLoggedIn(false); // El usuario no está logueado
          setIsLoading(false); // Ya no está cargando
          setUser(null); // No hay datos de usuario
        });
    } else {
      // Si no hay token, el usuario no está logueado
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };

  // Comprueba la autenticación cuando el componente se carga
  useEffect(() => {
    authenticateUser();
  }, []);

  // Proporciona los datos de autenticación a los componentes hijos
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, isLoading, user, authenticateUser }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

// Exporta el componente proveedor y el contexto
