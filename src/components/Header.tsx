import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-amber-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">PH</span>
          </div>
          <h1 className="text-xl font-bold text-amber-600">PawsResort</h1>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
            Home
          </a>
          <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors">
            Services
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-amber-600 transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">
            Contact
          </a>
          <button className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors">
            Book Now
          </button>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-amber-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <button className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors w-full">
              Book Now
            </button>
          </nav>
        </div>}
    </header>;
}