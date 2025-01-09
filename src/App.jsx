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
      image: "https://maa-bhattarika-furnuture.netlify.app/bed.webp",
      description: "Luxurious wooden beds for your comfort.",
    },
    {
      name: "Door and Window",
      image: "https://maa-bhattarika-furnuture.netlify.app/door.jpg",
      description: "Durable and stylish wooden doors.",
    },
    {
      name: "Dressing Table",
      image: "https://maa-bhattarika-furnuture.netlify.app/dressing_table.webp",
      description: "Elegant dressing tables for your bedroom.",
    },
    {
      name: "Dining Table",
      image: "https://maa-bhattarika-furnuture.netlify.app/dining.jpg",
      description: "Perfect dining tables for your family meals.",
    },
    {
      name: "Table and Chair",
      image: "https://maa-bhattarika-furnuture.netlify.app/table_chair.jpeg",
      description: "Stylish tables and chairs for every room.",
    },
    {
      name: "Sofa",
      image: "https://maa-bhattarika-furnuture.netlify.app/sofa.jpeg",
      description: "Comfortable sofas for your relaxation.",
    },
    {
      name: "Diwan",
      image: "https://maa-bhattarika-furnuture.netlify.app/deewan.jpg",
      description: "Stylish diwan for your living room",
    },
  ];

  const itemDetails = {
    Bed: [
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed1.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed2.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed3.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed4.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed5.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed6.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed7.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed8.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed9.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed10.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed11.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed12.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed13.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed14.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed15.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed16.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed17.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed18.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed19.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed20.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed21.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed22.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed23.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed24.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed25.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed26.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed27.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed28.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed29.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed30.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed31.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed32.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed33.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed34.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed35.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed36.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed37.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed38.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed39.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/bed40.jpg" },
    ],
    "Door and Window": [
      { image: "https://maa-bhattarika-furnuture.netlify.app/door1.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/door2.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/door3.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/door4.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/door5.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/door6.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/door7.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/door8.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/door9.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/door10.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/door11.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/door12.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/door13.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/door14.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/door15.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/door16.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/door17.jpg" },
    ],
    "Dressing Table": [
      { image: "https://maa-bhattarika-furnuture.netlify.app/dressing1.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dressing2.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dressing3.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dressing4.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dressing5.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dressing6.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dressing7.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dressing8.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dressing9.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dressing10.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dressing11.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dressing12.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dressing13.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dressing14.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dressing15.jpg" },
    ],
    "Dining Table": [
      { image: "https://maa-bhattarika-furnuture.netlify.app/dining1.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dining2.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dining3.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dining4.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dining5.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dining6.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dining7.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dining8.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dining9.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dining10.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dining11.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dining12.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/dining13.jpg" },
    ],
    Window: [
      { image: "https://maa-bhattarika-furnuture.netlify.app/window1.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/window2.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/window3.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/window4.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/window5.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/window6.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/window7.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/window8.jpg" },
    ],
    "Table and Chair": [
      { image: "https://maa-bhattarika-furnuture.netlify.app/chair1.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/chair2.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/chair3.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/chair4.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/chair5.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/chair6.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/chair7.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/chair8.jpg" },
    ],
    Sofa: [
      { image: "https://maa-bhattarika-furnuture.netlify.app/sofa1.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/sofa2.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/sofa3.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/sofa4.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/sofa5.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/sofa6.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/sofa7.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/sofa8.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/sofa9.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/sofa10.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/sofa11.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/sofa12.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/sofa13.jpg" },
      { image: "https://maa-bhattarika-furnuture.netlify.app/sofa14.jpg" },
    ],
    Diwan: [
      {
        image: "https://maa-bhattarika-furnuture.netlify.app/diwan1.jpg",
      },
      {
        image: "https://maa-bhattarika-furnuture.netlify.app/diwan2.jpg",
      },
      {
        image: "https://maa-bhattarika-furnuture.netlify.app/diwan3.jpg",
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
          <Route path="/contact" element={<ContactSection />} />
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
              alt="Product"
              className="w-full h-48 object-contain bg-white rounded-md mb-4 cursor-pointer"
              onClick={() => openModal(item.image)}
            />
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
