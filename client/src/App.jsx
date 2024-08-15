import React from "react";
import { Routes, Route, useLocation, Form } from "react-router-dom";
import Home from "../src/pages/Home.page";
import Navbar from "./components/Navbar";
import Dogs from "../src/pages/Dogs.pages";
import Cats from "../src/pages/Cats.pages";
import HowToAdopt from "./pages/HowToAdopt.pages";
import AdoptionForm from "./pages/AdoptionForm.pages";
import RegisterForm from "./pages/RegisterForm.page";
import Login from "./pages/Login.page";
import DogDetail from "./pages/DogDetail.pages";
import ContactPage from "./pages/Contact.pages";
import CatDetail from "./pages/CatDetail.pages";
import { AuthProviderWrapper } from "./context/auth.context"; // Importa AuthProviderWrapper

function App() {
  return (
    <>
      <AuthProviderWrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/how-to-adopt" element={<HowToAdopt />} />
          <Route path="/adoption-form" element={<AdoptionForm />} />
          <Route path="/register-form" element={<RegisterForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dogs/:dogId" element={<DogDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cats/:catId" element={<CatDetail />} />
        </Routes>
      </AuthProviderWrapper>
    </>
  );
}

export default App;
