import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import hero1 from '../Images/hero1.png';
import hero2 from '../Images/hero2.png';
import hero3 from '../Images/hero3.png';

import instantBookingImg from '../Images/Instant Booking.png';
import accessImg from '../Images/24 by 7 Access.png';
import timeEfficiencyImg from '../Images/Time Efficiency.png';
import totalFlexibilityImg from '../Images/Total Flexibility.png';
import prescriptionBannerImg from '../Images/prescription-banner.jpg';

export default function Home() {
  const heroImages = [hero1, hero2, hero3];
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // 10-second automatic hero background crossfade rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <main className="w-full flex-grow flex flex-col p-0 m-0">

      {/* HERO SECTION */}
      <section className="w-full min-h-[calc(100vh-68px)] lg:h-[calc(100vh-68px)] lg:max-h-[calc(100vh-68px)] bg-gradient-to-br from-[#1B365D] via-[#13294B] to-[#0B1A30] text-white flex flex-col justify-center relative overflow-hidden py-3 sm:py-5 lg:py-4 px-4 sm:px-8 lg:px-14">
        
        {/* Right Background Image: seamlessly blended with high clarity on right */}
        <div id="hero-bg-slider" className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          {heroImages.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Healthcare & Medicine ${index + 1}`}
              className={`hero-slide hero-image-fade absolute inset-y-0 right-0 w-full lg:w-3/5 h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                index === currentHeroIndex ? 'opacity-90 lg:opacity-95' : 'opacity-0'
              }`}
            />
          ))}
          {/* Subtle gradient overlay to protect readability on left while keeping right side crisp and bright */}
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#1B365D] via-[#13294B]/70 via-40% to-transparent z-10 pointer-events-none"></div>
          {/* Subtle vertical gradients */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#1B365D]/50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0B1A30]/60 to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* Hero Grid: Left Content + Right Floating Form (Same Level, Upward Shifted) */}
        <div className="w-full max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-4.5 flex flex-col justify-center">
            <h1 className="playfair-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight not-italic">
              Your Path to <span className="inline-block whitespace-nowrap">Personalized <span className="italic text-[#38BDF8] font-serif font-medium">Wellness</span></span>
            </h1>
            
            <div className="space-y-1.5 max-w-xl lg:max-w-2xl">
              <p className="text-slate-100 text-xs sm:text-sm md:text-base font-normal leading-relaxed">
                We combine advanced medical technology with caring, personalized service to keep you and your family healthy. Expert care for your family with trusted clinical professionals.
              </p>
              <p className="text-white text-xs sm:text-sm md:text-base font-normal leading-relaxed">
                <strong className="font-bold text-white">Your Health, Our Priority</strong>—Experience Expert Care You Can Trust.
              </p>
            </div>

            {/* Buttons Container */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                to="/booking"
                className="bg-[#0284C7] hover:bg-[#0369A1] border border-transparent hover:border-slate-300 text-white text-xs sm:text-sm md:text-base font-serif font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-lg hover:shadow-[0_12px_28px_rgba(2,132,199,0.45)] hover:scale-105 active:scale-95 transition-all duration-200 transform inline-block text-center cursor-pointer"
              >
                Book Now
              </Link>
              <Link
                to="/treatment"
                className="bg-slate-300 hover:bg-slate-200 text-[#1B365D] border-2 border-transparent hover:border-[#0284C7] text-xs sm:text-sm md:text-base font-serif font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md hover:shadow-[0_12px_28px_rgba(2,132,199,0.35)] hover:scale-105 active:scale-95 transition-all duration-200 transform inline-block text-center cursor-pointer"
              >
                Our Services
              </Link>
            </div>

            {/* 3 Key Highlights / Trust Points (Vertical Layout: Icon Top-Middle, Topic Name Below) */}
            <div className="pt-3 sm:pt-3.5 grid grid-cols-3 gap-3 sm:gap-6 border-t border-white/15 max-w-lg">
              {/* Point 1: High Quality Standard */}
              <div className="flex flex-col items-center text-center gap-1.5 group">
                <span className="w-11 h-11 rounded-2xl bg-[#0284C7]/20 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] shadow-md group-hover:scale-110 group-hover:bg-[#0284C7]/30 transition-all duration-300">
                  <i className="fa-solid fa-award text-lg sm:text-xl"></i>
                </span>
                <span className="text-slate-100 text-xs sm:text-sm font-semibold leading-snug">High Quality Standard</span>
              </div>

              {/* Point 2: Advanced Research */}
              <div className="flex flex-col items-center text-center gap-1.5 group">
                <span className="w-11 h-11 rounded-2xl bg-[#0284C7]/20 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] shadow-md group-hover:scale-110 group-hover:bg-[#0284C7]/30 transition-all duration-300">
                  <i className="fa-solid fa-microscope text-lg sm:text-xl"></i>
                </span>
                <span className="text-slate-100 text-xs sm:text-sm font-semibold leading-snug">Advanced Research</span>
              </div>

              {/* Point 3: Affordable Healthcare */}
              <div className="flex flex-col items-center text-center gap-1.5 group">
                <span className="w-11 h-11 rounded-2xl bg-[#0284C7]/20 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] shadow-md group-hover:scale-110 group-hover:bg-[#0284C7]/30 transition-all duration-300">
                  <i className="fa-solid fa-hand-holding-medical text-lg sm:text-xl"></i>
                </span>
                <span className="text-slate-100 text-xs sm:text-sm font-semibold leading-snug">Affordable Healthcare</span>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic Floating Form */}
          <div className="lg:col-span-5 flex justify-end items-center w-full">
            <div className="w-full max-w-sm bg-white/10 backdrop-blur-xl text-white rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_65px_rgba(2,132,199,0.4)] border border-white/20 hover:border-[#0284C7] transition-all duration-300 space-y-3">
              
              <div className="text-center pb-1.5 border-b border-white/15">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                  Book your <span className="italic text-[#38BDF8]">Visit</span>
                </h3>
                <p className="text-xs font-medium text-slate-100 mt-0.5">Quick and easy appointment scheduling</p>
              </div>

              <form
                className="space-y-2.5 sm:space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you! Your appointment request has been received.');
                }}
              >
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-white mb-0.5 tracking-wide">User Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full px-3 py-1.5 sm:py-2 text-xs font-medium rounded-xl bg-white border border-slate-300 text-[#0F172A] placeholder:text-slate-500 shadow-sm focus:bg-white focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/30 transition"
                  />
                </div>

                {/* Phone & Email in 2 compact columns */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-white mb-0.5 tracking-wide">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 234 567"
                      className="w-full px-3 py-1.5 sm:py-2 text-xs font-medium rounded-xl bg-white border border-slate-300 text-[#0F172A] placeholder:text-slate-500 shadow-sm focus:bg-white focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/30 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white mb-0.5 tracking-wide">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="w-full px-3 py-1.5 sm:py-2 text-xs font-medium rounded-xl bg-white border border-slate-300 text-[#0F172A] placeholder:text-slate-500 shadow-sm focus:bg-white focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/30 transition"
                    />
                  </div>
                </div>

                {/* Preferred Date & Time */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-white mb-0.5 tracking-wide">Preferred Date *</label>
                    <input
                      type="date"
                      required
                      className="w-full px-2 py-1.5 sm:py-2 text-xs font-medium rounded-xl bg-white border border-slate-300 text-[#0F172A] shadow-sm focus:bg-white focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/30 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white mb-0.5 tracking-wide">Preferred Time *</label>
                    <select
                      required
                      className="w-full px-2 py-1.5 sm:py-2 text-xs font-medium rounded-xl bg-white border border-slate-300 text-[#0F172A] shadow-sm focus:bg-white focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/30 transition"
                    >
                      <option value="" className="text-slate-500">Select Time</option>
                      <option value="Morning" className="text-[#0F172A]">09:00 AM - 12:00 PM</option>
                      <option value="Afternoon" className="text-[#0F172A]">12:00 PM - 04:00 PM</option>
                      <option value="Evening" className="text-[#0F172A]">04:00 PM - 08:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-1.5">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-2 bg-[#0284C7] hover:bg-[#0369A1] border border-transparent hover:border-slate-300 text-white font-serif font-bold rounded-xl transition-all duration-200 text-xs sm:text-sm shadow-[0_8px_20px_-4px_rgba(2,132,199,0.5)] hover:shadow-[0_12px_25px_-4px_rgba(2,132,199,0.7)] hover:scale-105 active:scale-95 transform cursor-pointer"
                  >
                    Book Appointment
                  </button>
                </div>

                {/* Phone call fallback line */}
                <div className="text-center pt-1">
                  <p className="text-xs sm:text-sm font-medium text-white font-serif">
                    Or call us at <a href="tel:+81888888888" className="text-[#38BDF8] hover:text-white font-bold text-xs sm:text-sm underline underline-offset-4 decoration-[#38BDF8]/60 hover:decoration-white transition ml-1 inline-block">+81888888888</a>
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* HEALTHCARE SOLUTIONS / SERVICES SECTION */}
      <section className="w-full bg-[#F8FAFC] pt-8 sm:pt-10 pb-16 sm:pb-20 px-4 sm:px-8 lg:px-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Section Header */}
          <div className="text-center space-y-2.5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0F172A] tracking-tight">
              Healthcare Solutions
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0284C7] to-[#1B365D] rounded-full mx-auto"></div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.25fr_2.1fr_2.25fr_3.6fr] gap-5 items-stretch">
            
            {/* Column 1: Vaccines */}
            <div className="bg-white rounded-3xl border border-slate-200 hover:border-[#0284C7] shadow-[0_8px_25px_-4px_rgba(2,132,199,0.18)] hover:shadow-[0_20px_45px_-10px_rgba(2,132,199,0.35)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div className="bg-gradient-to-b from-[#F8FAFC] to-white p-4 flex flex-col items-center justify-center min-h-[190px] relative flex-1">
                <div className="w-20 h-32 bg-white rounded-2xl border border-slate-200 shadow-md relative flex flex-col items-center justify-between p-1.5">
                  <div className="w-10 h-3.5 bg-slate-300 rounded-t-md border-b border-slate-400 shadow-sm flex items-center justify-center">
                    <div className="w-5 h-0.5 bg-slate-400 rounded-full"></div>
                  </div>
                  <div className="w-full bg-white rounded py-1 px-0.5 text-center shadow-xs border border-slate-100 my-auto">
                    <span className="block text-[7px] font-bold text-[#0284C7] tracking-wider">COVID-19</span>
                    <span className="block text-[6px] text-[#64748B] font-semibold">VACCINE</span>
                  </div>
                  <div className="w-full h-7 bg-gradient-to-t from-[#0284C7] to-[#38BDF8]/60 rounded-b-xl"></div>
                </div>
              </div>
              <div className="p-4 sm:p-4.5 bg-[#1B365D] text-white border-t border-[#13294B] mt-auto flex flex-col justify-center min-h-[95px]">
                <h3 className="font-bold text-white text-lg mb-1">Vaccines</h3>
                <p className="text-slate-200 text-xs leading-relaxed">Vaccines, boosters, & immunizations for health.</p>
              </div>
            </div>

            {/* Column 2: Wellness Care Stack */}
            <div className="flex flex-col gap-5 justify-between">
              <div className="flex-1 bg-gradient-to-br from-[#1B365D] to-[#0284C7] rounded-3xl border border-slate-200 p-4.5 sm:p-5 pt-8 pb-3 sm:pb-3.5 text-white shadow-[0_8px_25px_-4px_rgba(2,132,199,0.18)] hover:shadow-[0_20px_45px_-10px_rgba(2,132,199,0.35)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-end min-h-[170px] group">
                <div className="absolute -right-2 -bottom-2 text-white/10 text-6xl pointer-events-none">
                  <i className="fa-solid fa-heart-pulse"></i>
                </div>
                <h3 className="font-bold text-white text-lg mb-1">Wellness Care</h3>
                <p className="text-slate-200 text-xs leading-relaxed relative z-10">Preventive care for a healthier, happier you.</p>
              </div>

              <div className="flex-1 bg-white rounded-3xl border border-slate-200 hover:border-[#0284C7] p-4.5 sm:p-5 pt-8 pb-3 sm:pb-3.5 shadow-[0_8px_25px_-4px_rgba(2,132,199,0.18)] hover:shadow-[0_20px_45px_-10px_rgba(2,132,199,0.35)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-end min-h-[170px] group">
                <h3 className="font-bold text-[#0F172A] text-lg mb-1">Wellness Care</h3>
                <p className="text-[#64748B] text-xs leading-relaxed">Advanced treatments for better health & balance.</p>
              </div>
            </div>

            {/* Column 3: Injectables */}
            <div className="bg-white rounded-3xl border border-slate-200 hover:border-[#0284C7] shadow-[0_8px_25px_-4px_rgba(2,132,199,0.18)] hover:shadow-[0_20px_45px_-10px_rgba(2,132,199,0.35)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div className="bg-gradient-to-b from-[#F8FAFC] to-slate-50 p-5 flex items-center justify-center min-h-[190px] relative flex-1">
                <div className="w-full flex items-center justify-center rotate-[-35deg] transform scale-110">
                  <svg className="w-28 h-28 text-[#0284C7] drop-shadow-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 5L15 9" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M17 3L21 7" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M14 6L18 10L9 19L5 15L14 6Z" fill="#e0f2fe" stroke="#0284C7" strokeWidth="1.5"/>
                    <path d="M7 17L12 12" stroke="#0369A1" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M5 15L2 18" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M3 21L1 23" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <div className="p-4 sm:p-5 bg-[#1B365D] text-white border-t border-[#13294B] mt-auto flex flex-col justify-center min-h-[95px]">
                <h3 className="font-bold text-white text-xl mb-1">Injectables</h3>
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">Products, supplies and administration for injections.</p>
              </div>
            </div>

            {/* Column 4: Right Section */}
            <div className="flex flex-col gap-4 justify-between">
              <div className="rounded-3xl border border-slate-200 hover:border-[#0284C7] shadow-[0_8px_25px_-4px_rgba(2,132,199,0.18)] hover:shadow-[0_20px_45px_-10px_rgba(2,132,199,0.35)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col sm:flex-row items-stretch overflow-hidden group min-h-[175px]">
                <div className="w-full sm:w-2/3 bg-[#1B365D] p-5 sm:p-6 text-white flex flex-col justify-center space-y-1.5 z-10">
                  <h3 className="font-bold text-white text-xl mb-0.5">Nutraceuticals</h3>
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">Nutritional supplements for overall health, vitality, and wellness.</p>
                </div>
                <div className="w-full sm:w-1/3 bg-[#F8FAFC] p-4 flex items-center justify-center border-t sm:border-t-0 sm:border-l border-slate-200">
                  <div className="w-18 h-22 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-between p-2 relative z-10">
                    <div className="w-9 h-3 bg-slate-200 rounded-t-sm"></div>
                    <div className="w-12 h-9 bg-sky-50 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-capsules text-[#0284C7] text-lg"></i>
                    </div>
                    <span className="text-[7px] font-bold text-slate-500 uppercase tracking-widest">PURE</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 hover:border-[#0284C7] shadow-[0_8px_25px_-4px_rgba(2,132,199,0.18)] hover:shadow-[0_20px_45px_-10px_rgba(2,132,199,0.35)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col sm:flex-row items-stretch overflow-hidden group min-h-[175px]">
                <div className="w-full sm:w-2/3 bg-[#1B365D] p-5 sm:p-6 text-white flex flex-col justify-center space-y-1.5 z-10">
                  <h3 className="font-bold text-white text-xl mb-0.5">Specialty Medicines</h3>
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">Specialized pharmaceutical treatments and care management.</p>
                </div>
                <div className="w-full sm:w-1/3 bg-[#F8FAFC] p-4 flex items-center justify-center border-t sm:border-t-0 sm:border-l border-slate-200">
                  <div className="w-18 h-22 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-between p-2 relative z-10">
                    <div className="w-8 h-4 bg-sky-600 rounded-t-lg"></div>
                    <div className="w-12 h-9 bg-sky-50 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-prescription text-[#0284C7] text-lg"></i>
                    </div>
                    <span className="text-[7px] font-bold text-slate-500 uppercase tracking-widest">RX ONLY</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT DOCTOR SECTION (Expanded Height with Detailed Credentials) */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-14 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Doctor Photo Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="w-full max-w-[340px] sm:max-w-[380px] bg-gradient-to-b from-[#F8FAFC] to-slate-100 rounded-3xl border border-slate-200 p-3 sm:p-4 shadow-[0_12px_35px_-5px_rgba(2,132,199,0.22)] relative overflow-hidden group">
                <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden relative bg-[#1B365D]">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80"
                    alt="Dr. Arun Sharma"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B365D]/90 via-transparent to-transparent"></div>
                  
                  {/* Bottom Image Floating Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-[#1B365D]/90 backdrop-blur-md text-white px-3.5 py-2 rounded-xl border border-white/20 text-xs shadow-md">
                    <span className="font-bold flex items-center gap-1.5">
                      <i className="fa-solid fa-circle-check text-emerald-400"></i> Verified Specialist
                    </span>
                    <span className="text-[#38BDF8] font-semibold text-[11px]">10+ Yrs Exp</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content & Credentials */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 bg-sky-50 text-[#0284C7] px-3.5 py-1 rounded-full text-xs font-bold border border-sky-200">
                  <i className="fa-solid fa-user-doctor"></i> Senior Medical Specialist
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0F172A] tracking-tight">
                  About Dr. Arun Sharma
                </h2>
                <p className="text-[#0284C7] font-semibold text-base sm:text-lg">
                  MBBS, MD (Medicine), DM (Specialist) • AIIMS Alumnus
                </p>
              </div>

              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                Dedicated senior specialist with over 10+ years of distinguished clinical experience providing evidence-based healthcare, precision diagnosis, and tailored treatment plans for chronic and acute conditions.
              </p>

              {/* 4 Feature Badges / Credential Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* 10+ Years Experience */}
                <div className="flex items-center gap-3 bg-[#F8FAFC] border border-slate-200 rounded-2xl p-3 shadow-xs hover:border-[#0284C7] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0284C7] flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-award text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0F172A]">10+ Years Experience</h4>
                    <p className="text-[11px] text-slate-500 leading-tight">Extensive clinical practice</p>
                  </div>
                </div>

                {/* Studied from Top Medical College */}
                <div className="flex items-center gap-3 bg-[#F8FAFC] border border-slate-200 rounded-2xl p-3 shadow-xs hover:border-[#0284C7] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0284C7] flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-graduation-cap text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0F172A]">AIIMS New Delhi</h4>
                    <p className="text-[11px] text-slate-500 leading-tight">Top Tier Medical Education</p>
                  </div>
                </div>

                {/* Cardiology & Internal Medicine Specialist */}
                <div className="flex items-center gap-3 bg-[#F8FAFC] border border-slate-200 rounded-2xl p-3 shadow-xs hover:border-[#0284C7] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0284C7] flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-stethoscope text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0F172A]">Senior Specialist</h4>
                    <p className="text-[11px] text-slate-500 leading-tight">Cardiology &amp; General Medicine</p>
                  </div>
                </div>

                {/* Available 6 Days a Week */}
                <div className="flex items-center gap-3 bg-[#F8FAFC] border border-slate-200 rounded-2xl p-3 shadow-xs hover:border-[#0284C7] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-calendar-days text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0F172A]">Mon – Sat (6 Days / Wk)</h4>
                    <p className="text-[11px] text-emerald-600 font-semibold leading-tight">9:00 AM – 7:00 PM Slots</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  to="/booking"
                  className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif text-sm font-bold px-7 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 transform inline-block"
                >
                  Book Appointment
                </Link>
                
                <Link
                  to="/dr-arun-sharma"
                  className="bg-slate-100 hover:bg-slate-200 text-[#1B365D] font-serif text-sm font-bold px-6 py-3 rounded-xl border border-slate-300 hover:border-[#0284C7] hover:scale-105 active:scale-95 transition-all duration-200 transform inline-block"
                >
                  Doctor Profile
                </Link>

                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-200 transform"
                >
                  <i className="fa-brands fa-whatsapp text-xl text-white"></i> WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* APPOINTMENT BOOKING & DIGITAL PRESCRIPTIONS BANNER SECTION */}
      <section className="w-full bg-[#F8FAFC] py-4 sm:py-6 md:py-7 px-4 sm:px-8 lg:px-14 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_12px_35px_-10px_rgba(2,132,199,0.3)] border border-slate-200 group">
            {/* Background Generated 3D Banner Image */}
            <img
              src={prescriptionBannerImg}
              alt="Book Doctor Consultations & Access Digital Prescriptions"
              className="w-full h-56 sm:h-64 md:h-72 lg:h-[225px] object-cover object-center transform group-hover:scale-102 transition-transform duration-500"
            />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B365D]/95 via-[#1B365D]/85 md:via-[#1B365D]/55 to-transparent flex items-center p-4 sm:p-6 md:p-8">
              <div className="max-w-xl space-y-1.5 sm:space-y-2 text-white">
                <span className="bg-[#0284C7]/80 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold px-3 py-0.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 border border-white/20 shadow-xs">
                  <i className="fa-solid fa-calendar-check text-[#38BDF8]"></i> Verified Doctor Appointments
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white tracking-tight leading-tight">
                  Book Doctor Consultation &amp; <br />
                  <span className="text-[#38BDF8] italic">Get Digital Prescriptions</span>
                </h2>
                <p className="text-slate-100 text-xs sm:text-sm leading-tight sm:leading-snug max-w-lg">
                  Schedule appointments with senior healthcare specialists, access verified digital prescriptions, and receive comprehensive personalized medical care.
                </p>
                
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <Link
                    to="/booking"
                    className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold text-xs sm:text-sm px-5 py-2 sm:py-2.5 rounded-xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 transform flex items-center gap-2 border border-transparent"
                  >
                    <i className="fa-solid fa-calendar-check text-xs"></i>
                    <span>Book Appointment Now</span>
                  </Link>

                  <button
                    type="button"
                    onClick={() => {
                      const input = document.createElement('input');
                      input.type = 'file';
                      input.accept = 'image/*,.pdf';
                      input.onchange = (e) => {
                        if (e.target.files.length > 0) {
                          alert(`Medical record "${e.target.files[0].name}" uploaded successfully for your doctor consultation!`);
                        }
                      };
                      input.click();
                    }}
                    className="bg-white text-[#1B365D] hover:bg-sky-50 font-serif font-bold text-xs sm:text-sm px-5 py-2 sm:py-2.5 rounded-xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 transform flex items-center gap-2 cursor-pointer border border-white/80"
                  >
                    <span>Upload Medical Records</span>
                    <i className="fa-solid fa-arrow-up-from-bracket text-xs text-[#0284C7]"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BOOK OUR CONSULTATION SECTION (Full Screen Height on Laptop/Desktop Screens) */}
      <section className="w-full bg-[#F8FAFC] py-4 md:py-0 md:h-screen md:max-h-screen flex flex-col justify-start px-4 sm:px-6 md:px-8 border-b border-slate-200 md:overflow-hidden md:pt-2 md:pb-3 lg:pt-3 lg:pb-4">
        <div className="max-w-3xl w-full mx-auto flex-1 flex flex-col justify-start gap-2 sm:gap-3 h-full min-h-0">
          
          {/* Section Header (Exact typography as Healthcare Solutions) */}
          <div className="text-center space-y-1 sm:space-y-1.5 shrink-0 pt-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0F172A] tracking-tight">
              Why Book Appointment Online
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0284C7] to-[#1B365D] rounded-full mx-auto"></div>
          </div>
          
          {/* 2x2 Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 sm:gap-y-3.5 gap-x-14 sm:gap-x-20 md:gap-x-24 lg:gap-x-28 w-full items-stretch">
            
            {/* Card 1: Instant Booking & Confirmation */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 hover:border-[#0284C7] shadow-[0_8px_20px_-4px_rgba(2,132,199,0.22)] hover:shadow-[0_12px_28px_-4px_rgba(2,132,199,0.32)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between overflow-hidden relative group h-[180px] sm:h-[195px] md:h-[205px] lg:h-[215px]">
              {/* Visual Top Graphic / Uploaded Image */}
              <div className="relative w-full flex-1 min-h-0 min-w-0 overflow-hidden bg-white flex items-center justify-center">
                <img src={instantBookingImg} alt="Instant Booking & Confirmation" className="w-full h-full object-cover max-w-full max-h-full block transform group-hover:scale-105 transition-transform duration-300" />
              </div>
              
              {/* Bottom Text Content */}
              <div className="shrink-0 w-full py-1 sm:py-1.5 px-3 bg-[#1B365D] text-white border-t border-[#13294B] space-y-0.5 relative z-10">
                <h3 className="text-xs sm:text-sm font-serif font-bold text-white tracking-tight leading-snug">Instant Booking &amp; Confirmation</h3>
                <p className="text-slate-200 text-[10px] sm:text-[11px] md:text-xs leading-snug">Schedule your visit in minutes. Instant digital confirmation, no calls needed.</p>
              </div>
            </div>

            {/* Card 2: 24/7 Access */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 hover:border-[#0284C7] shadow-[0_8px_20px_-4px_rgba(2,132,199,0.22)] hover:shadow-[0_12px_28px_-4px_rgba(2,132,199,0.32)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between overflow-hidden relative group h-[180px] sm:h-[195px] md:h-[205px] lg:h-[215px]">
              {/* Visual Top Graphic / Uploaded Image */}
              <div className="relative w-full flex-1 min-h-0 min-w-0 overflow-hidden bg-white flex items-center justify-center">
                <img src={accessImg} alt="24/7 Access" className="w-full h-full object-cover max-w-full max-h-full block transform group-hover:scale-105 transition-transform duration-300" />
              </div>
              
              {/* Bottom Text Content */}
              <div className="shrink-0 w-full py-1 sm:py-1.5 px-3 bg-[#1B365D] text-white border-t border-[#13294B] space-y-0.5 relative z-10">
                <h3 className="text-xs sm:text-sm font-serif font-bold text-white tracking-tight leading-snug">24/7 Access</h3>
                <p className="text-slate-200 text-[10px] sm:text-[11px] md:text-xs leading-snug">Select available slots anytime, anywhere—even outside of business hours.</p>
              </div>
            </div>

            {/* Card 3: Time Efficiency */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 hover:border-[#0284C7] shadow-[0_8px_20px_-4px_rgba(2,132,199,0.22)] hover:shadow-[0_12px_28px_-4px_rgba(2,132,199,0.32)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between overflow-hidden relative group h-[180px] sm:h-[195px] md:h-[205px] lg:h-[215px]">
              {/* Visual Top Graphic / Uploaded Image */}
              <div className="relative w-full flex-1 min-h-0 min-w-0 overflow-hidden bg-white flex items-center justify-center">
                <img src={timeEfficiencyImg} alt="Time Efficiency" className="w-full h-full object-cover max-w-full max-h-full block transform group-hover:scale-105 transition-transform duration-300" />
              </div>
              
              {/* Bottom Text Content */}
              <div className="shrink-0 w-full py-1 sm:py-1.5 px-3 bg-[#1B365D] text-white border-t border-[#13294B] space-y-0.5 relative z-10">
                <h3 className="text-xs sm:text-sm font-serif font-bold text-white tracking-tight leading-snug">Time Efficiency</h3>
                <p className="text-slate-200 text-[10px] sm:text-[11px] md:text-xs leading-snug">Optimize your schedule. Minimal check-in time and direct care access upon arrival.</p>
              </div>
            </div>

            {/* Card 4: Total Flexibility */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 hover:border-[#0284C7] shadow-[0_8px_20px_-4px_rgba(2,132,199,0.22)] hover:shadow-[0_12px_28px_-4px_rgba(2,132,199,0.32)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between overflow-hidden relative group h-[180px] sm:h-[195px] md:h-[205px] lg:h-[215px]">
              {/* Visual Top Graphic / Uploaded Image */}
              <div className="relative w-full flex-1 min-h-0 min-w-0 overflow-hidden bg-white flex items-center justify-center">
                <img src={totalFlexibilityImg} alt="Total Flexibility" className="w-full h-full object-cover max-w-full max-h-full block transform group-hover:scale-105 transition-transform duration-300" />
              </div>
              
              {/* Bottom Text Content */}
              <div className="shrink-0 w-full py-1 sm:py-1.5 px-3 bg-[#1B365D] text-white border-t border-[#13294B] space-y-0.5 relative z-10">
                <h3 className="text-xs sm:text-sm font-serif font-bold text-white tracking-tight leading-snug">Total Flexibility</h3>
                <p className="text-slate-200 text-[10px] sm:text-[11px] md:text-xs leading-snug">Easily modify or cancel your booking with full control over upcoming visits.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PATIENT REVIEW SECTION */}
      <section className="w-full bg-white pt-8 sm:pt-10 pb-16 sm:pb-24 px-6 sm:px-12 lg:px-20 border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
          
          <div className="space-y-1.5 sm:space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0F172A] tracking-tight">
              Patient review section
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0284C7] to-[#1B365D] rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 pt-4">
            
            {/* Review 1: Ananya Sharma */}
            <div className="relative bg-[#1B365D] rounded-3xl border border-[#1B365D] px-6 py-4 sm:py-5 pt-5 sm:pt-6 text-white shadow-[0_12px_35px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_50px_-5px_rgba(56,189,248,0.45)] hover:-translate-y-1.5 transition-all duration-300 space-y-2 group">
              <div className="absolute -top-6 -left-4 sm:-top-7 sm:-left-5 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1B365D] border-2 border-[#38BDF8] p-0.5 shadow-lg group-hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] flex items-center justify-center overflow-hidden z-20 transition-all duration-300">
                <img src="https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?auto=format&fit=crop&w=200&h=200&q=80" alt="Ananya Sharma" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="flex items-center justify-between gap-4 pl-12 sm:pl-16">
                <h3 className="text-xl font-serif font-bold text-white tracking-wide">Ananya Sharma</h3>
                <div className="text-amber-400 text-sm flex gap-1">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                "Dr. Sharma's diagnosis was extremely accurate and comforting. The clinic staff was polite, and the digital appointment booking saved me so much waiting time."
              </p>
            </div>

            {/* Review 2: Rajesh Patel */}
            <div className="relative bg-[#1B365D] rounded-3xl border border-[#1B365D] px-6 py-4 sm:py-5 pt-5 sm:pt-6 text-white shadow-[0_12px_35px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_50px_-5px_rgba(56,189,248,0.45)] hover:-translate-y-1.5 transition-all duration-300 space-y-2 group">
              <div className="absolute -top-6 -left-4 sm:-top-7 sm:-left-5 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1B365D] border-2 border-[#38BDF8] p-0.5 shadow-lg group-hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] flex items-center justify-center overflow-hidden z-20 transition-all duration-300">
                <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&h=200&q=80" alt="Rajesh Patel" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="flex items-center justify-between gap-4 pl-12 sm:pl-16">
                <h3 className="text-xl font-serif font-bold text-white tracking-wide">Rajesh Patel</h3>
                <div className="text-amber-400 text-sm flex gap-1">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                "Outstanding healthcare experience! The consultation was detailed, thorough, and every test result was explained with utmost clarity. Highly recommended."
              </p>
            </div>

            {/* Review 3: Pooja Iyer */}
            <div className="relative bg-[#1B365D] rounded-3xl border border-[#1B365D] px-6 py-4 sm:py-5 pt-5 sm:pt-6 text-white shadow-[0_12px_35px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_50px_-5px_rgba(56,189,248,0.45)] hover:-translate-y-1.5 transition-all duration-300 space-y-2 group">
              <div className="absolute -top-6 -left-4 sm:-top-7 sm:-left-5 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1B365D] border-2 border-[#38BDF8] p-0.5 shadow-lg group-hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] flex items-center justify-center overflow-hidden z-20 transition-all duration-300">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80" alt="Pooja Iyer" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="flex items-center justify-between gap-4 pl-12 sm:pl-16">
                <h3 className="text-xl font-serif font-bold text-white tracking-wide">Pooja Iyer</h3>
                <div className="text-amber-400 text-sm flex gap-1">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                "The online slot booking made the whole process effortless. The doctor is compassionate, attentive, and provided a clear, personalized recovery plan."
              </p>
            </div>

            {/* Review 4: Vikram Sengupta */}
            <div className="relative bg-[#1B365D] rounded-3xl border border-[#1B365D] px-6 py-4 sm:py-5 pt-5 sm:pt-6 text-white shadow-[0_12px_35px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_50px_-5px_rgba(56,189,248,0.45)] hover:-translate-y-1.5 transition-all duration-300 space-y-2 group">
              <div className="absolute -top-6 -left-4 sm:-top-7 sm:-left-5 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1B365D] border-2 border-[#38BDF8] p-0.5 shadow-lg group-hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] flex items-center justify-center overflow-hidden z-20 transition-all duration-300">
                <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&h=200&q=80" alt="Vikram Sengupta" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="flex items-center justify-between gap-4 pl-12 sm:pl-16">
                <h3 className="text-xl font-serif font-bold text-white tracking-wide">Vikram Sengupta</h3>
                <div className="text-amber-400 text-sm flex gap-1">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                "Prompt attention, state-of-the-art facility, and genuine care from the entire medical team. Truly grateful for the excellent consultation and guidance."
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
