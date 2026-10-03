import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DoctorTestimonials from '../components/DoctorTestimonials';

import patientAnanya from '../Images/testimonials/patient_ananya.webp';
import patientPooja from '../Images/testimonials/patient_pooja.webp';
import patientRohan from '../Images/testimonials/patient_rohan.webp';
import patientSneha from '../Images/testimonials/patient_sneha.webp';
import patientManoj from '../Images/testimonials/patient_manoj.webp';
import patientDivya from '../Images/testimonials/patient_divya.webp';

export default function DrParulGupta() {
  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "Maternal Care Patient",
      rating: 5,
      date: "Recent Consultation",
      text: "Dr. Parul Gupta has been our gynaecologist throughout our pregnancy journey. Her gentle guidance, KGMU gold medalist expertise, and calming reassurance made all the difference.",
      verified: true,
      image: patientAnanya
    },
    {
      name: "Pooja Iyer",
      role: "Obstetrics & Prenatal Patient",
      rating: 5,
      date: "Recent Consultation",
      text: "Dr. Parul Gupta diagnosed my high-risk pregnancy complications early and guided me safely through each trimester. Her clinical acumen and empathetic approach are truly unmatched.",
      verified: true,
      image: patientPooja
    },
    {
      name: "Rohan Kapoor",
      role: "Family Health & Maternity Care",
      rating: 5,
      date: "Recent Consultation",
      text: "Extremely compassionate and experienced doctor. The ultrasound and fetal monitoring sessions were explained with complete clarity. Highly recommended in Lucknow!",
      verified: true,
      image: patientRohan
    },
    {
      name: "Sneha Kulkarni",
      role: "Women's Health & PCOS Care",
      rating: 5,
      date: "Recent Consultation",
      text: "As a patient dealing with PCOS, Dr. Parul provided a clear, actionable medical plan and holistic lifestyle guidance that resolved my issues within months.",
      verified: true,
      image: patientSneha
    },
    {
      name: "Manoj Nambiar",
      role: "Maternal Wellness Consultation",
      rating: 5,
      date: "Recent Consultation",
      text: "A veteran doctor with remarkable diagnostic depth. She listens patiently to every concern and provides prompt, evidence-based care.",
      verified: true,
      image: patientManoj
    },
    {
      name: "Divya Menon",
      role: "Preventive Gynaecology Patient",
      rating: 5,
      date: "Recent Consultation",
      text: "Friendly, dignified, and exceptionally knowledgeable. Dr. Parul Gupta is one of Lucknow's finest gynaecologists and obstetricians.",
      verified: true,
      image: patientDivya
    }
  ];

  return (
    <div className="w-full flex-grow flex flex-col p-0 m-0">
      {/* DOCTOR PROFILE HERO SECTION */}
      <section className="w-full bg-gradient-to-br from-[#1B365D] via-[#13294B] to-[#0B1A30] text-white pt-6 sm:pt-8 pb-8 sm:pb-10 lg:py-5 xl:py-6 doctor-profile-hero-2k doctor-profile-hero-laptop px-4 sm:px-8 lg:px-12 xl:px-14 2xl:px-20 flex flex-col justify-center border-b border-white/10 relative overflow-hidden">
        <div className="max-w-5xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-[100rem] w-full mx-auto space-y-4 sm:space-y-6 lg:space-y-3 xl:space-y-3.5 2xl:space-y-2.5 relative z-10">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center space-y-1.5 lg:space-y-1 lg:-translate-y-2 xl:-translate-y-3 2xl:translate-y-0"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-serif font-extrabold text-white tracking-tight">
              Meet Dr. Parul Gupta
            </h1>
            <div className="w-12 sm:w-14 h-1 2xl:h-0.5 bg-gradient-to-r from-[#0284C7] to-[#38BDF8] rounded-full mx-auto"></div>
          </motion.div>

          {/* Doctor Profile Grid */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-32 xl:gap-40 2xl:gap-52 3xl:gap-60 items-center justify-center max-w-5xl lg:max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[105rem] mx-auto">
            
            {/* Doctor Image Card */}
            <motion.div 
              initial={{ opacity: 0, x: -60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center md:justify-end items-center w-full lg:pr-6 xl:pr-10 2xl:pr-14 3xl:pr-16"
            >
              <div className="w-56 h-64 sm:w-68 sm:h-76 md:w-72 md:h-80 lg:w-60 lg:h-68 xl:w-72 xl:h-80 2xl:w-[16.5rem] 2xl:h-[19rem] 3xl:w-[19rem] 3xl:h-[22rem] rounded-2xl bg-white border border-white/30 flex items-center justify-center text-[#1B365D] shadow-[0_20px_50px_-10px_rgba(2,132,199,0.5)] relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80" 
                  alt="Dr. Parul Gupta" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute bottom-2.5 bg-[#1B365D]/90 backdrop-blur-md text-white px-3.5 py-1 rounded-full text-xs 2xl:text-xs 3xl:text-sm font-semibold shadow-md border border-white/20">
                  <i className="fa-solid fa-award text-amber-400 mr-1.5"></i> Gold Medalist
                </div>
              </div>
            </motion.div>

            {/* Doctor Bio & Actions */}
            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-center items-start space-y-3 sm:space-y-3.5 lg:space-y-2 xl:space-y-2.5 2xl:space-y-2 text-white w-full md:pl-2 lg:pl-8 xl:pl-12 2xl:pl-16 3xl:pl-20"
            >
              <div className="space-y-1 lg:space-y-0.5">
                <span className="text-[11px] sm:text-xs font-bold text-[#38BDF8] uppercase tracking-widest block">Senior Obstetrician &amp; Gynaecologist</span>
                <h2 className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-serif font-extrabold text-white leading-tight">
                  Dr. Parul Gupta
                </h2>
                <p className="text-[#38BDF8] font-semibold text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-sm">Gold Medalist — KGMU Lucknow</p>
                <p className="text-slate-200 font-medium text-xs sm:text-sm lg:text-[11px] xl:text-xs 2xl:text-xs">Obstetrics, Gynaecology, Maternal Care &amp; 3D/4D Ultrasound</p>
              </div>

              <p className="text-slate-200 text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-xs leading-relaxed max-w-xl">
                Dr. Parul Gupta is a distinguished Obstetrician and Gynaecologist, recognized as a Gold Medalist from King George's Medical University (KGMU), Lucknow. Practicing since 1992 at R. K. Medical Centre, she provides comprehensive maternal healthcare, prenatal &amp; postnatal management, and high-precision ultrasound diagnostics.
              </p>
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2 2xl:gap-1.5 pt-0.5">
                <span className="bg-white/10 backdrop-blur-md text-[#38BDF8] font-semibold px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs lg:text-[11px] xl:text-xs 2xl:text-xs border border-white/20">
                  <i className="fa-solid fa-graduation-cap mr-1.5"></i> KGMU Gold Medalist
                </span>
                <span className="bg-white/10 backdrop-blur-md text-[#38BDF8] font-semibold px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs lg:text-[11px] xl:text-xs 2xl:text-xs border border-white/20">
                  <i className="fa-solid fa-clock mr-1.5"></i> 10 AM–1 PM &amp; 6 PM–8 PM Everyday
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 font-semibold px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs lg:text-[11px] xl:text-xs 2xl:text-xs border border-emerald-400/30 inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Consultation Fee: ₹800
                </span>
              </div>

              {/* Action Buttons: on laptop screen in same line, no mobile number in WhatsApp button */}
              <div className="flex flex-wrap sm:flex-nowrap lg:flex-nowrap items-center gap-2.5 sm:gap-3 lg:gap-3 2xl:gap-2.5 pt-1 lg:pt-1.5 w-full">
                <Link 
                  to="/booking" 
                  className="group bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold px-4 py-2 sm:px-5 sm:py-2.5 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5 2xl:py-2 2xl:px-5 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 transform text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-xs 3xl:text-sm flex items-center justify-center gap-2 border border-transparent hover:border-slate-300 whitespace-nowrap shrink-0"
                >
                  <span>Book Consultation</span>
                  <i className="fa-solid fa-arrow-right text-xs inline-block -rotate-45 group-hover:rotate-0 transition-transform duration-300 ease-out"></i>
                </Link>
                <a 
                  href="https://wa.me/919838655095" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold px-4 py-2 sm:px-5 sm:py-2.5 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5 2xl:py-2 2xl:px-5 rounded-lg inline-flex items-center justify-center gap-2 text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-xs 3xl:text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 transform border border-transparent hover:border-slate-300 whitespace-nowrap shrink-0"
                >
                  <i className="fa-brands fa-whatsapp text-sm sm:text-base"></i>
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* SECTION 2: PATIENT TESTIMONIALS */}
      <DoctorTestimonials
        doctorName="Dr. Parul Gupta"
        title="Patient Testimonials for Dr. Parul Gupta"
        subtitle="Patient Feedback & Clinical Experiences"
        bookingUrl="/booking"
        testimonials={testimonials}
      />
    </div>
  );
}
