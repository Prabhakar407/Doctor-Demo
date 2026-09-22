import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [modalContent, setModalContent] = useState(null); // 'privacy' | 'terms' | null

  return (
    <>
      <footer className="w-full bg-[#13294B] text-white border-t border-slate-700/60 mt-auto relative z-20">
        
        {/* Main Footer Grid */}
        <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-14 2xl:px-20 pt-12 sm:pt-16 2xl:pt-20 pb-8 sm:pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Column 1: Brand & Mission (4 cols on lg) */}
            <div className="lg:col-span-4 space-y-4">
              <Link to="/" className="inline-flex items-center gap-2.5 text-white group">
                <span className="w-10 h-10 rounded-xl bg-[#0284C7] text-white flex items-center justify-center text-lg shadow-md group-hover:bg-[#0369A1] transition-colors">
                  <i className="fa-solid fa-user-doctor"></i>
                </span>
                <span className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-[#38BDF8] transition-colors">
                  Clinic Care
                </span>
              </Link>
              
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
                Dedicated to evidence-based healthcare, compassionate specialist consultations, and seamless digital prescriptions. Providing premier medical treatments tailored to your recovery and vitality.
              </p>

              {/* Emergency Hotline Box */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#0284C7]/20 border border-[#38BDF8]/40 text-[#38BDF8] flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-phone-volume text-sm"></i>
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 font-medium">24/7 Clinical Helpline</span>
                  <a href="tel:+81888888888" className="text-xs sm:text-sm font-bold text-white hover:text-[#38BDF8] transition-colors">
                    +81 8888 88888
                  </a>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center gap-2.5 pt-1">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#0284C7] text-slate-300 hover:text-white border border-white/10 flex items-center justify-center text-sm transition-all duration-200 hover:scale-105"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Twitter"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#0284C7] text-slate-300 hover:text-white border border-white/10 flex items-center justify-center text-sm transition-all duration-200 hover:scale-105"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#0284C7] text-slate-300 hover:text-white border border-white/10 flex items-center justify-center text-sm transition-all duration-200 hover:scale-105"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#0284C7] text-slate-300 hover:text-white border border-white/10 flex items-center justify-center text-sm transition-all duration-200 hover:scale-105"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a 
                  href="https://wa.me/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#25D366] text-slate-300 hover:text-white border border-white/10 flex items-center justify-center text-sm transition-all duration-200 hover:scale-105"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links (2 cols on lg) */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wider border-b border-[#0284C7]/50 pb-2 inline-block">
                Quick Links
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li>
                  <Link to="/" className="hover:text-[#38BDF8] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                    <i className="fa-solid fa-angle-right text-[10px] text-[#0284C7]"></i> Home
                  </Link>
                </li>
                <li>
                  <Link to="/about-clinic" className="hover:text-[#38BDF8] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                    <i className="fa-solid fa-angle-right text-[10px] text-[#0284C7]"></i> About Clinic
                  </Link>
                </li>
                <li>
                  <Link to="/treatment" className="hover:text-[#38BDF8] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                    <i className="fa-solid fa-angle-right text-[10px] text-[#0284C7]"></i> Treatments
                  </Link>
                </li>
                <li>
                  <Link to="/meet-doctor" className="hover:text-[#38BDF8] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                    <i className="fa-solid fa-angle-right text-[10px] text-[#0284C7]"></i> Meet Doctors
                  </Link>
                </li>
                <li>
                  <Link to="/booking" className="hover:text-[#38BDF8] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                    <i className="fa-solid fa-angle-right text-[10px] text-[#0284C7]"></i> Book Appointment
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#38BDF8] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                    <i className="fa-solid fa-angle-right text-[10px] text-[#0284C7]"></i> Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Medical Services (3 cols on lg) */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wider border-b border-[#0284C7]/50 pb-2 inline-block">
                Specializations
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                  <span>Obstetrician - Gynaecologist</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                  <span>3D/4D Ultrasound Diagnostics</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                  <span>Pregnancy Management & Maternal Care</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                  <span>Physician & Internal Medicine</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                  <span>Diabetology & Metabolic Care</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                  <span>Digital Prescriptions & Records</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Clinic Info & Hours (3 cols on lg) */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wider border-b border-[#0284C7]/50 pb-2 inline-block">
                Clinic Details
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <i className="fa-solid fa-location-dot text-[#38BDF8] mt-1 shrink-0"></i>
                  <span>Medical Center, 4th Floor, Suite 402, Central Healthcare Complex</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <i className="fa-solid fa-envelope text-[#38BDF8] shrink-0"></i>
                  <a href="mailto:support@cliniccare.com" className="hover:text-[#38BDF8] transition">
                    support@cliniccare.com
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="fa-solid fa-clock text-[#38BDF8] mt-1 shrink-0"></i>
                  <div>
                    <span className="font-semibold text-white block">Mon – Sat: 9:00 AM – 7:00 PM</span>
                    <span className="text-[11px] text-slate-400">Sunday: Emergency &amp; Pre-booked only</span>
                  </div>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  to="/booking"
                  className="w-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold text-xs px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center gap-2 border border-transparent hover:border-slate-300"
                >
                  <i className="fa-solid fa-calendar-check"></i>
                  <span>Book Consultation Online</span>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="border-t border-white/10 bg-[#0F1D33] py-5 px-4 sm:px-8 lg:px-14 2xl:px-20">
          <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs 2xl:text-sm text-slate-400">
            <div>
              &copy; {new Date().getFullYear()} Clinic Care. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs">
              <button
                type="button"
                onClick={() => setModalContent('privacy')}
                className="hover:text-white transition underline underline-offset-4 decoration-slate-600 hover:decoration-[#38BDF8] cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setModalContent('terms')}
                className="hover:text-white transition underline underline-offset-4 decoration-slate-600 hover:decoration-[#38BDF8] cursor-pointer"
              >
                Terms &amp; Conditions
              </button>
              <button
                type="button"
                onClick={() => setModalContent('patient-rights')}
                className="hover:text-white transition underline underline-offset-4 decoration-slate-600 hover:decoration-[#38BDF8] cursor-pointer"
              >
                Patient Rights
              </button>
            </div>
          </div>
        </div>

      </footer>

      {/* Modal Dialog for Privacy Policy, Terms & Conditions, and Patient Rights */}
      {modalContent && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setModalContent(null)}
        >
          <div 
            className="bg-white text-[#0F172A] rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#1B365D] text-white flex items-center justify-between border-b border-[#13294B]">
              <div className="flex items-center gap-2">
                <i className={`fa-solid ${modalContent === 'privacy' ? 'fa-shield-halved' : modalContent === 'terms' ? 'fa-file-contract' : 'fa-hand-holding-medical'} text-[#38BDF8]`}></i>
                <h3 className="font-serif font-bold text-base sm:text-lg">
                  {modalContent === 'privacy' && 'Privacy Policy'}
                  {modalContent === 'terms' && 'Terms & Conditions'}
                  {modalContent === 'patient-rights' && 'Patient Rights & Medical Governance'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalContent(null)}
                className="text-slate-300 hover:text-white text-lg w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition"
                aria-label="Close modal"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              {modalContent === 'privacy' && (
                <>
                  <p className="font-semibold text-slate-800">
                    Last Updated: January 2026
                  </p>
                  <h4 className="font-bold text-slate-900 text-sm">1. Information Collection &amp; Privacy Safeguards</h4>
                  <p>
                    Clinic Care is committed to protecting your confidential healthcare data. When you use our appointment booking services, we collect essential demographic and clinical information (name, phone number, medical notes, appointment preferences) strictly to schedule consultations and administer care.
                  </p>
                  <h4 className="font-bold text-slate-900 text-sm">2. Use of Medical Data &amp; Digital Prescriptions</h4>
                  <p>
                    Your medical history and prescription records are encrypted and accessible solely by verified healthcare professionals assigned to your treatment. We never sell, lease, or share personal patient records with third-party marketers.
                  </p>
                  <h4 className="font-bold text-slate-900 text-sm">3. Security Standards &amp; Compliance</h4>
                  <p>
                    We employ industry-standard 256-bit SSL encryption, restricted role-based database access, and secure cloud storage protocols adhering to healthcare data protection standards.
                  </p>
                </>
              )}

              {modalContent === 'terms' && (
                <>
                  <p className="font-semibold text-slate-800">
                    Last Updated: January 2026
                  </p>
                  <h4 className="font-bold text-slate-900 text-sm">1. Consultation &amp; Booking Terms</h4>
                  <p>
                    Appointments scheduled through this portal are subject to physician availability. While we make every effort to honor exact time slots, clinical emergencies may occasionally cause slight schedule adjustments.
                  </p>
                  <h4 className="font-bold text-slate-900 text-sm">2. Medical Prescriptions &amp; Clinical Guidance</h4>
                  <p>
                    Digital prescriptions issued through Clinic Care are valid medical documents issued by certified physicians. Patients are advised to follow the prescribed dosage instructions and consult immediately in case of unexpected adverse reactions.
                  </p>
                  <h4 className="font-bold text-slate-900 text-sm">3. Cancellation &amp; Rescheduling Policy</h4>
                  <p>
                    Appointments may be cancelled or rescheduled up to 2 hours prior to the slot without penalty. For emergency cancellations, please contact our helpline directly.
                  </p>
                </>
              )}

              {modalContent === 'patient-rights' && (
                <>
                  <h4 className="font-bold text-slate-900 text-sm">Patient Bill of Rights</h4>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Right to compassionate, respectful, and dignified healthcare free of discrimination.</li>
                    <li>Right to receive complete information regarding diagnosis, treatment options, and risks.</li>
                    <li>Right to complete privacy and confidentiality of personal medical records.</li>
                    <li>Right to transparent billing, treatment itemization, and clear prescription details.</li>
                  </ul>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={() => setModalContent(null)}
                className="bg-[#1B365D] hover:bg-[#13294B] text-white px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
