import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Staggered Card for iPad Mini, Laptop, and 2K+ screens (with smoothly rounded corners)
const StaggerTestimonialCard = ({
  position,
  testimonial,
  handleMove,
  cardSize,
  is2kOrHigher = false,
}) => {
  const isCenter = position === 0;
  const lift = isCenter 
    ? (is2kOrHigher ? -32 : -65) 
    : (position % 2 ? (is2kOrHigher ? 8 : 15) : (is2kOrHigher ? -8 : -15));
  const tilt = isCenter ? 0 : (position % 2 ? 2.5 : -2.5);
  const horizontalSpacing = is2kOrHigher 
    ? (cardSize >= 315 ? 260 : 240) 
    : (cardSize / 1.5);

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-6 sm:p-7 lg:p-8 2xl:p-4.5 2xl:pt-3.5 3xl:p-5.5 transition-all duration-500 ease-in-out select-none rounded-xl md:rounded-2xl",
        isCenter
          ? "z-20 bg-white text-[#0F172A] border-slate-200 shadow-[0_20px_45px_-10px_rgba(2,132,199,0.35)] ring-1 ring-sky-500/20"
          : "z-0 bg-[#1B365D] text-white border-[#13294B] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)] hover:border-[#0284C7]/60"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        borderRadius: is2kOrHigher ? '1rem' : '1.25rem',
        transform: `
          translate(-50%, -50%) 
          translateX(${horizontalSpacing * position}px)
          translateY(${lift}px)
          rotate(${tilt}deg)
        `
      }}
    >
      {/* Patient Avatar Photo */}
      <img
        src={testimonial.image || testimonial.imgSrc}
        alt={`${(testimonial.name || testimonial.by || '').split(',')[0]}`}
        className={cn(
          "mb-3.5 2xl:mb-2 h-14 w-12 2xl:h-10.5 2xl:w-9.5 3xl:h-12 3xl:w-10 rounded-lg object-cover object-top border shrink-0",
          isCenter ? "bg-slate-100 border-slate-200" : "bg-slate-800 border-white/20"
        )}
        style={{
          boxShadow: isCenter ? "3px 3px 0px rgba(0,0,0,0.12)" : "3px 3px 0px rgba(0,0,0,0.3)"
        }}
        loading="eager"
      />

      {/* Testimonial Quote - Vertically centered on 2K/3K with enhanced readability */}
      <div className="2xl:my-auto 2xl:py-0.5 2xl:flex 2xl:items-center">
        <h3
          className={cn(
            "text-base sm:text-lg lg:text-xl 2xl:text-[14px] 2xl:leading-snug 3xl:text-base 3xl:leading-relaxed font-medium leading-snug line-clamp-3 2xl:line-clamp-4",
            isCenter ? "text-[#0F172A]" : "text-white"
          )}
        >
          "{testimonial.text || testimonial.testimonial}"
        </h3>
      </div>

      {/* Author Name and Role */}
      <p
        className={cn(
          "absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 2xl:bottom-3.5 2xl:left-4.5 2xl:right-4.5 3xl:bottom-4.5 3xl:left-5.5 3xl:right-5.5 mt-2 text-sm 2xl:text-xs 3xl:text-sm italic truncate",
          isCenter ? "text-[#475569]" : "text-sky-200"
        )}
      >
        - {testimonial.name || testimonial.by}
        {testimonial.role ? `, ${testimonial.role}` : ''}
      </p>
    </div>
  );
};

