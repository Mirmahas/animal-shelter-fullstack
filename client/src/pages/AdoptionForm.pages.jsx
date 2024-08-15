// Donde guardamos y cambiamos datos, Accede a información que está en toda la app, Hace que ciertas cosas pasen cuando la página se cargacomo rellenar el formulario automaticamente
import React, { useState, useContext, useEffect } from "react";
// Nos dice dónde estamos en la app, como una dirección
import { useLocation } from "react-router-dom";
// Herramienta para hablar con el servidor
import axios from "axios";
// Herramienta para escoger una fecha y su estilo
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAuthContext } from "../context/auth.context";
// Nos permite usar la información del usuario que está conectado

// Aquí empieza el formulario de adopción
const AdoptionForm = () => {
  // Nos dice en qué parte de la app estamos (como la dirección en la URL)
  const location = useLocation();
  // Saca la información del gato o perro que estamos viendo
  const { cat, dog } = location.state || {};
  // Saca el nombre de la mascota, sea gato o perro
  const petName = cat ? cat.name : dog ? dog.name : "";

  // Saca la información del usuario que está conectado
  const { user } = useAuthContext();
  console.log(user);
  // Aquí guardamos los datos que el usuario escribe en el formulario
  const [formData, setFormData] = useState({
    petChoice: petName, // Guarda el nombre de la mascota
    name: "", // Guarda el nombre del usuario
    email: "", // Guarda el correo del usuario
    phone: "", // Guarda el teléfono del usuario
    message: "", // Guarda el mensaje que el usuario escribe
    reason: "", // Aquí se guardaría la razón de la adopción (no se usa ahora)
  });

  // Aquí guardamos la fecha que el usuario escoge para la visita
  const [visitDate, setVisitDate] = useState(null);

  // Cuando la página carga o cuando cambia el usuario, llenamos el formulario con la información del usuario
  useEffect(() => {
    if (user) {
      // Si el usuario está conectado, ponemos su nombre, correo y teléfono en el formulario
      setFormData((prevData) => ({
        ...prevData,
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
      }));
    }
  }, [user]);

  // Esta función cambia los datos del formulario cuando el usuario escribe algo
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Cambia lo que el usuario escribe en el campo correcto
    }));
  };

  // Esta función se ejecuta cuando el usuario hace clic en el botón "Submit"
  const handleSubmit = async (e) => {
    e.preventDefault(); // Esto evita que la página se recargue

    try {
      // Preparamos los datos de adopción para enviarlos al servidor
      const adoptionData = {
        pet: cat || dog, // Ponemos la información de la mascota
        adopter: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          userId: user._id, // Guardamos el ID del usuario conectado
        },
      };

      // Enviamos los datos de adopción al servidor
      const adoptionResponse = await axios.post(
        "http://localhost:5005/api/adopt",
        adoptionData
      );

      // Si el usuario escoge una fecha para la visita, la enviamos también
      if (visitDate) {
        const visitData = {
          animal: cat?._id || dog?._id, // ID de la mascota
          visitor: user._id, // ID del usuario
          visit_date: visitDate, // Fecha de la visita
          reason: formData.message, // Mensaje del usuario
        };
        const visitResponse = await axios.post(
          "http://localhost:5005/api/visits",
          visitData
        );

        // Si la visita se programa bien, mostramos un mensaje
        if (visitResponse.status === 201) {
          alert("¡Visita programada con éxito!");
        }
      }

      // Si la adopción se solicita bien, mostramos un mensaje
      if (adoptionResponse.status === 200) {
        alert("¡Solicitud de adopción enviada con éxito!");
      }
    } catch (error) {
      // Si hay un error, mostramos un mensaje de error
      console.error("Error al enviar el formulario de adopción:", error);
      alert(
        "Hubo un error al enviar tu solicitud de adopción. Por favor, intenta de nuevo."
      );
    }
  };

  // Esto muestra el formulario en la pantalla con todos los campos y el botón de envío
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
