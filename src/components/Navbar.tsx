import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleSectionClick = (sectionId: string) => {
    console.log('Handling section click:', sectionId);
    if (location.pathname !== '/') {
      console.log('Not on home page, navigating...');
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      console.log('On home page, scrolling...');
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  // Handle navigation with scroll when coming from another page
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      console.log('Scrolling to section:', location.state.scrollTo);
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // Clear the state to prevent scrolling on subsequent renders
      window.history.replaceState({}, document.title);
    }
  }, [location]);

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
            <button 
              onClick={() => handleSectionClick('portfolio')}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => handleSectionClick('faq')}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              FAQ
            </button>
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
            <button
              onClick={() => handleSectionClick('portfolio')}
              className="w-full text-left px-3 py-2 text-base text-gray-300 hover:bg-secondary hover:text-white rounded-md"
            >
              Portfolio
            </button>
            <button
              onClick={() => handleSectionClick('faq')}
              className="w-full text-left px-3 py-2 text-base text-gray-300 hover:bg-secondary hover:text-white rounded-md"
            >
              FAQ
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;