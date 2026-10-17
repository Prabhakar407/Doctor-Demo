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
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 2xl:gap-12 max-w-5xl 2xl:max-w-6xl mx-auto">
            
            {/* Doctor 1: Dr. Parul Gupta */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 sm:p-7 2xl:p-8 flex flex-col justify-between space-y-5 hover:border-[#38BDF8] transition-all shadow-xl group"
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
                  <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-serif font-bold text-white truncate">Dr. Parul Gupta</h2>
                    <span className="doctor-info-text text-[#38BDF8] font-semibold block leading-tight mt-1">
                      Obstetrics, Gynaecology, Maternal Care &amp; 3D/4D Ultrasound
                    </span>
                  </div>
                </div>

                <p className="doctor-info-text text-slate-200 leading-relaxed">
                  Dr. Parul Gupta is a distinguished Obstetrician and Gynaecologist, recognized as a Gold Medalist from King George's Medical University (KGMU), Lucknow. Practicing since 1992 at R. K. Medical Centre, she provides comprehensive maternal healthcare, prenatal &amp; postnatal management, and high-precision ultrasound diagnostics.
                </p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                  <span className="doctor-badge-text bg-white/10 backdrop-blur-md text-[#38BDF8] font-medium px-3 py-1 rounded-full border border-white/20 inline-flex items-center gap-1.5 text-xs sm:text-sm">
                    <i className="fa-solid fa-graduation-cap"></i> KGMU Gold Medalist
                  </span>
                  <span className="doctor-badge-text bg-white/10 backdrop-blur-md text-[#38BDF8] font-medium px-3 py-1 rounded-full border border-white/20 inline-flex items-center gap-1.5 text-xs sm:text-sm">
                    <i className="fa-solid fa-clock"></i> 10 AM–1 PM &amp; 6 PM–8 PM Everyday
                  </span>
                  <span className="doctor-badge-text bg-emerald-500/20 text-emerald-300 font-medium px-3 py-1 rounded-full border border-emerald-400/30 inline-flex items-center gap-1.5 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Consultation Fee: ₹800
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link to="/dr-parul-gupta" className="group flex-1 bg-white/15 hover:bg-white/25 text-white text-center font-serif font-bold py-2.5 px-4 rounded-xl border border-white/20 transition text-xs sm:text-sm inline-flex items-center justify-center gap-1.5">
                  <span>View Profile</span>
                  <i className="fa-solid fa-arrow-right text-xs inline-block -rotate-45 group-hover:rotate-0 transition-transform duration-300 ease-out"></i>
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
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 sm:p-7 2xl:p-8 flex flex-col justify-between space-y-5 hover:border-[#38BDF8] transition-all shadow-xl group"
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
                  <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-serif font-bold text-white truncate">Dr. Sanjay Gupta</h2>
                    <span className="doctor-info-text text-[#38BDF8] font-semibold block leading-tight mt-1">
                      Specialist in Internal Medicine, Diabetology &amp; Chronic Illness Management
                    </span>
                  </div>
                </div>

                <p className="doctor-info-text text-slate-200 leading-relaxed">
                  Dr. Sanjay Gupta is a seasoned Physician and Diabetologist with over 30+ years of distinguished practice since the founding of R. K. Medical Centre in 1992. Educated at KGMU Lucknow, he specializes in diabetes mellitus, hypertension, metabolic care, and comprehensive adult internal medicine.
                </p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                  <span className="doctor-badge-text bg-white/10 backdrop-blur-md text-[#38BDF8] font-medium px-3 py-1 rounded-full border border-white/20 inline-flex items-center gap-1.5 text-xs sm:text-sm">
                    <i className="fa-solid fa-graduation-cap"></i> KGMU Alumnus
                  </span>
                  <span className="doctor-badge-text bg-white/10 backdrop-blur-md text-[#38BDF8] font-medium px-3 py-1 rounded-full border border-white/20 inline-flex items-center gap-1.5 text-xs sm:text-sm">
                    <i className="fa-solid fa-clock"></i> 10 AM–1 PM &amp; 6 PM–8 PM Everyday
                  </span>
                  <span className="doctor-badge-text bg-emerald-500/20 text-emerald-300 font-medium px-3 py-1 rounded-full border border-emerald-400/30 inline-flex items-center gap-1.5 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Consultation Fee: ₹800
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link to="/dr-sanjay-gupta" className="group flex-1 bg-white/15 hover:bg-white/25 text-white text-center font-serif font-bold py-2.5 px-4 rounded-xl border border-white/20 transition text-xs sm:text-sm inline-flex items-center justify-center gap-1.5">
                  <span>View Profile</span>
                  <i className="fa-solid fa-arrow-right text-xs inline-block -rotate-45 group-hover:rotate-0 transition-transform duration-300 ease-out"></i>
                </Link>
                <a href="https://wa.me/919415049410" target="_blank" rel="noopener noreferrer" className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-2.5 px-4 rounded-xl inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm transition">
                  <i className="fa-brands fa-whatsapp text-base"></i> WhatsApp
                </a>
              </div>
            </motion.div>

          </div>

          <div className="text-center pt-2">
            <Link to="/booking" className="group inline-flex items-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border border-transparent hover:border-slate-300">
              <span>Book an Appointment Online (₹800 Fee)</span>
              <i className="fa-solid fa-arrow-right text-xs inline-block -rotate-45 group-hover:rotate-0 transition-transform duration-300 ease-out"></i>
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
