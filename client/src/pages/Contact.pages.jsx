import React from "react";

function ContactPage() {
  const centerPhoneNumber = "555-1234";
  const centerAddress = "123 Main Street, Animal Town, AT 12345";

  return (
    <div className="container mx-auto my-16 px-6">
      <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-8">
        Contact Us
      </h1>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <h2 className="text-2xl font-bold text-orange-900 mb-4">
          Adoption Center
        </h2>

        <p className="text-gray-700 mb-4">
          If you're interested in adopting a pet, please contact our center. We
          will reach out to you via phone to schedule an appointment for a
          visit.
        </p>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Phone Number:</h3>
          <p className="text-gray-700 text-lg">{centerPhoneNumber}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900">Address:</h3>
          <p className="text-gray-700 text-lg">{centerAddress}</p>
        </div>

        <p className="text-gray-600 mt-4">
          We are excited to help you find your new best friend. Please give us a
          call to set up a visit!
        </p>
      </div>
    </div>
  );
}

export default ContactPage;
