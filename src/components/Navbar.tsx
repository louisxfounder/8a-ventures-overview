import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">8a Projects</Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm transition-colors ${isActive('/') ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              Home
            </Link>
            <Link 
              to="/core-principles" 
              className={`text-sm transition-colors ${isActive('/core-principles') ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              Core Principles
            </Link>
            <a href="#portfolio" className="text-sm text-gray-300 hover:text-white transition-colors">Portfolio</a>
            <a href="#faq" className="text-sm text-gray-300 hover:text-white transition-colors">FAQ</a>
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
            <Link
              to="/"
              className={`block px-3 py-2 text-base rounded-md ${
                isActive('/') ? 'bg-secondary text-white' : 'text-gray-300 hover:bg-secondary hover:text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/core-principles"
              className={`block px-3 py-2 text-base rounded-md ${
                isActive('/core-principles') ? 'bg-secondary text-white' : 'text-gray-300 hover:bg-secondary hover:text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Core Principles
            </Link>
            <a
              href="#portfolio"
              className="block px-3 py-2 text-base text-gray-300 hover:bg-secondary hover:text-white rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#faq"
              className="block px-3 py-2 text-base text-gray-300 hover:bg-secondary hover:text-white rounded-md"
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