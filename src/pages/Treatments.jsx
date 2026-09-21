import React from 'react';
import { Link } from 'react-router-dom';

export default function Treatments() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full flex-grow flex flex-col p-0 m-0">
      {/* SECTION 1: HEALTHCARE SOLUTIONS (Full Width) */}
      <section className="w-full bg-[#F8FAFC] pt-6 sm:pt-8 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="text-center space-y-2">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F172A] tracking-tight">
              Healthcare <span className="italic text-[#0284C7]">Solutions</span>
            </h1>
            <p className="text-[#64748B] text-sm sm:text-base max-w-xl mx-auto">
              Essential clinical categories and preventive care designed for your well-being.
            </p>
            <div className="w-14 h-1 bg-gradient-to-r from-[#0284C7] to-[#1B365D] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1: Vaccines */}
            <div className="bg-white rounded-3xl border border-slate-200 hover:border-[#0284C7] shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] hover:-translate-y-1 transition-all duration-300 p-6 text-center space-y-4 group">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284C7] text-2xl shadow-xs group-hover:scale-110 transition-transform duration-300">
                <i className="fa-solid fa-prescription-bottle"></i>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-[#0F172A] text-lg">Vaccines</h3>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                  Complete immunization and booster coverage for children and adults.
                </p>
              </div>
            </div>

            {/* 2: Wellness Care */}
            <div className="bg-white rounded-3xl border border-slate-200 hover:border-[#0284C7] shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] hover:-translate-y-1 transition-all duration-300 p-6 text-center space-y-4 group">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284C7] text-2xl shadow-xs group-hover:scale-110 transition-transform duration-300">
                <i className="fa-solid fa-hand-holding-heart"></i>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-[#0F172A] text-lg">Wellness Care</h3>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                  Holistic preventive wellness check-ups and custom health management.
                </p>
              </div>
            </div>

            {/* 3: Injectables */}
            <div className="bg-white rounded-3xl border border-slate-200 hover:border-[#0284C7] shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] hover:-translate-y-1 transition-all duration-300 p-6 text-center space-y-4 group">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284C7] text-2xl shadow-xs group-hover:scale-110 transition-transform duration-300">
                <i className="fa-solid fa-syringe"></i>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-[#0F172A] text-lg">Injectables</h3>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                  Safe clinical administration of prescribed injectables and IV therapies.
                </p>
              </div>
            </div>

            {/* 4: Nutraceuticals */}
            <div className="bg-white rounded-3xl border border-slate-200 hover:border-[#0284C7] shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] hover:-translate-y-1 transition-all duration-300 p-6 text-center space-y-4 group">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284C7] text-2xl shadow-xs group-hover:scale-110 transition-transform duration-300">
                <i className="fa-solid fa-capsules"></i>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-[#0F172A] text-lg">Nutraceuticals</h3>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                  Targeted nutrition and supplements to strengthen immunity and vitality.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: SPECIALIZED TREATMENTS (Full Width) */}
      <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-8 lg:px-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-widest block">Specialized Treatments</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F172A] tracking-tight">
              Advanced Clinical Procedures
            </h2>
            <div className="w-14 h-1 bg-gradient-to-r from-[#0284C7] to-[#1B365D] rounded-full mx-auto"></div>
          </div>

          {/* Reduced width cards container */}
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Treatment Item 1 (Blue Left, White Right) */}
            <div className="bg-white rounded-3xl border border-slate-200 hover:border-[#0284C7] shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-stretch group">
              {/* Left Full-Height Blue Side with Centered Image */}
              <div className="w-full md:w-64 bg-[#1B365D] p-5 sm:p-6 flex items-center justify-center shrink-0 border-b md:border-b-0 md:border-r border-[#13294B]">
                <div className="w-full max-w-[200px] h-36 sm:h-40 bg-white rounded-2xl flex items-center justify-center text-[#1B365D] shadow-md transform group-hover:scale-105 transition-transform duration-300">
                  <i className="fa-solid fa-heart-pulse text-5xl text-[#0284C7]"></i>
                </div>
              </div>
              {/* Right White Side with Text */}
              <div className="flex-1 bg-white p-6 sm:p-7 flex flex-col justify-center space-y-3">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0F172A]">Cardiology & Vascular Care</h3>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                  Comprehensive cardiovascular health diagnostics, stress testing, preventive monitoring, and tailored therapeutic care managed by senior cardiology specialists.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Link to="/dr-arun-sharma" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-200 bg-[#F8FAFC] hover:bg-slate-100 text-xs font-semibold text-[#0284C7] shadow-xs transition">
                    <span className="w-5 h-5 rounded-full bg-[#0284C7] text-white flex items-center justify-center text-[10px]">
                      <i className="fa-solid fa-user-doctor"></i>
                    </span>
                    Suggested Doctor: <strong className="text-[#0F172A]">Dr. Arun Sharma</strong>
                  </Link>
                  <Link to="/booking" className="bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xs transition">
                    Book Treatment
                  </Link>
                </div>
              </div>
            </div>

            {/* Treatment Item 2 (White Left, Blue Right - Alternating) */}
            <div className="bg-white rounded-3xl border border-slate-200 hover:border-[#0284C7] shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col md:flex-row-reverse items-stretch group">
              {/* Right Full-Height Blue Side with Centered Image */}
              <div className="w-full md:w-64 bg-[#1B365D] p-5 sm:p-6 flex items-center justify-center shrink-0 border-b md:border-b-0 md:border-l border-[#13294B]">
                <div className="w-full max-w-[200px] h-36 sm:h-40 bg-white rounded-2xl flex items-center justify-center text-[#1B365D] shadow-md transform group-hover:scale-105 transition-transform duration-300">
                  <i className="fa-solid fa-bone text-5xl text-[#0284C7]"></i>
                </div>
              </div>
              {/* Left White Side with Text */}
              <div className="flex-1 bg-white p-6 sm:p-7 flex flex-col justify-center space-y-3">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0F172A]">Orthopedic & Musculoskeletal Therapy</h3>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                  Precision diagnosis and non-invasive rehabilitation for joint health, spinal care, sports injury recovery, and mobility restoration.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Link to="/dr-priya-nair" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-200 bg-[#F8FAFC] hover:bg-slate-100 text-xs font-semibold text-[#0284C7] shadow-xs transition">
                    <span className="w-5 h-5 rounded-full bg-[#0284C7] text-white flex items-center justify-center text-[10px]">
                      <i className="fa-solid fa-user-doctor"></i>
                    </span>
                    Suggested Doctor: <strong className="text-[#0F172A]">Dr. Priya Nair</strong>
                  </Link>
                  <Link to="/booking" className="bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xs transition">
                    Book Treatment
                  </Link>
                </div>
              </div>
            </div>

            {/* Treatment Item 3 (Blue Left, White Right - Alternating) */}
            <div className="bg-white rounded-3xl border border-slate-200 hover:border-[#0284C7] shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-stretch group">
              {/* Left Full-Height Blue Side with Centered Image */}
              <div className="w-full md:w-64 bg-[#1B365D] p-5 sm:p-6 flex items-center justify-center shrink-0 border-b md:border-b-0 md:border-r border-[#13294B]">
                <div className="w-full max-w-[200px] h-36 sm:h-40 bg-white rounded-2xl flex items-center justify-center text-[#1B365D] shadow-md transform group-hover:scale-105 transition-transform duration-300">
                  <i className="fa-solid fa-dna text-5xl text-[#0284C7]"></i>
                </div>
              </div>
              {/* Right White Side with Text */}
              <div className="flex-1 bg-white p-6 sm:p-7 flex flex-col justify-center space-y-3">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0F172A]">Dermatology & Regenerative Health</h3>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                  State-of-the-art dermatological procedures, clinical skincare treatments, and cellular therapies focused on long-term tissue restoration.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Link to="/dr-arun-sharma" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-200 bg-[#F8FAFC] hover:bg-slate-100 text-xs font-semibold text-[#0284C7] shadow-xs transition">
                    <span className="w-5 h-5 rounded-full bg-[#0284C7] text-white flex items-center justify-center text-[10px]">
                      <i className="fa-solid fa-user-doctor"></i>
                    </span>
                    Suggested Doctor: <strong className="text-[#0F172A]">Dr. Arun Sharma</strong>
                  </Link>
                  <Link to="/booking" className="bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xs transition">
                    Book Treatment
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Center Go on Top Button */}
          <div className="text-center pt-6">
            <button 
              onClick={scrollToTop} 
              className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <i className="fa-solid fa-arrow-up mr-2"></i> Go on top
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
