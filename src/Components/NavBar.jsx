import { useState } from "react";
import { FaBars } from "react-icons/fa"; // Importing hamburger icon

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-6 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4">
        <h1 className="text-3xl font-bold">MAA BHATTARIKA FURNITURE</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#products" className="hover:underline">
            Products
          </a>
          <a href="#about" className="hover:underline">
            About Us
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden flex items-center space-x-2"
          onClick={toggleMenu}
        >
          <FaBars className="text-white text-3xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 px-4`}
      >
        <nav className="space-y-4">
          <a href="#home" className="hover:underline block">
            Home
          </a>
          <a href="#products" className="hover:underline block">
            Products
          </a>
          <a href="#about" className="hover:underline block">
            About Us
          </a>
          <a href="#contact" className="hover:underline block">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
