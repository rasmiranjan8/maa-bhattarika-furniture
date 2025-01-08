import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import HeroSection from "./Components/HeroSection";
import ProductSection from "./Components/ProductSection";
import AboutSection from "./Components/AboutSection";
import ContactSection from "./Components/ContactSection";
import NavBar from "./Components/NavBar";
import Modal from "react-modal";

const App = () => {
  const items = [
    {
      name: "Bed",
      image: "/https://maa-bhattarika-furnuture.netlify.app/image1.png",
      description: "Luxurious wooden beds for your comfort.",
    },
    {
      name: "Door",
      image: "/image6.jpg",
      description: "Durable and stylish wooden doors.",
    },
    {
      name: "Window",
      image: "/image7.jpg",
      description: "Beautiful wooden windows to enhance your home.",
    },
    {
      name: "Dressing Table",
      image: "https://maa-bhattarika-furnuture.netlify.app/image1.png",
      description: "Elegant dressing tables for your bedroom.",
    },
    {
      name: "Dining Table",
      image: "https://maa-bhattarika-furnuture.netlify.app/image1.png",
      description: "Perfect dining tables for your family meals.",
    },
  ];

  const itemDetails = {
    Bed: [
      {
        name: "King Size Bed",
        image: "https://maa-bhattarika-furnuture.netlify.app/image1.png",
      },
      { name: "Queen Size Bed", image: "/image2.png" },
    ],
    Door: [
      {
        name: "Classic Door",
        image: "https://maa-bhattarika-furnuture.netlify.app/image1.png",
      },
      {
        name: "Modern Door",
        image: "https://maa-bhattarika-furnuture.netlify.app/image1.png",
      },
    ],
    "Dressing Table": [
      {
        name: "Vintage Dressing Table",
        image: "https://maa-bhattarika-furnuture.netlify.app/image1.png",
      },
      {
        name: "Modern Dressing Table",
        image: "/images/modern_dressing_table.jpg",
      },
    ],
    "Dining Table": [
      {
        name: "Wooden Dining Table",
        image: "/images/wooden_dining_table.jpg",
      },
      {
        name: "Glass Dining Table",
        image: "/images/glass_dining_table.jpg",
      },
    ],
    Window: [
      {
        name: "Sliding Window",
        image: "/images/sliding_window.jpg",
      },
      {
        name: "Classic Window",
        image: "/images/classic_window.jpg",
      },
    ],
  };

  Modal.setAppElement("#root");

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 pt-16">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ProductSection items={items} />
                <AboutSection />
                <ContactSection />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <ProductSection items={items} />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <AboutSection />
                <ContactSection />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <ContactSection />
              </>
            }
          />
          <Route
            path="/product/:productName"
            element={<ProductDetails itemDetails={itemDetails} />}
          />
        </Routes>
        <footer className="bg-gray-800 py-4 text-center text-white">
          <p>&copy; 2025 MAA BHATTARIKA FURNITURE. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

const ProductDetails = ({ itemDetails }) => {
  const { productName } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const details = itemDetails[productName];

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage("");
  };

  const sendMessegeWp = (item) => {
    const phoneNumber = "+919937822101";
    const message = `Hello, I am interested in the item:
- Name: ${item.name}
- Image URL: ${item.image}`;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  if (!details) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-center">Product not found!</h1>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-center mb-4">{productName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {details.map((item, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md bg-white">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
              onClick={() => openModal(item.image)}
            />
            <h2 className="text-lg font-semibold">{item.name}</h2>
            {/* Removed the price section */}
            <button
              onClick={() => sendMessegeWp(item)}
              className="w-full mt-4 px-4 py-2 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600"
            >
              Select Item
            </button>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
        overlayClassName="fixed inset-0 z-40"
      >
        <div className="relative">
          <img
            src={selectedImage}
            alt="Full View"
            className="max-h-[90vh] max-w-[90vw] object-contain cursor-pointer"
          />
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-2xl font-bold bg-gray-800 px-3 py-2 rounded hover:bg-gray-700"
          >
            X
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default App;
