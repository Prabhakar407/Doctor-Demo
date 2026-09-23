import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import hero1 from '../Images/hero1.png';
import hero2 from '../Images/hero2.png';
import hero3 from '../Images/hero3.png';

import instantBookingImg from '../Images/Instant Booking.png';
import accessImg from '../Images/24 by 7 Access.png';
import timeEfficiencyImg from '../Images/Time Efficiency.png';
import totalFlexibilityImg from '../Images/Total Flexibility.png';
import prescriptionBannerImg from '../Images/prescription-banner.jpg';
import gynecologyImg from '../Images/gynecology-service.jpg';
import ultrasoundImg from '../Images/ultrasound-service.jpg';
import sonographyScanImg from '../Images/sonography-scan.jpg';
import pregnancyImg from '../Images/pregnancy-service.jpg';
import physicianImg from '../Images/physician-service.jpg';
import glucometerImg from '../Images/glucometer.jpg';

const MotionLink = motion.create(Link);

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const heroImages = [hero1, hero2, hero3];
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const [solutionsInView, setSolutionsInView] = useState(false);
  const [whyInView, setWhyInView] = useState(false);
  const solutionsRef = useRef(null);
  const whyRef = useRef(null);

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Requirement 1: On small screen size (mobile), direct clicks to Treatment page Advanced Clinical Procedures section
  const handleServiceClick = (e, serviceId) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      e.preventDefault();
      navigate(`/treatment?service=${serviceId}#advanced-procedures`);
    }
  };

  const getTreatmentLink = (serviceId) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return `/treatment?service=${serviceId}#advanced-procedures`;
    }
    return '/treatment';
  };

  // Requirement 4: Laptop+ 7-Second Inquiry Popup Logic (only triggers once, not on subsequent refreshes)
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [showHeroForm, setShowHeroForm] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 1024) {
        return true;
      }
      return localStorage.getItem('cliniccare_inquiry_popup_handled') === 'true';
    }
    return true;
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      const handled = localStorage.getItem('cliniccare_inquiry_popup_handled');
      if (handled !== 'true') {
        const timer = setTimeout(() => {
          setShowInquiryModal(true);
        }, 7000);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && location.hash) {
      const scroll = () => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'instant' });
        }
      };
      scroll();
      const timer = setTimeout(scroll, 150);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const handleDismissInquiryModal = () => {
    setShowInquiryModal(false);
    setShowHeroForm(true);
    localStorage.setItem('cliniccare_inquiry_popup_handled', 'true');
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your appointment request has been received.');
    setShowInquiryModal(false);
    setShowHeroForm(true);
    localStorage.setItem('cliniccare_inquiry_popup_handled', 'true');
  };

  const reviews = [
    {
      name: "Ananya Sharma",
      image: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      text: "\"Dr. Sharma's diagnosis was extremely accurate and comforting. The clinic staff was polite, and the digital appointment booking saved me so much waiting time.\""
    },
    {
      name: "Rajesh Patel",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      text: "\"Outstanding healthcare experience! The consultation was detailed, thorough, and every test result was explained with utmost clarity. Highly recommended.\""
    },
    {
      name: "Pooja Iyer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      text: "\"The online slot booking made the whole process effortless. The doctor is compassionate, attentive, and provided a clear, personalized recovery plan.\""
    },
    {
      name: "Vikram Sengupta",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      text: "\"Prompt attention, state-of-the-art facility, and genuine care from the entire medical team. Truly grateful for the excellent consultation and guidance.\""
    }
  ];

  const reviewsRow2 = [
    {
      name: "Sunita Deshmukh",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      text: "\"Dr. Nair's empathetic maternal care and guidance made our pregnancy journey joyful and secure. We received clear answers to every question.\""
    },
    {
      name: "Amitav Roy",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      text: "\"The physician consultation for my diabetes management was truly transformative. Actionable medical advice and very attentive staff.\""
    },
    {
      name: "Kavita Menon",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      text: "\"High-precision pelvic ultrasound imaging done with utmost clinical dignity. The report was verified quickly with digital prescriptions.\""
    },
    {
      name: "Rohan Kulkarni",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      text: "\"Seamless digital reservation system and zero wait time. Modern equipment, spotlessly clean clinic, and genuinely caring doctors.\""
    }
  ];

  // 10-second automatic hero background crossfade rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Scroll entrance observer for Healthcare Solutions and Why Book Online sections
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setSolutionsInView(true);
      setWhyInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === solutionsRef.current) {
              setSolutionsInView(true);
              observer.unobserve(entry.target);
            }
            if (entry.target === whyRef.current) {
              setWhyInView(true);
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0, rootMargin: '100px 0px 100px 0px' }
    );

    if (solutionsRef.current) observer.observe(solutionsRef.current);
    if (whyRef.current) observer.observe(whyRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-full flex-grow flex flex-col p-0 m-0">

      {/* HERO SECTION */}
      <section className="w-full min-h-[calc(100svh-var(--nav-height,72px))] lg:h-[calc(100svh-var(--nav-height,72px))] lg:max-h-[calc(100svh-var(--nav-height,72px))] hero-ambient-glow short-laptop-compact text-white flex flex-col justify-center relative overflow-hidden py-4 sm:py-6 lg:py-4 px-4 sm:px-8 lg:px-14">
        
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
          <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 lg:w-1/2 bg-gradient-to-r from-[#1B365D] via-[#13294B]/70 via-40% to-transparent z-10 pointer-events-none"></div>
          {/* Subtle vertical gradients */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#1B365D]/50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0B1A30]/60 to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* Hero Grid: Left Content + Right Floating Form (Same Level, Upward Shifted) */}
        <div className="w-full max-w-7xl 2xl:max-w-[100rem] mx-auto relative z-10 grid lg:grid-cols-12 gap-6 lg:gap-10 2xl:gap-16 items-center">
          
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4.5 flex flex-col justify-center">
            <h1 className="playfair-display text-[clamp(1.95rem,3.8vw,3.65rem)] font-semibold text-white leading-tight not-italic tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="block 2xl:text-[4.75rem] 3xl:text-[5.5rem] 2xl:leading-none 2xl:mb-3 2xl:font-bold"
              >
                Your Path to
              </motion.span>
              <div className="block 2xl:text-[3.25rem] 3xl:text-[3.65rem] 2xl:leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="inline-block whitespace-nowrap mr-2"
                >
                  Personalized
                </motion.span>
                <motion.span
                  className="italic text-[#38BDF8] font-serif font-medium inline-block whitespace-nowrap"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        delayChildren: 0.85,
                        staggerChildren: 0.08,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  {"Wellness".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 6 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.06 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ delay: 0.85, duration: 0.5, repeat: 3, ease: "easeInOut" }}
                    className="inline-block text-[#38BDF8] ml-0.5 font-sans font-light"
                  >
                    |
                  </motion.span>
                </motion.span>
              </div>
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6, ease: "easeInOut" }}
              className="space-y-1.5 max-w-xl lg:max-w-2xl"
            >
              <p className="text-slate-100 text-xs sm:text-sm md:text-base font-normal leading-relaxed">
                We combine advanced medical technology with caring, personalized service to keep you and your family healthy. Expert care for your family with trusted clinical professionals.
              </p>
              <p className="text-white text-xs sm:text-sm md:text-base font-normal leading-relaxed">
                <strong className="font-bold text-white italic">Your Health, Our Priority</strong>—Experience Expert Care You Can Trust.
              </p>
            </motion.div>

            {/* Buttons Container */}
            <div className="flex flex-wrap items-center gap-3 pt-1 overflow-visible">
              <motion.div
                initial={{ opacity: 0, x: -220 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 3.1, ease: "easeInOut" }}
              >
                <Link
                  to="/booking"
                  className="bg-[#0284C7] hover:bg-[#0369A1] border border-transparent hover:border-slate-300 text-white text-xs sm:text-sm md:text-base font-serif font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-lg hover:shadow-[0_12px_28px_rgba(2,132,199,0.45)] hover:scale-105 active:scale-95 transition-all duration-200 transform inline-block text-center cursor-pointer"
                >
                  Book Now
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -220 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 2.4, ease: "easeInOut" }}
              >
                <Link
                  to="/treatment"
                  className="bg-slate-300 hover:bg-slate-200 text-[#1B365D] border-2 border-transparent hover:border-[#0284C7] text-xs sm:text-sm md:text-base font-serif font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md hover:shadow-[0_12px_28px_rgba(2,132,199,0.35)] hover:scale-105 active:scale-95 transition-all duration-200 transform inline-block text-center cursor-pointer"
                >
                  Our Services
                </Link>
              </motion.div>
            </div>

            {/* 3 Key Highlights / Trust Points (Vertical Layout: Icon Top-Middle, Topic Name Below) */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.8, ease: "easeInOut" }}
              className="pt-3 sm:pt-3.5 grid grid-cols-3 gap-3 sm:gap-6 border-t border-white/15 max-w-lg"
            >
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
            </motion.div>
          </div>

          {/* Right Column: Glassmorphic Floating Form */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center w-full">
            {showHeroForm ? (
              <div className="w-full max-w-sm 2xl:max-w-[28rem] 3xl:max-w-[32rem] bg-white/10 backdrop-blur-xl text-white rounded-2xl 2xl:rounded-3xl p-5 sm:p-6 2xl:p-7 3xl:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_65px_rgba(2,132,199,0.4)] border border-white/20 hover:border-[#0284C7] transition-all duration-300 space-y-3 2xl:space-y-4 animate-fadeIn">
                
                <div className="text-center pb-1.5 2xl:pb-2.5 border-b border-white/15">
                  <h3 className="text-xl sm:text-2xl 2xl:text-3xl 3xl:text-4xl font-serif font-bold text-white tracking-tight">
                    Book your <span className="italic text-[#38BDF8]">Visit</span>
                  </h3>
                  <p className="text-xs 2xl:text-sm 3xl:text-base font-medium text-slate-100 mt-0.5">Quick and easy appointment scheduling</p>
                </div>

                <form
                  className="space-y-2.5 sm:space-y-3 2xl:space-y-3.5"
                  onSubmit={handleInquirySubmit}
                >
                  {/* Name */}
                  <div>
                    <label className="block text-xs 2xl:text-sm font-bold text-white mb-0.5 2xl:mb-1 tracking-wide">User Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full px-3 py-1.5 sm:py-2 2xl:py-2.5 2xl:px-3.5 text-xs 2xl:text-sm font-medium rounded-xl bg-white border border-slate-300 text-[#0F172A] placeholder:text-slate-500 shadow-sm focus:bg-white focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/30 transition"
                    />
                  </div>

                  {/* Phone & Email in 2 compact columns */}
                  <div className="grid grid-cols-2 gap-2 2xl:gap-3">
                    <div>
                      <label className="block text-xs 2xl:text-sm font-bold text-white mb-0.5 2xl:mb-1 tracking-wide">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 234 567"
                        className="w-full px-3 py-1.5 sm:py-2 2xl:py-2.5 2xl:px-3.5 text-xs 2xl:text-sm font-medium rounded-xl bg-white border border-slate-300 text-[#0F172A] placeholder:text-slate-500 shadow-sm focus:bg-white focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/30 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs 2xl:text-sm font-bold text-white mb-0.5 2xl:mb-1 tracking-wide">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        className="w-full px-3 py-1.5 sm:py-2 2xl:py-2.5 2xl:px-3.5 text-xs 2xl:text-sm font-medium rounded-xl bg-white border border-slate-300 text-[#0F172A] placeholder:text-slate-500 shadow-sm focus:bg-white focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/30 transition"
                      />
                    </div>
                  </div>

                  {/* Preferred Date & Time */}
                  <div className="grid grid-cols-2 gap-2 2xl:gap-3">
                    <div>
                      <label className="block text-xs 2xl:text-sm font-bold text-white mb-0.5 2xl:mb-1 tracking-wide">Preferred Date *</label>
                      <input
                        type="date"
                        required
                        className="w-full px-2 py-1.5 sm:py-2 2xl:py-2.5 2xl:px-3 text-xs 2xl:text-sm font-medium rounded-xl bg-white border border-slate-300 text-[#0F172A] shadow-sm focus:bg-white focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/30 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs 2xl:text-sm font-bold text-white mb-0.5 2xl:mb-1 tracking-wide">Preferred Time *</label>
                      <select
                        required
                        className="w-full px-2 py-1.5 sm:py-2 2xl:py-2.5 2xl:px-3 text-xs 2xl:text-sm font-medium rounded-xl bg-white border border-slate-300 text-[#0F172A] shadow-sm focus:bg-white focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/30 transition"
                      >
                        <option value="" className="text-slate-500">Select Time</option>
                        <option value="Morning" className="text-[#0F172A]">09:00 AM - 12:00 PM</option>
                        <option value="Afternoon" className="text-[#0F172A]">12:00 PM - 04:00 PM</option>
                        <option value="Evening" className="text-[#0F172A]">04:00 PM - 08:00 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-1.5 2xl:pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-7 2xl:px-9 py-2 2xl:py-2.5 bg-[#0284C7] hover:bg-[#0369A1] border border-transparent hover:border-slate-300 text-white font-serif font-bold rounded-lg 2xl:rounded-xl transition-all duration-200 text-xs sm:text-sm 2xl:text-base shadow-[0_8px_20px_-4px_rgba(2,132,199,0.5)] hover:shadow-[0_12px_25px_-4px_rgba(2,132,199,0.7)] hover:scale-105 active:scale-95 transform cursor-pointer"
                    >
                      Book Appointment
                    </button>
                  </div>

                  {/* Phone call fallback line */}
                  <div className="text-center pt-1">
                    <p className="text-xs sm:text-sm 2xl:text-base font-medium text-white font-serif">
                      Or call us at <a href="tel:+81888888888" className="text-[#38BDF8] hover:text-white font-bold text-xs sm:text-sm 2xl:text-base underline underline-offset-4 decoration-[#38BDF8]/60 hover:decoration-white transition ml-1 inline-block">+81888888888</a>
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="hidden lg:block w-full max-w-sm 2xl:max-w-[28rem] 3xl:max-w-[32rem] min-h-[460px] 2xl:min-h-[520px]"></div>
            )}
          </div>

        </div>

        {/* 7-Second Inquiry Popup Modal for Laptop+ (shown once) */}
        {showInquiryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-md 2xl:max-w-lg bg-[#1B365D] border border-white/20 rounded-3xl p-6 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.6)] text-white">
              {/* Close / Cross Button to Cancel */}
              <button
                type="button"
                onClick={handleDismissInquiryModal}
                aria-label="Close Inquiry Form"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer text-base shadow-sm"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              <div className="text-center pb-2 border-b border-white/15 pr-8 pl-8">
                <span className="text-[10px] font-bold text-[#38BDF8] uppercase tracking-wider block mb-0.5">Quick Consultation Booking</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  Book your <span className="italic text-[#38BDF8]">Visit</span>
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-200 mt-0.5">Schedule your clinical appointment with our top specialists</p>
              </div>

              <form
                className="space-y-3 pt-3"
                onSubmit={handleInquirySubmit}
              >
                <div>
                  <label className="block text-xs font-bold text-white mb-1 tracking-wide">User Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm font-medium rounded-xl bg-white border border-slate-300 text-[#0F172A] placeholder:text-slate-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7] transition"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-white mb-1 tracking-wide">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 234 567"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm font-medium rounded-xl bg-white border border-slate-300 text-[#0F172A] placeholder:text-slate-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white mb-1 tracking-wide">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm font-medium rounded-xl bg-white border border-slate-300 text-[#0F172A] placeholder:text-slate-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-white mb-1 tracking-wide">Preferred Date *</label>
                    <input
                      type="date"
                      required
                      className="w-full px-3 py-2 text-xs sm:text-sm font-medium rounded-xl bg-white border border-slate-300 text-[#0F172A] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white mb-1 tracking-wide">Preferred Time *</label>
                    <select
                      required
                      className="w-full px-3 py-2 text-xs sm:text-sm font-medium rounded-xl bg-white border border-slate-300 text-[#0F172A] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7] transition"
                    >
                      <option value="" className="text-slate-500">Select Time</option>
                      <option value="Morning" className="text-[#0F172A]">09:00 AM - 12:00 PM</option>
                      <option value="Afternoon" className="text-[#0F172A]">12:00 PM - 04:00 PM</option>
                      <option value="Evening" className="text-[#0F172A]">04:00 PM - 08:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="w-full px-8 py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold rounded-xl transition-all duration-200 text-sm shadow-[0_8px_20px_-4px_rgba(2,132,199,0.5)] hover:shadow-[0_12px_25px_-4px_rgba(2,132,199,0.7)] cursor-pointer"
                  >
                    Book Appointment
                  </button>
                </div>

                <div className="text-center pt-1">
                  <p className="text-xs font-medium text-slate-200 font-serif">
                    Or call us at <a href="tel:+81888888888" className="text-[#38BDF8] hover:text-white font-bold underline ml-1">+81888888888</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}

      </section>

      {/* HEALTHCARE SOLUTIONS / SERVICES SECTION */}
      <section 
        ref={solutionsRef}
        id="healthcare-solutions"
        className="w-full bg-[#F8FAFC] py-10 sm:py-12 lg:py-16 2xl:py-20 px-4 sm:px-8 lg:px-12 2xl:px-20 border-b border-slate-200 relative"
      >
        <div className="max-w-7xl 2xl:max-w-[100rem] w-full mx-auto space-y-6 sm:space-y-8 2xl:space-y-10">
          
          {/* Section Header */}
          <div className={`text-center space-y-2 sm:space-y-2.5 2xl:space-y-3 transition-all duration-700 ${solutionsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-serif font-bold text-[#0F172A] tracking-tight">
              Healthcare Solutions
            </h2>
            <div className="w-16 2xl:w-24 h-1 2xl:h-1.5 bg-gradient-to-r from-[#0284C7] to-[#1B365D] rounded-full mx-auto"></div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.25fr_2.1fr_2.25fr_3.6fr] gap-5 2xl:gap-8 items-stretch">
            
            {/* Column 1: Card 1 (Obstetrician & Gynaecologist) */}
            <MotionLink 
              to={getTreatmentLink('gynecology')}
              onClick={(e) => handleServiceClick(e, 'gynecology')}
              initial={isMobile ? { opacity: 0, y: 25 } : { opacity: 0, y: 20 }}
              animate={solutionsInView ? { opacity: 1, y: 0 } : (isMobile ? { opacity: 0, y: 25 } : { opacity: 0, y: 20 })}
              transition={isMobile ? { duration: 0.5, delay: 0.1, ease: "easeInOut" } : { duration: 0.6, delay: 0.1, ease: "easeInOut" }}
              className="healthcare-se-card bg-[#1B365D] rounded-3xl border border-slate-200 hover:border-[#0284C7] shadow-[0_8px_25px_-4px_rgba(2,132,199,0.18)] hover:shadow-[0_20px_45px_-10px_rgba(2,132,199,0.35)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer h-[260px] md:h-auto min-h-[380px] 2xl:min-h-[480px]"
            >
              <div className="healthcare-se-img w-full flex-1 min-h-[220px] 2xl:min-h-[300px] bg-[#1B365D] relative overflow-hidden flex items-center justify-center">
                <motion.div 
                  initial={!isMobile ? { scaleY: 0, opacity: 0 } : { opacity: 0 }}
                  animate={solutionsInView ? (!isMobile ? { scaleY: 1, opacity: 1 } : { opacity: 1 }) : (!isMobile ? { scaleY: 0, opacity: 0 } : { opacity: 0 })}
                  transition={{ duration: 0.75, delay: isMobile ? 0.1 : 0.2, ease: "easeInOut" }}
                  style={{ transformOrigin: "bottom" }}
                  className="w-full h-full transform-gpu"
                >
                  <img 
                    src={gynecologyImg} 
                    alt="Obstetrician - Gynaecologist" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </div>
              <div className="healthcare-se-body py-3 sm:py-3.5 2xl:py-4 px-4 2xl:px-5 bg-[#1B365D] text-white border-t border-[#13294B] mt-auto shrink-0 flex items-center justify-between gap-2 z-10">
                <div className="min-w-0">
                  <h3 className="font-bold text-white text-base sm:text-lg 2xl:text-xl mb-0.5 leading-tight group-hover:text-sky-300 transition-colors duration-300">Obstetrician - Gynaecologist</h3>
                  <p className="text-slate-200 text-xs sm:text-sm 2xl:text-base leading-snug">Women’s health, pelvic wellness, & gynaecology.</p>
                </div>
                <div className="w-8 h-8 2xl:w-10 2xl:h-10 rounded-full bg-white/10 group-hover:bg-[#0284C7] text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xs shrink-0">
                  <i className="fa-solid fa-arrow-right text-xs 2xl:text-sm transition-transform duration-300 group-hover:translate-x-0.5"></i>
                </div>
              </div>
            </MotionLink>

            {/* Column 2: Cards 2 & 3 (Ultrasound Stack) */}
            <div className="flex flex-col gap-5 2xl:gap-6 justify-between">
              {/* Card 2: Ultrasound */}
              <MotionLink 
                to={getTreatmentLink('ultrasound')}
                onClick={(e) => handleServiceClick(e, 'ultrasound')}
                initial={isMobile ? { opacity: 0, y: 25 } : { opacity: 0, y: 20 }}
                animate={solutionsInView ? { opacity: 1, y: 0 } : (isMobile ? { opacity: 0, y: 25 } : { opacity: 0, y: 20 })}
                transition={isMobile ? { duration: 0.5, delay: 0.35, ease: "easeInOut" } : { duration: 0.6, delay: 0.95, ease: "easeInOut" }}
                className="healthcare-se-card healthcare-se-card-fullbleed h-[200px] md:h-auto md:flex-1 min-h-[180px] 2xl:min-h-[225px] rounded-3xl border border-slate-200 hover:border-[#0284C7] shadow-[0_8px_25px_-4px_rgba(2,132,199,0.18)] hover:shadow-[0_20px_45px_-10px_rgba(2,132,199,0.35)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col justify-end p-4 sm:p-4.5 2xl:p-5 group cursor-pointer bg-[#1B365D]"
              >
                <motion.div
                  initial={!isMobile ? { scaleY: 0, opacity: 0 } : { opacity: 0 }}
                  animate={solutionsInView ? (!isMobile ? { scaleY: 1, opacity: 1 } : { opacity: 1 }) : (!isMobile ? { scaleY: 0, opacity: 0 } : { opacity: 0 })}
                  transition={{ duration: 0.75, delay: isMobile ? 0.35 : 1.05, ease: "easeInOut" }}
                  style={{ transformOrigin: "bottom" }}
                  className="absolute inset-0 w-full h-full overflow-hidden transform-gpu"
                >
                  <img 
                    src={ultrasoundImg} 
                    alt="Ultrasound" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B365D]/95 via-[#1B365D]/75 to-transparent"></div>
                </motion.div>
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <div className="space-y-0.5 min-w-0">
                    <h3 className="font-bold text-white text-base sm:text-lg 2xl:text-xl mb-0.5 leading-tight group-hover:text-sky-300 transition-colors duration-300">Ultrasound</h3>
                    <p className="text-slate-200 text-xs sm:text-sm 2xl:text-base leading-snug">High-resolution 3D/4D diagnostic sonography.</p>
                  </div>
                  <div className="w-8 h-8 2xl:w-10 2xl:h-10 rounded-full bg-white/15 backdrop-blur-xs group-hover:bg-[#0284C7] text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xs shrink-0">
                    <i className="fa-solid fa-arrow-right text-xs 2xl:text-sm transition-transform duration-300 group-hover:translate-x-0.5"></i>
                  </div>
                </div>
              </MotionLink>

              {/* Card 3: Advanced Sonography & Scans */}
              <MotionLink 
                to={getTreatmentLink('ultrasound')}
                onClick={(e) => handleServiceClick(e, 'ultrasound')}
                initial={isMobile ? { opacity: 0, y: 25 } : { opacity: 0, y: 20 }}
                animate={solutionsInView ? { opacity: 1, y: 0 } : (isMobile ? { opacity: 0, y: 25 } : { opacity: 0, y: 20 })}
                transition={isMobile ? { duration: 0.5, delay: 0.60, ease: "easeInOut" } : { duration: 0.6, delay: 1.80, ease: "easeInOut" }}
                className="healthcare-se-card h-[200px] md:h-auto md:flex-1 min-h-[180px] 2xl:min-h-[225px] bg-[#1B365D] rounded-3xl border border-slate-200 hover:border-[#0284C7] shadow-[0_8px_25px_-4px_rgba(2,132,199,0.18)] hover:shadow-[0_20px_45px_-10px_rgba(2,132,199,0.35)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden group relative cursor-pointer"
              >
                <div className="healthcare-se-img w-full flex-1 min-h-0 overflow-hidden bg-[#1B365D] relative">
                  <motion.div 
                    initial={!isMobile ? { scaleY: 0, opacity: 0 } : { opacity: 0 }}
                    animate={solutionsInView ? (!isMobile ? { scaleY: 1, opacity: 1 } : { opacity: 1 }) : (!isMobile ? { scaleY: 0, opacity: 0 } : { opacity: 0 })}
                    transition={{ duration: 0.75, delay: isMobile ? 0.60 : 1.90, ease: "easeInOut" }}
                    style={{ transformOrigin: "bottom" }}
                    className="w-full h-full transform-gpu"
                  >
                    <img 
                      src={sonographyScanImg} 
                      alt="Advanced Sonography & Scans" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                </div>
                <div className="healthcare-se-body py-3 sm:py-3.5 2xl:py-4 px-4 2xl:px-5 bg-white border-t border-slate-100 shrink-0 flex items-center justify-between gap-2 z-10">
                  <h3 className="font-bold text-[#0F172A] text-sm sm:text-base 2xl:text-lg m-0 leading-tight group-hover:text-[#0284C7] transition-colors duration-300">Advanced Sonography &amp; Scans</h3>
                  <div className="w-7 h-7 2xl:w-9 2xl:h-9 rounded-full bg-slate-100 group-hover:bg-[#0284C7] text-slate-600 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xs shrink-0">
                    <i className="fa-solid fa-arrow-right text-xs 2xl:text-sm transition-transform duration-300 group-hover:translate-x-0.5"></i>
                  </div>
                </div>
              </MotionLink>
            </div>

            {/* Column 3: Card 4 (Pregnancy Management) */}
            <MotionLink 
              to={getTreatmentLink('pregnancy')}
              onClick={(e) => handleServiceClick(e, 'pregnancy')}
              initial={isMobile ? { opacity: 0, y: 25 } : { opacity: 0, y: 20 }}
              animate={solutionsInView ? { opacity: 1, y: 0 } : (isMobile ? { opacity: 0, y: 25 } : { opacity: 0, y: 20 })}
              transition={isMobile ? { duration: 0.5, delay: 0.85, ease: "easeInOut" } : { duration: 0.6, delay: 2.65, ease: "easeInOut" }}
              className="healthcare-se-card bg-[#1B365D] rounded-3xl border border-slate-200 hover:border-[#0284C7] shadow-[0_8px_25px_-4px_rgba(2,132,199,0.18)] hover:shadow-[0_20px_45px_-10px_rgba(2,132,199,0.35)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer h-[260px] md:h-auto min-h-[380px] 2xl:min-h-[480px]"
            >
              <div className="healthcare-se-img w-full flex-1 min-h-[220px] 2xl:min-h-[300px] bg-[#1B365D] relative overflow-hidden flex items-center justify-center">
                <motion.div 
                  initial={!isMobile ? { scaleY: 0, opacity: 0 } : { opacity: 0 }}
                  animate={solutionsInView ? (!isMobile ? { scaleY: 1, opacity: 1 } : { opacity: 1 }) : (!isMobile ? { scaleY: 0, opacity: 0 } : { opacity: 0 })}
                  transition={{ duration: 0.75, delay: isMobile ? 0.85 : 2.75, ease: "easeInOut" }}
                  style={{ transformOrigin: "bottom" }}
                  className="w-full h-full transform-gpu"
                >
                  <img 
                    src={pregnancyImg} 
                    alt="Pregnancy Management" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </div>
              <div className="healthcare-se-body py-3 sm:py-3.5 2xl:py-4 px-4 2xl:px-5 bg-[#1B365D] text-white border-t border-[#13294B] mt-auto shrink-0 flex items-center justify-between gap-2 z-10">
                <div className="min-w-0">
                  <h3 className="font-bold text-white text-base sm:text-lg 2xl:text-xl mb-0.5 leading-tight group-hover:text-sky-300 transition-colors duration-300">Pregnancy Management</h3>
                  <p className="text-slate-200 text-xs sm:text-sm 2xl:text-base leading-snug">Prenatal, antenatal, & postnatal maternal care.</p>
                </div>
                <div className="w-8 h-8 2xl:w-10 2xl:h-10 rounded-full bg-white/10 group-hover:bg-[#0284C7] text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xs shrink-0">
                  <i className="fa-solid fa-arrow-right text-xs 2xl:text-sm transition-transform duration-300 group-hover:translate-x-0.5"></i>
                </div>
              </div>
            </MotionLink>

            {/* Column 4: Cards 5 & 6 (Physician & Diabetologist) */}
            <div className="flex flex-col gap-4 2xl:gap-6 justify-between">
              {/* Card 5: Consulting Physician */}
              <MotionLink 
                to={getTreatmentLink('physician')}
                onClick={(e) => handleServiceClick(e, 'physician')}
                initial={isMobile ? { opacity: 0, y: 25 } : { opacity: 0, y: 20 }}
                animate={solutionsInView ? { opacity: 1, y: 0 } : (isMobile ? { opacity: 0, y: 25 } : { opacity: 0, y: 20 })}
                transition={isMobile ? { duration: 0.5, delay: 1.10, ease: "easeInOut" } : { duration: 0.6, delay: 3.50, ease: "easeInOut" }}
                className="healthcare-se-card h-[200px] sm:h-auto md:flex-1 min-h-[180px] 2xl:min-h-[225px] rounded-3xl border border-slate-200 hover:border-[#0284C7] shadow-[0_8px_25px_-4px_rgba(2,132,199,0.18)] hover:shadow-[0_20px_45px_-10px_rgba(2,132,199,0.35)] hover:-translate-y-2 transition-all duration-300 flex flex-col sm:flex-row items-stretch overflow-hidden group cursor-pointer bg-[#1B365D]"
              >
                <div className="healthcare-se-img w-full sm:w-2/5 flex-1 sm:flex-initial min-h-0 sm:min-h-full bg-[#1B365D] overflow-hidden relative order-1 sm:order-2">
                  <motion.div 
                    initial={!isMobile ? { scaleX: 0, opacity: 0 } : { opacity: 0 }}
                    animate={solutionsInView ? (!isMobile ? { scaleX: 1, opacity: 1 } : { opacity: 1 }) : (!isMobile ? { scaleX: 0, opacity: 0 } : { opacity: 0 })}
                    transition={{ duration: 0.75, delay: isMobile ? 1.10 : 3.60, ease: "easeInOut" }}
                    style={{ transformOrigin: "right" }}
                    className="w-full h-full transform-gpu"
                  >
                    <img 
                      src={physicianImg} 
                      alt="Consulting Physician" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                </div>
                <div className="healthcare-se-body w-full sm:w-3/5 bg-[#1B365D] py-3 sm:py-3.5 2xl:py-4 px-4 sm:px-5 2xl:px-6 text-white flex flex-col justify-center space-y-1 z-10 shrink-0 sm:shrink order-2 sm:order-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-white text-base sm:text-lg 2xl:text-xl mb-0.5 leading-tight group-hover:text-sky-300 transition-colors duration-300">Consulting Physician</h3>
                    <div className="w-7 h-7 2xl:w-9 2xl:h-9 rounded-full bg-white/10 group-hover:bg-[#0284C7] text-white flex sm:hidden items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xs shrink-0">
                      <i className="fa-solid fa-arrow-right text-xs 2xl:text-sm transition-transform duration-300 group-hover:translate-x-0.5"></i>
                    </div>
                  </div>
                  <p className="text-slate-200 text-xs sm:text-sm 2xl:text-base leading-snug">Comprehensive internal medicine & preventive clinical care.</p>
                  <div className="hidden sm:flex items-center gap-1.5 pt-1 text-xs 2xl:text-sm text-[#38BDF8] group-hover:text-white font-medium transition-colors">
                    <span>Explore details</span>
                    <i className="fa-solid fa-arrow-right text-[10px] 2xl:text-xs transition-transform duration-300 group-hover:translate-x-1"></i>
                  </div>
                </div>
              </MotionLink>

              {/* Card 6: Diabetologist Care */}
              <MotionLink 
                to={getTreatmentLink('physician')}
                onClick={(e) => handleServiceClick(e, 'physician')}
                initial={isMobile ? { opacity: 0, y: 25 } : { opacity: 0, y: 20 }}
                animate={solutionsInView ? { opacity: 1, y: 0 } : (isMobile ? { opacity: 0, y: 25 } : { opacity: 0, y: 20 })}
                transition={isMobile ? { duration: 0.5, delay: 1.35, ease: "easeInOut" } : { duration: 0.6, delay: 4.35, ease: "easeInOut" }}
                className="healthcare-se-card h-[200px] sm:h-auto md:flex-1 min-h-[180px] 2xl:min-h-[225px] rounded-3xl border border-slate-200 hover:border-[#0284C7] shadow-[0_8px_25px_-4px_rgba(2,132,199,0.18)] hover:shadow-[0_20px_45px_-10px_rgba(2,132,199,0.35)] hover:-translate-y-2 transition-all duration-300 flex flex-col sm:flex-row items-stretch overflow-hidden group cursor-pointer bg-[#1B365D]"
              >
                <div className="healthcare-se-img w-full sm:w-2/5 flex-1 sm:flex-initial min-h-0 sm:min-h-full bg-[#1B365D] overflow-hidden relative order-1 sm:order-2">
                  <motion.div 
                    initial={!isMobile ? { scaleX: 0, opacity: 0 } : { opacity: 0 }}
                    animate={solutionsInView ? (!isMobile ? { scaleX: 1, opacity: 1 } : { opacity: 1 }) : (!isMobile ? { scaleX: 0, opacity: 0 } : { opacity: 0 })}
                    transition={{ duration: 0.75, delay: isMobile ? 1.35 : 4.45, ease: "easeInOut" }}
                    style={{ transformOrigin: "right" }}
                    className="w-full h-full transform-gpu"
                  >
                    <img 
                      src={glucometerImg} 
                      alt="Diabetologist Care" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                </div>
                <div className="healthcare-se-body w-full sm:w-3/5 bg-[#1B365D] py-3 sm:py-3.5 2xl:py-4 px-4 sm:px-5 2xl:px-6 text-white flex flex-col justify-center space-y-1 z-10 shrink-0 sm:shrink order-2 sm:order-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-white text-base sm:text-lg 2xl:text-xl mb-0.5 leading-tight group-hover:text-sky-300 transition-colors duration-300">Diabetologist Care</h3>
                    <div className="w-7 h-7 2xl:w-9 2xl:h-9 rounded-full bg-white/10 group-hover:bg-[#0284C7] text-white flex sm:hidden items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xs shrink-0">
                      <i className="fa-solid fa-arrow-right text-xs 2xl:text-sm transition-transform duration-300 group-hover:translate-x-0.5"></i>
                    </div>
                  </div>
                  <p className="text-slate-200 text-xs sm:text-sm 2xl:text-base leading-snug">Advanced blood sugar monitoring & diabetes management.</p>
                  <div className="hidden sm:flex items-center gap-1.5 pt-1 text-xs 2xl:text-sm text-[#38BDF8] group-hover:text-white font-medium transition-colors">
                    <span>Explore details</span>
                    <i className="fa-solid fa-arrow-right text-[10px] 2xl:text-xs transition-transform duration-300 group-hover:translate-x-1"></i>
                  </div>
                </div>
              </MotionLink>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT DOCTOR SECTION (Expanded Height with Detailed Credentials) */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 2xl:py-24 px-4 sm:px-8 lg:px-14 2xl:px-20 border-b border-slate-200 relative">
        <div className="max-w-6xl 2xl:max-w-[100rem] w-full mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 2xl:gap-16 items-center">
            
            {/* Doctor Photo Card (With Mobile Header placed above image on small screens) */}
            <motion.div 
              initial={{ opacity: 0, x: -60, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 2xl:col-span-6 flex flex-col items-center lg:items-start justify-center lg:justify-start w-full"
            >
              
              {/* Mobile Doctor Header (Visible only on mobile/tablet < lg, placed above image with padding) */}
              <div className="w-full max-w-[340px] sm:max-w-[380px] lg:hidden space-y-2 mb-4 sm:mb-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-[#0284C7]/10 text-[#0284C7] px-3 py-0.5 rounded-full text-xs font-bold border border-[#0284C7]/25 shadow-xs">
                    <i className="fa-solid fa-user-doctor"></i> Senior Medical Specialist
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80 shadow-xs">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Accepting Patients
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A] tracking-tight">
                  About Dr. Arun Sharma
                </h2>

                <div className="inline-flex flex-wrap items-center gap-1.5 pt-0.5 text-xs sm:text-sm">
                  <span className="bg-[#1B365D] text-white font-serif font-semibold px-3 py-1 rounded-lg shadow-xs text-xs">
                    MBBS, MD (Medicine), DM (Specialist)
                  </span>
                  <span className="text-slate-400 hidden sm:inline">•</span>
                  <span className="bg-sky-50 text-[#0284C7] font-semibold px-2.5 py-1 rounded-lg border border-sky-200/80 flex items-center gap-1.5 text-xs">
                    <i className="fa-solid fa-building-columns text-xs"></i> AIIMS Alumnus
                  </span>
                </div>
              </div>

              {/* Doctor Photo Card Container - Full generous width on 2K/3K screens without reduction */}
              <div className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[440px] 2xl:max-w-none bg-gradient-to-b from-[#F8FAFC] to-slate-100 rounded-3xl border border-slate-200 p-3 sm:p-4 2xl:p-6 shadow-[0_12px_35px_-5px_rgba(2,132,199,0.22)] relative overflow-hidden group">
                <div className="w-full h-80 sm:h-96 lg:h-[28rem] 2xl:h-[38rem] 3xl:h-[44rem] rounded-2xl overflow-hidden relative bg-[#1B365D]">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1400&q=85"
                    alt="Dr. Arun Sharma"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B365D]/90 via-transparent to-transparent"></div>
                  
                  {/* Bottom Image Floating Tag */}
                  <div className="absolute bottom-3 left-3 right-3 2xl:bottom-4 2xl:left-4 2xl:right-4 flex items-center justify-between bg-[#1B365D]/90 backdrop-blur-md text-white px-3.5 py-2 2xl:px-5 2xl:py-3 rounded-xl border border-white/20 text-xs 2xl:text-sm shadow-md">
                    <span className="font-bold flex items-center gap-1.5">
                      <i className="fa-solid fa-circle-check text-emerald-400"></i> Verified Specialist
                    </span>
                    <span className="text-[#38BDF8] font-semibold text-[11px] 2xl:text-xs">10+ Yrs Exp</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content & Credentials */}
            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 2xl:col-span-6 space-y-4 sm:space-y-5 2xl:space-y-6 flex flex-col justify-center w-full"
            >
              
              {/* Desktop Doctor Header & Designation Pill (Hidden on mobile < lg, visible on desktop lg+) */}
              <div className="hidden lg:block space-y-1.5 2xl:space-y-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-[#0284C7]/10 text-[#0284C7] px-3.5 py-1 2xl:px-4 2xl:py-1.5 rounded-full text-xs 2xl:text-sm font-bold border border-[#0284C7]/25 shadow-xs">
                    <i className="fa-solid fa-user-doctor"></i> Senior Medical Specialist
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] 2xl:text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 2xl:px-3.5 2xl:py-1.5 rounded-full border border-emerald-200/80 shadow-xs">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Accepting Patients
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-serif font-bold text-[#0F172A] tracking-tight">
                  About Dr. Arun Sharma
                </h2>

                <div className="inline-flex flex-wrap items-center gap-2 pt-0.5">
                  <span className="bg-[#1B365D] text-white font-serif font-semibold text-xs sm:text-sm 2xl:text-base px-3.5 py-1 2xl:px-4 2xl:py-1.5 rounded-lg shadow-xs">
                    MBBS, MD (Medicine), DM (Specialist)
                  </span>
                  <span className="text-slate-400 hidden sm:inline">•</span>
                  <span className="bg-sky-50 text-[#0284C7] font-semibold text-xs sm:text-sm 2xl:text-base px-3 py-1 2xl:px-3.5 2xl:py-1.5 rounded-lg border border-sky-200/80 flex items-center gap-1.5">
                    <i className="fa-solid fa-building-columns text-xs 2xl:text-sm"></i> AIIMS Alumnus
                  </span>
                </div>
              </div>

              {/* Clinical Philosophy Quote Box */}
              <div className="relative bg-gradient-to-r from-sky-50/60 via-slate-50/80 to-white rounded-2xl p-3.5 sm:p-4 2xl:p-5 border-l-4 border-[#0284C7] border-y border-r border-slate-200/80 shadow-xs">
                <div className="flex gap-2.5 2xl:gap-3 items-start">
                  <i className="fa-solid fa-quote-left text-[#0284C7]/30 text-xl 2xl:text-2xl shrink-0 mt-0.5"></i>
                  <p className="text-[#334155] text-xs sm:text-sm md:text-base 2xl:text-lg leading-relaxed font-sans">
                    Dedicated senior specialist with over 10+ years of distinguished clinical experience providing evidence-based healthcare, precision diagnosis, and tailored treatment plans for chronic and acute conditions.
                  </p>
                </div>
              </div>

              {/* 4 Interactive Feature Credential Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 2xl:gap-4 pt-0">
                
                {/* 1. 10+ Years Experience */}
                <div className="bg-gradient-to-br from-white to-slate-50/90 rounded-2xl py-2 sm:py-2.5 2xl:py-3 px-3 sm:px-3.5 2xl:px-4 border border-slate-200/90 shadow-sm hover:border-[#0284C7] hover:shadow-[0_8px_25px_-5px_rgba(2,132,199,0.2)] hover:-translate-y-0.5 transition-all duration-300 group cursor-default relative overflow-hidden">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 2xl:w-11 2xl:h-11 rounded-xl bg-gradient-to-br from-sky-50 to-sky-100 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-200/60 shadow-xs group-hover:scale-105 group-hover:bg-[#0284C7] group-hover:text-white transition-all duration-300">
                        <i className="fa-solid fa-award text-base sm:text-lg"></i>
                      </div>
                      <div>
                        <h4 className="text-sm 2xl:text-base font-serif font-bold text-[#0F172A] group-hover:text-[#0284C7] transition-colors leading-tight">
                          10+ Years Experience
                        </h4>
                        <p className="text-xs 2xl:text-sm text-slate-500 mt-0.5 leading-tight">Extensive clinical practice</p>
                      </div>
                    </div>
                    <span className="text-[9px] 2xl:text-[10px] font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200/60 shrink-0">
                      Verified
                    </span>
                  </div>
                </div>

                {/* 2. Studied from Top Medical College */}
                <div className="bg-gradient-to-br from-white to-slate-50/90 rounded-2xl py-2 sm:py-2.5 2xl:py-3 px-3 sm:px-3.5 2xl:px-4 border border-slate-200/90 shadow-sm hover:border-[#0284C7] hover:shadow-[0_8px_25px_-5px_rgba(2,132,199,0.2)] hover:-translate-y-0.5 transition-all duration-300 group cursor-default relative overflow-hidden">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 2xl:w-11 2xl:h-11 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 text-[#1B365D] flex items-center justify-center shrink-0 border border-indigo-200/60 shadow-xs group-hover:scale-105 group-hover:bg-[#1B365D] group-hover:text-white transition-all duration-300">
                        <i className="fa-solid fa-graduation-cap text-base sm:text-lg"></i>
                      </div>
                      <div>
                        <h4 className="text-sm 2xl:text-base font-serif font-bold text-[#0F172A] group-hover:text-[#0284C7] transition-colors leading-tight">
                          AIIMS New Delhi
                        </h4>
                        <p className="text-xs 2xl:text-sm text-slate-500 mt-0.5 leading-tight">Top Tier Medical Education</p>
                      </div>
                    </div>
                    <span className="text-[9px] 2xl:text-[10px] font-bold uppercase tracking-wider text-[#1B365D] bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200/60 shrink-0">
                      Alumnus
                    </span>
                  </div>
                </div>

                {/* 3. Cardiology & General Medicine Specialist */}
                <div className="bg-gradient-to-br from-white to-slate-50/90 rounded-2xl py-2 sm:py-2.5 2xl:py-3 px-3 sm:px-3.5 2xl:px-4 border border-slate-200/90 shadow-sm hover:border-[#0284C7] hover:shadow-[0_8px_25px_-5px_rgba(2,132,199,0.2)] hover:-translate-y-0.5 transition-all duration-300 group cursor-default relative overflow-hidden">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 2xl:w-11 2xl:h-11 rounded-xl bg-gradient-to-br from-cyan-50 to-sky-100 text-[#0284C7] flex items-center justify-center shrink-0 border border-cyan-200/60 shadow-xs group-hover:scale-105 group-hover:bg-[#0284C7] group-hover:text-white transition-all duration-300">
                        <i className="fa-solid fa-heart-pulse text-base sm:text-lg"></i>
                      </div>
                      <div>
                        <h4 className="text-sm 2xl:text-base font-serif font-bold text-[#0F172A] group-hover:text-[#0284C7] transition-colors leading-tight">
                          Senior Specialist
                        </h4>
                        <p className="text-xs 2xl:text-sm text-slate-500 mt-0.5 leading-tight">Cardiology &amp; General Medicine</p>
                      </div>
                    </div>
                    <span className="text-[9px] 2xl:text-[10px] font-bold uppercase tracking-wider text-[#0284C7] bg-cyan-50 px-1.5 py-0.5 rounded border border-cyan-200/60 shrink-0">
                      Specialty
                    </span>
                  </div>
                </div>

                {/* 4. Available on days in weeks */}
                <div className="bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl py-2 sm:py-2.5 2xl:py-3 px-3 sm:px-3.5 2xl:px-4 border border-emerald-200/80 shadow-sm hover:border-emerald-500 hover:shadow-[0_8px_25px_-5px_rgba(16,185,129,0.2)] hover:-translate-y-0.5 transition-all duration-300 group cursor-default relative overflow-hidden">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/60 shadow-xs group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                        <i className="fa-solid fa-calendar-check text-base sm:text-lg"></i>
                      </div>
                      <div>
                        <h4 className="text-sm font-serif font-bold text-[#0F172A] group-hover:text-emerald-700 transition-colors leading-tight">
                          Mon – Sat (6 Days / Wk)
                        </h4>
                        <p className="text-xs text-emerald-600 font-semibold mt-0.5 leading-tight">9:00 AM – 7:00 PM Slots</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60 shrink-0">
                      Active
                    </span>
                  </div>
                </div>

              </div>

              {/* Action Buttons Hub (Tightly connected to divs above) */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-1">
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.75, delay: 0.15, ease: "easeInOut" }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    to="/booking"
                    className="w-full sm:w-auto justify-center bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif text-sm font-bold px-7 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 transform inline-flex items-center gap-2 border border-transparent hover:border-slate-300 text-center cursor-pointer"
                  >
                    <i className="fa-solid fa-calendar-check text-xs"></i>
                    <span>Book Appointment</span>
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.75, delay: 0.3, ease: "easeInOut" }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    to="/dr-arun-sharma"
                    className="w-full sm:w-auto justify-center bg-slate-100 hover:bg-slate-200 text-[#1B365D] font-serif text-sm font-bold px-6 py-3 rounded-lg border border-slate-300 hover:border-[#0284C7] hover:scale-105 active:scale-95 transition-all duration-200 transform inline-flex items-center gap-2 text-center cursor-pointer"
                  >
                    <i className="fa-solid fa-user-doctor text-xs text-[#0284C7]"></i>
                    <span>Doctor Profile</span>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.75, delay: 0.45, ease: "easeInOut" }}
                  className="w-full sm:w-auto"
                >
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto justify-center bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold px-6 py-3 rounded-lg shadow-md hover:shadow-lg inline-flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-200 transform text-center cursor-pointer"
                  >
                    <i className="fa-brands fa-whatsapp text-lg text-white"></i> WhatsApp
                  </a>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* APPOINTMENT BOOKING & DIGITAL PRESCRIPTIONS BANNER SECTION */}
      <section id="consultation-prescriptions" className="w-full bg-[#F8FAFC] py-6 sm:py-8 2xl:py-12 px-4 sm:px-8 lg:px-14 2xl:px-20 border-b border-slate-200 consultation-banner-laptop">
        <div className="max-w-6xl 2xl:max-w-[100rem] w-full mx-auto h-full flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="banner-inner-card interactive-lift relative w-full rounded-3xl overflow-hidden shadow-[0_12px_35px_-10px_rgba(2,132,199,0.3)] border border-slate-200 group flex items-center min-h-[16rem] sm:min-h-[17.5rem] md:min-h-[19rem] lg:min-h-0 2xl:min-h-[22rem]"
          >
            {/* Background Generated 3D Banner Image */}
            <img
              src={prescriptionBannerImg}
              alt="Book Doctor Consultations & Access Digital Prescriptions"
              className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-500 pointer-events-none"
            />
            
            {/* Dark Gradient Overlay for optimal contrast & readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B365D]/95 via-[#1B365D]/85 md:via-[#1B365D]/65 to-transparent pointer-events-none"></div>

            {/* Content in Normal Flow - Auto-scaling and Zero Overflow */}
            <div className="relative z-10 w-full p-5 sm:p-7 md:p-8 lg:p-4 xl:p-6 2xl:p-12 text-white">
              <div className="max-w-xl 2xl:max-w-3xl space-y-2 lg:space-y-1 xl:space-y-2 2xl:space-y-3">
                <span className="bg-[#0284C7]/80 backdrop-blur-md text-white text-[10px] sm:text-xs lg:text-[10px] xl:text-xs 2xl:text-sm font-semibold px-3 py-0.5 lg:px-2.5 lg:py-0.5 2xl:px-4 2xl:py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 border border-white/20 shadow-xs">
                  <i className="fa-solid fa-calendar-check text-[#38BDF8]"></i> Verified Doctor Appointments
                </span>
                
                <div className="space-y-1 lg:space-y-0.5 xl:space-y-1 2xl:space-y-2">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-4xl font-serif font-bold text-white tracking-tight leading-tight m-0">
                    Book Doctor Consultation &amp; <br className="hidden sm:inline" />
                    <span className="text-[#38BDF8] italic">Get Digital Prescriptions</span>
                  </h2>
                  <p className="text-slate-100 text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-lg leading-relaxed max-w-lg 2xl:max-w-2xl m-0">
                    Schedule appointments with senior healthcare specialists, access verified digital prescriptions, and receive comprehensive personalized medical care.
                  </p>
                </div>
                
                <div className="flex flex-wrap items-center gap-2.5 pt-1.5 lg:pt-0.5 xl:pt-1.5 2xl:pt-3">
                  <Link
                    to="/booking"
                    className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-base px-5 py-2 sm:py-2.5 lg:px-4 lg:py-1.5 xl:px-5 xl:py-2 2xl:px-7 2xl:py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 transform flex items-center gap-2 border border-transparent hover:border-slate-300"
                  >
                    <i className="fa-solid fa-calendar-check text-xs 2xl:text-sm"></i>
                    <span>Book Appointment Now</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY BOOK OUR CONSULTATION SECTION */}
      <section 
        ref={whyRef}
        id="why-book-online"
        className="w-full bg-[#F8FAFC] py-10 sm:py-12 md:py-14 lg:py-16 2xl:py-20 px-4 sm:px-8 lg:px-14 2xl:px-20 border-b border-slate-200 flex flex-col justify-center"
      >
        <div className="max-w-7xl 2xl:max-w-[100rem] w-full mx-auto space-y-8 sm:space-y-10 2xl:space-y-12">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center space-y-1.5 shrink-0 pt-0"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-serif font-bold text-[#0F172A] tracking-tight">
              Why Book Appointment Online
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0284C7] to-[#1B365D] rounded-full mx-auto"></div>
          </motion.div>
          
          {/* Grid of Cards: 1 col on mobile, 2 cols on tablet/small laptop, 4 cols on wide screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-6 lg:gap-6 xl:gap-6 2xl:gap-8 w-full items-stretch">
            
            {/* Card 1: Instant Booking & Confirmation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.65, delay: 0.10, ease: "easeInOut" }}
              className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 hover:border-[#0284C7] shadow-[0_8px_20px_-4px_rgba(2,132,199,0.22)] hover:shadow-[0_16px_32px_-6px_rgba(2,132,199,0.32)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden relative group h-[15.5rem] sm:h-[16.5rem] md:h-[17.5rem] xl:h-[18rem] 2xl:h-[20rem]"
            >
              {/* Glass Numbered Step Badge */}
              <div className="absolute top-2.5 right-2.5 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 text-slate-600 font-serif font-bold text-xs flex items-center justify-center transition-all duration-300 group-hover:bg-[#0284C7] group-hover:text-white group-hover:border-[#0284C7] group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(2,132,199,0.45)]">
                01
              </div>

              {/* Visual Top Graphic / Uploaded Image */}
              <div className="relative w-full flex-1 min-h-0 min-w-0 overflow-hidden bg-white flex items-center justify-center">
                <img src={instantBookingImg} alt="Instant Booking & Confirmation" className="w-full h-full object-cover max-w-full max-h-full block transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              {/* Bottom Text Content */}
              <div className="shrink-0 w-full py-2.5 sm:py-3 px-3.5 sm:px-4 bg-[#1B365D] text-white border-t border-[#13294B] space-y-1 relative z-10">
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <h3 className="text-xs sm:text-sm lg:text-sm xl:text-base 2xl:text-lg font-serif font-bold text-white tracking-tight leading-snug group-hover:text-sky-300 transition-colors duration-300">Instant Booking &amp; Confirmation</h3>
                <p className="text-slate-200 text-[11px] sm:text-xs lg:text-xs xl:text-sm 2xl:text-base leading-snug">Schedule your visit in minutes. Instant digital confirmation, no calls needed.</p>
              </div>
            </motion.div>

            {/* Card 2: 24/7 Access */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.65, delay: 0.85, ease: "easeInOut" }}
              className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 hover:border-[#0284C7] shadow-[0_8px_20px_-4px_rgba(2,132,199,0.22)] hover:shadow-[0_16px_32px_-6px_rgba(2,132,199,0.32)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden relative group h-[15.5rem] sm:h-[16.5rem] md:h-[17.5rem] xl:h-[18rem] 2xl:h-[20rem]"
            >
              {/* Glass Numbered Step Badge */}
              <div className="absolute top-2.5 right-2.5 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 text-slate-600 font-serif font-bold text-xs flex items-center justify-center transition-all duration-300 group-hover:bg-[#0284C7] group-hover:text-white group-hover:border-[#0284C7] group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(2,132,199,0.45)]">
                02
              </div>

              {/* Visual Top Graphic / Uploaded Image */}
              <div className="relative w-full flex-1 min-h-0 min-w-0 overflow-hidden bg-white flex items-center justify-center">
                <img src={accessImg} alt="24/7 Access" className="w-full h-full object-cover max-w-full max-h-full block transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              {/* Bottom Text Content */}
              <div className="shrink-0 w-full py-2.5 sm:py-3 px-3.5 sm:px-4 bg-[#1B365D] text-white border-t border-[#13294B] space-y-1 relative z-10">
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <h3 className="text-xs sm:text-sm lg:text-sm xl:text-base 2xl:text-lg font-serif font-bold text-white tracking-tight leading-snug group-hover:text-sky-300 transition-colors duration-300">24/7 Access</h3>
                <p className="text-slate-200 text-[11px] sm:text-xs lg:text-xs xl:text-sm 2xl:text-base leading-snug">Select available slots anytime, anywhere—even outside of business hours.</p>
              </div>
            </motion.div>

            {/* Card 3: Time Efficiency */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.65, delay: 1.60, ease: "easeInOut" }}
              className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 hover:border-[#0284C7] shadow-[0_8px_20px_-4px_rgba(2,132,199,0.22)] hover:shadow-[0_16px_32px_-6px_rgba(2,132,199,0.32)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden relative group h-[15.5rem] sm:h-[16.5rem] md:h-[17.5rem] xl:h-[18rem] 2xl:h-[20rem]"
            >
              {/* Glass Numbered Step Badge */}
              <div className="absolute top-2.5 right-2.5 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 text-slate-600 font-serif font-bold text-xs flex items-center justify-center transition-all duration-300 group-hover:bg-[#0284C7] group-hover:text-white group-hover:border-[#0284C7] group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(2,132,199,0.45)]">
                03
              </div>

              {/* Visual Top Graphic / Uploaded Image */}
              <div className="relative w-full flex-1 min-h-0 min-w-0 overflow-hidden bg-white flex items-center justify-center">
                <img src={timeEfficiencyImg} alt="Time Efficiency" className="w-full h-full object-cover max-w-full max-h-full block transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              {/* Bottom Text Content */}
              <div className="shrink-0 w-full py-2.5 sm:py-3 px-3.5 sm:px-4 bg-[#1B365D] text-white border-t border-[#13294B] space-y-1 relative z-10">
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <h3 className="text-xs sm:text-sm lg:text-sm xl:text-base 2xl:text-lg font-serif font-bold text-white tracking-tight leading-snug group-hover:text-sky-300 transition-colors duration-300">Time Efficiency</h3>
                <p className="text-slate-200 text-[11px] sm:text-xs lg:text-xs xl:text-sm 2xl:text-base leading-snug">Optimize your schedule. Minimal check-in time and direct care access upon arrival.</p>
              </div>
            </motion.div>

            {/* Card 4: Total Flexibility */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.65, delay: 2.35, ease: "easeInOut" }}
              className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 hover:border-[#0284C7] shadow-[0_8px_20px_-4px_rgba(2,132,199,0.22)] hover:shadow-[0_16px_32px_-6px_rgba(2,132,199,0.32)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden relative group h-[15.5rem] sm:h-[16.5rem] md:h-[17.5rem] xl:h-[18rem] 2xl:h-[20rem]"
            >
              {/* Glass Numbered Step Badge */}
              <div className="absolute top-2.5 right-2.5 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 text-slate-600 font-serif font-bold text-xs flex items-center justify-center transition-all duration-300 group-hover:bg-[#0284C7] group-hover:text-white group-hover:border-[#0284C7] group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(2,132,199,0.45)]">
                04
              </div>

              {/* Visual Top Graphic / Uploaded Image */}
              <div className="relative w-full flex-1 min-h-0 min-w-0 overflow-hidden bg-white flex items-center justify-center">
                <img src={totalFlexibilityImg} alt="Total Flexibility" className="w-full h-full object-cover max-w-full max-h-full block transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              {/* Bottom Text Content */}
              <div className="shrink-0 w-full py-2.5 sm:py-3 px-3.5 sm:px-4 bg-[#1B365D] text-white border-t border-[#13294B] space-y-1 relative z-10">
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <h3 className="text-xs sm:text-sm lg:text-sm xl:text-base 2xl:text-lg font-serif font-bold text-white tracking-tight leading-snug group-hover:text-sky-300 transition-colors duration-300">Total Flexibility</h3>
                <p className="text-slate-200 text-[11px] sm:text-xs lg:text-xs xl:text-sm 2xl:text-base leading-snug">Easily modify or cancel your booking with full control over upcoming visits.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* PATIENT REVIEW SECTION (Continuous Seamless Infinite Marquee with Dual Gradient Mask) */}
      <section id="patient-reviews" className="w-full bg-white pt-4 sm:pt-6 pb-12 sm:pb-16 2xl:pb-24 border-b border-slate-200 overflow-hidden patient-reviews-section">
        <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-14 2xl:px-20 space-y-2.5 sm:space-y-4 lg:space-y-2.5 2xl:space-y-6 w-full">
          
          <div className="reviews-header space-y-1 sm:space-y-1.5 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-serif font-bold text-[#0F172A] tracking-tight">
              Patient review section
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0284C7] to-[#1B365D] rounded-full mx-auto md:mx-0"></div>
          </div>
          
          {/* Row 1: Continuous Seamless Infinite Marquee (Right to Left) */}
          <div className="marquee-container py-1 sm:py-1.5">
            <div className="marquee-track">
              {[...reviews, ...reviews, ...reviews, ...reviews].map((review, idx) => (
                <div 
                  key={idx}
                  className="review-card-item interactive-lift w-[280px] min-[360px]:w-[320px] sm:w-[380px] md:w-[430px] lg:w-[340px] xl:w-[370px] 2xl:w-[580px] 3xl:w-[660px] shrink-0 bg-gradient-to-br from-[#1B365D] to-[#122543] rounded-2xl sm:rounded-3xl border border-sky-400/25 hover:border-[#38BDF8] p-4 min-[360px]:p-5 sm:p-5 lg:p-4 2xl:p-6 text-white shadow-[0_12px_35px_-5px_rgba(2,132,199,0.3)] flex flex-col justify-between min-h-[190px] sm:min-h-[210px] group transition-all duration-300"
                >
                  {/* Top Row: Avatar, Identity & Rating Badge */}
                  <div className="flex items-center justify-between gap-3 shrink-0">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 2xl:w-14 2xl:h-14 rounded-2xl overflow-hidden border-2 border-[#38BDF8] p-0.5 bg-[#13294B] shadow-md group-hover:border-white transition-all duration-300">
                          <img 
                            src={review.image} 
                            alt={review.name} 
                            className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" 
                          />
                        </div>
                        <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#1B365D] shadow" title="Verified Patient">
                          <i className="fa-solid fa-check"></i>
                        </span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-base font-serif font-bold text-white tracking-wide truncate">
                          {review.name}
                        </h3>
                        <p className="text-[#38BDF8] text-[10px] sm:text-xs font-semibold flex items-center gap-1 mt-0.5">
                          <i className="fa-solid fa-circle-check text-[10px] text-emerald-400"></i>
                          <span>Verified Patient</span>
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 bg-[#13294B]/90 border border-sky-400/30 px-2 py-0.5 2xl:px-2.5 2xl:py-1 rounded-full flex items-center gap-1.5 shadow-inner">
                      <div className="text-amber-400 text-[10px] 2xl:text-xs flex gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <i key={i} className="fa-solid fa-star"></i>
                        ))}
                      </div>
                      <span className="text-[10px] 2xl:text-[11px] font-bold text-white pl-0.5">5.0</span>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="my-1.5 sm:my-2 2xl:my-2.5 flex-1 flex items-center">
                    <p className="text-slate-200 text-xs sm:text-xs lg:text-[11px] xl:text-xs 2xl:text-sm leading-relaxed italic font-sans line-clamp-3">
                      "{review.text.replace(/^["']|["']$/g, '')}"
                    </p>
                  </div>

                  {/* Bottom Verification Footer */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-300 shrink-0">
                    <span className="flex items-center gap-1 text-slate-400">
                      <i className="fa-solid fa-notes-medical text-[#38BDF8]"></i>
                      <span>Clinical Consultation</span>
                    </span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <i className="fa-solid fa-award text-[10px]"></i>
                      <span>100% Recommended</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Moving Left to Right (Laptop & Greater Only: lg, xl, 2xl, 3xl) */}
          <div className="hidden lg:block marquee-container py-1 sm:py-1.5">
            <div className="marquee-track-reverse">
              {[...reviewsRow2, ...reviewsRow2, ...reviewsRow2, ...reviewsRow2].map((review, idx) => (
                <div 
                  key={idx}
                  className="review-card-item interactive-lift w-[280px] min-[360px]:w-[320px] sm:w-[380px] md:w-[430px] lg:w-[340px] xl:w-[370px] 2xl:w-[580px] 3xl:w-[660px] shrink-0 bg-gradient-to-br from-[#1B365D] to-[#122543] rounded-2xl sm:rounded-3xl border border-sky-400/25 hover:border-[#38BDF8] p-4 min-[360px]:p-5 sm:p-5 lg:p-4 2xl:p-6 text-white shadow-[0_12px_35px_-5px_rgba(2,132,199,0.3)] flex flex-col justify-between min-h-[190px] sm:min-h-[210px] group transition-all duration-300"
                >
                  {/* Top Row: Avatar, Identity & Rating Badge */}
                  <div className="flex items-center justify-between gap-3 shrink-0">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 2xl:w-14 2xl:h-14 rounded-2xl overflow-hidden border-2 border-[#38BDF8] p-0.5 bg-[#13294B] shadow-md group-hover:border-white transition-all duration-300">
                          <img 
                            src={review.image} 
                            alt={review.name} 
                            className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" 
                          />
                        </div>
                        <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#1B365D] shadow" title="Verified Patient">
                          <i className="fa-solid fa-check"></i>
                        </span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-base font-serif font-bold text-white tracking-wide truncate">
                          {review.name}
                        </h3>
                        <p className="text-[#38BDF8] text-[10px] sm:text-xs font-semibold flex items-center gap-1 mt-0.5">
                          <i className="fa-solid fa-circle-check text-[10px] text-emerald-400"></i>
                          <span>Verified Patient</span>
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 bg-[#13294B]/90 border border-sky-400/30 px-2 py-0.5 2xl:px-2.5 2xl:py-1 rounded-full flex items-center gap-1.5 shadow-inner">
                      <div className="text-amber-400 text-[10px] 2xl:text-xs flex gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <i key={i} className="fa-solid fa-star"></i>
                        ))}
                      </div>
                      <span className="text-[10px] 2xl:text-[11px] font-bold text-white pl-0.5">5.0</span>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="my-1.5 sm:my-2 2xl:my-2.5 flex-1 flex items-center">
                    <p className="text-slate-200 text-xs sm:text-xs lg:text-[11px] xl:text-xs 2xl:text-sm leading-relaxed italic font-sans line-clamp-3">
                      "{review.text.replace(/^["']|["']$/g, '')}"
                    </p>
                  </div>

                  {/* Bottom Verification Footer */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-300 shrink-0">
                    <span className="flex items-center gap-1 text-slate-400">
                      <i className="fa-solid fa-notes-medical text-[#38BDF8]"></i>
                      <span>Clinical Consultation</span>
                    </span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <i className="fa-solid fa-award text-[10px]"></i>
                      <span>100% Recommended</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
