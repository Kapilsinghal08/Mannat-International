import React from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronRight, MapPin, Wifi, Car, Wind, Clock, Utensils, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeInUp, staggerContainer } from '../lib/utils';
import { hotelsData } from '../App';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src="/images/hero.jpg" 
            alt="Luxury Hotel Lobby" 
            className="w-full h-full object-cover object-center scale-105 animate-[kenburns_20s_ease-out_forwards]"
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center space-x-2 mb-6">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <Star className="w-4 h-4 text-gold fill-gold" />
              <Star className="w-4 h-4 text-gold fill-gold" />
              <Star className="w-4 h-4 text-gold fill-gold" />
              <Star className="w-4 h-4 text-gold fill-gold" />
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight"
            >
              Experience Comfort.<br />
              <span className="italic text-white/90">Experience Mannat.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto"
            >
              Luxury stays, elegant events, and unforgettable hospitality across our premium properties.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            >
              <a 
                href="#hotels"
                className="w-full sm:w-auto px-8 py-4 bg-gold text-white uppercase tracking-widest text-sm hover:bg-gold-dark transition-colors"
              >
                Our Hotels
              </a>
              <a 
                href="#rooms"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors"
              >
                View Rooms
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">Welcome to Mannat</span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-black">
                A sanctuary of refined elegance and unparalleled comfort.
              </h2>
              <div className="w-12 h-0.5 bg-gold"></div>
              <p className="text-neutral-600 leading-relaxed font-light text-lg">
                At Mannat International, we believe that true luxury lies in the details. From our meticulously designed rooms to our world-class amenities, every aspect of your stay is crafted to provide an experience that transcends the ordinary. Whether you are here for business, leisure, or a grand celebration, our commitment to exceptional hospitality ensures memories that last a lifetime.
              </p>
              <a href="#hotels" className="inline-flex items-center text-black uppercase tracking-wider text-sm font-medium hover:text-gold transition-colors pt-4">
                Discover Our Properties <ChevronRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] md:aspect-square"
            >
              <img 
                src="/images/gallery-1.jpg" 
                alt="Fine Dining" 
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-neutral-100 -z-10 hidden md:block"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border border-gold/30 -z-10 hidden md:block"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Hotels Section (NEW) */}
      <section id="hotels" className="py-24 md:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-16 md:mb-24"
          >
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Our Properties</span>
            <h2 className="font-serif text-4xl md:text-5xl text-black">Explore our premium properties across Delhi</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(hotelsData).map((hotel, i) => (
              <motion.div 
                key={hotel.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <Link to={`/${hotel.id}`} className="group block bg-white h-full shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={hotel.image} 
                      alt={hotel.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 flex items-center space-x-1">
                      <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                      <span className="text-sm font-medium text-black">{hotel.rating}</span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="font-serif text-2xl text-black mb-2 group-hover:text-gold transition-colors">{hotel.name}</h3>
                    <div className="flex items-center text-neutral-500 mb-6">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm font-light">{hotel.location}</span>
                    </div>
                    <span className="text-sm uppercase tracking-widest text-black group-hover:text-gold transition-colors inline-flex items-center">
                      Explore Hotel <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-16 md:mb-24"
          >
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Accommodations</span>
            <h2 className="font-serif text-4xl md:text-5xl text-black">Stay in Elegance</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                title: 'Deluxe Room',
                desc: 'A perfect blend of comfort and style, featuring modern amenities and plush bedding for a restful stay.',
                img: '/images/room-deluxe.jpg'
              },
              {
                title: 'Executive Room',
                desc: 'Elevated luxury with extra space, premium furnishings, and exclusive services for the discerning traveler.',
                img: '/images/room-executive.jpg'
              },
              {
                title: 'Family Suite',
                desc: 'Spacious and thoughtfully designed to accommodate your loved ones with separate living areas and supreme comfort.',
                img: '/images/room-family.jpg'
              },
              {
                title: 'Banquet Hall',
                desc: 'Grand spaces designed for magnificent celebrations, corporate events, and unforgettable gatherings.',
                img: '/images/banquet.jpg'
              }
            ].map((room, i) => (
              <motion.div 
                key={room.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/3] mb-6">
                  <img 
                    src={room.img} 
                    alt={room.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="font-serif text-2xl text-black mb-3">{room.title}</h3>
                <p className="text-neutral-600 font-light leading-relaxed mb-4">{room.desc}</p>
                <span className="text-sm uppercase tracking-widest text-black group-hover:text-gold transition-colors inline-flex items-center">
                  Explore <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-24 md:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="md:col-span-1"
            >
              <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Features</span>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Premium<br/>Amenities</h2>
              <p className="text-white/70 font-light leading-relaxed mb-8">
                Every detail curated for your absolute comfort. Enjoy our comprehensive range of services designed to make your stay effortless.
              </p>
              <a href="#book" className="px-8 py-3 border border-white text-white uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors inline-block">
                Book Your Stay
              </a>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12"
            >
              {[
                { icon: Wifi, label: 'High-Speed WiFi' },
                { icon: Car, label: 'Valet Parking' },
                { icon: Wind, label: 'Climate Control' },
                { icon: Clock, label: '24/7 Room Service' },
                { icon: Utensils, label: 'Fine Dining' },
                { icon: Users, label: 'Banquet & Events' },
              ].map((amenity, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex flex-col items-start space-y-4">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gold">
                    <amenity.icon strokeWidth={1.5} className="w-5 h-5" />
                  </div>
                  <span className="font-medium tracking-wide text-sm">{amenity.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16"
          >
            <div>
              <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Gallery</span>
              <h2 className="font-serif text-4xl md:text-5xl text-black">A Glimpse of Luxury</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 overflow-hidden aspect-[16/9] md:aspect-auto md:h-[500px]"
            >
              <img src="/images/gallery-2.jpg" alt="Spa" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="overflow-hidden aspect-square md:h-[500px]"
            >
              <img src="/images/gallery-3.jpg" alt="Pool" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden aspect-square md:h-[400px]"
            >
              <img src="/images/gallery-1.jpg" alt="Dining" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 overflow-hidden aspect-[16/9] md:aspect-auto md:h-[400px]"
            >
              <img src="/images/gallery-4.jpg" alt="Exterior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 md:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-2 md:order-1 h-[400px] md:h-[600px] w-full"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.6431792170283!2d77.20755637485038!3d28.6475911833978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd6a377d4c75%3A0xa3702f009cbaadb4!2sHotel%20Mannat%20international%20by%20Mannat!5e1!3m2!1sen!2sin!4v1776242019634!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full shadow-lg rounded-sm"
              ></iframe>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-1 md:order-2 space-y-8"
            >
              <div>
                <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Location</span>
                <h2 className="font-serif text-4xl md:text-5xl text-black">Find Us Here</h2>
              </div>
              
              <div className="space-y-6 text-neutral-600 font-light">
                <p className="leading-relaxed text-lg">
                  Situated in the heart of Delhi, our flagship property offers convenient access to major business districts, cultural landmarks, and shopping destinations.
                </p>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-black mb-1">Address</h4>
                    <p>Hotel Mannat International<br />New Delhi, India</p>
                    <a href="https://maps.app.goo.gl/12345" target="_blank" rel="noopener noreferrer" className="text-gold text-sm uppercase tracking-wide mt-2 inline-block hover:text-black transition-colors">Get Directions</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book" className="py-24 bg-gold text-white text-center px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="font-serif text-4xl md:text-5xl">Ready to experience comfort at its finest?</h2>
          <p className="text-white/90 font-light text-lg max-w-xl mx-auto">
            Explore our properties and book your stay today to step into a world of refined elegance.
          </p>
          <button className="px-10 py-4 bg-white text-black uppercase tracking-widest text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300">
            Book now
          </button>
        </motion.div>
      </section>
    </>
  );
}
