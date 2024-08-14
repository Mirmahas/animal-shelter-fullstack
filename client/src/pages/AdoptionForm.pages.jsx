import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../context/auth.context";

const AdoptionForm = () => {
  const location = useLocation();
  const { cat, dog } = location.state || {};
  const petName = cat ? cat.name : dog ? dog.name : "";

  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    petChoice: petName,
    name: "",
    email: "",
    phone: "",
    message: "",
    reason: "",
  });

  const [visitDate, setVisitDate] = useState(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
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

        if (visitResponse.status === 201) {
          alert("Visit scheduled successfully!");
        }
      }

      if (adoptionResponse.status === 200) {
        alert("Adoption request submitted successfully!");
      }
    } catch (error) {
      console.error("Error submitting adoption form:", error);
      alert(
        "There was an error submitting your adoption request. Please try again."
      );
    }
  };

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
              readOnly
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

export default AdoptionForm;
