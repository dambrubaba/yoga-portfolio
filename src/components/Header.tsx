import React from 'react';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">The Yogic Healer</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-purple-400">Home</a>
          <a href="#services" className="hover:text-purple-400">Services</a>
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#gallery" className="hover:text-purple-400">Gallery</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </nav>
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;