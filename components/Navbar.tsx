import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAssetPath } from '../utils/paths';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  mobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, onClick, mobile }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  const baseClasses = "font-medium transition-colors duration-200";
  const desktopClasses = `text-sm ${isActive ? 'text-primary' : 'text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-primary'}`;
  const mobileClasses = `text-lg block py-2 ${isActive ? 'text-primary' : 'text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-primary'}`;

  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
    >
      {children}
    </Link>
  );
};

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#111c22]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
          <img 
            src={getAssetPath("/photos/Logo_darkmode-removebg-preview.png")} 
            alt="Logo" 
            className="h-40 w-auto group-hover:scale-110 transition-transform duration-300"
            loading="eager"
            decoding="async"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => navigate('/contact')}
            className="bg-primary hover:bg-primary/90 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 shadow-lg shadow-primary/20 animate-pulse-slow"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="text-white hover:text-primary transition-colors p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              // Close (X) icon
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-[#111c22] border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-2">
          <NavLink to="/" mobile onClick={closeMenu}>Home</NavLink>
          <NavLink to="/portfolio" mobile onClick={closeMenu}>Portfolio</NavLink>
          <NavLink to="/services" mobile onClick={closeMenu}>Services</NavLink>
          <NavLink to="/about" mobile onClick={closeMenu}>About</NavLink>
          <NavLink to="/contact" mobile onClick={closeMenu}>Contact</NavLink>
          
          <div className="pt-4 mt-2 border-t border-white/10">
            <button 
              onClick={() => {
                navigate('/contact');
                closeMenu();
              }}
              className="w-full bg-primary hover:bg-primary/90 text-white text-base font-bold px-5 py-3 rounded-lg transition-all shadow-lg shadow-primary/20"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;