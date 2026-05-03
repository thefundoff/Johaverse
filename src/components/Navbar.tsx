import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 ${scrolled ? 'bg-brand-green' : 'bg-brand-cream'}`}>
            <span className={`font-serif text-xl font-bold transition-colors duration-300 ${scrolled ? 'text-brand-cream' : 'text-brand-green'}`}>J</span>
          </div>
          <span className={`text-2xl font-serif font-semibold tracking-tight transition-colors duration-300 ${scrolled ? 'text-brand-green' : 'text-brand-cream'}`}>
            Johaverse
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-widest uppercase font-medium transition-colors hover:text-brand-gold ${
                location.pathname === link.path
                  ? 'text-brand-gold'
                  : scrolled
                  ? 'text-brand-offblack/80'
                  : 'text-brand-cream/90'
              }`}
            >
              <span className="relative">
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-[1px] bg-brand-gold"
                  />
                )}
              </span>
            </Link>
          ))}
          <Link
            to="/contact"
            className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 ${
              scrolled
                ? 'bg-brand-green text-brand-cream hover:bg-brand-gold'
                : 'bg-brand-cream text-brand-green hover:bg-brand-gold hover:text-brand-cream'
            }`}
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden transition-colors duration-300 ${scrolled ? 'text-brand-offblack' : 'text-brand-cream'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-brand-cream shadow-xl border-t border-brand-offblack/10 md:hidden"
        >
          <div className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-serif ${
                  location.pathname === link.path ? 'text-brand-gold' : 'text-brand-offblack'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-brand-green text-white text-center py-4 rounded-xl uppercase tracking-widest font-bold"
            >
              Request a Quote
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
