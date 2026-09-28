import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DoctorTestimonials from '../components/DoctorTestimonials';

import patientKavita from '../Images/testimonials/patient_kavita.webp';
import patientDeepak from '../Images/testimonials/patient_deepak.webp';
import patientPriya from '../Images/testimonials/patient_priya.webp';
import patientAmitav from '../Images/testimonials/patient_amitav.webp';
import patientSuresh from '../Images/testimonials/patient_suresh.webp';
import patientNeha from '../Images/testimonials/patient_neha.webp';

export default function MeetDoctor() {
  const testimonials = [
    {
      name: "Kavita Nair",
      role: "Obstetric Care Patient",
      rating: 5,
      date: "Recent Consultation",
      text: "Dr. Parul Gupta provided exceptional care and warmth during my pregnancy. Truly professional, thorough, and deeply empathetic gold medalist doctor from KGMU.",
      verified: true,
      image: patientKavita
    },
    {
      name: "Deepak Singhania",
      role: "Diabetology Patient",
      rating: 5,
      date: "Recent Consultation",
      text: "Dr. Sanjay Gupta's clear guidance and prompt diagnosis brought my diabetes under perfect control. Highly recommended for family health consultations in Lucknow.",
      verified: true,
      image: patientDeepak
    },
    {
      name: "Priya Venkatesh",
      role: "Maternal Health Patient",
      rating: 5,
      date: "Recent Consultation",
      text: "The customized maternity plan and high-precision ultrasound imaging helped us immensely. Fantastic doctors and exceptionally supportive clinical team.",
      verified: true,
      image: patientPriya
    },
    {
      name: "Amitav Banerjee",
      role: "Internal Medicine Patient",
      rating: 5,
      date: "Recent Consultation",
      text: "Very patient, answered all questions thoroughly. Modern clinic facilities, direct digital prescription, and seamless follow-up care since 1992.",
      verified: true,
      image: patientAmitav
    },
    {
      name: "Neha Agarwal",
      role: "Gynaecology Checkup",
      rating: 5,
      date: "Recent Consultation",
      text: "The diagnostic precision and compassionate approach at R. K. Medical Centre are exceptional. Truly one of the finest clinics in Indira Nagar Lucknow.",
      verified: true,
      image: patientNeha
    },
    {
      name: "Suresh Kulkarni",
      role: "Metabolic Care Patient",
      rating: 5,
      date: "Recent Consultation",
      text: "Top-tier bedside manner and comprehensive medical insights from KGMU alumni. You immediately feel confident that you are in the safest hands possible.",
      verified: true,
      image: patientSuresh
    }
  ];

  return (
    <div className="w-full flex-grow flex flex-col p-0 m-0">
      {/* DOCTORS OVERVIEW HERO SECTION */}
      <section className="w-full bg-gradient-to-br from-[#1B365D] via-[#13294B] to-[#0B1A30] text-white py-12 sm:py-16 px-4 sm:px-8 lg:px-14 2xl:px-20 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-6xl 2xl:max-w-[100rem] w-full mx-auto space-y-10 relative z-10">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center space-y-2.5"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight">
              Meet Our Specialist Doctors
            </h1>
            <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto">
              Distinguished medical specialists from King George's Medical University (KGMU) Lucknow, serving patients with compassion and clinical excellence since 1992.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0284C7] to-[#38BDF8] rounded-full mx-auto"></div>
          </motion.div>

          {/* 2 Doctor Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            
            {/* Doctor 1: Dr. Parul Gupta */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 sm:p-7 flex flex-col justify-between space-y-5 hover:border-[#38BDF8] transition-all shadow-xl group"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-[#13294B] border-2 border-[#38BDF8] shrink-0 shadow-md">
                    <img 
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80" 
                      alt="Dr. Parul Gupta" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider block">Obstetrician &amp; Gynaecologist</span>
                    <h2 className="text-2xl font-serif font-bold text-white">Dr. Parul Gupta</h2>
                    <span className="inline-block bg-amber-400/20 text-amber-300 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-amber-400/40 mt-1">
                      <i className="fa-solid fa-award mr-1"></i> Gold Medalist (KGMU Lucknow)
                    </span>
                  </div>
                </div>

                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                  Specialist in maternal care, high-risk pregnancy management, pelvic health, and 3D/4D ultrasound diagnostics.
                </p>

                <div className="space-y-1.5 text-xs text-slate-300 pt-1 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-clock text-[#38BDF8]"></i>
                    <span>Everyday: 10:00 AM – 1:00 PM &amp; 6:00 PM – 8:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-indian-rupee-sign text-[#38BDF8]"></i>
                    <span>Consultation Fee: ₹800</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link to="/dr-parul-gupta" className="flex-1 bg-white/15 hover:bg-white/25 text-white text-center font-serif font-bold py-2.5 px-4 rounded-xl border border-white/20 transition text-xs sm:text-sm">
                  View Profile
                </Link>
                <a href="https://wa.me/919838655095" target="_blank" rel="noopener noreferrer" className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-2.5 px-4 rounded-xl inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm transition">
                  <i className="fa-brands fa-whatsapp text-base"></i> WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Doctor 2: Dr. Sanjay Gupta */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 sm:p-7 flex flex-col justify-between space-y-5 hover:border-[#38BDF8] transition-all shadow-xl group"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-[#13294B] border-2 border-[#38BDF8] shrink-0 shadow-md">
                    <img 
                      src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80" 
                      alt="Dr. Sanjay Gupta" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider block">Physician &amp; Diabetologist</span>
                    <h2 className="text-2xl font-serif font-bold text-white">Dr. Sanjay Gupta</h2>
                    <span className="inline-block bg-sky-400/20 text-sky-300 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-sky-400/40 mt-1">
                      <i className="fa-solid fa-graduation-cap mr-1"></i> MBBS, DGO (KGMU Lucknow)
                    </span>
                  </div>
                </div>

                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                  Specialist in diabetes mellitus control, hypertension, metabolic therapies, and comprehensive adult internal medicine.
                </p>

                <div className="space-y-1.5 text-xs text-slate-300 pt-1 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-clock text-[#38BDF8]"></i>
                    <span>Everyday: 10:00 AM – 1:00 PM &amp; 6:00 PM – 8:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-indian-rupee-sign text-[#38BDF8]"></i>
                    <span>Consultation Fee: ₹800</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link to="/dr-sanjay-gupta" className="flex-1 bg-white/15 hover:bg-white/25 text-white text-center font-serif font-bold py-2.5 px-4 rounded-xl border border-white/20 transition text-xs sm:text-sm">
                  View Profile
                </Link>
                <a href="https://wa.me/919415049410" target="_blank" rel="noopener noreferrer" className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-2.5 px-4 rounded-xl inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm transition">
                  <i className="fa-brands fa-whatsapp text-base"></i> WhatsApp
                </a>
              </div>
            </motion.div>

          </div>

          <div className="text-center pt-2">
            <Link to="/booking" className="inline-flex items-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition border border-transparent hover:border-slate-300">
              <i className="fa-solid fa-calendar-check"></i>
              <span>Book an Appointment Online (₹800 Fee)</span>
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 2: PATIENT TESTIMONIALS */}
      <DoctorTestimonials
        doctorName="R. K. Medical Centre"
        title="Patient Feedback for R. K. Medical Centre"
        subtitle="Patient Feedback & Clinical Insights"
        bookingUrl="/booking"
        testimonials={testimonials}
      />
    </div>
  );
}
