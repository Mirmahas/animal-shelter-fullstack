import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAuthContext } from "../context/auth.context";

const AdoptionForm = () => {
  // Where we are in the app ( URL)
  const location = useLocation();
  // Info on the cat or dog we are looking at
  const { cat, dog } = location.state || {};
  // Name of the pet, cat or dog
  const petName = cat ? cat.name : dog ? dog.name : "";
  // Info on the user who is logged in
  const { user } = useAuthContext();
  console.log(user);
  //Save the data that the user enters in the form
  const [formData, setFormData] = useState({
    petChoice: petName,
    name: "",
    email: "",
    phone: "",
    message: "",
    reason: "",
  });

  // Save the date that the user chooses for the visit
  const [visitDate, setVisitDate] = useState(null);

  // When the page loads, we fill in the form with the user's information.
  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
      }));
    }
  }, [user]);

  // Changes the form data when the user enters something
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // This function is executed when the user clicks on the ‘Submit’ button.
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Prepare the adoption data and send to the server.
      const adoptionData = {
        pet: cat || dog,
        adopter: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          userId: user._id,
        },
      };
      const adoptionResponse = await axios.post(
        "http://localhost:5005/api/adopt",
        adoptionData
      );

      //Prepare the date for the visit and send to the server
      if (visitDate) {
        const visitData = {
          animal: cat?._id || dog?._id,
          visitor: user._id,
          visit_date: visitDate,
          reason: formData.message,
        };
        const visitResponse = await axios.post(
          "http://localhost:5005/api/visits",
          visitData
        );

        // If the visit is well timed, we display a message
        if (visitResponse.status === 201) {
          alert("Visit successfully scheduled!");
        }
      }

      // If the adoption is successfully applied for, we display a message
      if (adoptionResponse.status === 200) {
        alert("Adoption application successfully submitted!");
      }
    } catch (error) {
      // If there is an error, we display an error message.
      console.error("Error sending the adoption form:", error);
      alert(
        " There was an error sending your adoption application. Please try again."
      );
    }
  };

  // This displays the form on the screen with all the fields and the submit button.
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-teal-200 to-blue-200 p-8 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white shadow-xl rounded-lg p-10">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">
          Adoption Form
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="petChoice"
            >
              Pet Choice
            </label>
            <input
              type="text"
              id="petChoice"
              name="petChoice"
              value={formData.petChoice}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              readOnly // Campo de solo lectura, no se puede cambiar
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="visitDate"
            >
              Select Visit Date and Time
            </label>
            <DatePicker
              selected={visitDate}
              onChange={(date) => setVisitDate(date)}
              showTimeSelect
              dateFormat="Pp"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Exporta el formulario para que pueda ser usado en otras partes de la app
export default AdoptionForm;
