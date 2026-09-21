import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutClinic() {
  const handleVirtualTour = () => {
    alert('Virtual Tour will open here!');
  };

  return (
    <div className="w-full flex-grow flex flex-col p-0 m-0">
      {/* LEADING CARE FACILITY HERO SECTION (Screen Height Blue Background) */}
      <section className="w-full min-h-[calc(100vh-73px)] lg:h-[calc(100vh-73px)] bg-gradient-to-br from-[#1B365D] via-[#13294B] to-[#0B1A30] text-white pt-3 sm:pt-4 pb-6 sm:pb-8 px-4 sm:px-8 lg:px-14 flex flex-col justify-center border-b border-white/10 relative overflow-hidden">
        <div className="max-w-6xl w-full mx-auto space-y-4 sm:space-y-6 relative z-10">
          
          {/* Section Header (Closer to Navbar) */}
          <div className="text-center space-y-1.5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight">
              Leading Care <span className="italic text-[#38BDF8]">Facility</span>
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0284C7] to-[#38BDF8] rounded-full mx-auto"></div>
          </div>

          {/* Facility Image + Overview & Awards */}
          <div className="grid md:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Image Placeholder Box (Increased Size Equal Width & Height Square) */}
            <div className="md:col-span-6 flex justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem] aspect-square bg-white border border-white/30 rounded-3xl flex items-center justify-center text-[#1B365D] shadow-[0_20px_50px_-10px_rgba(2,132,199,0.5)] relative overflow-hidden group">
                <i className="fa-solid fa-hospital text-8xl sm:text-9xl text-[#0284C7]/80 group-hover:scale-105 transition-transform duration-300"></i>
                <div className="absolute bottom-4 bg-[#1B365D] text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-md border border-white/20 whitespace-nowrap">
                  <i className="fa-solid fa-shield-halved text-[#38BDF8] mr-1.5"></i> Certified ISO 9001 Facility
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="md:col-span-6 space-y-5 text-white">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Advanced treatments to modern medical care, standard of professional clinical treatments and procedures.
              </p>

              {/* 3 Official Awards Badges */}
              <div className="grid grid-cols-3 gap-3 pt-1 text-center text-xs">
                
                {/* Award 1 */}
                <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white text-[#0F172A] border border-slate-100 hover:border-[#0284C7] shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] hover:-translate-y-1 transition-all duration-300">
                  <i className="fa-solid fa-award text-2xl text-[#0284C7] mb-1"></i>
                  <span className="text-[8px] uppercase tracking-wider text-[#64748B] font-bold">OFFICIAL</span>
                  <span className="font-extrabold text-[9px] uppercase leading-tight text-[#0F172A]">PREMIUM CARE</span>
                  <span className="text-[7px] text-[#64748B] uppercase">ACCREDITATION</span>
                </div>

                {/* Award 2 */}
                <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white text-[#0F172A] border border-slate-100 hover:border-[#0284C7] shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] hover:-translate-y-1 transition-all duration-300">
                  <i className="fa-solid fa-medal text-2xl text-[#0284C7] mb-1"></i>
                  <span className="text-[8px] uppercase tracking-wider text-[#64748B] font-bold">TOP RATED</span>
                  <span className="font-extrabold text-[9px] uppercase leading-tight text-[#0F172A]">TREATMENTS</span>
                  <span className="text-[7px] text-[#64748B] uppercase">EXCELLENCE</span>
                </div>

                {/* Award 3 */}
                <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white text-[#0F172A] border border-slate-100 hover:border-[#0284C7] shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] hover:-translate-y-1 transition-all duration-300">
                  <i className="fa-solid fa-certificate text-2xl text-[#0284C7] mb-1"></i>
                  <span className="text-[8px] uppercase tracking-wider text-[#64748B] font-bold">VERIFIED</span>
                  <span className="font-extrabold text-[9px] uppercase leading-tight text-[#0F172A]">PROCEDURES</span>
                  <span className="text-[7px] text-[#64748B] uppercase">SAFETY FIRST</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: VIRTUAL TOUR & CONSULTATION (White Background) */}
      <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-8 lg:px-12 border-b border-slate-200">
        <div className="max-w-6xl w-full mx-auto space-y-8">
          
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Video Placeholder Box with Play Icon (Equal Width & Height Square) */}
            <div className="md:col-span-6 flex justify-center">
              <div 
                onClick={handleVirtualTour}
                className="w-60 h-60 sm:w-72 sm:h-72 aspect-square bg-[#F8FAFC] border border-slate-200 hover:border-[#0284C7] rounded-3xl flex flex-col items-center justify-center shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] hover:-translate-y-1 relative group cursor-pointer transition-all duration-300 overflow-hidden"
              >
                <div className="w-16 h-14 rounded-2xl bg-[#0284C7] flex items-center justify-center text-white text-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-play ml-1"></i>
                </div>
                <div className="absolute bottom-3.5 text-[11px] font-semibold text-[#0F172A] bg-white/95 px-3.5 py-1 rounded-lg border border-slate-200 shadow-sm">
                  Click to play 360&deg; clinic overview
                </div>
              </div>
            </div>

            {/* Right Action Buttons & Overview */}
            <div className="md:col-span-6 space-y-4">
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
                  className="block w-full sm:w-72 max-w-xs bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold py-3 px-6 rounded-xl shadow-[0_8px_20px_-4px_rgba(2,132,199,0.4)] hover:shadow-[0_12px_25px_-4px_rgba(2,132,199,0.5)] text-center transition text-xs sm:text-sm"
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
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
