// src/components/Hero.jsx
import React from 'react';
import { ArrowDown, Utensils, ShoppingBag } from 'lucide-react';

export default function Hero({ onOpenBooking, onOpenMenu }) {
  const scrollToMenu = () => {
    if (onOpenMenu) {
      onOpenMenu();
    } else {
      const el = document.getElementById('signature-burgers');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen bg-[#03423d] bg-doodles pt-20 sm:pt-28 pb-12 sm:pb-20 overflow-hidden flex flex-col justify-center items-center">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[650px] lg:w-[800px] h-[320px] sm:h-[650px] lg:h-[800px] bg-[#0c5950]/30 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full text-center flex flex-col items-center">
        
        {/* HERO ARTWORK WRAPPER (100% faithful to the reference image) */}
        <div className="relative w-full max-w-[850px] flex flex-col items-center justify-center select-none">
          
          <div className="relative w-full aspect-[848/369] max-h-[500px] flex items-center justify-center">
            {/* The Authentic Hero Artwork */}
            <img
              src="/bjorbun/hero-reference.png"
              alt="Crafted Burgers With Premium Taste - Bjorbun"
              className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-[1.01]"
            />

            {/* INTERACTIVE ROTATING "RESERVE A TABLE" BADGE HOTSPOT */}
            <div
              onClick={onOpenBooking}
              className="absolute left-[33%] sm:left-[35%] top-[40%] sm:top-[38%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-24 sm:h-24 rounded-full cursor-pointer group z-20"
              title="Click to Reserve a Table"
            >
              {/* Spinning text overlay */}
              <div className="absolute inset-0 rounded-full animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#f5b731]/80 shadow-2xl flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full p-1">
                  <path
                    id="heroBadgePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[10px] font-bold tracking-[0.14em] fill-[#082119] uppercase">
                    <textPath href="#heroBadgePath">
                      • RESERVE A TABLE • BJORBUN •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#082119] text-[#f6e7b9] flex items-center justify-center">
                  <Utensils className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* HERO ACTION BUTTONS (Responsive & Touch-Friendly) */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 z-20">
          <button
            onClick={scrollToMenu}
            className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#f6e7b9] hover:bg-[#f2b93b] text-[#082119] font-display text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Order Online Now</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border-2 border-[#f6e7b9] text-[#f6e7b9] hover:bg-[#f6e7b9] hover:text-[#082119] font-display text-xs sm:text-sm tracking-wider uppercase shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Utensils className="w-4 h-4" />
            <span>Reserve A Table</span>
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToMenu}
          className="mt-6 sm:mt-8 flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#f6e7b9]/70 hover:text-[#f2b93b] transition-colors"
        >
          <span>Explore Menu</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>

      </div>
    </section>
  );
}
