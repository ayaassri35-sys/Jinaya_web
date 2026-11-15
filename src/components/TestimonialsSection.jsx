// src/components/TestimonialsSection.jsx
import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/bjorbunData';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="relative bg-[#0e372b] bg-doodles py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADING */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f6e7b9] tracking-wider mb-4 drop-shadow-sm">
            WHAT OUR CUSTOMERS SAY
          </h2>
        </div>

        {/* TESTIMONIAL CARD (Matches design) */}
        <div className="relative bg-[#09251d] border border-[#f6e7b9]/25 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col items-center text-center">
          
          {/* Customer Photo */}
          <div className="relative w-48 sm:w-64 h-36 sm:h-44 rounded-2xl overflow-hidden mb-6 sm:mb-8 shadow-xl border-2 border-[#f6e7b9]/30">
            <img
              src={current.avatar}
              alt={current.name}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1.5 mb-4">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#f2b93b] text-[#f2b93b]" />
            ))}
          </div>

          {/* Quote Text */}
          <blockquote className="font-serif italic text-base sm:text-xl md:text-2xl text-[#f6e7b9] max-w-2xl leading-relaxed mb-6">
            {current.quote}
          </blockquote>

          {/* Author Name */}
          <cite className="not-italic">
            <span className="block font-display text-lg sm:text-xl text-[#f6e7b9] tracking-wider mb-0.5">
              {current.name}
            </span>
            <span className="text-xs sm:text-sm text-[#f6e7b9]/60 font-semibold tracking-wide">
              {current.role}
            </span>
          </cite>

          {/* SLIDER CONTROLS & DOTS */}
          <div className="flex items-center gap-6 mt-8">
            <button
              onClick={prevReview}
              className="p-2.5 rounded-full border border-[#f6e7b9]/30 text-[#f6e7b9] hover:bg-[#f6e7b9] hover:text-[#0e372b] transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-[#f2b93b]'
                      : 'w-2.5 bg-[#f6e7b9]/30 hover:bg-[#f6e7b9]/60'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="p-2.5 rounded-full border border-[#f6e7b9]/30 text-[#f6e7b9] hover:bg-[#f6e7b9] hover:text-[#0e372b] transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
