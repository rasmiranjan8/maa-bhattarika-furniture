import React, { useState } from "react";
import HeroSection from "./Components/HeroSection";
import ProductSection from "./Components/ProductSection";
import AboutSection from "./Components/AboutSection";
import ContactSection from "./Components/ContactSection";
import NavBar from "./Components/NavBar";

const App = () => {
  const items = [
    {
      name: "Bed",
      image: "/images/bed.jpg",
      description: "Luxurious wooden beds for your comfort.",
    },
    {
      name: "Door",
      image: "/images/door.jpg",
      description: "Durable and stylish wooden doors.",
    },
    {
      name: "Window",
      image: "/images/window.jpg",
      description: "Beautiful wooden windows to enhance your home.",
    },
    {
      name: "Dressing Table",
      image: "/images/dressing_table.jpg",
      description: "Elegant dressing tables for your bedroom.",
    },
    {
      name: "Dining Table",
      image: "/images/dining_table.jpg",
      description: "Perfect dining tables for your family meals.",
    },
  ];

  const itemDetails = {
    Bed: [
      { name: "King Size Bed", image: "/image1.png", price: "$500" },
      { name: "Queen Size Bed", image: "/image2.png", price: "$400" },
    ],
    Door: [
      {
        name: "Classic Door",
        image: "/image3.jpg.jpg",
        price: "$150",
      },
      { name: "Modern Door", image: "/images/modern_door.jpg", price: "$200" },
    ],
    "Dressing Table": [
      {
        name: "Vintage Dressing Table",
        image: "/images/vintage_dressing_table.jpg",
        price: "$250",
      },
      {
        name: "Modern Dressing Table",
        image: "/images/modern_dressing_table.jpg",
        price: "$300",
      },
    ],
    "Dining Table": [
      {
        name: "Wooden Dining Table",
        image: "/images/wooden_dining_table.jpg",
        price: "$450",
      },
      {
        name: "Glass Dining Table",
        image: "/images/glass_dining_table.jpg",
        price: "$600",
      },
    ],
    Window: [
      {
        name: "Sliding Window",
        image: "/images/sliding_window.jpg",
        price: "$200",
      },
      {
        name: "Classic Window",
        image: "/images/classic_window.jpg",
        price: "$180",
      },
    ],
  };

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <NavBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Products Section */}
      <ProductSection
        items={items}
        itemDetails={itemDetails}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-800 py-4 text-center text-white">
        <p>&copy; 2025 MAA BHATTARIKA FURNITURE. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
