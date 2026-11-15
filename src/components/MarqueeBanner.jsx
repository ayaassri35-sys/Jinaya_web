// src/components/MarqueeBanner.jsx
import React from 'react';

export default function MarqueeBanner() {
  const items = [
    'OFF ON YOUR FIRST VISIT',
    'BJORBUN',
    'ONE BITE ADDICTED',
    'BURGERS',
    'TASTEY',
    'SUPER JUICY',
    'FLAT 20% OFF',
    '100% SMASHED PATTY',
    'FRESH INGREDIENTS',
  ];

  return (
    <div className="relative w-full overflow-hidden py-4 sm:py-6 select-none z-20">
      {/* Tilted / Shaped Cream Banner Container */}
      <div className="relative bg-[#f6e7b9] shadow-xl py-3 sm:py-4 border-y-2 border-[#e3d19b] transform -rotate-1 scale-[1.02]">
        
        {/* Soft edge fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0e372b] to-transparent z-10"></div>
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0e372b] to-transparent z-10"></div>

        {/* Scrolling items track */}
        <div className="animate-marquee flex items-center">
          {[...items, ...items, ...items, ...items].map((text, idx) => (
            <div key={idx} className="flex items-center gap-4 sm:gap-6 px-3 sm:px-4">
              <span className="font-display text-sm sm:text-base md:text-lg tracking-wider text-[#0e372b] uppercase whitespace-nowrap">
                {text}
              </span>
              <span className="text-[#0e372b] text-base sm:text-lg font-black inline-block">
                ✸
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
