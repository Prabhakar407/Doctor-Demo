import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DoctorTestimonials from '../components/DoctorTestimonials';

export default function DrPriyaNair() {
  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "Mother of 2-Year-Old",
      rating: 5,
      date: "Recent Consultation",
      text: "Dr. Priya Nair has been our pediatrician since our baby was born. Her gentle touch, prompt advice, and patience with first-time parents are invaluable.",
      verified: true,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Pooja Iyer",
      role: "Parent & Family Care",
      rating: 5,
      date: "Recent Consultation",
      text: "Dr. Nair diagnosed our daughter's persistent seasonal allergy accurately when other clinics failed. Her prenatal and vaccination guidance is seamless and compassionate.",
      verified: true,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Rohan Deshmukh",
      role: "Father of 6-Year-Old",
      rating: 5,
      date: "Recent Consultation",
      text: "Very compassionate and attentive doctor. Children actually feel comfortable in her clinic without fear. Highly recommend Dr. Priya Nair for pediatric and family care!",
      verified: true,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sneha Kulkarni",
      role: "Newborn Consultation",
      rating: 5,
      date: "Recent Consultation",
      text: "As first-time parents, we had endless questions. Dr. Nair gave us clear, calming guidance and practical tips. We wouldn't trust anyone else with our baby.",
      verified: true,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Manoj Nair",
      role: "Family Wellness Patient",
      rating: 5,
      date: "Recent Consultation",
      text: "Compassionate and highly knowledgeable doctor who listens carefully. Her treatment worked swiftly for our daughter's recurring cough and seasonal flu.",
      verified: true,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Divya Menon",
      role: "Adolescent Care Parent",
      rating: 5,
      date: "Recent Consultation",
      text: "Friendly, approachable, and extremely thorough. Dr. Priya provided excellent nutritional guidance for our teenager and resolved our recurring health concerns.",
      verified: true,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="w-full flex-grow flex flex-col p-0 m-0">
      {/* DOCTOR PROFILE HERO SECTION (Closer to Navbar with Safe Top Padding) */}
      <section className="w-full bg-gradient-to-br from-[#1B365D] via-[#13294B] to-[#0B1A30] text-white pt-6 sm:pt-8 pb-10 sm:pb-12 doctor-profile-hero-2k px-4 sm:px-8 lg:px-14 2xl:px-20 flex flex-col justify-center border-b border-white/10 relative overflow-hidden">
        <div className="max-w-6xl 2xl:max-w-[100rem] w-full mx-auto space-y-6 sm:space-y-8 2xl:space-y-2.5 relative z-10">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center space-y-2 2xl:space-y-1"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-3xl 3xl:text-4xl font-serif font-extrabold text-white tracking-tight">
              Meet Dr. Priya Nair
            </h1>
            <div className="w-14 h-1 bg-gradient-to-r from-[#0284C7] to-[#38BDF8] rounded-full mx-auto"></div>
          </motion.div>

          {/* Doctor Profile Grid - Symmetric around central vertical axis with generous spacing on laptop+ */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-32 xl:gap-40 2xl:gap-52 3xl:gap-60 items-center justify-center max-w-5xl lg:max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[105rem] mx-auto">
            
            {/* Doctor Image Card (Aligned to center axis from left) */}
            <motion.div 
              initial={{ opacity: 0, x: -60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center md:justify-end items-center w-full lg:pr-6 xl:pr-10 2xl:pr-14 3xl:pr-16"
            >
              <div className="w-64 h-72 sm:w-80 sm:h-96 2xl:w-[16.5rem] 2xl:h-[19rem] 3xl:w-[19rem] 3xl:h-[22rem] rounded-3xl bg-white border border-white/30 flex items-center justify-center text-[#1B365D] shadow-[0_20px_50px_-10px_rgba(2,132,199,0.5)] relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80" 
                  alt="Dr. Priya Nair" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute bottom-2.5 bg-[#1B365D]/90 backdrop-blur-md text-white px-3.5 py-1 rounded-full text-xs 2xl:text-xs 3xl:text-sm font-semibold shadow-md border border-white/20">
                  <i className="fa-solid fa-certificate text-[#38BDF8] mr-1.5"></i> Senior Consultant
                </div>
              </div>
            </motion.div>

            {/* Doctor Bio & Actions (Aligned to center axis from right) */}
            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-center items-start space-y-4 sm:space-y-5 2xl:space-y-2 text-white w-full md:pl-2 lg:pl-8 xl:pl-12 2xl:pl-16 3xl:pl-20"
            >
              <div className="space-y-1 2xl:space-y-0.5">
                <span className="text-xs 2xl:text-xs 3xl:text-sm font-bold text-[#38BDF8] uppercase tracking-widest block">Senior Pediatrician &amp; Family Health Consultant</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-3xl 3xl:text-4xl font-serif font-extrabold text-white leading-tight">
                  Dr. Priya Nair
                </h2>
                <p className="text-[#38BDF8] font-semibold text-base sm:text-lg 2xl:text-sm 3xl:text-base">MBBS, MD (Pediatrics), DNB, FIAP</p>
                <p className="text-slate-200 font-medium text-sm sm:text-base 2xl:text-xs 3xl:text-sm">Specialist in Child Growth, Immunization &amp; Preventive Family Wellness</p>
              </div>

              <p className="text-slate-200 text-sm sm:text-base 2xl:text-xs 3xl:text-sm leading-relaxed 2xl:max-w-xl 2xl:line-clamp-3">
                Dr. Priya Nair brings over 14 years of dedicated clinical practice in pediatric care, child development milestones, adolescent healthcare, and holistic maternal guidance, known for her empathetic approach with young patients and families.
              </p>
              
              <div className="flex flex-wrap gap-2 2xl:gap-1.5 pt-0.5">
                <span className="bg-white/10 backdrop-blur-md text-[#38BDF8] font-semibold px-3 2xl:px-2.5 py-0.5 rounded-full text-xs 2xl:text-xs 3xl:text-sm border border-white/20">
                  <i className="fa-solid fa-user-graduate mr-1.5"></i> CMC Vellore Alumna
                </span>
                <span className="bg-white/10 backdrop-blur-md text-[#38BDF8] font-semibold px-3 2xl:px-2.5 py-0.5 rounded-full text-xs 2xl:text-xs 3xl:text-sm border border-white/20">
                  <i className="fa-solid fa-award mr-1.5"></i> 14+ Years Exp
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 font-semibold px-3 2xl:px-2.5 py-0.5 rounded-full text-xs 2xl:text-xs 3xl:text-sm border border-emerald-400/30 inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Available Today
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 2xl:gap-2.5 pt-1 2xl:pt-0.5">
                <Link to="/booking" className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold px-6 py-2.5 2xl:py-2 2xl:px-5 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 transform text-sm 2xl:text-xs 3xl:text-sm flex items-center gap-2 border border-transparent hover:border-slate-300">
                  <i className="fa-solid fa-calendar-check"></i> Book Consultation
                </Link>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold px-6 py-2.5 2xl:py-2 2xl:px-5 rounded-lg inline-flex items-center gap-2 text-sm 2xl:text-xs 3xl:text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 transform border border-transparent hover:border-slate-300">
                  <i className="fa-brands fa-whatsapp text-base 2xl:text-sm"></i> WhatsApp Direct
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* SECTION 2: PATIENT TESTIMONIALS */}
      <DoctorTestimonials
        doctorName="Dr. Priya Nair"
        title="Patient Testimonials for Dr. Priya Nair"
        subtitle="Patient Feedback"
        bookingUrl="/booking"
        testimonials={testimonials}
      />
    </div>
  );
}
