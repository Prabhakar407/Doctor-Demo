import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import gynecologyImg from '../Images/gynecology-service.jpg';
import ultrasoundImg from '../Images/ultrasound-service.jpg';
import pregnancyImg from '../Images/pregnancy-service.jpg';
import physicianImg from '../Images/physician-service.jpg';
import sonographyScanImg from '../Images/sonography-scan.jpg';
import glucometerImg from '../Images/glucometer.jpg';

// Distinct curated images for Healthcare Solutions section (iPad and greater)
import healthcareGynecologyImg from '../Images/healthcare-gynecology.jpg';
import healthcareUltrasoundImg from '../Images/healthcare-ultrasound.jpg';
import healthcarePregnancyImg from '../Images/healthcare-pregnancy.jpg';

export default function Treatments() {
  const [selectedService, setSelectedService] = useState('all');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam && ['gynecology', 'ultrasound', 'pregnancy', 'physician'].includes(serviceParam)) {
      setSelectedService(serviceParam);
    }
    if (location.hash === '#advanced-procedures' || window.innerWidth < 768) {
      const element = document.getElementById('advanced-procedures');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceId) => {
    setSelectedService(serviceId);
    const element = document.getElementById('advanced-procedures');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const procedures = [
    {
      id: 'gynecology',
      title: "Obstetrician & Gynaecology Care",
      image: gynecologyImg,
      alt: "Obstetrician & Gynaecology Care",
      doctorName: "Dr. Priya Nair",
      doctorLink: "/dr-priya-nair",
      description: "Comprehensive reproductive healthcare, menstrual disorder management, PCOS/PCOD therapy, pelvic examinations, and preventive health screenings."
    },
    {
      id: 'ultrasound',
      title: "3D/4D Ultrasound & Imaging",
      image: sonographyScanImg,
      alt: "3D/4D Ultrasound & Imaging",
      doctorName: "Dr. Priya Nair",
      doctorLink: "/dr-priya-nair",
      description: "Advanced diagnostic sonography including fetal anomaly scans, early pregnancy dating, pelvic ultrasound, follicular monitoring, and color Doppler."
    },
    {
      id: 'pregnancy',
      title: "Pregnancy Management & Maternal Care",
      image: pregnancyImg,
      alt: "Pregnancy Management & Maternal Care",
      doctorName: "Dr. Priya Nair",
      doctorLink: "/dr-priya-nair",
      description: "End-to-end maternity care encompassing trimesters monitoring, gestational wellness, nutritional guidance, high-risk pregnancy protocols, and postpartum care."
    },
    {
      id: 'physician',
      title: "Physician & Diabetology Care",
      image: glucometerImg,
      alt: "Physician & Diabetology Care",
      doctorName: "Dr. Arun Sharma",
      doctorLink: "/dr-arun-sharma",
      description: "Expert clinical evaluation for diabetes mellitus (Type 1 & 2), hypertension, metabolic syndrome, thyroid disorders, and acute/chronic adult illnesses."
    }
  ];

  const displayedProcedures = selectedService === 'all' 
    ? procedures 
    : procedures.filter(p => p.id === selectedService);

  return (
    <div className="w-full flex-grow flex flex-col p-0 m-0">
      {/* SECTION 1: HEALTHCARE SOLUTIONS (Hidden on Mobile, Visible on iPad/Tablet and Greater) */}
      <section className="hidden md:block w-full bg-[#F8FAFC] pt-6 sm:pt-8 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 2xl:px-20 border-b border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto space-y-8 2xl:space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center space-y-2"
          >
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F172A] tracking-tight">
              Healthcare <span className="italic text-[#0284C7]">Solutions</span>
            </h1>
            <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-xl mx-auto">
              Essential clinical categories and preventive care designed for your well-being. Click any service below to view its clinical procedure details.
            </p>
            <div className="w-14 h-1 bg-gradient-to-r from-[#0284C7] to-[#1B365D] rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1: Obstetrician - Gynaecologist */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => handleServiceClick('gynecology')}
              className={`bg-white rounded-3xl border ${
                selectedService === 'gynecology' 
                  ? 'border-[#0284C7] ring-2 ring-[#0284C7] shadow-[0_20px_45px_-5px_rgba(2,132,199,0.4)] -translate-y-1' 
                  : 'border-slate-200 hover:border-[#0284C7] shadow-[0_12px_30px_-5px_rgba(2,132,199,0.25)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.4)] hover:-translate-y-1'
              } transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer`}
            >
              <div className="p-3 pb-0">
                <div className="w-full h-44 sm:h-48 rounded-2xl bg-white border border-slate-100 overflow-hidden relative">
                  <img 
                    src={healthcareGynecologyImg} 
                    alt="Obstetrician - Gynaecologist" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
              <div className="p-4 pt-3 flex flex-col items-center space-y-1.5 text-center flex-1 justify-between">
                <div className="space-y-1">
                  <h3 className="font-bold text-[#0F172A] text-base sm:text-lg font-serif leading-tight group-hover:text-[#0284C7] transition-colors">
                    Obstetrician - Gynaecologist
                  </h3>
                  <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed">
                    Comprehensive women's healthcare, pelvic wellness, and clinical gynaecological diagnostics.
                  </p>
                </div>
                <span className="text-xs font-semibold text-[#0284C7] inline-flex items-center gap-1 group-hover:underline pt-1">
                  View procedure <i className="fa-solid fa-arrow-down text-[10px]"></i>
                </span>
              </div>
            </motion.div>

            {/* 2: Ultrasound */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => handleServiceClick('ultrasound')}
              className={`bg-white rounded-3xl border ${
                selectedService === 'ultrasound' 
                  ? 'border-[#0284C7] ring-2 ring-[#0284C7] shadow-[0_20px_45px_-5px_rgba(2,132,199,0.4)] -translate-y-1' 
                  : 'border-slate-200 hover:border-[#0284C7] shadow-[0_12px_30px_-5px_rgba(2,132,199,0.25)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.4)] hover:-translate-y-1'
              } transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer`}
            >
              <div className="p-3 pb-0">
                <div className="w-full h-44 sm:h-48 rounded-2xl bg-white border border-slate-100 overflow-hidden relative">
                  <img 
                    src={healthcareUltrasoundImg} 
                    alt="Ultrasound Diagnostics" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
              <div className="p-4 pt-3 flex flex-col items-center space-y-1.5 text-center flex-1 justify-between">
                <div className="space-y-1">
                  <h3 className="font-bold text-[#0F172A] text-base sm:text-lg font-serif leading-tight group-hover:text-[#0284C7] transition-colors">
                    Ultrasound
                  </h3>
                  <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed">
                    High-definition 3D/4D ultrasound imaging, pelvic sonography, and color Doppler scans.
                  </p>
                </div>
                <span className="text-xs font-semibold text-[#0284C7] inline-flex items-center gap-1 group-hover:underline pt-1">
                  View procedure <i className="fa-solid fa-arrow-down text-[10px]"></i>
                </span>
              </div>
            </motion.div>

            {/* 3: Pregnancy Management */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => handleServiceClick('pregnancy')}
              className={`bg-white rounded-3xl border ${
                selectedService === 'pregnancy' 
                  ? 'border-[#0284C7] ring-2 ring-[#0284C7] shadow-[0_20px_45px_-5px_rgba(2,132,199,0.4)] -translate-y-1' 
                  : 'border-slate-200 hover:border-[#0284C7] shadow-[0_12px_30px_-5px_rgba(2,132,199,0.25)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.4)] hover:-translate-y-1'
              } transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer`}
            >
              <div className="p-3 pb-0">
                <div className="w-full h-44 sm:h-48 rounded-2xl bg-white border border-slate-100 overflow-hidden relative">
                  <img 
                    src={healthcarePregnancyImg} 
                    alt="Pregnancy Management" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
              <div className="p-4 pt-3 flex flex-col items-center space-y-1.5 text-center flex-1 justify-between">
                <div className="space-y-1">
                  <h3 className="font-bold text-[#0F172A] text-base sm:text-lg font-serif leading-tight group-hover:text-[#0284C7] transition-colors">
                    Pregnancy Management
                  </h3>
                  <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed">
                    Dedicated prenatal, antenatal, high-risk pregnancy monitoring, and maternal care.
                  </p>
                </div>
                <span className="text-xs font-semibold text-[#0284C7] inline-flex items-center gap-1 group-hover:underline pt-1">
                  View procedure <i className="fa-solid fa-arrow-down text-[10px]"></i>
                </span>
              </div>
            </motion.div>

            {/* 4: Physician and Diabetologist */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => handleServiceClick('physician')}
              className={`bg-white rounded-3xl border ${
                selectedService === 'physician' 
                  ? 'border-[#0284C7] ring-2 ring-[#0284C7] shadow-[0_20px_45px_-5px_rgba(2,132,199,0.4)] -translate-y-1' 
                  : 'border-slate-200 hover:border-[#0284C7] shadow-[0_12px_30px_-5px_rgba(2,132,199,0.25)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.4)] hover:-translate-y-1'
              } transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer`}
            >
              <div className="p-3 pb-0">
                <div className="w-full h-44 sm:h-48 rounded-2xl bg-white border border-slate-100 overflow-hidden relative">
                  <img 
                    src={physicianImg} 
                    alt="Physician & Diabetologist" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
              <div className="p-4 pt-3 flex flex-col items-center space-y-1.5 text-center flex-1 justify-between">
                <div className="space-y-1">
                  <h3 className="font-bold text-[#0F172A] text-base sm:text-lg font-serif leading-tight group-hover:text-[#0284C7] transition-colors">
                    Physician &amp; Diabetologist
                  </h3>
                  <p className="text-black text-xs sm:text-sm md:text-base font-normal leading-relaxed">
                    Evidence-based internal medicine, diabetes control, and metabolic wellness therapies.
                  </p>
                </div>
                <span className="text-xs font-semibold text-[#0284C7] inline-flex items-center gap-1 group-hover:underline pt-1">
                  View procedure <i className="fa-solid fa-arrow-down text-[10px]"></i>
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: SPECIALIZED TREATMENTS / ADVANCED CLINICAL PROCEDURES */}
      <section id="advanced-procedures" className="w-full bg-white pt-5 sm:pt-6 md:pt-5 lg:pt-6 2xl:pt-8 pb-12 sm:pb-16 2xl:pb-24 px-4 sm:px-8 lg:px-12 2xl:px-20 border-b border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto space-y-8 2xl:space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center space-y-2"
          >
            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-widest block">Specialized Treatments</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F172A] tracking-tight">
              Advanced Clinical Procedures
            </h2>
            <div className="w-14 h-1 bg-gradient-to-r from-[#0284C7] to-[#1B365D] rounded-full mx-auto"></div>
          </motion.div>

          {/* Quick Filter Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto"
          >
            <button
              type="button"
              onClick={() => setSelectedService('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-serif font-bold transition-all cursor-pointer ${
                selectedService === 'all'
                  ? 'bg-[#1B365D] text-white shadow-md'
                  : 'bg-[#F8FAFC] text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Procedures ({procedures.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedService('gynecology')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-serif font-bold transition-all cursor-pointer ${
                selectedService === 'gynecology'
                  ? 'bg-[#0284C7] text-white shadow-md'
                  : 'bg-[#F8FAFC] text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Obstetrician &amp; Gynaecology
            </button>
            <button
              type="button"
              onClick={() => setSelectedService('ultrasound')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-serif font-bold transition-all cursor-pointer ${
                selectedService === 'ultrasound'
                  ? 'bg-[#0284C7] text-white shadow-md'
                  : 'bg-[#F8FAFC] text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Ultrasound &amp; Imaging
            </button>
            <button
              type="button"
              onClick={() => setSelectedService('pregnancy')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-serif font-bold transition-all cursor-pointer ${
                selectedService === 'pregnancy'
                  ? 'bg-[#0284C7] text-white shadow-md'
                  : 'bg-[#F8FAFC] text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Pregnancy Management
            </button>
            <button
              type="button"
              onClick={() => setSelectedService('physician')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-serif font-bold transition-all cursor-pointer ${
                selectedService === 'physician'
                  ? 'bg-[#0284C7] text-white shadow-md'
                  : 'bg-[#F8FAFC] text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Physician &amp; Diabetology
            </button>
          </motion.div>

          {/* If filtered, show helper indicator */}
          {selectedService !== 'all' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto flex items-center justify-between bg-sky-50 border border-sky-200 rounded-2xl px-4 py-2.5 text-xs text-[#0284C7]"
            >
              <span className="font-semibold flex items-center gap-1.5">
                <i className="fa-solid fa-filter text-[#0284C7]"></i>
                Showing selected service in clinical procedures
              </span>
              <button
                type="button"
                onClick={() => setSelectedService('all')}
                className="font-bold underline hover:text-[#0369A1] cursor-pointer"
              >
                Show All Procedures &rarr;
              </button>
            </motion.div>
          )}

          {/* Procedures List */}
          <div className="max-w-4xl 2xl:max-w-[75rem] mx-auto space-y-6 2xl:space-y-8">
            <AnimatePresence mode="popLayout">
              {displayedProcedures.map((proc, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div 
                    layout
                    key={proc.id}
                    initial={{ opacity: 0, y: 35, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className={`bg-white rounded-3xl border border-slate-200 hover:border-[#0284C7] shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } items-stretch group h-[390px] sm:h-[405px] md:h-56 lg:h-56 2xl:h-64`}
                  >
                    <div className="w-full md:w-64 lg:w-72 2xl:w-80 h-44 sm:h-48 md:h-full bg-slate-100 shrink-0 relative overflow-hidden">
                      <motion.img 
                        initial={{ scale: 1.08 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        src={proc.image} 
                        alt={proc.alt} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="flex-1 bg-white p-4 sm:p-5 md:py-4 md:px-6 lg:py-5 lg:px-7 2xl:py-6 2xl:px-8 flex flex-col justify-between space-y-2 h-full">
                      <div className="space-y-1 sm:space-y-1.5 lg:space-y-2 lg:pt-3 2xl:pt-4">
                        <h3 className="text-base sm:text-lg md:text-xl font-serif font-bold text-[#0F172A] leading-tight group-hover:text-[#0284C7] transition-colors">
                          {proc.title}
                        </h3>
                        <p className="text-black text-xs sm:text-sm md:text-sm font-normal leading-relaxed line-clamp-3 sm:line-clamp-2 md:line-clamp-3 lg:pt-1 2xl:pt-1.5">
                          {proc.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1 shrink-0">
                        <Link 
                          to={proc.doctorLink} 
                          className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl border border-slate-200 bg-[#F8FAFC] hover:bg-slate-100 text-xs font-semibold text-[#0284C7] shadow-xs transition"
                        >
                          <span className="w-4 h-4 rounded-full bg-[#0284C7] text-white flex items-center justify-center text-[9px]">
                            <i className="fa-solid fa-user-doctor"></i>
                          </span>
                          Suggested Doctor: <strong className="text-[#0F172A]">{proc.doctorName}</strong>
                        </Link>
                        <Link 
                          to="/booking" 
                          className="bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold px-3.5 py-1.5 rounded-xl shadow-xs transition border border-transparent hover:border-slate-300"
                        >
                          Book Treatment
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Center Go on Top Button */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center pt-6"
          >
            <button 
              onClick={scrollToTop} 
              className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer border border-transparent hover:border-slate-300"
            >
              <i className="fa-solid fa-arrow-up mr-2"></i> Go on top
            </button>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
