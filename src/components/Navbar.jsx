import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
  }, [location.pathname]);

  // Handle outside click
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

  const isDoctorActive = location.pathname === '/meet-doctor' || 
                         location.pathname === '/dr-arun-sharma' || 
                         location.pathname === '/dr-priya-nair';

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1B365D]/95 backdrop-blur-md border-b border-white/10 shadow-md px-6 sm:px-12 lg:px-20 py-3 sm:py-3.5 flex flex-wrap justify-between items-center gap-4 transition duration-300">
      {/* Brand Logo */}
      <Link to="/" className="flex items-center gap-2.5 font-serif font-bold text-2xl text-white tracking-wide">
        <span className="w-9 h-9 rounded-xl bg-[#0284C7] text-white flex items-center justify-center text-base shadow-md">
          <i className="fa-solid fa-heart-pulse"></i>
        </span>
        <span>Clinic<span className="text-[#38BDF8]">Care</span></span>
      </Link>

      {/* Nav Links */}
      <nav className="flex flex-wrap items-center gap-3 sm:gap-8 text-sm sm:text-base font-serif font-medium">
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

        {/* Meet Doctor Dropdown */}
        <div
          className="relative group dropdown-wrapper"
          ref={dropdownRef}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`dropdown-btn flex items-center gap-1.5 transition focus:outline-none cursor-pointer ${
              isDoctorActive
                ? "text-white border-b-2 border-white pb-0.5 font-bold"
                : "text-slate-200 hover:text-white"
            }`}
          >
            <span>Meet Doctor</span>
            <i
              className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 ${
                dropdownOpen ? "rotate-180 text-white" : ""
              }`}
            ></i>
          </button>

          {dropdownOpen && (
            <div className="dropdown-menu absolute left-0 sm:left-auto sm:right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-[0_15px_35px_rgba(27,54,93,0.25)] border border-slate-200 p-2 z-50 transition-all duration-200">
              <Link
                to="/dr-arun-sharma"
                onClick={() => setDropdownOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-xl transition ${
                  location.pathname === '/dr-arun-sharma'
                    ? "bg-[#F0F9FF] text-[#0284C7] font-bold"
                    : "hover:bg-[#F0F9FF] text-[#0F172A] hover:text-[#0284C7] font-semibold"
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-[#0284C7] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  <i className="fa-solid fa-user-doctor"></i>
                </div>
                <div>
                  <div className="text-sm font-serif text-[#0F172A]">Dr. Arun Sharma</div>
                  <div className="text-[11px] text-slate-500 font-sans font-normal">Cardiologist & Physician</div>
                </div>
              </Link>

              <Link
                to="/dr-priya-nair"
                onClick={() => setDropdownOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-xl transition mt-1 ${
                  location.pathname === '/dr-priya-nair'
                    ? "bg-[#F0F9FF] text-[#0284C7] font-bold"
                    : "hover:bg-[#F0F9FF] text-[#0F172A] hover:text-[#0284C7] font-semibold"
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-[#1B365D] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  <i className="fa-solid fa-user-doctor"></i>
                </div>
                <div>
                  <div className="text-sm font-serif text-[#0F172A]">Dr. Priya Nair</div>
                  <div className="text-[11px] text-slate-500 font-sans font-normal">Pediatrician & Family Health</div>
                </div>
              </Link>
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
          className="bg-[#0284C7] hover:bg-[#0369A1] text-white active:bg-[#0284C7] font-bold px-4 py-2 rounded-xl transition text-xs sm:text-sm font-serif shadow-md"
        >
          Booking
        </NavLink>
      </nav>
    </header>
  );
}
