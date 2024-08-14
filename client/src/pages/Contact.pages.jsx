import React from "react";

function ContactPage() {
  const centerPhoneNumber = "555-1234";
  const centerAddress = "123 Main Street, Animal Town, AT 12345";

  return (
    <div className="container mx-auto my-16 px-6 pt-20">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-8">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-orange-900 mb-4">
              Adoption Center
            </h2>

            <p className="text-gray-700 mb-4">
              If you're interested in adopting a pet, please contact our center.
              We will reach out to you via phone to schedule an appointment for
              a visit.
            </p>
            <a
              href="https://github.com/Mirmahas"
              target="_red"
              rel="noopener noreferrer"
              className="text-blue-800 underline mb-4 inline-block"
            >
              GitHub Mirmahas
            </a>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Phone Number:
              </h3>
              <p className="text-gray-700 text-lg">{centerPhoneNumber}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Address:</h3>
              <p className="text-gray-700 text-lg">{centerAddress}</p>
            </div>

            <p className="text-gray-600 mt-4">
              We are excited to help you find your new best friend. Please give
              us a call to set up a visit!
            </p>
          </div>

          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <img
              src="https://img.freepik.com/foto-gratis/lindo-perrito-aislado-amarillo_23-2148985932.jpg?t=st=1723641898~exp=1723645498~hmac=5daa820910e106f322658f9225b4c4d84dcc88160b4ddd650d819ad50efacf09&w=1380"
              alt="Cute Puppy"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
