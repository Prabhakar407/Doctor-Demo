import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import clinicFacilityImg from '../Images/clinic-facility.webp';

export default function AboutClinic() {
  const handleVirtualTour = () => {
    const element = document.getElementById('virtual-tour-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex-grow flex flex-col p-0 m-0">
      {/* LEADING CARE FACILITY HERO SECTION (Screen Height Blue Background with Seamless Left Image) */}
      <section className="w-full min-h-[calc(100vh-73px)] lg:h-[calc(100vh-73px)] lg:min-h-0 lg:max-h-[calc(100vh-73px)] xl:h-[calc(100vh-73px)] xl:min-h-0 xl:max-h-[calc(100vh-73px)] 2xl:min-h-[calc(100vh-73px)] 2xl:h-auto 2xl:max-h-none bg-gradient-to-br from-[#1B365D] via-[#13294B] to-[#0B1A30] text-white py-6 sm:py-8 lg:py-3.5 xl:py-5 2xl:pt-6 2xl:pb-16 px-4 sm:px-8 lg:px-12 xl:px-14 2xl:px-20 flex flex-col justify-center 2xl:justify-start border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-[100rem] w-full mx-auto space-y-4 sm:space-y-6 lg:space-y-2.5 xl:space-y-4 2xl:space-y-8 relative z-10 my-auto 2xl:my-0 2xl:mt-2">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center space-y-1 sm:space-y-1.5 2xl:pt-1 2xl:pb-2"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-2xl xl:text-3xl 2xl:text-6xl font-serif font-extrabold text-white tracking-tight">
              Leading Care <span className="italic text-[#38BDF8]">Facility</span>
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0284C7] to-[#38BDF8] rounded-full mx-auto"></div>
          </motion.div>

          {/* Facility Image on Left + Details and Certified Credentials on Right */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-6 xl:gap-10 2xl:gap-14 items-center 2xl:mt-20 3xl:mt-24">
            
            {/* Left: Clinic Image with clean rounded corners and no fading */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeInOut" }}
              className="lg:col-span-6 flex justify-center items-center w-full"
            >
              <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[350px] xl:h-[410px] 2xl:h-[480px] rounded-xl overflow-hidden flex items-center shadow-lg border border-white/10">
                <img
                  src={clinicFacilityImg}
                  alt="Leading Care Clinic Facility"
                  className="w-full h-full object-cover object-center rounded-xl"
                />

                {/* Floating Micro Badge on image */}
                <div className="absolute bottom-4 left-4 bg-[#1B365D]/85 backdrop-blur-md text-white px-3.5 py-1.5 rounded-lg border border-white/20 text-xs shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-semibold">State-of-the-Art Clinical Suites</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Facility Details & Certified with Details */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeInOut" }}
              className="lg:col-span-6 space-y-3 sm:space-y-4 lg:space-y-2 xl:space-y-3.5 2xl:space-y-5 text-white"
            >
              <div className="space-y-0.5 sm:space-y-1">
                <span className="inline-flex items-center gap-1.5 text-xs 2xl:text-sm font-bold text-[#38BDF8] uppercase tracking-wider">
                  <i className="fa-solid fa-hospital"></i> Multi-Specialty Infrastructure
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-xl xl:text-2xl 2xl:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                  Modern Clinical Environment with <span className="text-[#38BDF8] italic">Uncompromised Safety</span>
                </h2>
                <p className="text-slate-200 text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-base leading-relaxed pt-0.5 lg:pt-0">
                  Our facility is purpose-built to deliver patient-centered healthcare, combining cutting-edge diagnostic technology with sterile procedural suites, 4D sonography labs, and rapid recovery bays designed for maximum comfort and clinical precision.
                </p>
              </div>

              {/* Key Facility Details */}
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5 lg:gap-2 xl:gap-2.5 pt-0.5 text-xs lg:text-[11px] xl:text-xs 2xl:text-sm text-slate-100">
                <div className="flex items-center gap-2 bg-white/5 rounded-lg px-2.5 py-1.5 border border-white/10">
                  <i className="fa-solid fa-laptop-medical text-[#38BDF8] shrink-0 text-sm"></i>
                  <span className="font-medium truncate">Digital Prescriptions & E-Records</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 rounded-lg px-2.5 py-1.5 border border-white/10">
                  <i className="fa-solid fa-heart-pulse text-[#38BDF8] shrink-0 text-sm"></i>
                  <span className="font-medium truncate">24/7 Observation & Rapid Care</span>
                </div>
              </div>

              {/* Certified Accreditation Breakdown with Details */}
              <div className="space-y-1.5 lg:space-y-1 xl:space-y-2 pt-0.5">
                <span className="text-[11px] 2xl:text-xs font-bold uppercase tracking-wider text-[#38BDF8] block">
                  Official Certifications &amp; Accreditations
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-2 xl:gap-2.5">
                  {/* Certification 1: NABH */}
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-2.5 lg:p-2 xl:p-2.5 2xl:p-3 border border-white/15 hover:border-[#38BDF8] transition-all duration-300">
                    <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                      <span className="w-6 h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7 rounded-md bg-[#0284C7]/30 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] shrink-0 text-xs">
                        <i className="fa-solid fa-award"></i>
                      </span>
                      <div>
                        <h4 className="font-serif font-bold text-xs lg:text-[11px] xl:text-xs sm:text-sm text-white leading-tight">NABH Accredited</h4>
                        <span className="text-[10px] text-slate-300">Hospital Board Standards</span>
                      </div>
                    </div>
                    <p className="text-[11px] lg:text-[10px] xl:text-[11px] sm:text-xs text-slate-200 leading-snug">
                      Excellence in patient safety, clinical protocol compliance, and continuous infection control monitoring.
                    </p>
                  </div>

                  {/* Certification 2: ISO 9001:2015 */}
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-2.5 lg:p-2 xl:p-2.5 2xl:p-3 border border-white/15 hover:border-[#38BDF8] transition-all duration-300">
                    <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                      <span className="w-6 h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7 rounded-md bg-[#0284C7]/30 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] shrink-0 text-xs">
                        <i className="fa-solid fa-certificate"></i>
                      </span>
                      <div>
                        <h4 className="font-serif font-bold text-xs lg:text-[11px] xl:text-xs sm:text-sm text-white leading-tight">ISO 9001:2015</h4>
                        <span className="text-[10px] text-slate-300">Certified Quality Management</span>
                      </div>
                    </div>
                    <p className="text-[11px] lg:text-[10px] xl:text-[11px] sm:text-xs text-slate-200 leading-snug">
                      Internationally audited healthcare workflows, medical data security, and sterilization protocols.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 lg:gap-2 xl:gap-3 pt-1 lg:pt-0.5 xl:pt-1.5">
                <Link 
                  to="/booking" 
                  className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold py-2 px-5 lg:py-1.5 lg:px-4 xl:py-2 xl:px-5 2xl:py-2.5 2xl:px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 text-xs sm:text-sm border border-transparent hover:border-slate-300 inline-flex items-center gap-2 cursor-pointer"
                >
                  <i className="fa-solid fa-calendar-check"></i>
                  <span>Book Consultation</span>
                </Link>
                <button 
                  onClick={handleVirtualTour} 
                  className="bg-white/10 hover:bg-white/20 text-white font-serif font-semibold py-2 px-4 lg:py-1.5 lg:px-3.5 xl:py-2 xl:px-4 2xl:py-2.5 2xl:px-5 rounded-lg border border-white/25 hover:border-[#38BDF8] shadow-sm hover:scale-105 active:scale-95 transition-all duration-200 text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer"
                >
                  <i className="fa-solid fa-vr-cardboard text-[#38BDF8]"></i>
                  <span>Virtual Tour</span>
                </button>
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* SECTION 2: VIRTUAL TOUR & CONSULTATION (White Background) */}
      <section id="virtual-tour-section" className="w-full bg-white py-12 sm:py-16 2xl:py-24 px-4 sm:px-8 lg:px-12 2xl:px-20 border-b border-slate-200">
        <div className="max-w-6xl 2xl:max-w-[100rem] w-full mx-auto space-y-8 2xl:space-y-12">
          
          {/* Mobile Header: Visible only on small screens (< md), placed above video */}
          <div className="md:hidden text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A]">
              Experience Quality Care
            </h2>
            <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
              Take a digital walk-through of our consultation suites, lab diagnostics, patient recovery rooms, and wellness zones before booking your visit.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 2xl:gap-16 items-center">
            
            {/* Left Video Placeholder Box with Play Icon (Equal Width & Height Square) */}
            <motion.div 
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-6 flex justify-center"
            >
              <div 
                onClick={handleVirtualTour} 
                className="w-60 h-60 sm:w-72 sm:h-72 2xl:w-96 2xl:h-96 aspect-square bg-[#F8FAFC] border border-slate-200 hover:border-[#0284C7] rounded-2xl flex flex-col items-center justify-center shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] hover:-translate-y-1 relative group cursor-pointer transition-all duration-300 overflow-hidden"
              >
                <div className="w-16 h-14 rounded-xl bg-[#0284C7] flex items-center justify-center text-white text-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-play ml-1"></i>
                </div>
                <div className="absolute bottom-3.5 text-[11px] font-semibold text-[#0F172A] bg-white/95 px-3.5 py-1 rounded-md border border-slate-200 shadow-sm">
                  Click to play 360&deg; clinic overview
                </div>
              </div>
            </motion.div>

            {/* Mobile Buttons: Visible only on small screens (< md), placed below video with reduced equal width */}
            <div className="md:hidden flex flex-col items-center gap-3 w-full">
              <Link 
                to="/booking" 
                className="w-60 max-w-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold py-3 px-6 rounded-xl shadow-[0_8px_20px_-4px_rgba(2,132,199,0.4)] hover:shadow-[0_12px_25px_-4px_rgba(2,132,199,0.5)] text-center transition text-xs sm:text-sm border border-transparent hover:border-slate-300"
              >
                <i className="fa-solid fa-calendar-check mr-2"></i> Book Consultation
              </Link>
              <button 
                onClick={handleVirtualTour} 
                className="w-60 max-w-full border-2 border-[#0284C7] bg-white hover:bg-slate-50 text-[#0284C7] font-serif font-bold py-2.5 px-6 rounded-xl shadow-xs text-center transition text-xs sm:text-sm cursor-pointer"
              >
                <i className="fa-solid fa-vr-cardboard mr-2"></i> Take a Virtual Tour
              </button>
            </div>

            {/* Desktop Action Buttons & Overview (Visible on md+ screens) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:block md:col-span-6 space-y-4"
            >
              <div className="space-y-1.5">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A]">
                  Experience Quality Care
                </h2>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                  Take a digital walk-through of our consultation suites, lab diagnostics, patient recovery rooms, and wellness zones before booking your visit.
                </p>
              </div>

              <div className="space-y-3 pt-1">
                <Link 
                  to="/booking" 
                  className="block w-full sm:w-72 max-w-xs bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold py-3 px-6 rounded-xl shadow-[0_8px_20px_-4px_rgba(2,132,199,0.4)] hover:shadow-[0_12px_25px_-4px_rgba(2,132,199,0.5)] text-center transition text-xs sm:text-sm border border-transparent hover:border-slate-300"
                >
                  <i className="fa-solid fa-calendar-check mr-2"></i> Book Consultation
                </Link>
                <button 
                  onClick={handleVirtualTour} 
                  className="block w-full sm:w-72 max-w-xs border-2 border-[#0284C7] bg-white hover:bg-slate-50 text-[#0284C7] font-serif font-bold py-2.5 px-6 rounded-xl shadow-xs text-center transition text-xs sm:text-sm cursor-pointer"
                >
                  <i className="fa-solid fa-vr-cardboard mr-2"></i> Take a Virtual Tour
                </button>
              </div>
            </motion.div>

          </div>

        </div>
      </section>
    </div>
  );
}
