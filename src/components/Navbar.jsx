import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDoctorOpen, setMobileDoctorOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileDrawerRef = useRef(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle outside click for desktop dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const isDoctorActive = location.pathname === '/meet-doctor' || 
                         location.pathname === '/dr-arun-sharma' || 
                         location.pathname === '/dr-priya-nair';

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1B365D] border-b border-white/10 shadow-md px-4 sm:px-8 lg:px-16 2xl:px-20 py-3 sm:py-3.5 2xl:py-4 transition duration-300">
      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto flex justify-between items-center gap-4">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 font-serif font-bold text-xl sm:text-2xl text-white tracking-wide shrink-0">
          <span className="w-9 h-9 rounded-xl bg-[#0284C7] text-white flex items-center justify-center text-base shadow-md">
            <i className="fa-solid fa-heart-pulse"></i>
          </span>
          <span>Clinic<span className="text-[#38BDF8]">Care</span></span>
        </Link>

        {/* Desktop Navigation Links (>= lg screens) */}
        <nav className="hidden lg:flex items-center gap-5 lg:gap-8 text-sm lg:text-base font-serif font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-white pb-0.5 font-bold transition"
                : "text-slate-200 hover:text-white active:text-white focus:text-white transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/treatment"
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-white pb-0.5 font-bold transition"
                : "text-slate-200 hover:text-white active:text-white focus:text-white transition"
            }
          >
            Treatments
          </NavLink>

          <NavLink
            to="/about-clinic"
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-white pb-0.5 font-bold transition"
                : "text-slate-200 hover:text-white active:text-white focus:text-white transition"
            }
          >
            About Clinic
          </NavLink>

          {/* Meet Doctor Dropdown (Click-Only Toggle & Professional Styling) */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen(prev => !prev)}
              className={`flex items-center gap-1.5 transition focus:outline-none cursor-pointer py-1 px-1 rounded-md ${
                isDoctorActive
                  ? "text-white border-b-2 border-white font-bold"
                  : "text-slate-200 hover:text-white"
              }`}
              aria-expanded={dropdownOpen}
            >
              <span>Meet Doctor</span>
              <i
                className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180 text-[#38BDF8]" : "text-slate-300"
                }`}
              ></i>
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 sm:left-auto sm:right-0 top-full mt-3 w-72 sm:w-80 bg-white rounded-2xl shadow-[0_20px_50px_-10px_rgba(27,54,93,0.35)] border border-slate-200/90 p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                
                {/* Dropdown Header */}
                <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase font-sans">
                    Specialist Doctors
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Available Today
                  </span>
                </div>

                {/* Doctors List */}
                <div className="space-y-1.5 pt-1.5">
                  {/* Dr. Arun Sharma */}
                  <Link
                    to="/dr-arun-sharma"
                    onClick={() => setDropdownOpen(false)}
                    className={`group flex items-center justify-between p-2.5 rounded-xl transition-all duration-200 ${
                      location.pathname === '/dr-arun-sharma'
                        ? "bg-sky-50 border border-sky-200 text-[#0284C7]"
                        : "hover:bg-slate-50 border border-transparent text-[#0F172A] hover:border-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&q=80"
                          alt="Dr. Arun Sharma"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white"></span>
                      </div>
                      <div>
                        <div className="text-sm font-serif font-bold text-[#0F172A] group-hover:text-[#0284C7] transition-colors leading-snug">
                          Dr. Arun Sharma
                        </div>
                        <div className="text-[11px] text-slate-500 font-sans leading-tight">Cardiologist &amp; Physician</div>
                        <div className="text-[10px] text-[#0284C7] font-semibold mt-0.5">10+ Yrs Exp • AIIMS</div>
                      </div>
                    </div>
                    <i className="fa-solid fa-chevron-right text-xs text-slate-400 group-hover:text-[#0284C7] group-hover:translate-x-1 transition-all duration-200"></i>
                  </Link>

                  {/* Dr. Priya Nair */}
                  <Link
                    to="/dr-priya-nair"
                    onClick={() => setDropdownOpen(false)}
                    className={`group flex items-center justify-between p-2.5 rounded-xl transition-all duration-200 ${
                      location.pathname === '/dr-priya-nair'
                        ? "bg-sky-50 border border-sky-200 text-[#0284C7]"
                        : "hover:bg-slate-50 border border-transparent text-[#0F172A] hover:border-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1594824813627-7ef9cf58f8b0?auto=format&fit=crop&w=150&q=80"
                          alt="Dr. Priya Nair"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white"></span>
                      </div>
                      <div>
                        <div className="text-sm font-serif font-bold text-[#0F172A] group-hover:text-[#0284C7] transition-colors leading-snug">
                          Dr. Priya Nair
                        </div>
                        <div className="text-[11px] text-slate-500 font-sans leading-tight">Pediatrician &amp; Family Care</div>
                        <div className="text-[10px] text-[#0284C7] font-semibold mt-0.5">8+ Yrs Exp • JIPMER</div>
                      </div>
                    </div>
                    <i className="fa-solid fa-chevron-right text-xs text-slate-400 group-hover:text-[#0284C7] group-hover:translate-x-1 transition-all duration-200"></i>
                  </Link>
                </div>

              </div>
            )}
          </div>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-white pb-0.5 font-bold transition"
                : "text-slate-200 hover:text-white active:text-white focus:text-white transition"
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/booking"
            className="bg-[#0284C7] hover:bg-[#0369A1] text-white active:bg-[#0284C7] font-bold px-5 py-2.5 rounded-lg transition text-xs sm:text-sm font-serif shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transform border border-transparent hover:border-slate-300"
          >
            Booking
          </NavLink>
        </nav>

        {/* Mobile / Tablet Hamburger Button (Strictly >= 48px tap target) */}
        <div className="flex items-center gap-2 lg:hidden">
          <NavLink
            to="/booking"
            className="bg-[#0284C7] text-white font-bold px-3.5 py-2 rounded-lg text-xs font-serif shadow-sm border border-transparent hover:border-slate-300"
          >
            Book
          </NavLink>
          
          <button
            type="button"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Toggle Navigation Menu"
            className="min-h-[48px] min-w-[48px] flex items-center justify-center text-white text-xl rounded-xl hover:bg-white/10 active:bg-white/20 transition cursor-pointer"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-[#0F172A]/75 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Drawer Panel: Reduced width, ~1/2 height dropdown slider with rounded bottom corner */}
          <div 
            ref={mobileDrawerRef}
            className="fixed right-0 top-0 w-[72%] max-w-[270px] sm:max-w-[290px] h-auto max-h-[52vh] bg-[#1B365D] text-white shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-4 sm:p-5 flex flex-col justify-between overflow-y-auto rounded-bl-3xl border-l border-b border-white/20 z-[101] animate-in slide-in-from-right duration-200"
          >
            <div className="space-y-3">
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-2.5 border-b border-white/15">
                <div className="flex items-center gap-2 font-serif font-bold text-lg">
                  <span className="w-7 h-7 rounded-lg bg-[#0284C7] flex items-center justify-center text-xs shadow">
                    <i className="fa-solid fa-heart-pulse"></i>
                  </span>
                  <span>Clinic<span className="text-[#38BDF8]">Care</span></span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition text-lg cursor-pointer"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col space-y-0.5 font-serif text-sm">
                <NavLink
                  to="/"
                  end
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `min-h-[38px] flex items-center px-3 rounded-lg transition ${
                      isActive ? 'bg-[#0284C7] text-white font-bold' : 'text-slate-200 hover:bg-white/10'
                    }`
                  }
                >
                  <i className="fa-solid fa-house w-6 text-xs text-[#38BDF8]"></i>
                  <span>Home</span>
                </NavLink>

                <NavLink
                  to="/treatment"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `min-h-[38px] flex items-center px-3 rounded-lg transition ${
                      isActive ? 'bg-[#0284C7] text-white font-bold' : 'text-slate-200 hover:bg-white/10'
                    }`
                  }
                >
                  <i className="fa-solid fa-stethoscope w-6 text-xs text-[#38BDF8]"></i>
                  <span>Treatments</span>
                </NavLink>

                <NavLink
                  to="/about-clinic"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `min-h-[38px] flex items-center px-3 rounded-lg transition ${
                      isActive ? 'bg-[#0284C7] text-white font-bold' : 'text-slate-200 hover:bg-white/10'
                    }`
                  }
                >
                  <i className="fa-solid fa-hospital w-6 text-xs text-[#38BDF8]"></i>
                  <span>About Clinic</span>
                </NavLink>

                {/* Mobile Doctors Submenu */}
                <div className="rounded-lg overflow-hidden bg-white/5 border border-white/10">
                  <button
                    type="button"
                    onClick={() => setMobileDoctorOpen(prev => !prev)}
                    className="min-h-[38px] w-full flex items-center justify-between px-3 text-slate-200 hover:bg-white/10 transition font-serif text-sm cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <i className="fa-solid fa-user-doctor w-6 text-xs text-[#38BDF8]"></i>
                      <span>Meet Doctor</span>
                    </span>
                    <i className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-200 ${mobileDoctorOpen ? 'rotate-180 text-[#38BDF8]' : ''}`}></i>
                  </button>

                  {mobileDoctorOpen && (
                    <div className="px-2.5 pb-2.5 space-y-1.5 pt-1 border-t border-white/10 bg-[#13294B]/60">
                      <Link
                        to="/dr-arun-sharma"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-[#0284C7]/20 transition"
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                        <div>
                          <div className="text-xs font-bold font-serif text-white">Dr. Arun Sharma</div>
                          <div className="text-[10px] text-slate-300">Cardiologist &amp; Physician</div>
                        </div>
                      </Link>

                      <Link
                        to="/dr-priya-nair"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-[#0284C7]/20 transition"
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                        <div>
                          <div className="text-xs font-bold font-serif text-white">Dr. Priya Nair</div>
                          <div className="text-[10px] text-slate-300">Pediatrician &amp; Family Care</div>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>

                <NavLink
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `min-h-[38px] flex items-center px-3 rounded-lg transition ${
                      isActive ? 'bg-[#0284C7] text-white font-bold' : 'text-slate-200 hover:bg-white/10'
                    }`
                  }
                >
                  <i className="fa-solid fa-envelope w-6 text-xs text-[#38BDF8]"></i>
                  <span>Contact</span>
                </NavLink>
              </nav>
            </div>

            {/* Mobile Drawer Bottom Action */}
            <div className="pt-3 border-t border-white/15 space-y-1.5 shrink-0">
              <Link
                to="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[38px] w-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold rounded-lg flex items-center justify-center gap-2 shadow-md transition text-xs border border-transparent hover:border-slate-300 cursor-pointer"
              >
                <i className="fa-solid fa-calendar-check text-xs"></i>
                <span>Book Appointment</span>
              </Link>
              <p className="text-center text-[10px] text-slate-400">
                Mon – Sat: 9:00 AM – 7:00 PM
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
