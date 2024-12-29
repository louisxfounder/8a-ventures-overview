import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">8a Projects</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm hover:text-gray-300 transition-colors">About</a>
            <a href="#portfolio" className="text-sm hover:text-gray-300 transition-colors">Portfolio</a>
            <a href="#faq" className="text-sm hover:text-gray-300 transition-colors">FAQ</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#about"
              className="block px-3 py-2 text-base hover:bg-secondary rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#portfolio"
              className="block px-3 py-2 text-base hover:bg-secondary rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#faq"
              className="block px-3 py-2 text-base hover:bg-secondary rounded-md"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;