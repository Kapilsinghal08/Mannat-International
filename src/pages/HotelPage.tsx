import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, MapPin, Phone, MessageCircle } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/utils';
import { hotelsData } from '../App';

export default function HotelPage() {
  const { hotelId } = useParams<{ hotelId: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [hotelId]);

  if (!hotelId || !hotelsData[hotelId as keyof typeof hotelsData]) {
    return <Navigate to="/" replace />;
  }

  const hotel = hotelsData[hotelId as keyof typeof hotelsData];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img 
            src={hotel.image} 
            alt={hotel.name} 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center space-x-2">
              <Star className="w-5 h-5 text-gold fill-gold" />
              <span className="text-white font-medium text-lg">{hotel.rating} / 5.0</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="font-serif text-5xl md:text-7xl text-white leading-tight"
            >
              {hotel.name}
            </motion.h1>
            
            <motion.div 
              variants={fadeInUp}
              className="flex items-center justify-center text-white/90"
            >
              <MapPin className="w-5 h-5 mr-2 text-gold" />
              <span className="text-lg font-light">{hotel.location}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Info & About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div>
                <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4 block">About Property</span>
                <h2 className="font-serif text-4xl text-black mb-6">Experience {hotel.name}</h2>
                <div className="w-12 h-0.5 bg-gold mb-6"></div>
                <p className="text-neutral-600 leading-relaxed font-light text-lg">
                  {hotel.description}
                </p>
              </div>

              <div className="p-8 bg-neutral-50 border border-neutral-100 space-y-6">
                <h3 className="font-serif text-2xl text-black">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-gold mt-1 mr-4 shrink-0" />
                    <span className="text-neutral-600 font-light">{hotel.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gold mr-4 shrink-0" />
                    <span className="text-neutral-600 font-light">{hotel.phone}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Gallery Grid */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4"
            >
              <motion.div variants={fadeInUp} className="col-span-2 aspect-[16/9] overflow-hidden">
                <img src="/images/gallery-room-1.jpg" alt="Room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
              <motion.div variants={fadeInUp} className="aspect-square overflow-hidden">
                <img src="/images/gallery-lobby-1.jpg" alt="Lobby" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
              <motion.div variants={fadeInUp} className="aspect-square overflow-hidden">
                <img src="/images/gallery-bath-1.jpg" alt="Bathroom" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full relative">
        <iframe 
          src={hotel.mapUrl}
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full absolute inset-0"
        ></iframe>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white text-center px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto space-y-8"
        >
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">Reservations</span>
          <h2 className="font-serif text-4xl md:text-5xl">Book your stay at {hotel.name}</h2>
          <p className="text-white/70 font-light text-lg max-w-xl mx-auto">
            Contact us directly for the best rates and personalized service for your upcoming visit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href={`https://wa.me/919876543210`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white uppercase tracking-widest text-sm font-medium hover:bg-[#128C7E] transition-colors flex items-center justify-center"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Book on WhatsApp
            </a>
            <a 
              href={`tel:${hotel.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white uppercase tracking-widest text-sm font-medium hover:bg-white hover:text-black transition-colors flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
