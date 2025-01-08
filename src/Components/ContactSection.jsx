import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "+919937822101"; // WhatsApp number
    const { name, phoneNo, message } = formData;

    if (!name || !phoneNo || !message) {
      alert("Please fill in all fields before sending the message.");
      return;
    }

    const whatsappMessage = `Hello, my name is ${name}.
Contact No: ${phoneNo}
Message: ${message}`;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank"); // Redirects to WhatsApp
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-yellow-500 to-orange-500 py-12 text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-2 rounded border focus:outline-none text-black focus:ring focus:ring-blue-700"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNo" className="block text-lg font-semibold">
              Contact No
            </label>
            <input
              type="number"
              id="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              className="w-full mt-2 p-2 rounded border focus:outline-none text-black focus:ring focus:ring-blue-700"
              placeholder="Your contact no"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-2 p-2 rounded border focus:outline-none focus:ring focus:ring-blue-700 text-black"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-yellow-700 font-semibold py-2 rounded hover:bg-gray-100 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="bg-orange-500 py-8 text-white mt-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <p className="text-lg">
            For any inquiries, you can reach us directly at the following
            number:
          </p>
          <p className="text-xl font-bold mt-4">
            <a
              href="tel:+919937822101"
              className="text-white hover:text-gray-100 transition"
            >
              +91 99378 22101
            </a>
          </p>
          <p className="mt-4 text-lg">We're available 24/7 for assistance.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
