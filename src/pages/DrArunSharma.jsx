import React from 'react';
import { Link } from 'react-router-dom';

export default function DrArunSharma() {
  const testimonials = [
    {
      name: "Rajesh Patel",
      role: "Cardiology Patient",
      rating: 5,
      date: "Recent Consultation",
      text: "Dr. Sharma's thorough cardiac evaluation and clear guidance helped stabilize my blood pressure after months of uncertainty. Truly a compassionate, top-tier medical specialist.",
      verified: true
    },
    {
      name: "Vikram Sengupta",
      role: "Preventive Health Checkup",
      rating: 5,
      date: "Recent Consultation",
      text: "His clinical acumen is outstanding. He patiently reviewed all my reports, explained the ECG and Echo findings in plain language, and tailored a practical recovery regimen.",
      verified: true
    },
    {
      name: "Meera Raman",
      role: "Hypertension & Diabetes Care",
      rating: 5,
      date: "Recent Consultation",
      text: "Extremely reassuring doctor. The treatment plan for my father's diabetes and cardiac wellness worked wonders within weeks. The clinic staff is equally helpful and prompt.",
      verified: true
    }
  ];

  return (
    <div className="w-full flex-grow flex flex-col p-0 m-0">
      {/* DOCTOR PROFILE HERO SECTION (Closer to Navbar with Safe Top Padding) */}
      <section className="w-full bg-gradient-to-br from-[#1B365D] via-[#13294B] to-[#0B1A30] text-white pt-6 sm:pt-8 pb-10 sm:pb-12 px-4 sm:px-8 lg:px-14 2xl:px-20 flex flex-col justify-start border-b border-white/10 relative overflow-hidden">
        <div className="max-w-6xl 2xl:max-w-[100rem] w-full mx-auto space-y-6 sm:space-y-8 2xl:space-y-12 relative z-10">
          
          {/* Section Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight">
              Meet Dr. Arun Sharma
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0284C7] to-[#38BDF8] rounded-full mx-auto"></div>
          </div>

          {/* Doctor Profile Grid */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 2xl:gap-16 items-center">
            
            {/* Doctor Image Card */}
            <div className="md:col-span-5 flex justify-center">
              <div className="w-64 h-72 sm:w-80 sm:h-96 2xl:w-[26rem] 2xl:h-[32rem] rounded-3xl bg-white border border-white/30 flex items-center justify-center text-[#1B365D] shadow-[0_20px_50px_-10px_rgba(2,132,199,0.5)] relative overflow-hidden group">
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
            <div className="md:col-span-7 space-y-4 sm:space-y-5 text-white">
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-widest block">Chief Cardiologist &amp; Physician</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-tight">
                  Dr. Arun Sharma
                </h2>
                <p className="text-[#38BDF8] font-semibold text-base sm:text-lg">MBBS, MD (Medicine), DM (Cardiology), FACC</p>
                <p className="text-slate-200 font-medium text-sm sm:text-base">Specialist in Preventive Cardiology, Hypertension &amp; Internal Medicine</p>
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

              <div className="flex flex-wrap items-center gap-4 pt-2 sm:pt-3">
                <Link to="/booking" className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold px-7 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 transform text-sm flex items-center gap-2 border border-transparent hover:border-slate-300">
                  <i className="fa-solid fa-calendar-check"></i> Book Consultation
                </Link>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold px-7 py-3 rounded-lg inline-flex items-center gap-2 text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 transform border border-transparent hover:border-slate-300">
                  <i className="fa-brands fa-whatsapp text-lg"></i> WhatsApp Direct
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: PATIENT TESTIMONIALS */}
      <section className="w-full bg-[#F8FAFC] py-12 sm:py-16 2xl:py-24 px-4 sm:px-8 lg:px-14 2xl:px-20 border-b border-slate-200">
        <div className="max-w-6xl 2xl:max-w-[100rem] mx-auto space-y-8 2xl:space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-widest block">Patient Feedback</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F172A] tracking-tight">
              Patient Testimonials for Dr. Arun Sharma
            </h2>
            <div className="w-14 h-1 bg-gradient-to-r from-[#0284C7] to-[#1B365D] rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 hover:border-[#0284C7] shadow-[0_10px_30px_-5px_rgba(2,132,199,0.2)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.35)] hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400 gap-1 text-sm">
                      {[...Array(t.rating)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                      <i className="fa-solid fa-circle-check text-emerald-500"></i> Verified
                    </span>
                  </div>

                  <p className="text-[#334155] text-xs sm:text-sm leading-relaxed italic font-sans">
                    "{t.text}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1B365D] text-white font-serif font-bold flex items-center justify-center text-sm shadow-xs">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#0F172A] leading-snug">{t.name}</h4>
                    <p className="text-[11px] text-[#0284C7] font-semibold">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick CTA to book */}
          <div className="text-center pt-4">
            <Link 
              to="/booking" 
              className="inline-flex items-center gap-2 bg-[#1B365D] hover:bg-[#13294B] text-white font-serif font-bold px-7 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 transform text-xs sm:text-sm border border-transparent hover:border-slate-300"
            >
              <i className="fa-solid fa-calendar-check"></i>
              <span>Book Appointment with Dr. Arun Sharma</span>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
