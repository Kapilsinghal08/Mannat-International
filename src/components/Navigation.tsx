import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-500",
          isScrolled || !isHomePage
            ? "bg-white/95 backdrop-blur-md py-4 shadow-sm" 
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex flex-col">
            <span className={cn(
              "font-serif text-2xl tracking-wider font-medium transition-colors duration-300",
              isScrolled || !isHomePage ? "text-black" : "text-white"
            )}>
              MANNAT
            </span>
            <span className={cn(
              "text-[10px] tracking-[0.3em] uppercase transition-colors duration-300",
              isScrolled || !isHomePage ? "text-neutral-500" : "text-white/80"
            )}>
              International
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {isHomePage ? (
              <>
                {['About', 'Hotels', 'Rooms', 'Amenities', 'Gallery', 'Location'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    className={cn(
                      "text-sm tracking-wide uppercase transition-colors duration-300 hover:text-gold",
                      isScrolled ? "text-neutral-600" : "text-white/90"
                    )}
                  >
                    {item}
                  </a>
                ))}
              </>
            ) : (
              <>
                <Link to="/" className="text-sm tracking-wide uppercase transition-colors duration-300 text-neutral-600 hover:text-gold">Home</Link>
                <Link to="/hotel-bliss" className="text-sm tracking-wide uppercase transition-colors duration-300 text-neutral-600 hover:text-gold">Hotel Bliss</Link>
                <Link to="/hotel-mannat" className="text-sm tracking-wide uppercase transition-colors duration-300 text-neutral-600 hover:text-gold">Hotel Mannat</Link>
                <Link to="/south-embassy-hotel" className="text-sm tracking-wide uppercase transition-colors duration-300 text-neutral-600 hover:text-gold">South Embassy</Link>
              </>
            )}
            <a 
              href="#book"
              className={cn(
                "px-6 py-2.5 text-sm uppercase tracking-wider transition-all duration-300 border",
                isScrolled || !isHomePage
                  ? "border-black text-black hover:bg-black hover:text-white" 
                  : "border-white text-white hover:bg-white hover:text-black"
              )}
            >
              Book Stay
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className={cn("w-6 h-6 transition-colors", isScrolled || !isHomePage ? "text-black" : "text-white")} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center space-y-8"
          >
            <Link to="/" className="font-serif text-3xl text-black hover:text-gold transition-colors">Home</Link>
            <Link to="/hotel-bliss" className="font-serif text-3xl text-black hover:text-gold transition-colors">Hotel Bliss</Link>
            <Link to="/hotel-mannat" className="font-serif text-3xl text-black hover:text-gold transition-colors">Hotel Mannat</Link>
            <Link to="/south-embassy-hotel" className="font-serif text-3xl text-black hover:text-gold transition-colors">South Embassy</Link>
            <a 
              href="#book"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 px-8 py-3 border border-black text-black uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors"
            >
              Book Stay
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
