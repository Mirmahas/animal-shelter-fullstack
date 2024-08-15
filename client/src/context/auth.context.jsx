//This code handles user logins, verifying if they are authenticated and sharing that information with all the application.

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

// Defines the base URL of the API
const API_URL = "http://localhost:5005";

// Share user data across the app
const AuthContext = React.createContext();
export const useAuthContext = () => useContext(AuthContext);
// Component that will provide authentication to other components
export function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  // Saves the authentication token in the browser
  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  // Check if the user is authenticated
  const authenticateUser = () => {
    // Gets the token saved in the browser
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      // Sends the token to the server for verification
      axios
        .get(`${API_URL}/auth/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          const user = response.data;
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(user);
        })
        .catch((error) => {
          // If the token is invalid, clear states
          console.log(error);
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        });
    } else {
      // If there is no token, the user is not logged in.
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };

  // Checks authentication when the component is loaded
  useEffect(() => {
    authenticateUser();
  }, []);

  // Provides the authentication data to the child components
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, isLoading, user, authenticateUser }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
