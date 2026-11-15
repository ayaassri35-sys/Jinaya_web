// src/components/SignatureBurgers.jsx
import React from 'react';
import { SIGNATURE_BURGERS } from '../data/bjorbunData';
import { Plus, Flame, Star } from 'lucide-react';

export default function SignatureBurgers({ onSelectBurger, onAddToCart }) {
  return (
    <section id="signature-burgers" className="relative bg-[#0e372b] bg-doodles py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f6e7b9] tracking-wider mb-4 drop-shadow-sm">
            OUR SIGNATURE BURGERS
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#f6e7b9]/80 font-medium leading-relaxed">
            Discover our most-loved burgers, crafted with premium ingredients and bold flavors that keep customers coming back for more.
          </p>
        </div>

        {/* 3 SIGNATURE BURGER CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-end">
          {SIGNATURE_BURGERS.map((burger) => (
            <div
              key={burger.id}
              className="group relative flex flex-col items-center cursor-pointer transition-all duration-300"
              onClick={() => onSelectBurger(burger)}
            >
              {/* Burger Container */}
              <div className="relative w-full flex flex-col items-center">
                
                {/* Circular Number / Badge Tag (Top-Left of burger) */}
                <div className="absolute top-2 left-6 sm:left-4 z-20">
                  <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#f6e7b9] border-2 border-[#0e372b] flex flex-col items-center justify-center p-1 text-center shadow-lg group-hover:scale-110 group-hover:bg-[#f2b93b] transition-all duration-300">
                    <span className="text-[9px] font-bold tracking-tight text-[#0e372b] uppercase leading-none">
                      {burger.badgeLabel}
                    </span>
                    <span className="text-xs font-black text-[#0e372b] mt-0.5">
                      #{burger.badgeNumber}
                    </span>
                  </div>
                </div>

                {/* Burger Image Container with subtle ground shadow */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 flex items-center justify-center">
                  {/* Radial shadow glow under burger */}
                  <div className="absolute bottom-4 w-48 h-10 bg-black/50 rounded-full blur-xl group-hover:scale-110 transition-transform duration-300"></div>

                  <img
                    src={burger.image}
                    alt={burger.name}
                    className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300"
                  />
                </div>

                {/* PILL BUTTON LABEL (Matches design: rounded cream pill with bold text) */}
                <div className="mt-4 sm:mt-6 w-full max-w-[280px]">
                  <div className="w-full py-3 px-5 rounded-full bg-[#f6e7b9] group-hover:bg-[#f2b93b] text-[#0e372b] font-display text-sm sm:text-base tracking-wider text-center uppercase shadow-md transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-xl">
                    <span>{burger.name}</span>
                  </div>
                </div>

                {/* Price & Quick Add pill bar */}
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-[#f6e7b9] font-black text-sm tracking-wide">
                    ${burger.price.toFixed(2)}
                  </span>
                  <span className="text-[#f6e7b9]/40">•</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(burger);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#f6e7b9] hover:text-[#f2b93b] underline underline-offset-4 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Quick Add</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
