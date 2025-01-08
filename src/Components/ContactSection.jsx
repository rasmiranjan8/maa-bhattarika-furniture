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
        {/* Introduction Message */}
        <div className="text-center mb-12">
          <p className="text-lg font-medium">
            You've reached the end! If you couldn't find what you were looking
            for, feel free to share your design with us at the contact number
            below. Customization is possible with your suggested wood. For any
            unlisted items or types of wood, don't hesitate to reach out!
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-orange-600 py-8 px-6 rounded-lg shadow-lg text-center mb-12">
          <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
          <p className="text-lg">
            For any inquiries, you can reach us directly at:
          </p>
          <p className="text-2xl font-bold mt-2">
            <a
              href="tel:+919937822101"
              className="text-white hover:text-gray-100 transition"
            >
              +91 99378 22101
            </a>
          </p>
          <p className="text-lg mt-4">
            We're available <span className="font-bold">24/7</span> for
            assistance.
          </p>
        </div>

        {/* Contact Form */}
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-yellow-500 text-gray-800"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="phoneNo"
              className="block text-lg font-semibold mb-2"
            >
              Contact No
            </label>
            <input
              type="number"
              id="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-yellow-500 text-gray-800"
              placeholder="Your Contact No"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-lg font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-yellow-500 text-gray-800"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-bold py-2 rounded hover:bg-yellow-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
