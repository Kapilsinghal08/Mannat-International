import React from 'react';
import { Phone, Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white/70 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="flex flex-col mb-6">
              <span className="font-serif text-2xl tracking-wider font-medium text-white">
                MANNAT
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold">
                International
              </span>
            </Link>
            <p className="font-light text-sm leading-relaxed">
              Experience the pinnacle of luxury and comfort across our premium properties in Delhi. Your perfect stay begins here.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-6">Our Hotels</h4>
            <ul className="space-y-3 font-light text-sm">
              <li><Link to="/hotel-bliss" className="hover:text-gold transition-colors">Hotel Bliss</Link></li>
              <li><Link to="/hotel-mannat" className="hover:text-gold transition-colors">Hotel Mannat</Link></li>
              <li><Link to="/south-embassy-hotel" className="hover:text-gold transition-colors">South Embassy Hotel</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-6">Contact</h4>
            <ul className="space-y-4 font-light text-sm">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold" />
                <span>reservations@mannatinternational.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-6">Newsletter</h4>
            <p className="font-light text-sm mb-4">Subscribe for exclusive offers and updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border border-white/20 px-4 py-2 text-sm w-full focus:outline-none focus:border-gold text-white"
              />
              <button className="bg-gold text-white px-4 py-2 hover:bg-gold-dark transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light tracking-wide">
          <p>&copy; {new Date().getFullYear()} Mannat International. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
