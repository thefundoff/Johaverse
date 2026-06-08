import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';
import logoMarkCream from '../assets/logo-mark-cream.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-green text-brand-cream pt-16 md:pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 mb-12 md:mb-24">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8 group w-fit">
              <img
                src={logoMarkCream}
                alt="Johäverse"
                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-3xl font-serif font-semibold tracking-tight">
                Johaverse
              </span>
            </Link>
            <p className="text-xl text-brand-cream/70 max-w-sm mb-8 leading-relaxed">
              We Build Visual Experiences for Modern Brands. Crafting clarity, creativity, and precision.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-brand-cream/20 rounded-full flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-smooth">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-brand-cream/20 rounded-full flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-smooth">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-brand-cream/20 rounded-full flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-smooth">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-brand-gold mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-brand-cream/70 hover:text-white transition-smooth">Home</Link></li>
              <li><Link to="/about" className="text-brand-cream/70 hover:text-white transition-smooth">About</Link></li>
              <li><Link to="/services" className="text-brand-cream/70 hover:text-white transition-smooth">Services</Link></li>
              <li><Link to="/contact" className="text-brand-cream/70 hover:text-white transition-smooth">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-brand-gold mb-8">Contact</h4>
            <ul className="space-y-4 text-brand-cream/70">
              <li>thejohaverse@gmail.com</li>
              <li>Abuja, Nigeria</li>
              <li>+234 913 177 6720</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-cream/10 gap-8">
          <p className="text-sm text-brand-cream/50">
            © {new Date().getFullYear()} Johaverse. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-brand-gold hover:text-white transition-smooth"
          >
            Back to Top <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
