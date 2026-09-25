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
      role: "Preventive Cardiology Patient",
      rating: 5,
      date: "Recent Consultation",
      text: "The clinical team provided exceptional care and attention during my cardiology check-up. Truly professional, thorough, and deeply empathetic.",
      verified: true,
      image: patientKavita
    },
    {
      name: "Deepak Singhania",
      role: "Internal Medicine Patient",
      rating: 5,
      date: "Recent Consultation",
      text: "Clear guidance, prompt diagnosis, and warm environment. Highly recommended for family health consultations and preventive heart wellness.",
      verified: true,
      image: patientDeepak
    },
    {
      name: "Priya Venkatesh",
      role: "Cardiac Rehabilitation",
      rating: 5,
      date: "Recent Consultation",
      text: "The customized treatment plan helped me recover in record time. Fantastic physician and an exceptionally supportive clinical team.",
      verified: true,
      image: patientPriya
    },
    {
      name: "Amitav Banerjee",
      role: "Hypertension Management",
      rating: 5,
      date: "Recent Consultation",
      text: "Very patient, answered all questions thoroughly. Modern clinic facilities, direct digital prescription, and seamless follow-up care.",
      verified: true,
      image: patientAmitav
    },
    {
      name: "Neha Agarwal",
      role: "Comprehensive Health Check",
      rating: 5,
      date: "Recent Consultation",
      text: "The holistic diagnostic approach identified the root cause of my fatigue quickly. Truly one of the finest clinics I have consulted.",
      verified: true,
      image: patientNeha
    },
    {
      name: "Suresh Kulkarni",
      role: "Executive Health Checkup",
      rating: 5,
      date: "Recent Consultation",
      text: "Top-tier bedside manner and comprehensive medical insights. You immediately feel confident that you are in the safest hands possible.",
      verified: true,
      image: patientSuresh
    }
  ];

  return (
    <div className="w-full flex-grow flex flex-col p-0 m-0">
      {/* DOCTOR PROFILE HERO SECTION */}
      <section className="w-full min-h-[calc(100vh-73px)] 2xl:min-h-0 doctor-profile-hero-2k bg-gradient-to-br from-[#1B365D] via-[#13294B] to-[#0B1A30] text-white py-12 sm:py-16 2xl:py-2 px-4 sm:px-8 lg:px-14 2xl:px-16 flex flex-col justify-center border-b border-white/10 relative overflow-hidden">
        <div className="max-w-6xl 2xl:max-w-[100rem] w-full mx-auto space-y-10 2xl:space-y-2 relative z-10">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center space-y-2.5 2xl:space-y-1"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-3xl 3xl:text-4xl font-serif font-extrabold text-white tracking-tight">
              Meet Our Chief Medical Doctor
            </h1>
            <div className="w-14 2xl:w-12 h-1 2xl:h-0.5 bg-gradient-to-r from-[#0284C7] to-[#38BDF8] rounded-full mx-auto"></div>
          </motion.div>

          {/* Doctor Profile Grid - Symmetric around central vertical axis with generous spacing on laptop+ */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-32 xl:gap-40 2xl:gap-52 3xl:gap-60 items-center justify-center max-w-5xl lg:max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[105rem] mx-auto">
            
            {/* Doctor Avatar Placeholder Box (Aligned to center axis from left) */}
            <motion.div 
              initial={{ opacity: 0, x: -60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center md:justify-end items-center w-full lg:pr-6 xl:pr-10 2xl:pr-14 3xl:pr-16"
            >
              <div className="w-60 h-68 sm:w-72 sm:h-80 2xl:w-[16.5rem] 2xl:h-[19rem] 3xl:w-[19rem] 3xl:h-[22rem] rounded-3xl bg-white border border-white/30 flex items-center justify-center text-[#1B365D] shadow-[0_20px_50px_-10px_rgba(2,132,199,0.5)] relative overflow-hidden group">
                <i className="fa-solid fa-user-doctor text-8xl sm:text-9xl 2xl:text-7xl text-[#0284C7]/80 group-hover:scale-105 transition-transform duration-300"></i>
                <div className="absolute bottom-2.5 bg-[#1B365D] text-white px-3.5 py-1 rounded-full text-xs 2xl:text-xs 3xl:text-sm font-semibold shadow-md border border-white/20">
                  <i className="fa-solid fa-certificate text-[#38BDF8] mr-1"></i> Verified Doctor
                </div>
              </div>
            </motion.div>

            {/* Doctor Bio & Actions (Aligned to center axis from right) */}
            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-center items-start space-y-4 2xl:space-y-2 text-white w-full md:pl-2 lg:pl-8 xl:pl-12 2xl:pl-16 3xl:pl-20"
            >
              <div className="space-y-1 2xl:space-y-0.5">
                <span className="text-xs 2xl:text-xs 3xl:text-sm font-bold text-[#38BDF8] uppercase tracking-widest block">Senior Consultant</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-3xl 3xl:text-4xl font-serif font-extrabold text-white leading-tight">
                  Dr. Alexander Smith, MD
                </h2>
                <p className="text-[#38BDF8] font-semibold text-base sm:text-lg 2xl:text-sm 3xl:text-base">MBBS, MD, FACC (Board Certified)</p>
                <p className="text-slate-200 font-medium text-sm sm:text-base 2xl:text-xs 3xl:text-sm">Specialist in Preventive Cardiology &amp; Internal Medicine</p>
              </div>

              <p className="text-slate-200 text-sm sm:text-base 2xl:text-xs 3xl:text-sm leading-relaxed 2xl:max-w-xl 2xl:line-clamp-3">
                Over 15 years of clinical practice managing chronic conditions, therapeutic cardiovascular rehabilitation, and holistic patient wellness. Dr. Smith is dedicated to evidence-based healthcare.
              </p>
              
              <div className="pt-0.5">
                <span className="bg-white/10 backdrop-blur-md text-[#38BDF8] font-semibold px-3 2xl:px-2.5 py-0.5 rounded-full text-xs 2xl:text-xs 3xl:text-sm inline-flex items-center gap-2 border border-white/20 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Available Today for Consultation
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 2xl:gap-2.5 pt-1 2xl:pt-0.5">
                <Link to="/booking" className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold px-6 py-2.5 2xl:py-2 2xl:px-5 rounded-xl shadow-lg hover:shadow-xl transition text-sm 2xl:text-xs 3xl:text-sm border border-transparent hover:border-slate-300">
                  <i className="fa-solid fa-calendar-check mr-2"></i> Book Appointment
                </Link>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold px-6 py-2.5 2xl:py-2 2xl:px-5 rounded-lg inline-flex items-center gap-2 text-sm 2xl:text-xs 3xl:text-sm shadow-lg hover:shadow-xl transition">
                  <i className="fa-brands fa-whatsapp text-base 2xl:text-sm"></i> Chat on WhatsApp
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* SECTION 2: PATIENT TESTIMONIALS */}
      <DoctorTestimonials
        doctorName="Dr. Alexander Smith"
        title="Patient Feedback for Dr. Alexander Smith"
        subtitle="Patient Feedback & Clinical Insights"
        bookingUrl="/booking"
        testimonials={testimonials}
      />
    </div>
  );
}
