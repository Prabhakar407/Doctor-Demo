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
      {/* APPOINTMENT RESERVATION SECTION (Blue Background, Complete Screen Fit) */}
      <section className="w-full min-h-[calc(100vh-73px)] lg:h-[calc(100vh-73px)] bg-gradient-to-br from-[#1B365D] via-[#13294B] to-[#0B1A30] text-white pt-4 sm:pt-6 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-10 flex flex-col justify-center border-b border-white/10 relative overflow-hidden">
        <div className="max-w-6xl w-full mx-auto space-y-4 sm:space-y-5 relative z-10">
          
          {/* Section Header */}
          <div className="text-center space-y-1.5">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-white tracking-tight">
              Appointment Reservation
            </h1>
            <div className="w-14 h-1 bg-gradient-to-r from-[#0284C7] to-[#38BDF8] rounded-full mx-auto"></div>
          </div>

          {/* MAIN CONTAINER WITH FORM, CALENDAR, & CONFIRMATION */}
          <div className="grid lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
            
            {/* Left & Middle: Form + Calendar Container */}
            <div className="lg:col-span-8 bg-white text-[#0F172A] rounded-3xl border border-slate-200 hover:border-[#0284C7] shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] transition-all duration-300 overflow-hidden p-5 sm:p-6">
              <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
                
                {/* LEFT: Patient Details */}
                <div className="space-y-3">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-[#0284C7] uppercase tracking-wider block">Step 1</span>
                    <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0F172A]">Patient Details</h2>
                  </div>
                  
                  <form className="space-y-2.5" onSubmit={handleFormSubmit}>
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-0.5">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Enter your full name" 
                        value={patientData.name}
                        onChange={(e) => setPatientData({ ...patientData, name: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-xs sm:text-sm placeholder:text-[#64748B]" 
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-0.5">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="Enter your email" 
                        value={patientData.email}
                        onChange={(e) => setPatientData({ ...patientData, email: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-xs sm:text-sm placeholder:text-[#64748B]" 
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-0.5">Consultation Reason</label>
                      <select 
                        value={patientData.reason}
                        onChange={(e) => setPatientData({ ...patientData, reason: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-xs sm:text-sm text-[#0F172A]"
                      >
                        <option value="Select reason">Select reason</option>
                        <option value="General Consultation">General Consultation</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Orthopedics">Orthopedics</option>
                        <option value="Pediatrics">Pediatrics</option>
                        <option value="Dermatology">Dermatology</option>
                        <option value="Diagnostics">Diagnostics</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-0.5">Medical Notes (Optional)</label>
                      <textarea 
                        rows={2} 
                        placeholder="Brief details about symptoms" 
                        value={patientData.message}
                        onChange={(e) => setPatientData({ ...patientData, message: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-xs sm:text-sm placeholder:text-[#64748B] resize-none"
                      ></textarea>
                    </div>

                    <div className="pt-0.5">
                      <button type="submit" className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold px-6 py-2 rounded-xl shadow-md transition text-xs sm:text-sm cursor-pointer">
                        <i className="fa-solid fa-arrow-right mr-1.5"></i> Proceed to Confirm
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
                      <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0F172A]">Select Date</h2>
                    </div>

                    {/* Calendar Widget */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-xs">
                      {/* Month Header */}
                      <div className="flex justify-between items-center text-xs font-bold text-[#0F172A] mb-2 px-1">
                        <button type="button" className="text-[#64748B] hover:text-[#0F172A] p-0.5"><i className="fa-solid fa-chevron-left text-[10px]"></i></button>
                        <span className="font-serif font-bold text-[#0F172A] text-xs">June 2026</span>
                        <button type="button" className="text-[#64748B] hover:text-[#0F172A] p-0.5"><i className="fa-solid fa-chevron-right text-[10px]"></i></button>
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
                              className={`rounded-lg py-0.5 transition ${
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
                      <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-slate-100">
                        {timeSlots.map((time) => {
                          const isSelected = selectedTime === time;
                          return (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setSelectedTime(time)}
                              className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-lg transition ${
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
                  <div className="space-y-2">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-bold text-[#0284C7] uppercase tracking-wider block">Step 3</span>
                      <h3 className="text-xs font-bold text-[#0F172A]">Payment & Insurance</h3>
                    </div>
                    
                    <div>
                      <select 
                        value={patientData.paymentMethod}
                        onChange={(e) => setPatientData({ ...patientData, paymentMethod: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-xs text-[#0F172A]"
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
                        className="w-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-serif font-bold py-2.5 rounded-xl shadow-md transition text-xs sm:text-sm text-center cursor-pointer"
                      >
                        <i className="fa-solid fa-lock mr-1.5"></i> Confirm & Book Appointment
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* RIGHT: Confirmation Card Matching Mockup with Arrow Flow */}
            <div className="lg:col-span-4 bg-white text-[#0F172A] rounded-3xl border border-slate-200 hover:border-[#0284C7] shadow-[0_12px_30px_-5px_rgba(2,132,199,0.3)] hover:shadow-[0_20px_45px_-5px_rgba(2,132,199,0.45)] transition-all duration-300 p-6 sm:p-7 text-center space-y-3 relative flex flex-col justify-center">
              <div className="hidden lg:block absolute -left-5 top-1/2 -translate-y-1/2 text-[#38BDF8] text-2xl animate-pulse">
                <i className="fa-solid fa-arrow-right"></i>
              </div>

              <div className="w-14 h-14 mx-auto rounded-full bg-sky-50 border-2 border-[#0284C7] flex items-center justify-center text-[#0284C7] text-2xl shadow-sm">
                <i className="fa-solid fa-check"></i>
              </div>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0F172A]">Confirmation Status</h2>

              <p className="text-xs text-[#64748B] leading-relaxed">
                Your appointment booking request will be instantly processed and sent to your email.
              </p>

              <div className="space-y-1.5 max-w-[180px] mx-auto py-1">
                <div className="h-1.5 bg-slate-100 rounded-full w-full"></div>
                <div className="h-1.5 bg-slate-100 rounded-full w-2/3 mx-auto"></div>
              </div>

              {isConfirmed && (
                <div className="text-xs text-[#0284C7] bg-[#F8FAFC] p-3 rounded-xl border border-[#0284C7]/30 mt-1 font-medium animate-fadeIn">
                  <i className="fa-solid fa-circle-check text-green-500 mr-1.5"></i> Appointment confirmed for June {selectedDate} at {selectedTime}!
                </div>
              )}
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
