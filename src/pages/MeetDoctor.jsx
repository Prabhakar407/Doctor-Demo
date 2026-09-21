import React from 'react';
import { Link } from 'react-router-dom';

export default function MeetDoctor() {
  return (
    <div className="w-full flex-grow flex flex-col p-0 m-0">
      {/* DOCTOR PROFILE HERO SECTION (Full Screen Height Blue Background) */}
      <section className="w-full min-h-[calc(100vh-73px)] bg-gradient-to-br from-[#1B365D] via-[#13294B] to-[#0B1A30] text-white py-12 sm:py-16 px-4 sm:px-8 lg:px-14 flex flex-col justify-center border-b border-white/10 relative overflow-hidden">
        <div className="max-w-6xl w-full mx-auto space-y-10 relative z-10">
          
          {/* Section Header */}
          <div className="text-center space-y-2.5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight">
              Meet Our Chief Medical Doctor
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0284C7] to-[#38BDF8] rounded-full mx-auto"></div>
          </div>

          {/* Doctor Profile Grid (Visible on Blue Background) */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Doctor Avatar Placeholder Box */}
            <div className="md:col-span-5 flex justify-center">
              <div className="w-60 h-68 sm:w-72 sm:h-80 rounded-3xl bg-white border border-white/30 flex items-center justify-center text-[#1B365D] shadow-[0_20px_50px_-10px_rgba(2,132,199,0.5)] relative overflow-hidden group">
                <i className="fa-solid fa-user-doctor text-8xl sm:text-9xl text-[#0284C7]/80 group-hover:scale-105 transition-transform duration-300"></i>
                <div className="absolute bottom-3 bg-[#1B365D] text-white px-4 py-1 rounded-full text-xs font-semibold shadow-md border border-white/20">
                  <i className="fa-solid fa-certificate text-[#38BDF8] mr-1"></i> Verified Doctor
                </div>
              </div>
            </div>

            {/* Doctor Bio & Actions */}
            <div className="md:col-span-7 space-y-4 text-white">
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-widest block">Senior Consultant</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-tight">
                  Dr. Alexander Smith, MD
                </h2>
                <p className="text-[#38BDF8] font-semibold text-base sm:text-lg">MBBS, MD, FACC (Board Certified)</p>
                <p className="text-slate-200 font-medium text-sm sm:text-base">Specialist in Preventive Cardiology & Internal Medicine</p>
              </div>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Over 15 years of clinical practice managing chronic conditions, therapeutic cardiovascular rehabilitation, and holistic patient wellness. Dr. Smith is dedicated to evidence-based healthcare.
              </p>
              
              <div className="pt-1">
                <span className="bg-white/10 backdrop-blur-md text-[#38BDF8] font-semibold px-4 py-1.5 rounded-full text-xs inline-flex items-center gap-2 border border-white/20 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Available Today for Consultation
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link to="/booking" className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition text-sm">
                  <i className="fa-solid fa-calendar-check mr-2"></i> Book Appointment
                </Link>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 text-sm shadow-lg hover:shadow-xl transition">
                  <i className="fa-brands fa-whatsapp text-lg"></i> Chat on WhatsApp
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: PATIENT REVIEWS & CLINICAL INSIGHTS (Full Width) */}
      <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-8 lg:px-12 border-b border-slate-200">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Section Header */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F172A] tracking-tight">
              Feedback & Clinical Insights
            </h2>
            <div className="w-14 h-1 bg-gradient-to-r from-[#0284C7] to-[#1B365D] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Column 1: Reviews */}
            <div className="space-y-5">
              {/* Review 1 */}
              <div className="bg-white rounded-2xl border border-slate-200 hover:border-[#0284C7] p-5 shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] hover:-translate-y-1 transition-all duration-300 space-y-2.5">
                <div className="text-amber-400 text-xs flex gap-1">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                  "Dr. Smith provided exceptional care and attention during my cardiology check-up. Truly professional and empathetic."
                </p>
                <p className="font-bold text-[#0F172A] text-xs pt-1">&mdash; Sarah M.</p>
              </div>

              {/* Review 2 */}
              <div className="bg-white rounded-2xl border border-slate-200 hover:border-[#0284C7] p-5 shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] hover:-translate-y-1 transition-all duration-300 space-y-2.5">
                <div className="text-amber-400 text-xs flex gap-1">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                  "Clear guidance, prompt diagnosis, and warm environment. Highly recommended for family health consultations."
                </p>
                <p className="font-bold text-[#0F172A] text-xs pt-1">&mdash; David K.</p>
              </div>
            </div>

            {/* Column 2: Reviews */}
            <div className="space-y-5">
              {/* Review 3 */}
              <div className="bg-white rounded-2xl border border-slate-200 hover:border-[#0284C7] p-5 shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] hover:-translate-y-1 transition-all duration-300 space-y-2.5">
                <div className="text-amber-400 text-xs flex gap-1">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                  "The customized treatment plan helped me recover in record time. Fantastic physician and support team."
                </p>
                <p className="font-bold text-[#0F172A] text-xs pt-1">&mdash; Rachel T.</p>
              </div>

              {/* Review 4 */}
              <div className="bg-white rounded-2xl border border-slate-200 hover:border-[#0284C7] p-5 shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] hover:-translate-y-1 transition-all duration-300 space-y-2.5">
                <div className="text-amber-400 text-xs flex gap-1">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                  "Very patient, answered all questions thoroughly. Modern clinic facilities and quick appointment confirmation."
                </p>
                <p className="font-bold text-[#0F172A] text-xs pt-1">&mdash; Michael B.</p>
              </div>
            </div>

            {/* Column 3: Video / Media Placeholder Column */}
            <div className="space-y-5 flex flex-col justify-between">
              {/* Video Placeholder */}
              <div className="w-full h-36 bg-white border border-slate-200 hover:border-[#0284C7] rounded-2xl flex flex-col items-center justify-center shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] hover:-translate-y-1 cursor-pointer transition-all duration-300 relative overflow-hidden group">
                <div className="w-12 h-10 rounded-xl bg-[#0284C7] flex items-center justify-center text-white text-base shadow-sm group-hover:scale-110 transition">
                  <i className="fa-solid fa-play ml-0.5"></i>
                </div>
                <span className="text-xs text-[#64748B] font-semibold mt-2">Doctor Introduction Video</span>
              </div>

              {/* Image Placeholder */}
              <div className="w-full h-36 bg-white border border-slate-200 hover:border-[#0284C7] rounded-2xl flex flex-col items-center justify-center text-[#1B365D] shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <i className="fa-solid fa-stethoscope text-4xl text-[#0284C7]/70 group-hover:scale-105 transition-transform duration-300"></i>
                <span className="text-xs text-[#64748B] font-semibold mt-2">Clinical Consultation Suite</span>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
