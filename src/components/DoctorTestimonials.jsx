import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function DoctorTestimonials({
  doctorName = "Doctor",
  title,
  subtitle = "PATIENT FEEDBACK",
  bookingUrl = "/booking",
  testimonials = []
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  const touchStartX = useRef(null);

  // Track window resize to adjust visible card count
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive visible count: 1 on mobile (< 768px), 2 on tablet/ipad mini (768px - 1023px), 3 on laptop (1024px - 1535px), 4 on 2k+ (>= 1536px)
  const visibleCount = windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : windowWidth < 1536 ? 3 : 4;

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Keyboard left/right arrow key navigation for laptop / desktop screens
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [testimonials.length]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  if (!testimonials || testimonials.length === 0) return null;

  // Compute circular slice of testimonials to display
  const visibleItems = [];
  for (let i = 0; i < visibleCount; i++) {
    const idx = (currentIndex + i) % testimonials.length;
    visibleItems.push({ ...testimonials[idx], originalIndex: idx });
  }

  const sectionTitle = title || `Patient Testimonials for ${doctorName}`;

  return (
    <section className="w-full bg-[#F8FAFC] py-8 sm:py-12 2xl:py-0 doctor-testimonials-2k px-4 sm:px-8 lg:px-14 2xl:px-20 border-b border-slate-200 flex flex-col justify-center overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-[94rem] 3xl:max-w-[105rem] w-full mx-auto space-y-3.5 sm:space-y-5 2xl:space-y-2.5">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-center space-y-1 sm:space-y-1.5 2xl:space-y-0.5"
        >
          <span className="text-xs 2xl:text-[11px] font-bold text-[#0284C7] uppercase tracking-widest block">
            {subtitle}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-2xl font-serif font-bold text-[#0F172A] tracking-tight">
            {sectionTitle}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#0284C7] to-[#1B365D] rounded-full mx-auto"></div>
        </motion.div>

        {/* Carousel Container with Left & Right Arrows */}
        <div 
          className="relative flex items-center gap-2 sm:gap-3 2xl:gap-4 w-full"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="group shrink-0 w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full bg-white hover:bg-[#0284C7] text-slate-700 hover:text-white border border-slate-300 hover:border-[#0284C7] shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/50 active:scale-90 cursor-pointer z-10"
          >
            <svg className="w-4 h-4 text-slate-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards Viewport */}
          <div className="flex-1 min-w-0 overflow-hidden py-1">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`${currentIndex}-${visibleCount}`}
                custom={direction}
                variants={{
                  enter: (dir) => ({
                    x: dir > 0 ? 35 : -35,
                    opacity: 0,
                  }),
                  center: {
                    x: 0,
                    opacity: 1,
                  },
                  exit: (dir) => ({
                    x: dir > 0 ? -35 : 35,
                    opacity: 0,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: "easeInOut" }}
                className={`grid gap-4 sm:gap-5 lg:gap-6 2xl:gap-4 ${
                  visibleCount === 1 ? 'grid-cols-1' : visibleCount === 2 ? 'grid-cols-2' : visibleCount === 3 ? 'grid-cols-3' : 'grid-cols-4'
                } items-stretch w-full`}
              >
                {visibleItems.map((item, idx) => (
                  <div
                    key={`${item.originalIndex}-${idx}`}
                    className="bg-white rounded-2xl border border-slate-200 hover:border-[#0284C7] shadow-[0_8px_25px_-4px_rgba(2,132,199,0.16)] hover:shadow-[0_16px_35px_-5px_rgba(2,132,199,0.25)] hover:-translate-y-1 transition-all duration-300 p-3 sm:p-4 2xl:p-3.5 flex flex-row items-stretch gap-3 sm:gap-4 group h-full min-h-[10.5rem] 2xl:min-h-[9rem]"
                  >
                    {/* Left: Patient Portrait Image */}
                    <div className="w-24 sm:w-28 md:w-24 lg:w-28 xl:w-32 2xl:w-28 shrink-0 rounded-xl overflow-hidden self-stretch relative bg-gradient-to-br from-sky-50 to-slate-100 border border-slate-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        loading="eager"
                      />
                    </div>

                    {/* Right: Feedback Content (Centered on vertical axis for 2k screens) */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between 2xl:justify-center 2xl:gap-2 py-0.5">
                      <div className="2xl:my-auto flex flex-col 2xl:justify-center">
                        {/* Star Rating & Verified Badge */}
                        <div className="flex items-center justify-between gap-1 mb-1.5 sm:mb-2 2xl:mb-1.5">
                          <div className="flex text-amber-400 gap-0.5 text-xs 2xl:text-[10px]">
                            {[...Array(item.rating || 5)].map((_, i) => (
                              <svg key={i} className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-[9px] sm:text-[10px] 2xl:text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1 shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Verified
                          </span>
                        </div>

                        {/* Testimonial Quote */}
                        <p className="text-[#334155] text-xs sm:text-[13px] 2xl:text-[11.5px] leading-relaxed italic line-clamp-3 sm:line-clamp-4 2xl:line-clamp-4 font-sans 2xl:my-0.5">
                          "{item.text}"
                        </p>
                      </div>

                      {/* Patient Name & Condition / Role */}
                      <div className="pt-2 2xl:pt-1.5 mt-2 2xl:mt-1 border-t border-slate-100 flex items-center justify-between shrink-0">
                        <div className="min-w-0">
                          <h4 className="font-serif font-bold text-xs sm:text-sm 2xl:text-xs text-[#0F172A] leading-snug truncate">
                            {item.name}
                          </h4>
                          <p className="text-[10px] sm:text-xs 2xl:text-[10px] text-[#0284C7] font-semibold truncate">
                            {item.role}
                          </p>
                        </div>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-sky-200 shrink-0 ml-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="group shrink-0 w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full bg-white hover:bg-[#0284C7] text-slate-700 hover:text-white border border-slate-300 hover:border-[#0284C7] shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/50 active:scale-90 cursor-pointer z-10"
          >
            <svg className="w-4 h-4 text-slate-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Carousel Pagination Dots & Keyboard Hint */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-0.5">
          {/* Dots */}
          <div className="flex items-center gap-1.5 mx-auto sm:mx-0">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === i
                    ? 'w-6 h-2 bg-[#0284C7]'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Navigation Hint on Laptop / Desktop */}
          <div className="hidden lg:flex items-center gap-1.5 text-[11px] 2xl:text-[10px] text-slate-500 font-medium">
            <span className="text-slate-400">Use</span>
            <kbd className="px-1.5 py-0.5 text-[10px] font-semibold text-slate-700 bg-white border border-slate-300 rounded shadow-xs">←</kbd>
            <kbd className="px-1.5 py-0.5 text-[10px] font-semibold text-slate-700 bg-white border border-slate-300 rounded shadow-xs">→</kbd>
            <span className="text-slate-400">arrow keys</span>
          </div>

          {/* Counter info */}
          <div className="text-[11px] 2xl:text-[10px] text-slate-500 font-semibold mx-auto sm:mx-0">
            <span>{currentIndex + 1}</span> of <span>{testimonials.length}</span> reviews
          </div>
        </div>

        {/* Quick CTA button to book appointment */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center pt-0.5"
        >
          <Link 
            to={bookingUrl} 
            className="inline-flex items-center gap-2 bg-[#1B365D] hover:bg-[#13294B] text-white font-serif font-bold px-6 py-2.5 2xl:py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 transform text-xs border border-transparent hover:border-slate-300"
          >
            <i className="fa-solid fa-calendar-check"></i>
            <span>Book Appointment with {doctorName}</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
