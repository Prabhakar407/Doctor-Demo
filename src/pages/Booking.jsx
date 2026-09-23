import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Booking() {
  // Stepper state: Step 1, 2, 3
  const [currentStep, setCurrentStep] = useState(1);
  const [step1Status, setStep1Status] = useState('orange'); // 'orange' | 'green'
  const [step2Status, setStep2Status] = useState('pending'); // 'pending' | 'orange' | 'green'
  const [step3Status, setStep3Status] = useState('pending'); // 'pending' | 'green'

  // Step 1: Patient & Schedule Details
  const [patientData, setPatientData] = useState({
    name: '',
    email: '',
    phone: '',
    doctor: 'Dr. Priya Nair',
    reason: 'Obstetrician & Gynaecology',
    message: ''
  });
  const [selectedDate, setSelectedDate] = useState(9);
  const [selectedTime, setSelectedTime] = useState('10:00 AM');

  // Step 2: Payment Details
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' | 'upi' | 'netbanking' | 'reception'
  const [cardData, setCardData] = useState({
    number: '4532 8920 1842 7731',
    expiry: '08/28',
    cvv: '842',
    name: ''
  });
  const [upiId, setUpiId] = useState('');
  const [selectedBank, setSelectedBank] = useState('HDFC Bank');
  const [isVerifying, setIsVerifying] = useState(false);
  const [bookingId, setBookingId] = useState('');
  const [receiptDownloaded, setReceiptDownloaded] = useState(false);

  const dates = [
    null, 1, 9, 3, 4, 5, 6,
    14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27,
    28, 29, 30, 31
  ];

  const timeSlots = ['10:00 AM', '02:30 PM', '05:00 PM'];

  // Handle Step 1 Submit -> Transition to Step 2
  const handleStep1Submit = (e) => {
    e.preventDefault();
    if (!patientData.name || !patientData.email || !patientData.phone) {
      alert('Please fill all required patient details.');
      return;
    }
    setStep1Status('green');
    setStep2Status('orange');
    setCurrentStep(2);
    if (!cardData.name) {
      setCardData((prev) => ({ ...prev, name: patientData.name }));
    }
  };

  // Handle Step 2 Payment Verification & Submit -> Transition to Step 3
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      const generatedId = `CC-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingId(generatedId);
      setStep2Status('green');
      setStep3Status('green');
      setCurrentStep(3);
    }, 600);
  };

  // Navigation handlers to move back between steps
  const handleGoBackToStep1 = () => {
    setCurrentStep(1);
    setStep1Status('orange');
  };

  const handleGoBackToStep2 = () => {
    setCurrentStep(2);
    setStep2Status('orange');
  };

  const handleResetBooking = () => {
    setCurrentStep(1);
    setStep1Status('orange');
    setStep2Status('pending');
    setStep3Status('pending');
    setPatientData({
      name: '',
      email: '',
      phone: '',
      doctor: 'Dr. Priya Nair',
      reason: 'Obstetrician & Gynaecology',
      message: ''
    });
    setReceiptDownloaded(false);
  };

  const handleDownloadReceipt = () => {
    setReceiptDownloaded(true);
    setTimeout(() => setReceiptDownloaded(false), 4000);
  };

  return (
    <div className="w-full flex-grow flex flex-col p-0 m-0">
      {/* APPOINTMENT RESERVATION SECTION */}
      {/* Requirement 1: For iPad mini (md:) and laptop screen (lg:), center form in screen viewport */}
      <section className="w-full min-h-[calc(100vh-72px)] bg-gradient-to-br from-[#1B365D] via-[#13294B] to-[#0B1A30] text-white pt-4 sm:pt-6 md:pt-4 lg:pt-2 2xl:pt-8 pb-6 sm:pb-8 md:pb-4 lg:pb-3 2xl:pb-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-start md:justify-center border-b border-white/10 relative overflow-hidden">
        <div className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-[72rem] w-full mx-auto space-y-2 sm:space-y-3 lg:space-y-2 2xl:space-y-5 relative z-10">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center space-y-1 lg:space-y-0.5"
          >
            <h1 className="text-xl sm:text-2xl lg:text-2xl 2xl:text-4xl font-serif font-extrabold text-white tracking-tight leading-tight">
              Appointment Reservation
            </h1>
            <div className="w-12 2xl:w-16 h-0.5 2xl:h-1 bg-gradient-to-r from-[#0284C7] to-[#38BDF8] rounded-full mx-auto"></div>
          </motion.div>

          {/* Requirement 5: 3 NUMBERS STEPPER FEATURE (All Screen Sizes) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center max-w-sm sm:max-w-md mx-auto w-full px-2 py-1 lg:py-1 mb-1 lg:mb-1.5"
          >
            
            {/* Step 1 Indicator */}
            <button
              type="button"
              onClick={() => {
                if (currentStep > 1) handleGoBackToStep1();
              }}
              className={`flex items-center gap-1.5 sm:gap-2 transition-all duration-300 ${
                currentStep > 1 ? 'cursor-pointer hover:scale-105' : 'cursor-default'
              }`}
            >
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 shadow-md ${
                  step1Status === 'green'
                    ? 'bg-emerald-500 text-white ring-2 ring-emerald-400'
                    : 'bg-orange-500 text-white ring-4 ring-orange-400/30'
                }`}
              >
                {step1Status === 'green' ? <i className="fa-solid fa-check text-xs"></i> : '1'}
              </div>
              <span
                className={`text-xs sm:text-sm font-semibold tracking-wide transition-colors ${
                  step1Status === 'green'
                    ? 'text-emerald-300'
                    : currentStep === 1
                    ? 'text-orange-400 font-bold'
                    : 'text-slate-300'
                }`}
              >
                Booking
              </span>
            </button>

            {/* Connecting Line 1-2 */}
            <div
              className={`flex-1 h-0.5 mx-2 sm:mx-3 transition-colors duration-500 ${
                step1Status === 'green' ? 'bg-emerald-500' : 'bg-white/20'
              }`}
            ></div>

            {/* Step 2 Indicator */}
            <button
              type="button"
              onClick={() => {
                if (currentStep === 3) handleGoBackToStep2();
                else if (step1Status === 'green' && currentStep !== 2) setCurrentStep(2);
              }}
              className={`flex items-center gap-1.5 sm:gap-2 transition-all duration-300 ${
                currentStep === 3 ? 'cursor-pointer hover:scale-105' : currentStep === 2 ? 'cursor-default' : 'cursor-not-allowed opacity-75'
              }`}
            >
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 shadow-md ${
                  step2Status === 'green'
                    ? 'bg-emerald-500 text-white ring-2 ring-emerald-400'
                    : step2Status === 'orange' || currentStep === 2
                    ? 'bg-orange-500 text-white ring-4 ring-orange-400/30'
                    : 'bg-white/10 text-slate-300 border border-white/20'
                }`}
              >
                {step2Status === 'green' ? <i className="fa-solid fa-check text-xs"></i> : '2'}
              </div>
              <span
                className={`text-xs sm:text-sm font-semibold tracking-wide transition-colors ${
                  step2Status === 'green'
                    ? 'text-emerald-300'
                    : step2Status === 'orange' || currentStep === 2
                    ? 'text-orange-400 font-bold'
                    : 'text-slate-400'
                }`}
              >
                Payment
              </span>
            </button>

            {/* Connecting Line 2-3 */}
            <div
              className={`flex-1 h-0.5 mx-2 sm:mx-3 transition-colors duration-500 ${
                step2Status === 'green' ? 'bg-emerald-500' : 'bg-white/20'
              }`}
            ></div>

            {/* Step 3 Indicator */}
            <div className="flex items-center gap-1.5 sm:gap-2 transition-all duration-300">
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 shadow-md ${
                  currentStep === 3 || step3Status === 'green'
                    ? 'bg-emerald-500 text-white ring-4 ring-emerald-400/30'
                    : 'bg-white/10 text-slate-300 border border-white/20'
                }`}
              >
                {currentStep === 3 || step3Status === 'green' ? <i className="fa-solid fa-check text-xs"></i> : '3'}
              </div>
              <span
                className={`text-xs sm:text-sm font-semibold tracking-wide transition-colors ${
                  currentStep === 3 || step3Status === 'green' ? 'text-emerald-300 font-bold' : 'text-slate-400'
                }`}
              >
                Confirmed
              </span>
            </div>

          </motion.div>

          {/* MAIN CONTAINER: Dynamic Step Views */}
          <div className="bg-white text-[#0F172A] rounded-2xl lg:rounded-3xl border border-slate-200 hover:border-[#0284C7] shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] hover:-translate-y-1 transition-all duration-300 overflow-hidden p-4 sm:p-5 lg:p-4 2xl:p-8 3xl:p-10">
            
            <AnimatePresence mode="wait">
              {/* ================= STEP 1: BOOKING FORM ================= */}
              {currentStep === 1 && (
                <motion.form 
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  onSubmit={handleStep1Submit} 
                  className="animate-fadeIn"
                >
                  <div className="grid md:grid-cols-2 gap-4 lg:gap-5 2xl:gap-8 items-start">
                  
                  {/* LEFT: Patient Details */}
                  <div className="space-y-2.5 lg:space-y-2 2xl:space-y-3.5">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 2xl:pb-2.5">
                      <div>
                        <span className="text-[10px] 2xl:text-xs font-bold text-orange-500 uppercase tracking-wider block">Step 1 of 3</span>
                        <h2 className="text-base sm:text-lg lg:text-base 2xl:text-xl font-serif font-bold text-[#0F172A]">Patient Details</h2>
                      </div>
                      <span className="text-[11px] 2xl:text-xs font-semibold px-2 py-0.5 2xl:px-2.5 2xl:py-1 rounded-full bg-orange-100 text-orange-700">Initial Details</span>
                    </div>

                    {/* Full Name */}
                    <div>
                      <label className="block text-xs lg:text-[11px] 2xl:text-xs font-bold text-[#0F172A] mb-0.5 2xl:mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Enter full name" 
                        value={patientData.name}
                        onChange={(e) => setPatientData({ ...patientData, name: e.target.value })}
                        className="w-full px-3 py-1.5 lg:py-1.5 lg:px-2.5 2xl:py-2.5 2xl:px-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-xs 2xl:text-sm placeholder:text-[#64748B] transition" 
                      />
                    </div>

                    {/* Email & Phone in 2 compact columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 2xl:gap-3">
                      <div>
                        <label className="block text-xs lg:text-[11px] 2xl:text-xs font-bold text-[#0F172A] mb-0.5 2xl:mb-1">Email Address *</label>
                        <input 
                          type="email" 
                          required 
                          placeholder="email@domain.com" 
                          value={patientData.email}
                          onChange={(e) => setPatientData({ ...patientData, email: e.target.value })}
                          className="w-full px-3 py-1.5 lg:py-1.5 lg:px-2.5 2xl:py-2.5 2xl:px-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-xs 2xl:text-sm placeholder:text-[#64748B] transition" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs lg:text-[11px] 2xl:text-xs font-bold text-[#0F172A] mb-0.5 2xl:mb-1">Phone Number *</label>
                        <input 
                          type="tel" 
                          required 
                          placeholder="+1 234 567 890" 
                          value={patientData.phone}
                          onChange={(e) => setPatientData({ ...patientData, phone: e.target.value })}
                          className="w-full px-3 py-1.5 lg:py-1.5 lg:px-2.5 2xl:py-2.5 2xl:px-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-xs 2xl:text-sm placeholder:text-[#64748B] transition" 
                        />
                      </div>
                    </div>

                    {/* Doctor Selection & Reason in 2 columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 2xl:gap-3">
                      <div>
                        <label className="block text-xs lg:text-[11px] 2xl:text-xs font-bold text-[#0F172A] mb-0.5 2xl:mb-1">Assigned Specialist *</label>
                        <select 
                          value={patientData.doctor}
                          onChange={(e) => setPatientData({ ...patientData, doctor: e.target.value })}
                          className="w-full px-3 py-1.5 lg:py-1.5 lg:px-2.5 2xl:py-2.5 2xl:px-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-xs 2xl:text-sm text-[#0F172A] transition"
                        >
                          <option value="Dr. Priya Nair">Dr. Priya Nair (Pediatrics & Ob/Gyn)</option>
                          <option value="Dr. Arun Sharma">Dr. Arun Sharma (Physician & Diabetology)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs lg:text-[11px] 2xl:text-xs font-bold text-[#0F172A] mb-0.5 2xl:mb-1">Consultation Reason *</label>
                        <select 
                          value={patientData.reason}
                          onChange={(e) => setPatientData({ ...patientData, reason: e.target.value })}
                          className="w-full px-3 py-1.5 lg:py-1.5 lg:px-2.5 2xl:py-2.5 2xl:px-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-xs 2xl:text-sm text-[#0F172A] transition"
                        >
                          <option value="Obstetrician & Gynaecology">Obstetrician &amp; Gynaecology</option>
                          <option value="Ultrasound & Diagnostics">Ultrasound &amp; Diagnostics</option>
                          <option value="Pregnancy Management & Maternal Care">Pregnancy Management</option>
                          <option value="Physician & Diabetology">Physician &amp; Diabetology</option>
                          <option value="General Consultation">General Health Consultation</option>
                        </select>
                      </div>
                    </div>

                    {/* Medical Notes */}
                    <div>
                      <label className="block text-xs lg:text-[11px] 2xl:text-xs font-bold text-[#0F172A] mb-0.5 2xl:mb-1">Medical Notes (Optional)</label>
                      <textarea 
                        rows={1} 
                        placeholder="Brief symptoms or prior medical history" 
                        value={patientData.message}
                        onChange={(e) => setPatientData({ ...patientData, message: e.target.value })}
                        className="w-full px-3 py-1.5 lg:py-1.5 lg:px-2.5 2xl:py-2.5 2xl:px-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-xs 2xl:text-sm placeholder:text-[#64748B] resize-none transition"
                      ></textarea>
                    </div>

                    {/* Fee Summary Pill */}
                    <div className="flex items-center justify-between p-2 2xl:p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs 2xl:text-sm">
                      <span className="text-[#64748B]">Consultation Booking Fee:</span>
                      <span className="font-bold text-[#0F172A] text-sm 2xl:text-base font-serif">$75.00 / ₹600</span>
                    </div>

                  </div>

                  {/* RIGHT: Calendar & Time Slots */}
                  <div className="space-y-2.5 lg:space-y-2 2xl:space-y-3.5">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 2xl:pb-2.5">
                      <div className="space-y-0.5">
                        <span className="text-[10px] 2xl:text-xs font-bold text-[#0284C7] uppercase tracking-wider block">Date &amp; Time</span>
                        <h2 className="text-base sm:text-lg lg:text-base 2xl:text-xl font-serif font-bold text-[#0F172A]">Select Consultation Slot</h2>
                      </div>
                      <span className="text-[11px] 2xl:text-xs font-semibold text-[#0284C7] bg-sky-50 px-2 py-0.5 2xl:px-3 2xl:py-1 rounded-full border border-sky-200">June {selectedDate}, 2026</span>
                    </div>

                    {/* Calendar Widget */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-2.5 lg:p-2.5 2xl:p-3.5 shadow-xs">
                      {/* Month Header */}
                      <div className="flex justify-between items-center text-xs 2xl:text-sm font-bold text-[#0F172A] mb-1.5 2xl:mb-2 px-1">
                        <button type="button" className="text-[#64748B] hover:text-[#0F172A] p-0.5 cursor-pointer">
                          <i className="fa-solid fa-chevron-left text-[10px] 2xl:text-xs"></i>
                        </button>
                        <span className="font-serif font-bold text-[#0F172A] text-xs 2xl:text-sm">June 2026</span>
                        <button type="button" className="text-[#64748B] hover:text-[#0F172A] p-0.5 cursor-pointer">
                          <i className="fa-solid fa-chevron-right text-[10px] 2xl:text-xs"></i>
                        </button>
                      </div>

                      {/* Days of Week */}
                      <div className="grid grid-cols-7 text-center text-[9px] 2xl:text-[11px] font-semibold text-[#64748B] mb-1 2xl:mb-1.5">
                        <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                      </div>

                      {/* Dates Grid */}
                      <div className="grid grid-cols-7 text-center text-[10px] lg:text-[11px] 2xl:text-xs gap-y-0.5 2xl:gap-y-1 font-medium text-[#0F172A]">
                        {dates.map((d, index) => {
                          if (d === null) {
                            return <span key={index} className="text-transparent">0</span>;
                          }
                          const isSelected = selectedDate === d;
                          return (
                            <button
                              key={index}
                              type="button"
                              onClick={() => setSelectedDate(d)}
                              className={`rounded-lg py-0.5 2xl:py-1.5 transition cursor-pointer ${
                                isSelected 
                                  ? "bg-[#0284C7] text-white font-bold shadow-xs" 
                                  : "hover:bg-[#F8FAFC] text-[#0F172A]"
                              }`}
                            >
                              {d}
                            </button>
                          );
                        })}
                      </div>

                      {/* Time Slot Pills */}
                      <div className="flex items-center gap-1.5 2xl:gap-2 mt-2 pt-2 2xl:mt-3 2xl:pt-3 border-t border-slate-100">
                        {timeSlots.map((time) => {
                          const isSelected = selectedTime === time;
                          return (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setSelectedTime(time)}
                              className={`text-[10px] 2xl:text-xs font-semibold px-2 py-0.5 2xl:py-1.5 rounded-lg transition cursor-pointer flex-1 text-center ${
                                isSelected
                                  ? "bg-[#0284C7] text-white shadow-xs font-bold"
                                  : "bg-[#F8FAFC] border border-slate-200 text-[#0284C7] hover:bg-[#0284C7] hover:text-white"
                              }`}
                            >
                              {time}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 1 Submit Action */}
                    <div className="pt-2 2xl:pt-4 flex flex-col items-center">
                      <button 
                        type="submit" 
                        className="w-auto px-6 sm:px-8 py-2 2xl:px-9 2xl:py-2.5 bg-[#0284C7] hover:bg-[#0369A1] active:bg-[#0284C7] text-white font-serif font-bold rounded-lg transition-all duration-200 text-xs sm:text-sm 2xl:text-base shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transform border border-transparent hover:border-slate-300 inline-flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Continue to Payment (Step 2)</span>
                        <i className="fa-solid fa-arrow-right text-xs 2xl:text-sm"></i>
                      </button>
                      <p className="text-[10px] 2xl:text-xs text-center text-[#64748B] mt-1.5 2xl:mt-2">Details will be verified on next step before final confirmation</p>
                    </div>

                  </div>

                </div>
              </motion.form>
            )}

            {/* ================= STEP 2: PAYMENT & VERIFICATION PAGE ================= */}
            {currentStep === 2 && (
              <motion.form 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                onSubmit={handlePaymentSubmit} 
                className="animate-fadeIn space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div>
                    <span className="text-[10px] font-bold text-orange-500 uppercase tracking-wider block">Step 2 of 3</span>
                    <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0F172A]">Payment &amp; Consultation Verification</h2>
                  </div>
                  {/* Option to move back */}
                  <button
                    type="button"
                    onClick={handleGoBackToStep1}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg border border-slate-200 bg-[#F8FAFC] hover:bg-slate-100 text-xs font-semibold text-[#0284C7] transition cursor-pointer"
                  >
                    <i className="fa-solid fa-arrow-left text-[10px]"></i>
                    <span>Back to Booking Form</span>
                  </button>
                </div>

                {/* Summary Pill from Step 1 */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-2xl bg-sky-50/70 border border-sky-100 text-xs">
                  <div>
                    <span className="text-[#64748B] block text-[10px]">Patient:</span>
                    <strong className="text-[#0F172A]">{patientData.name || 'Patient'}</strong>
                  </div>
                  <div>
                    <span className="text-[#64748B] block text-[10px]">Doctor:</span>
                    <strong className="text-[#0F172A]">{patientData.doctor}</strong>
                  </div>
                  <div>
                    <span className="text-[#64748B] block text-[10px]">Schedule:</span>
                    <strong className="text-[#0284C7]">June {selectedDate}, 2026 ({selectedTime})</strong>
                  </div>
                  <div>
                    <span className="text-[#64748B] block text-[10px]">Consultation Fee:</span>
                    <strong className="text-emerald-700 font-bold">$75.00 / ₹600</strong>
                  </div>
                </div>

                {/* Payment Method Selector Tabs */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#0F172A]">Select Payment Option</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'card', label: 'Credit/Debit Card', icon: 'fa-credit-card' },
                      { id: 'upi', label: 'Instant UPI / QR', icon: 'fa-qrcode' },
                      { id: 'netbanking', label: 'Net Banking', icon: 'fa-building-columns' },
                      { id: 'reception', label: 'Pay at Reception', icon: 'fa-hospital-user' }
                    ].map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setPaymentMethod(method.id)}
                        className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer ${
                          paymentMethod === method.id
                            ? 'border-[#0284C7] bg-[#0284C7] text-white shadow-sm'
                            : 'border-slate-200 bg-[#F8FAFC] text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <i className={`fa-solid ${method.icon}`}></i>
                        <span>{method.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Method Specific Form Fields */}
                <div className="p-3.5 rounded-2xl border border-slate-200 bg-white space-y-3">
                  {paymentMethod === 'card' && (
                    <div className="space-y-2.5">
                      <div>
                        <label className="block text-xs font-bold text-[#0F172A] mb-1">Cardholder Name</label>
                        <input
                          type="text"
                          required
                          value={cardData.name}
                          onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                          placeholder="Name on card"
                          className="w-full px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="col-span-2">
                          <label className="block text-xs font-bold text-[#0F172A] mb-1">Card Number</label>
                          <input
                            type="text"
                            required
                            value={cardData.number}
                            onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                            placeholder="4532 8920 1842 7731"
                            className="w-full px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-[#0F172A] mb-1">Expiry / CVV</label>
                          <div className="flex gap-1.5">
                            <input
                              type="text"
                              required
                              value={cardData.expiry}
                              onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                              placeholder="08/28"
                              className="w-1/2 px-2 py-1.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs text-center focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                            />
                            <input
                              type="password"
                              required
                              value={cardData.cvv}
                              onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                              placeholder="842"
                              maxLength={4}
                              className="w-1/2 px-2 py-1.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs text-center focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'upi' && (
                    <div className="space-y-2 text-xs">
                      <label className="block text-xs font-bold text-[#0F172A] mb-1">Enter UPI ID / VPA</label>
                      <input
                        type="text"
                        required
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="yourname@okhdfcbank or yourname@upi"
                        className="w-full px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                      />
                      <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] flex items-center gap-2">
                        <i className="fa-solid fa-shield-halved text-emerald-600"></i>
                        <span>Zero transaction fee on UPI payments. Scan QR will be presented upon verification.</span>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'netbanking' && (
                    <div className="space-y-2 text-xs">
                      <label className="block text-xs font-bold text-[#0F172A] mb-1">Select Participating Bank</label>
                      <select
                        value={selectedBank}
                        onChange={(e) => setSelectedBank(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                      >
                        <option value="HDFC Bank">HDFC Bank</option>
                        <option value="State Bank of India">State Bank of India (SBI)</option>
                        <option value="ICICI Bank">ICICI Bank</option>
                        <option value="Axis Bank">Axis Bank</option>
                        <option value="Other Bank">Other Indian/International Bank</option>
                      </select>
                    </div>
                  )}

                  {paymentMethod === 'reception' && (
                    <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-[#0284C7] text-xs flex items-start gap-2">
                      <i className="fa-solid fa-circle-info text-base mt-0.5"></i>
                      <span>You can pay the $75 consultation fee directly at the ClinicCare reception desk via Cash, POS Card, or UPI on the day of your appointment.</span>
                    </div>
                  )}
                </div>

                {/* Submit / Verification Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <button
                    type="button"
                    onClick={handleGoBackToStep1}
                    className="px-4 py-2 rounded-xl border border-slate-200 bg-[#F8FAFC] hover:bg-slate-100 text-xs font-bold text-[#64748B] hover:text-[#0F172A] transition cursor-pointer flex items-center gap-1.5"
                  >
                    <i className="fa-solid fa-arrow-left text-[10px]"></i>
                    <span>Back to Step 1</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isVerifying}
                    className="flex-1 sm:flex-initial px-7 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-serif font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isVerifying ? (
                      <>
                        <i className="fa-solid fa-circle-notch fa-spin text-xs"></i>
                        <span>Verifying Details...</span>
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-lock text-xs"></i>
                        <span>Verify &amp; Confirm Booking ($75)</span>
                      </>
                    )}
                  </button>
                  </div>
                </motion.form>
              )}

              {/* ================= STEP 3: CONFIRMATION PAGE ================= */}
              {currentStep === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="animate-fadeIn space-y-4 text-center py-2"
                >
                  {/* Green Success Badge */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center text-2xl sm:text-3xl mx-auto shadow-md animate-bounce">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block">Step 3: Confirmed</span>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0F172A]">
                      Appointment Successfully Confirmed!
                    </h2>
                    <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto">
                      Your appointment has been registered and verified. A confirmation receipt has been sent to <strong>{patientData.email}</strong>.
                    </p>
                  </div>

                  {/* Booking Reference Card */}
                  <div className="max-w-lg mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left space-y-2.5 shadow-xs">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <span className="text-xs text-[#64748B] font-medium">Booking ID:</span>
                      <strong className="text-xs font-mono font-bold text-[#0284C7] bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200">
                        {bookingId || 'CC-948271'}
                      </strong>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-[#64748B] block text-[10px]">Patient Name</span>
                        <strong className="text-[#0F172A]">{patientData.name || 'Patient'}</strong>
                      </div>
                      <div>
                        <span className="text-[#64748B] block text-[10px]">Specialist Doctor</span>
                        <strong className="text-[#0F172A]">{patientData.doctor}</strong>
                      </div>
                      <div>
                        <span className="text-[#64748B] block text-[10px]">Appointment Time</span>
                        <strong className="text-[#0F172A]">June {selectedDate}, 2026 at {selectedTime}</strong>
                      </div>
                      <div>
                        <span className="text-[#64748B] block text-[10px]">Payment Status</span>
                        <strong className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          <i className="fa-solid fa-circle-check text-[10px]"></i> Verified &amp; Paid
                        </strong>
                      </div>
                    </div>
                  </div>

                  {receiptDownloaded && (
                    <div className="max-w-md mx-auto p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-center gap-2">
                      <i className="fa-solid fa-circle-check text-emerald-600"></i>
                      <span>Digital confirmation receipt has been saved to your downloads.</span>
                    </div>
                  )}

                  {/* Action & Move Back Navigation Buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
                    {/* Option to move back to Step 2 */}
                    <button
                      type="button"
                      onClick={handleGoBackToStep2}
                      className="px-3.5 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-[#0284C7] transition cursor-pointer flex items-center gap-1"
                    >
                      <i className="fa-solid fa-arrow-left text-[10px]"></i>
                      <span>Back to Payment (Step 2)</span>
                    </button>

                    {/* Option to move back to Step 1 */}
                    <button
                      type="button"
                      onClick={handleGoBackToStep1}
                      className="px-3.5 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-[#64748B] hover:text-[#0F172A] transition cursor-pointer flex items-center gap-1"
                    >
                      <i className="fa-solid fa-pen text-[10px]"></i>
                      <span>Edit Booking Details (Step 1)</span>
                    </button>

                    {/* Download Receipt */}
                    <button
                      type="button"
                      onClick={handleDownloadReceipt}
                      className="px-4 py-1.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold shadow-xs hover:shadow-md transition cursor-pointer flex items-center gap-1.5"
                    >
                      <i className="fa-solid fa-download text-[10px]"></i>
                      <span>Download Receipt</span>
                    </button>

                    {/* Book Another Appointment */}
                    <button
                      type="button"
                      onClick={handleResetBooking}
                      className="px-4 py-1.5 rounded-xl bg-[#1B365D] hover:bg-[#13294B] text-white text-xs font-bold shadow-xs hover:shadow-md transition cursor-pointer flex items-center gap-1.5"
                    >
                      <i className="fa-solid fa-plus text-[10px]"></i>
                      <span>Book Another Slot</span>
                    </button>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </section>
    </div>
  );
}
