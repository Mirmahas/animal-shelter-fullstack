import React from "react";

function ContactPage() {
  const centerPhoneNumber = "015789854376";
  const centerAddress = "123 Main Street, Animal Town, AT 12345";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-teal-200 to-blue-200 p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-lg p-8">
        <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-12">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold text-orange-900 mb-6">
              Adoption Center
            </h2>

            <p className="text-gray-700 mb-6">
              If you're interested in adopting a pet, please contact our center.
              We will reach out to you via phone to schedule an appointment for
              a visit.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Phone:</h3>
              <p className="text-gray-700 text-lg">{centerPhoneNumber}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Address:</h3>
              <p className="text-gray-700 text-lg">{centerAddress}</p>
            </div>

            <p className="text-gray-600 mt-6">
              We are excited to help you find your new best friend. Please give
              us a call to set up a visit!
            </p>
          </div>

          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0 flex justify-center">
            <img
              src="https://img.freepik.com/foto-gratis/lindo-perrito-aislado-amarillo_23-2148985932.jpg?t=st=1723641898~exp=1723645498~hmac=5daa820910e106f322658f9225b4c4d84dcc88160b4ddd650d819ad50efacf09&w=1380"
              alt="Cute Puppy"
              className="w-full h-auto max-w-sm rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
