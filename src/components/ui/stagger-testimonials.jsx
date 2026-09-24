"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const defaultTestimonials = [
  {
    tempId: 0,
    testimonial: "My favorite solution in the market. We work 5x faster with ClinicCare.",
    by: "Alex, Verified Patient",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    tempId: 1,
    testimonial: "I'm confident my health is in safe hands with the specialists here.",
    by: "Dan, Cardiology Patient",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
  },
  {
    tempId: 2,
    testimonial: "Detailed consultation, empathetic care, and seamless digital booking!",
    by: "Stephanie, Maternal Care",
    imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
  },
  {
    tempId: 3,
    testimonial: "The diagnosis was exceptionally accurate and the recovery plan worked wonders.",
    by: "Marie, General Health",
    imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
  },
  {
    tempId: 4,
    testimonial: "If I could give 11 stars to the doctors and clinical staff, I would give 12.",
    by: "Andre, Preventive Care",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
  },
  {
    tempId: 5,
    testimonial: "Prompt attention, state-of-the-art facility, and genuine care from the doctors.",
    by: "Jeremy, Pediatric Care",
    imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
  }
];

const TestimonialCard = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out select-none",
        isCenter 
          ? "z-20 bg-[#1B365D]/90 backdrop-blur-md text-white border-[#0284C7] shadow-[0_20px_45px_-10px_rgba(2,132,199,0.35)]" 
          : "z-10 bg-white/90 dark:bg-slate-100 text-slate-800 border-slate-200 hover:border-[#0284C7]/50 shadow-md"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -30 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(2, 132, 199, 0.4)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-slate-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc || testimonial.image}
        alt={`${testimonial.by ? testimonial.by.split(',')[0] : testimonial.name}`}
        className="mb-4 h-14 w-12 rounded-lg bg-slate-200 object-cover object-top border border-white/20"
        style={{
          boxShadow: "3px 3px 0px rgba(0,0,0,0.15)"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-lg font-medium leading-snug line-clamp-4",
        isCenter ? "text-white" : "text-slate-800"
      )}>
        "{testimonial.testimonial || testimonial.text}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic truncate",
        isCenter ? "text-sky-300" : "text-slate-500"
      )}>
        - {testimonial.by || testimonial.name}
      </p>
    </div>
  );
};

export const StaggerTestimonials = ({ items = defaultTestimonials, height = 520 }) => {
  const [cardSize, setCardSize] = useState(340);
  const [testimonialsList, setTestimonialsList] = useState(items);

  useEffect(() => {
    setTestimonialsList(items);
  }, [items]);

  const handleMove = (steps) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth >= 1536) {
        setCardSize(360);
      } else if (window.innerWidth >= 1024) {
        setCardSize(320);
      } else if (window.innerWidth >= 768) {
        setCardSize(280);
      } else {
        setCardSize(260);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-transparent"
      style={{ height }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId ?? index}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3 z-30">
        <button
          type="button"
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full text-slate-700 transition-colors shadow-md",
            "bg-white border border-slate-300 hover:bg-[#0284C7] hover:text-white hover:border-[#0284C7]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] focus-visible:ring-offset-2 cursor-pointer"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full text-slate-700 transition-colors shadow-md",
            "bg-white border border-slate-300 hover:bg-[#0284C7] hover:text-white hover:border-[#0284C7]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] focus-visible:ring-offset-2 cursor-pointer"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default StaggerTestimonials;
