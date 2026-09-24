import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="w-full flex-grow flex flex-col p-0 m-0">
      {/* SECTION 1: CONTACT FORM & MAP (Full Width with Blue & White Gradient) */}
      <section className="w-full bg-gradient-to-b from-[#E0F2FE] via-[#F8FAFC] to-white pt-3 sm:pt-5 pb-10 sm:pb-12 contact-section-2k px-4 sm:px-6 lg:px-8 2xl:px-16 border-b border-slate-200 flex flex-col justify-center overflow-hidden">
        <div className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-[70rem] mx-auto space-y-3.5 sm:space-y-4 2xl:space-y-2.5 w-full">
          
          {/* Section Header (Closer to Navbar) */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center space-y-1.5 2xl:space-y-0.5"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-3xl font-serif font-bold text-[#0F172A] tracking-tight">
              Send a Message or Visit Us
            </h1>
            <div className="w-14 h-1 bg-gradient-to-r from-[#0284C7] to-[#1B365D] rounded-full mx-auto"></div>
          </motion.div>

          {/* Main Card Container (Slightly increased height on 2k+ screens) */}
          <div className="bg-white rounded-3xl border border-slate-200 hover:border-[#0284C7] shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] transition-all duration-300 overflow-hidden p-5 sm:p-7 2xl:p-6 3xl:p-8">
            <div className="grid md:grid-cols-12 gap-6 lg:gap-8 2xl:gap-8 items-start">
              
              {/* Left: Contact form */}
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-6 space-y-3 2xl:space-y-3.5 3xl:space-y-4"
              >
                <div className="space-y-0.5">
                  <span className="text-[11px] 2xl:text-xs font-bold text-[#0284C7] uppercase tracking-wider block">Direct Message</span>
                  <h2 className="text-xl 2xl:text-2xl font-serif font-bold text-[#0F172A]">Contact Form</h2>
                </div>
                
                <form className="space-y-2.5 2xl:space-y-3 3xl:space-y-3.5" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-xs 2xl:text-xs font-bold text-[#0F172A] mb-1">Your Full Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Enter your full name" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 2xl:py-2.5 3xl:py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-xs sm:text-sm 2xl:text-sm placeholder:text-[#64748B]" 
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 2xl:gap-3">
                    <div>
                      <label className="block text-xs 2xl:text-xs font-bold text-[#0F172A] mb-1">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="you@email.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 2xl:py-2.5 3xl:py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-xs sm:text-sm 2xl:text-sm placeholder:text-[#64748B]" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs 2xl:text-xs font-bold text-[#0F172A] mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+1 234 567 890" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 2xl:py-2.5 3xl:py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-xs sm:text-sm 2xl:text-sm placeholder:text-[#64748B]" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs 2xl:text-xs font-bold text-[#0F172A] mb-1">Reason / Inquiry</label>
                    <textarea 
                      rows={3} 
                      placeholder="How can our clinical team help you?" 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 2xl:py-2.5 3xl:py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-xs sm:text-sm 2xl:text-sm placeholder:text-[#64748B] resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-1">
                    <button type="submit" className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold px-7 py-2.5 2xl:py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 transform text-xs sm:text-sm 2xl:text-sm cursor-pointer border border-transparent hover:border-slate-300 inline-flex items-center gap-2">
                      <i className="fa-regular fa-paper-plane"></i>
                      <span>Submit Message</span>
                    </button>
                  </div>
                </form>
              </motion.div>

              {/* Right: Map, Address, Hours & Actions */}
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-6 space-y-3 2xl:space-y-1.5"
              >
                
                <div className="space-y-0.5">
                  <span className="text-[11px] 2xl:text-[10px] font-bold text-[#0284C7] uppercase tracking-wider block">Clinic Location</span>
                  <h2 className="text-xl 2xl:text-lg font-serif font-bold text-[#0F172A]">Find Our Clinic</h2>
                </div>

                {/* Styled Vector Map Container with Red Pin */}
                <div className="w-full h-36 sm:h-40 2xl:h-24 rounded-2xl border border-slate-200 overflow-hidden relative shadow-inner bg-[#F8FAFC] flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid-contact" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="#F8FAFC" />
                    <rect width="100%" height="100%" fill="url(#grid-contact)" />
                    <line x1="0" y1="20" x2="400" y2="180" stroke="#ffffff" strokeWidth="8" />
                    <line x1="100" y1="0" x2="320" y2="200" stroke="#ffffff" strokeWidth="6" />
                    <line x1="0" y1="120" x2="350" y2="40" stroke="#ffffff" strokeWidth="7" />
                    <path d="M 20 120 Q 50 100 60 140 Z" fill="#e2e8f0" />
                    <path d="M 280 20 Q 320 30 310 70 Z" fill="#e2e8f0" />
                  </svg>
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center animate-ping absolute"></div>
                    <div className="w-8 h-8 rounded-full bg-red-500/30 flex items-center justify-center relative">
                      <i className="fa-solid fa-location-dot text-xl text-red-600 drop-shadow-md"></i>
                    </div>
                  </div>
                </div>

                {/* Location & Hours Details */}
                <div className="space-y-1.5 2xl:space-y-0.5 text-xs 2xl:text-[11px] font-semibold text-[#0F172A] pt-0.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#F8FAFC] border border-slate-200 text-[#0284C7] flex items-center justify-center shrink-0 text-[10px] shadow-xs">
                      <i className="fa-solid fa-location-dot"></i>
                    </span>
                    <span className="truncate">3125 Dase South Street, Medical District, WI 34245</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#F8FAFC] border border-slate-200 text-[#0284C7] flex items-center justify-center shrink-0 text-[10px] shadow-xs">
                      <i className="fa-solid fa-clock"></i>
                    </span>
                    <span>Working Hours: Mon – Sat (8:00 AM – 8:00 PM)</span>
                  </div>
                </div>

                {/* Buttons: WhatsApp & Book Appointment */}
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5 pt-1">
                  <a 
                    href="https://wa.me/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-2 sm:py-2.5 2xl:py-2 px-1.5 sm:px-3 rounded-lg flex items-center justify-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 transform border border-transparent hover:border-slate-300 whitespace-nowrap"
                  >
                    <i className="fa-brands fa-whatsapp text-base"></i>
                    <span>WhatsApp Us</span>
                  </a>
                  <Link 
                    to="/booking" 
                    className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold py-2 sm:py-2.5 2xl:py-2 px-1.5 sm:px-3 rounded-lg flex items-center justify-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 transform border border-transparent hover:border-slate-300 text-center whitespace-nowrap"
                  >
                    <i className="fa-solid fa-calendar-check text-xs"></i>
                    <span className="whitespace-nowrap">Book Appointment</span>
                  </Link>
                </div>

              </motion.div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: VIDEO OVERVIEW & ACCESS (Full Width with Matching Blue & White Gradient) */}
      <section className="w-full bg-gradient-to-b from-[#E0F2FE] via-[#F8FAFC] to-white py-12 sm:py-16 contact-tour-section-2k px-4 sm:px-8 lg:px-12 border-b border-slate-200 flex flex-col justify-center 2xl:justify-start 2xl:pt-4 overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-8 2xl:space-y-4 w-full 2xl:my-0 2xl:mt-1">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center space-y-2 2xl:space-y-1 2xl:pt-0 2xl:-mt-1"
          >
            <h2 className="text-3xl sm:text-4xl 2xl:text-2xl font-serif font-bold text-[#0F172A] tracking-tight">
              Clinic Access &amp; Tour Guides
            </h2>
            <div className="w-14 h-1 bg-gradient-to-r from-[#0284C7] to-[#1B365D] rounded-full mx-auto"></div>
          </motion.div>

          {/* Video Players Grid (Centered Squares) */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 2xl:gap-8 max-w-3xl mx-auto justify-items-center">
            
            {/* Video Player 1 (Equal Width & Height Square) */}
            <motion.div 
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-64 h-64 sm:w-72 sm:h-72 2xl:w-56 2xl:h-56 aspect-square bg-[#F8FAFC] border border-slate-200 hover:border-[#0284C7] rounded-3xl flex flex-col justify-between p-4 sm:p-5 2xl:p-3.5 shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
            >
              <span className="text-xs font-bold text-[#0F172A] text-center">Entrance &amp; Parking Guide</span>
              
              <div className="flex items-center justify-center">
                <button className="w-14 h-14 2xl:w-11 2xl:h-11 rounded-2xl bg-[#0284C7] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition cursor-pointer">
                  <i className="fa-solid fa-play ml-1 text-base 2xl:text-sm"></i>
                </button>
              </div>

              <div className="bg-slate-800/90 backdrop-blur-sm rounded-xl px-3.5 py-2 2xl:py-1.5 flex items-center gap-3 text-white text-xs">
                <button><i className="fa-solid fa-play text-xs"></i></button>
                <div className="flex-1 h-1.5 bg-slate-600 rounded-full overflow-hidden">
                  <div className="w-2/5 h-full bg-[#0284C7] rounded-full"></div>
                </div>
                <button><i className="fa-solid fa-volume-high text-xs"></i></button>
                <button><i className="fa-solid fa-expand text-xs"></i></button>
              </div>
            </motion.div>

            {/* Video Player 2 (Equal Width & Height Square) */}
            <motion.div 
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-64 h-64 sm:w-72 sm:h-72 2xl:w-56 2xl:h-56 aspect-square bg-[#F8FAFC] border border-slate-200 hover:border-[#0284C7] rounded-3xl flex flex-col justify-between p-4 sm:p-5 2xl:p-3.5 shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
            >
              <span className="text-xs font-bold text-[#0F172A] text-center">Reception &amp; Check-in Walkthrough</span>
              
              <div className="flex items-center justify-center">
                <button className="w-14 h-14 2xl:w-11 2xl:h-11 rounded-2xl bg-[#0284C7] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition cursor-pointer">
                  <i className="fa-solid fa-play ml-1 text-base 2xl:text-sm"></i>
                </button>
              </div>

              <div className="bg-slate-800/90 backdrop-blur-sm rounded-xl px-3.5 py-2 2xl:py-1.5 flex items-center gap-3 text-white text-xs">
                <button><i className="fa-solid fa-play text-xs"></i></button>
                <div className="flex-1 h-1.5 bg-slate-600 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-[#0284C7] rounded-full"></div>
                </div>
                <button><i className="fa-solid fa-volume-high text-xs"></i></button>
                <button><i className="fa-solid fa-expand text-xs"></i></button>
              </div>
            </motion.div>

          </div>

        </div>
      </section>
    </div>
  );
}
