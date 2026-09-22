import React from 'react';
import { Link } from 'react-router-dom';

export default function DrPriyaNair() {
  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "Mother of 2-Year-Old",
      rating: 5,
      date: "Recent Consultation",
      text: "Dr. Priya Nair has been our pediatrician since our baby was born. Her gentle touch, prompt advice, and patience with first-time parents are invaluable.",
      verified: true
    },
    {
      name: "Pooja Iyer",
      role: "Parent & Gynaecology Patient",
      rating: 5,
      date: "Recent Consultation",
      text: "Dr. Nair diagnosed our daughter's persistent seasonal allergy accurately when other clinics failed. Her prenatal and vaccination schedule guidance is seamless and compassionate.",
      verified: true
    },
    {
      name: "Rohan Deshmukh",
      role: "Father of 6-Year-Old",
      rating: 5,
      date: "Recent Consultation",
      text: "Very compassionate and attentive doctor. Children actually feel comfortable in her clinic without fear. Highly recommend Dr. Priya Nair for pediatric and family care!",
      verified: true
    }
  ];

  return (
    <div className="w-full flex-grow flex flex-col p-0 m-0">
      {/* DOCTOR PROFILE HERO SECTION (Closer to Navbar with Safe Top Padding) */}
      <section className="w-full bg-gradient-to-br from-[#1B365D] via-[#13294B] to-[#0B1A30] text-white pt-6 sm:pt-8 pb-10 sm:pb-12 doctor-profile-hero-2k px-4 sm:px-8 lg:px-14 2xl:px-20 flex flex-col justify-center border-b border-white/10 relative overflow-hidden">
        <div className="max-w-6xl 2xl:max-w-[100rem] w-full mx-auto space-y-6 sm:space-y-8 2xl:space-y-2.5 relative z-10">
          
          {/* Section Header */}
          <div className="text-center space-y-2 2xl:space-y-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-3xl font-serif font-extrabold text-white tracking-tight">
              Meet Dr. Priya Nair
            </h1>
            <div className="w-14 h-1 bg-gradient-to-r from-[#0284C7] to-[#38BDF8] rounded-full mx-auto"></div>
          </div>

          {/* Doctor Profile Grid */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 2xl:gap-8 items-center">
            
            {/* Doctor Image Card */}
            <div className="md:col-span-5 flex justify-center">
              <div className="w-64 h-72 sm:w-80 sm:h-96 2xl:w-[17rem] 2xl:h-[19rem] rounded-3xl bg-white border border-white/30 flex items-center justify-center text-[#1B365D] shadow-[0_20px_50px_-10px_rgba(2,132,199,0.5)] relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80" 
                  alt="Dr. Priya Nair" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute bottom-2.5 bg-[#1B365D]/90 backdrop-blur-md text-white px-3.5 py-1 rounded-full text-xs font-semibold shadow-md border border-white/20">
                  <i className="fa-solid fa-certificate text-[#38BDF8] mr-1.5"></i> Senior Consultant
                </div>
              </div>
            </div>

            {/* Doctor Bio & Actions */}
            <div className="md:col-span-7 2xl:pl-8 space-y-4 sm:space-y-5 2xl:space-y-2 text-white">
              <div className="space-y-1 2xl:space-y-0.5">
                <span className="text-xs 2xl:text-[11px] font-bold text-[#38BDF8] uppercase tracking-widest block">Senior Pediatrician &amp; Family Health Consultant</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-3xl font-serif font-extrabold text-white leading-tight">
                  Dr. Priya Nair
                </h2>
                <p className="text-[#38BDF8] font-semibold text-base sm:text-lg 2xl:text-sm">MBBS, MD (Pediatrics), DNB, FIAP</p>
                <p className="text-slate-200 font-medium text-sm sm:text-base 2xl:text-xs">Specialist in Child Growth, Immunization &amp; Preventive Family Wellness</p>
              </div>

              <p className="text-slate-200 text-sm sm:text-base 2xl:text-xs leading-relaxed 2xl:max-w-[48ch]">
                Dr. Priya Nair brings over 14 years of dedicated clinical practice in pediatric care, child development milestones, adolescent healthcare, and holistic maternal guidance, known for her empathetic approach with young patients and families.
              </p>
              
              <div className="flex flex-wrap gap-2 pt-0.5">
                <span className="bg-white/10 backdrop-blur-md text-[#38BDF8] font-semibold px-3 py-0.5 rounded-full text-xs border border-white/20">
                  <i className="fa-solid fa-user-graduate mr-1.5"></i> CMC Vellore Alumna
                </span>
                <span className="bg-white/10 backdrop-blur-md text-[#38BDF8] font-semibold px-3 py-0.5 rounded-full text-xs border border-white/20">
                  <i className="fa-solid fa-award mr-1.5"></i> 14+ Years Exp
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 font-semibold px-3 py-0.5 rounded-full text-xs border border-emerald-400/30 inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Available Today
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1.5">
                <Link to="/booking" className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold px-6 py-2.5 2xl:py-2 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 transform text-sm 2xl:text-xs flex items-center gap-2 border border-transparent hover:border-slate-300">
                  <i className="fa-solid fa-calendar-check"></i> Book Consultation
                </Link>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold px-6 py-2.5 2xl:py-2 rounded-lg inline-flex items-center gap-2 text-sm 2xl:text-xs shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 transform border border-transparent hover:border-slate-300">
                  <i className="fa-brands fa-whatsapp text-base"></i> WhatsApp Direct
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: PATIENT TESTIMONIALS */}
      <section className="w-full bg-[#F8FAFC] py-12 sm:py-16 doctor-testimonials-2k px-4 sm:px-8 lg:px-14 2xl:px-20 border-b border-slate-200 flex flex-col justify-center overflow-hidden">
        <div className="max-w-6xl 2xl:max-w-[100rem] w-full mx-auto space-y-6 sm:space-y-8 2xl:space-y-2.5">
          
          <div className="text-center space-y-1.5 2xl:space-y-0.5">
            <span className="text-xs 2xl:text-[11px] font-bold text-[#0284C7] uppercase tracking-widest block">Patient Feedback</span>
            <h2 className="text-3xl sm:text-4xl 2xl:text-2xl font-serif font-bold text-[#0F172A] tracking-tight">
              Patient Testimonials for Dr. Priya Nair
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#0284C7] to-[#1B365D] rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 2xl:gap-5 items-stretch">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 hover:border-[#0284C7] shadow-[0_8px_25px_-5px_rgba(2,132,199,0.18)] hover:shadow-[0_16px_35px_-5px_rgba(2,132,199,0.28)] hover:-translate-y-1 transition-all duration-300 p-6 2xl:p-3.5 flex flex-col justify-between group 2xl:min-h-[9.5rem]"
              >
                <div className="space-y-2.5 2xl:space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400 gap-1 text-xs">
                      {[...Array(t.rating)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                      <i className="fa-solid fa-circle-check text-emerald-500"></i> Verified
                    </span>
                  </div>

                  <p className="text-[#334155] text-xs leading-relaxed italic font-sans 2xl:line-clamp-3">
                    "{t.text}"
                  </p>
                </div>

                <div className="pt-3 2xl:pt-2 mt-3 2xl:mt-1.5 border-t border-slate-100 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#1B365D] text-white font-serif font-bold flex items-center justify-center text-xs shadow-xs shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-serif font-bold text-xs text-[#0F172A] leading-snug truncate">{t.name}</h4>
                    <p className="text-[10px] text-[#0284C7] font-semibold truncate">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick CTA to book */}
          <div className="text-center pt-1.5 2xl:pt-1">
            <Link 
              to="/booking" 
              className="inline-flex items-center gap-2 bg-[#1B365D] hover:bg-[#13294B] text-white font-serif font-bold px-6 py-2.5 2xl:py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 transform text-xs border border-transparent hover:border-slate-300"
            >
              <i className="fa-solid fa-calendar-check"></i>
              <span>Book Appointment with Dr. Priya Nair</span>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
