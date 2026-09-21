import React from 'react';
import { Link } from 'react-router-dom';

export default function DrArunSharma() {
  return (
    <div className="w-full flex-grow flex flex-col p-0 m-0">
      {/* DOCTOR PROFILE HERO SECTION */}
      <section className="w-full min-h-[calc(100vh-73px)] bg-gradient-to-br from-[#1B365D] via-[#13294B] to-[#0B1A30] text-white py-12 sm:py-16 px-4 sm:px-8 lg:px-14 flex flex-col justify-center border-b border-white/10 relative overflow-hidden">
        <div className="max-w-6xl w-full mx-auto space-y-10 relative z-10">
          
          {/* Section Header */}
          <div className="text-center space-y-2.5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight">
              Meet Dr. Arun Sharma
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0284C7] to-[#38BDF8] rounded-full mx-auto"></div>
          </div>

          {/* Doctor Profile Grid */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Doctor Image Card */}
            <div className="md:col-span-5 flex justify-center">
              <div className="w-64 h-72 sm:w-80 sm:h-96 rounded-3xl bg-white border border-white/30 flex items-center justify-center text-[#1B365D] shadow-[0_20px_50px_-10px_rgba(2,132,199,0.5)] relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80" 
                  alt="Dr. Arun Sharma" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute bottom-3 bg-[#1B365D]/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-md border border-white/20">
                  <i className="fa-solid fa-certificate text-[#38BDF8] mr-1.5"></i> Senior Consultant
                </div>
              </div>
            </div>

            {/* Doctor Bio & Actions */}
            <div className="md:col-span-7 space-y-5 text-white">
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-widest block">Chief Cardiologist & Physician</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-tight">
                  Dr. Arun Sharma
                </h2>
                <p className="text-[#38BDF8] font-semibold text-base sm:text-lg">MBBS, MD (Medicine), DM (Cardiology), FACC</p>
                <p className="text-slate-200 font-medium text-sm sm:text-base">Specialist in Preventive Cardiology, Hypertension & Internal Medicine</p>
              </div>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                With over 18 years of distinguished clinical experience across premier hospitals in India, Dr. Arun Sharma specializes in comprehensive cardiac risk assessments, complex chronic disease management, and tailored rehabilitation protocols.
              </p>
              
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="bg-white/10 backdrop-blur-md text-[#38BDF8] font-semibold px-3.5 py-1 rounded-full text-xs border border-white/20">
                  <i className="fa-solid fa-user-graduate mr-1.5"></i> AIIMS Alumnus
                </span>
                <span className="bg-white/10 backdrop-blur-md text-[#38BDF8] font-semibold px-3.5 py-1 rounded-full text-xs border border-white/20">
                  <i className="fa-solid fa-award mr-1.5"></i> 18+ Years Exp
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 font-semibold px-3.5 py-1 rounded-full text-xs border border-emerald-400/30 inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Available Today
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link to="/booking" className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition text-sm flex items-center gap-2">
                  <i className="fa-solid fa-calendar-check"></i> Book Consultation
                </Link>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 text-sm shadow-lg hover:shadow-xl transition">
                  <i className="fa-brands fa-whatsapp text-lg"></i> WhatsApp Direct
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: SPECIALIZATIONS & TIMINGS */}
      <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-8 lg:px-14 border-b border-slate-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-6 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#0284C7] text-white flex items-center justify-center text-xl shadow-md">
              <i className="fa-solid fa-heart-pulse"></i>
            </div>
            <h3 className="font-serif font-bold text-lg text-[#0F172A]">Clinical Expertise</h3>
            <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
              Cardiovascular health, ECG & Echo interpretation, lipid management, and systemic hypertension control.
            </p>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-6 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#1B365D] text-white flex items-center justify-center text-xl shadow-md">
              <i className="fa-solid fa-clock"></i>
            </div>
            <h3 className="font-serif font-bold text-lg text-[#0F172A]">OPD Consultation Hours</h3>
            <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
              Monday &ndash; Friday: 9:00 AM &ndash; 1:00 PM<br />
              Saturday: 10:00 AM &ndash; 2:00 PM
            </p>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-6 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xl shadow-md">
              <i className="fa-solid fa-hospital-user"></i>
            </div>
            <h3 className="font-serif font-bold text-lg text-[#0F172A]">Meet Other Specialists</h3>
            <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed mb-3">
              Looking for pediatric or family health consultations?
            </p>
            <Link to="/dr-priya-nair" className="text-[#0284C7] font-bold text-xs hover:underline inline-flex items-center gap-1.5">
              View Dr. Priya Nair's Profile <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
