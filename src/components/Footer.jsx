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

              {/* Real Colored Social Media Logos */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                {/* Facebook */}
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook"
                  title="Facebook"
                  className="w-9 h-9 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white border border-[#1877F2]/40 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-md"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="X (formerly Twitter)"
                  title="X (Twitter)"
                  className="w-9 h-9 rounded-xl bg-black hover:bg-slate-900 text-white border border-white/20 hover:border-white/40 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-md"
                >
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  title="Instagram"
                  className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white border border-pink-500/30 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-md"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white border border-[#0A66C2]/40 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-md"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="YouTube"
                  title="YouTube"
                  className="w-9 h-9 rounded-xl bg-[#FF0000] hover:bg-[#cc0000] text-white border border-[#FF0000]/40 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-md"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="WhatsApp"
                  title="WhatsApp"
                  className="w-9 h-9 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white border border-[#25D366]/40 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-md"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
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
