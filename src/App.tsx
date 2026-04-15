import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HotelPage from './pages/HotelPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Hotel Data
export const hotelsData = {
  'hotel-bliss': {
    id: 'hotel-bliss',
    name: 'Hotel Bliss',
    location: 'Rohini, Delhi',
    rating: '4.9',
    image: '/images/hotel-bliss.jpg',
    description: 'Located in Rohini, Hotel Bliss offers a premium stay experience with modern rooms, excellent service, and top-tier comfort. Ideal for both business and leisure travelers.',
    address: 'Sector 10, Rohini, New Delhi, 110085',
    phone: '+91 98765 43210',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55985.34020956897!2d77.0652614342203!3d28.730303799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013a47b8e515%3A0x6b7b250d45b161f6!2sRohini%2C%20Delhi!5e0!3m2!1sen!2sin!4v1709664000000!5m2!1sen!2sin'
  },
  'hotel-mannat': {
    id: 'hotel-mannat',
    name: 'Hotel Mannat',
    location: 'Shalimar Bagh, Delhi',
    rating: '4.2',
    image: '/images/hotel-mannat.jpg',
    description: 'Situated in Shalimar Bagh, Hotel Mannat provides a comfortable and budget-friendly stay with clean rooms and a convenient location.',
    address: 'Block B, Shalimar Bagh, New Delhi, 110088',
    phone: '+91 98765 43211',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27993.447551065168!2d77.13524855!3d28.71428575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01869389c9d5%3A0x7000e31891ed1c0!2sShalimar%20Bagh%2C%20Delhi!5e0!3m2!1sen!2sin!4v1709664000000!5m2!1sen!2sin'
  },
  'south-embassy-hotel': {
    id: 'south-embassy-hotel',
    name: 'South Embassy Hotel',
    location: 'South Delhi',
    rating: '5.0',
    image: '/images/south-embassy-hotel.jpg',
    description: 'Located near Durgabai Metro Station, South Embassy Hotel offers a premium hospitality experience with modern facilities and top-rated service.',
    address: 'Near Durgabai Metro Station, South Delhi, 110021',
    phone: '+91 98765 43212',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28023.753823439743!2d77.1593339!3d28.5931891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d1b913612d9%3A0x4a4701e68b122247!2sSouth%20Moti%20Bagh%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1709664000000!5m2!1sen!2sin'
  }
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans text-neutral-900 flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:hotelId" element={<HotelPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
