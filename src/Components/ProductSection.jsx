import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "react-modal";

const ProductSection = ({ items, itemDetails }) => {
  const { productName } = useParams(); // Get the product name (e.g., "Bed", "Door") from the URL
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Function to send product info to WhatsApp
  const sendMessegeWp = (item) => {
    const phoneNumber = "+919937822101"; // WhatsApp number
    const message = `Hello, I am interested in the item:
- Name: ${item.name}
- Description: ${item.description}
- Image URL: ${item.image}`;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  // Function to open the image modal
  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  // Function to close the image modal
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage("");
  };

  // If `productName` exists, display the detailed items (e.g., Beds, Doors, etc.)
  if (productName) {
    const details = itemDetails[productName]; // Get details for the selected product category
    if (!details) {
      return (
        <div className="p-8">
          <h1 className="text-2xl font-bold text-center text-red-500">
            Product not found!
          </h1>
          <Link
            to="/"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 inline-block"
          >
            Back to Products
          </Link>
        </div>
      );
    }

    return (
      <section id="product-details" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            {productName}
          </h2>
          <Link
            to="/"
            className="mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Back to Products
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {details.map((detail, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <div className="relative">
                  {/* Image to trigger modal */}
                  <img
                    src={detail.image}
                    alt={detail.name}
                    className="h-48 w-full object-cover cursor-pointer"
                    onClick={() => openModal(detail.image)}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {detail.name}
                  </h3>
                  <p className="text-gray-500">{detail.description}</p>
                  {/* WhatsApp Button */}
                  <button
                    onClick={() => sendMessegeWp(detail)}
                    className="w-full mt-4 px-4 py-2 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 transition duration-200"
                  >
                    Select Item
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Full-Screen Image */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          overlayClassName="fixed inset-0 z-40"
          ariaHideApp={false} // Prevent Modal's warning about accessibility
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Full View"
              className="max-h-[90vh] max-w-[90vw] object-contain cursor-zoom-in"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-gray-800 px-3 py-2 rounded hover:bg-gray-700"
            >
              X
            </button>
          </div>
        </Modal>
      </section>
    );
  }

  // If `productName` does not exist, show the main product categories
  return (
    <section id="products" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
            >
              <Link to={`/product/${item.name}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