export default function DoctorTestimonials({
  doctorName = "Doctor",
  title,
  subtitle = "PATIENT FEEDBACK",
  bookingUrl = "/booking",
  testimonials = []
}) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  // Responsive card size based on viewport
  const [cardSize, setCardSize] = useState(340);

  // Mobile state (for screens < 768px)
  const [mobileIndex, setMobileIndex] = useState(0);
  const [mobileDirection, setMobileDirection] = useState(1);
  const touchStartX = useRef(null);

  // Track window resizing
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setWindowWidth(w);
      if (w >= 2560) {
        setCardSize(330);
      } else if (w >= 1920) {
        setCardSize(315);
      } else if (w >= 1536) {
        setCardSize(295);
      } else if (w >= 1024) {
        setCardSize(340);
      } else if (w >= 768) {
        setCardSize(310);
      } else {
        setCardSize(280);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Staggered list with 7 symmetric items for seamless loop: positions [-3, -2, -1, 0, 1, 2, 3]
  const [staggerList, setStaggerList] = useState([]);

  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;
    let items = [...testimonials];
    while (items.length < 7) {
      items = [...items, ...testimonials];
    }
    setStaggerList(
      items.slice(0, 7).map((item, idx) => ({
        ...item,
        tempId: idx,
      }))
    );
  }, [testimonials]);

  // Smooth rotation for staggered cards (pure CSS transitions, 100% immune to getting stuck)
  const handleMove = (steps) => {
    if (steps === 0) return;
    setStaggerList((prevList) => {
      const newList = [...prevList];
      if (steps > 0) {
        for (let i = steps; i > 0; i--) {
          const item = newList.shift();
          if (item) newList.push({ ...item, tempId: Math.random() });
        }
      } else {
        for (let i = steps; i < 0; i++) {
          const item = newList.pop();
          if (item) newList.unshift({ ...item, tempId: Math.random() });
        }
      }
      return newList;
    });
  };

  // Mobile navigation handlers (< 768px)
  const handleMobilePrev = () => {
    setMobileDirection(-1);
    setMobileIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleMobileNext = () => {
    setMobileDirection(1);
    setMobileIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Keyboard left/right arrow key navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        if (windowWidth < 768) {
          handleMobilePrev();
        } else {
          handleMove(-1);
        }
      } else if (e.key === 'ArrowRight') {
        if (windowWidth < 768) {
          handleMobileNext();
        } else {
          handleMove(1);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [windowWidth, testimonials.length]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 40) {
      if (windowWidth < 768) {
        handleMobileNext();
      } else {
        handleMove(1);
      }
    } else if (diff < -40) {
      if (windowWidth < 768) {
        handleMobilePrev();
      } else {
        handleMove(-1);
      }
    }
    touchStartX.current = null;
  };

  if (!testimonials || testimonials.length === 0) return null;

  const sectionTitle = title || `Patient Testimonials for ${doctorName}`;
  const is2kOrHigher = windowWidth >= 1536;
  const isLaptop = windowWidth >= 1024 && windowWidth < 1536;
  const staggerHeight = windowWidth >= 2560 ? 370 : windowWidth >= 1920 ? 355 : windowWidth >= 1536 ? 340 : isLaptop ? 490 : 580;

  // =========================================================================
  // MOBILE VIEW (< 768px): Exact original mobile card preserved without alteration
  // =========================================================================
  if (windowWidth < 768) {
    const mobileItem = testimonials[mobileIndex] || testimonials[0];

    return (
      <section className="w-full bg-white py-8 sm:py-12 px-2 sm:px-8 border-b border-slate-200 flex flex-col justify-center overflow-hidden">
        <div className="max-w-6xl w-full mx-auto space-y-3.5 sm:space-y-5">
          {/* Section Header */}
          <div className="text-center space-y-1 sm:space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A] tracking-tight">
              {sectionTitle}
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#0284C7] to-[#1B365D] rounded-full mx-auto"></div>
          </div>

          {/* Carousel Container with Left & Right Arrows */}
          <div
            className="relative flex items-center gap-1.5 sm:gap-3 w-full"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Left Arrow Button */}
            <button
              type="button"
              onClick={handleMobilePrev}
              aria-label="Previous Testimonial"
              className="group shrink-0 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-[#0284C7] text-slate-700 hover:text-white border border-slate-300 hover:border-[#0284C7] shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/50 active:scale-90 cursor-pointer z-10"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-slate-700 group-hover:text-white transition-colors" />
            </button>

            {/* Mobile Card */}
            <div className="flex-1 min-w-0 overflow-hidden py-1">
              <motion.div
                key={mobileIndex}
                initial={{ x: mobileDirection > 0 ? 35 : -35, opacity: 0.9 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <div className="bg-white rounded-xl border border-slate-200 hover:border-[#0284C7] shadow-[0_8px_25px_-4px_rgba(2,132,199,0.16)] hover:shadow-[0_16px_35px_-5px_rgba(2,132,199,0.25)] p-2.5 sm:p-4 flex flex-row items-stretch gap-2.5 sm:gap-4 group h-full min-h-[10rem]">
                  {/* Left: Patient Portrait Image */}
                  <div className="w-20 min-[380px]:w-24 sm:w-28 shrink-0 rounded-lg overflow-hidden self-stretch relative bg-gradient-to-br from-sky-50 to-slate-100 border border-slate-200">
                    <img
                      src={mobileItem.image}
                      alt={mobileItem.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      loading="eager"
                    />
                  </div>

                  {/* Right: Feedback Content */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                    <div>
                      {/* Star Rating & Verified Badge */}
                      <div className="flex items-center justify-between gap-1 mb-1 sm:mb-2">
                        <div className="flex text-amber-400 gap-0.5 text-xs">
                          {[...Array(mobileItem.rating || 5)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-[8px] sm:text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 sm:px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1 shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Verified
                        </span>
                      </div>

                      {/* Testimonial Quote */}
                      <p className="text-[#334155] text-[11px] sm:text-[13px] leading-relaxed italic line-clamp-3 sm:line-clamp-4 font-sans break-words">
                        "{mobileItem.text}"
                      </p>
                    </div>

                    {/* Patient Name & Condition / Role */}
                    <div className="pt-1.5 sm:pt-2 mt-1 sm:mt-2 border-t border-slate-100 flex items-center justify-between shrink-0">
                      <div className="min-w-0">
                        <h4 className="font-serif font-bold text-xs sm:text-sm text-[#0F172A] leading-snug truncate">
                          {mobileItem.name}
                        </h4>
                        <p className="text-[10px] sm:text-xs text-[#0284C7] font-semibold truncate">
                          {mobileItem.role}
                        </p>
                      </div>
                      <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-sky-200 shrink-0 ml-1.5 sm:ml-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Arrow Button */}
            <button
              type="button"
              onClick={handleMobileNext}
              aria-label="Next Testimonial"
              className="group shrink-0 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-[#0284C7] text-slate-700 hover:text-white border border-slate-300 hover:border-[#0284C7] shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/50 active:scale-90 cursor-pointer z-10"
            >
              <ChevronRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-slate-700 group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Dots and Counter */}
          <div className="flex items-center justify-between gap-2 pt-0.5">
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setMobileDirection(i > mobileIndex ? 1 : -1);
                    setMobileIndex(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    mobileIndex === i
                      ? 'w-6 h-2 bg-[#0284C7]'
                      : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
            <div className="text-[11px] text-slate-500 font-semibold">
              <span>{mobileIndex + 1}</span> of <span>{testimonials.length}</span> reviews
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center pt-0.5">
            <Link
              to={bookingUrl}
              className="inline-flex items-center gap-2 bg-[#1B365D] hover:bg-[#13294B] text-white font-serif font-bold px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 transform text-xs"
            >
              <i className="fa-solid fa-calendar-check"></i>
              <span>Book Appointment with {doctorName}</span>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // =========================================================================
  // IPAD MINI, LAPTOP & 2K+ VIEW (>= 768px): Staggered Arc Testimonials
  // - White section background
  // - Centre card: White background with dark text
  // - Other cards: Blue background with white text
  // - 2K/3K screens: Precisely fitted to 52% of (100vh - 72px) with zero cutoff or overlapping
  // =========================================================================
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-0 2xl:py-2 doctor-testimonials-2k doctor-testimonials-laptop px-4 sm:px-8 lg:px-14 2xl:px-20 3xl:px-24 border-b border-slate-200 flex flex-col justify-center overflow-hidden relative">
      <div className="max-w-6xl 2xl:max-w-[96rem] 3xl:max-w-[110rem] w-full mx-auto h-full flex flex-col justify-between 2xl:justify-between items-center py-2 lg:py-0 2xl:py-1">
        
        {/* Section Header */}
        <div className="text-center space-y-1.5 lg:space-y-1 2xl:space-y-1 shrink-0 pt-0 2xl:pt-2 3xl:pt-3">
          <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-3xl 3xl:text-4xl font-serif font-bold text-[#0F172A] tracking-tight">
            {sectionTitle}
          </h2>
          <div className="w-14 2xl:w-12 h-1 2xl:h-0.5 bg-gradient-to-r from-[#0284C7] to-[#1B365D] rounded-full mx-auto"></div>
        </div>

        {/* Stagger Testimonial Arc Showcase */}
        <div
          className="relative w-full overflow-hidden bg-transparent select-none"
          style={{ height: staggerHeight }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {staggerList.map((testimonial, index) => {
            const half = Math.floor(staggerList.length / 2);
            const position = index - half;
            return (
              <StaggerTestimonialCard
                key={testimonial.tempId ?? index}
                testimonial={testimonial}
                handleMove={handleMove}
                position={position}
                cardSize={cardSize}
                is2kOrHigher={is2kOrHigher}
              />
            );
          })}

          {/* Square Navigation Buttons (Left & Right) with rounded corners */}
          <div className="absolute bottom-4 2xl:bottom-1 left-1/2 flex -translate-x-1/2 gap-2 z-30">
            <button
              type="button"
              onClick={() => handleMove(-1)}
              className={cn(
                "flex h-12 w-12 sm:h-14 sm:w-14 2xl:h-8 2xl:w-8 items-center justify-center text-xl sm:text-2xl 2xl:text-base transition-all duration-200 rounded-lg sm:rounded-xl 2xl:rounded-md",
                "bg-white border-2 border-slate-300 hover:bg-[#1B365D] hover:text-white hover:border-[#1B365D] text-[#1B365D] cursor-pointer active:scale-95 shadow-sm",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] focus-visible:ring-offset-2"
              )}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 2xl:w-4 2xl:h-4" />
            </button>
            <button
              type="button"
              onClick={() => handleMove(1)}
              className={cn(
                "flex h-12 w-12 sm:h-14 sm:w-14 2xl:h-8 2xl:w-8 items-center justify-center text-xl sm:text-2xl 2xl:text-base transition-all duration-200 rounded-lg sm:rounded-xl 2xl:rounded-md",
                "bg-white border-2 border-slate-300 hover:bg-[#1B365D] hover:text-white hover:border-[#1B365D] text-[#1B365D] cursor-pointer active:scale-95 shadow-sm",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] focus-visible:ring-offset-2"
              )}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 2xl:w-4 2xl:h-4" />
            </button>
          </div>
        </div>

        {/* Quick CTA button to book appointment - Moved more upward on 2K/3K screens closer to left/right arrow keys */}
        <div className="text-center shrink-0 2xl:pt-0 2xl:pb-0 2xl:-mt-7 2xl:-translate-y-6 3xl:-mt-9 3xl:-translate-y-8">
          <Link
            to={bookingUrl}
            className="inline-flex items-center gap-2 bg-[#1B365D] hover:bg-[#13294B] text-white font-serif font-bold px-7 py-3 2xl:py-2 2xl:px-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 transform text-xs sm:text-sm 2xl:text-xs 3xl:text-sm border border-transparent hover:border-slate-300"
          >
            <i className="fa-solid fa-calendar-check"></i>
            <span>Book Appointment with {doctorName}</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
