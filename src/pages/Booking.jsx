import React, { useState } from 'react';

export default function Booking() {
  const [patientData, setPatientData] = useState({
    name: '',
    email: '',
    reason: 'Select reason',
    message: '',
    paymentMethod: 'Select payment method'
  });
  const [selectedDate, setSelectedDate] = useState(9);
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const triggerConfirmation = () => {
    setIsConfirmed(true);
    alert('Payment processed! Your appointment is confirmed.');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    triggerConfirmation();
  };

  const dates = [
    null, 1, 9, 3, 4, 5, 6,
    14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27,
    28, 29, 30, 31
  ];

  const timeSlots = ['10:00 AM', '02:30 PM', '05:00 PM'];

  return (
    <div className="w-full flex-grow flex flex-col p-0 m-0">
      {/* APPOINTMENT RESERVATION SECTION (Centered Booking Container) */}
      <section className="w-full min-h-[calc(100vh-73px)] bg-gradient-to-br from-[#1B365D] via-[#13294B] to-[#0B1A30] text-white pt-6 sm:pt-8 pb-10 sm:pb-12 2xl:py-16 px-4 sm:px-6 lg:px-10 2xl:px-16 flex flex-col justify-center border-b border-white/10 relative overflow-hidden">
        <div className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-[72rem] w-full mx-auto space-y-5 sm:space-y-6 2xl:space-y-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center space-y-1.5 2xl:space-y-2.5">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-serif font-extrabold text-white tracking-tight">
              Appointment Reservation
            </h1>
            <div className="w-14 h-1 bg-gradient-to-r from-[#0284C7] to-[#38BDF8] rounded-full mx-auto"></div>
          </div>

          {/* CENTERED FORM & CALENDAR CONTAINER */}
          <div className="bg-white text-[#0F172A] rounded-3xl border border-slate-200 hover:border-[#0284C7] shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] transition-all duration-300 overflow-hidden p-5 sm:p-7 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
              
              {/* LEFT: Patient Details */}
              <div className="space-y-3.5">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-[#0284C7] uppercase tracking-wider block">Step 1</span>
                  <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0F172A]">Patient Details</h2>
                </div>
                
                <form className="space-y-2.5" onSubmit={handleFormSubmit}>
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Enter your full name" 
                      value={patientData.name}
                      onChange={(e) => setPatientData({ ...patientData, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-xs sm:text-sm placeholder:text-[#64748B]" 
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="Enter your email" 
                      value={patientData.email}
                      onChange={(e) => setPatientData({ ...patientData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-xs sm:text-sm placeholder:text-[#64748B]" 
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1">Consultation Reason</label>
                    <select 
                      value={patientData.reason}
                      onChange={(e) => setPatientData({ ...patientData, reason: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-xs sm:text-sm text-[#0F172A]"
                    >
                      <option value="Select reason">Select reason</option>
                      <option value="Obstetrician & Gynaecology">Obstetrician &amp; Gynaecology</option>
                      <option value="Ultrasound & Diagnostics">Ultrasound &amp; Diagnostics</option>
                      <option value="Pregnancy Management & Maternal Care">Pregnancy Management &amp; Maternal Care</option>
                      <option value="Physician & Diabetology">Physician &amp; Diabetology</option>
                      <option value="General Consultation">General Health Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1">Medical Notes (Optional)</label>
                    <textarea 
                      rows={2} 
                      placeholder="Brief details about symptoms or medical history" 
                      value={patientData.message}
                      onChange={(e) => setPatientData({ ...patientData, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-xs sm:text-sm placeholder:text-[#64748B] resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-1">
                    <button 
                      type="submit" 
                      className="w-full sm:w-auto bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold px-7 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 transform text-xs sm:text-sm cursor-pointer border border-transparent hover:border-slate-300 inline-flex items-center justify-center gap-2"
                    >
                      <i className="fa-solid fa-arrow-right text-xs"></i>
                      <span>Proceed to Confirm</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* RIGHT: Calendar & Payment Checkout */}
              <div className="space-y-4">
                
                {/* Calendar Section */}
                <div className="space-y-2">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-[#0284C7] uppercase tracking-wider block">Step 2</span>
                    <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0F172A]">Select Date &amp; Time</h2>
                  </div>

                  {/* Calendar Widget */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-3.5 shadow-xs">
                    {/* Month Header */}
                    <div className="flex justify-between items-center text-xs font-bold text-[#0F172A] mb-2 px-1">
                      <button type="button" className="text-[#64748B] hover:text-[#0F172A] p-0.5 cursor-pointer">
                        <i className="fa-solid fa-chevron-left text-[10px]"></i>
                      </button>
                      <span className="font-serif font-bold text-[#0F172A] text-xs">June 2026</span>
                      <button type="button" className="text-[#64748B] hover:text-[#0F172A] p-0.5 cursor-pointer">
                        <i className="fa-solid fa-chevron-right text-[10px]"></i>
                      </button>
                    </div>

                    {/* Days of Week */}
                    <div className="grid grid-cols-7 text-center text-[9px] font-semibold text-[#64748B] mb-1">
                      <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                    </div>

                    {/* Dates Grid */}
                    <div className="grid grid-cols-7 text-center text-[11px] gap-y-1 font-medium text-[#0F172A]">
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
                            className={`rounded-lg py-1 transition cursor-pointer ${
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
                    <div className="flex items-center gap-1.5 mt-2.5 pt-2.5 border-t border-slate-100">
                      {timeSlots.map((time) => {
                        const isSelected = selectedTime === time;
                        return (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`text-[10px] font-semibold px-2.5 py-1 rounded-lg transition cursor-pointer ${
                              isSelected
                                ? "bg-[#0284C7] text-white shadow-xs"
                                : "bg-[#F8FAFC] border border-slate-200 text-[#0284C7] hover:bg-[#0284C7] hover:text-white"
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Payment Checkout Section */}
                <div className="space-y-2 pt-1">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-[#0284C7] uppercase tracking-wider block">Step 3</span>
                    <h3 className="text-xs font-bold text-[#0F172A]">Payment &amp; Insurance Method</h3>
                  </div>
                  
                  <div>
                    <select 
                      value={patientData.paymentMethod}
                      onChange={(e) => setPatientData({ ...patientData, paymentMethod: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-xs text-[#0F172A]"
                    >
                      <option value="Select payment method">Select payment method</option>
                      <option value="Credit / Debit Card">Credit / Debit Card</option>
                      <option value="Pay at Clinic Reception">Pay at Clinic Reception</option>
                      <option value="Health Insurance Verification">Health Insurance Verification</option>
                      <option value="Online UPI / PayPal">Online UPI / PayPal</option>
                    </select>
                  </div>

                  <div>
                    <button 
                      type="button" 
                      onClick={triggerConfirmation} 
                      className="w-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold py-2.5 rounded-lg shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 transform text-xs sm:text-sm text-center cursor-pointer border border-transparent hover:border-slate-300 flex items-center justify-center gap-2"
                    >
                      <i className="fa-solid fa-lock text-xs"></i>
                      <span>Confirm &amp; Book Appointment</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>

            {/* Inline Confirmation Alert */}
            {isConfirmed && (
              <div className="mt-5 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-medium flex items-center justify-center gap-2.5 animate-fadeIn">
                <i className="fa-solid fa-circle-check text-emerald-600 text-base shrink-0"></i>
                <span>Appointment confirmed for June {selectedDate}, 2026 at {selectedTime}! A digital confirmation has been sent to your email.</span>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
