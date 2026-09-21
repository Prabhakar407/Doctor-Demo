import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Treatments from './pages/Treatments';
import AboutClinic from './pages/AboutClinic';
import MeetDoctor from './pages/MeetDoctor';
import DrArunSharma from './pages/DrArunSharma';
import DrPriyaNair from './pages/DrPriyaNair';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

export default function App() {
  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] font-sans antialiased min-h-screen flex flex-col p-0 m-0 w-full overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <div className="flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treatment" element={<Treatments />} />
          <Route path="/about-clinic" element={<AboutClinic />} />
          <Route path="/meet-doctor" element={<MeetDoctor />} />
          <Route path="/dr-arun-sharma" element={<DrArunSharma />} />
          <Route path="/dr-priya-nair" element={<DrPriyaNair />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
