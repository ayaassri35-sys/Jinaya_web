// src/components/WhyChooseUs.jsx
import React from 'react';
import { Sparkles, Leaf, Flame, Zap } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'FRESH AND PREMIUM',
      desc: 'We carefully select fresh, high-quality ingredients every day — from premium beef patties and crisp vegetables to soft freshly baked buns.',
      icon: Leaf,
    },
    {
      title: 'PERFECTLY GRILLED EVERY TIME',
      desc: 'Each burger is grilled to perfection using special techniques to lock in juiciness and create a delicious smoky aroma.',
      icon: Flame,
    },
    {
      title: 'FAST & FRIENDLY SERVICE',
      desc: 'Enjoy quick preparation without compromising quality, served by a team that cares about your experience.',
      icon: Zap,
    },
  ];

  return (
    <section id="why-us" className="relative bg-[#f7f2e7] text-[#0e372b] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] my-4 sm:my-8 shadow-2xl">
      
      {/* Decorative leaf / tomato SVG accents */}
      <div className="absolute top-10 right-10 opacity-15 pointer-events-none hidden sm:block">
        <Sparkles className="w-16 h-16 text-[#0e372b]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: HEROIC BURGER IMAGE */}
          <div className="lg:col-span-5 relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md sm:max-w-lg">
              
              {/* Soft circular ground background */}
              <div className="absolute inset-0 bg-[#e8deca]/60 rounded-full blur-2xl transform scale-90"></div>

              {/* Burger image with floating herbs */}
              <div className="relative z-10">
                <img
                  src="/bjorbun/why-burger.png"
                  alt="Crafted fresh burger"
                  className="w-full h-auto object-contain filter drop-shadow-[0_20px_30px_rgba(14,55,43,0.35)] transform hover:scale-105 transition-transform duration-500"
                />

                {/* Floating green leaves */}
                <div className="absolute -top-4 -left-2 w-10 sm:w-14 animate-float">
                  <svg viewBox="0 0 60 60" className="w-full h-full drop-shadow-md">
                    <path d="M 10 50 C 15 25 35 10 50 10 C 50 30 35 50 10 50 Z" fill="#2d6a4f" />
                  </svg>
                </div>
                <div className="absolute -bottom-2 -right-4 w-8 sm:w-12 animate-float-reverse">
                  <svg viewBox="0 0 60 60" className="w-full h-full drop-shadow-md">
                    <path d="M 10 50 C 15 25 35 10 50 10 C 50 30 35 50 10 50 Z" fill="#40916c" />
                  </svg>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: HEADING & 3 HIGHLIGHTS */}
          <div className="lg:col-span-7 flex flex-col order-1 lg:order-2">
            
            {/* Title & Top Description */}
            <div className="mb-10">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#0e372b] tracking-wider leading-tight mb-4">
                WHY PEOPLE LOVE OUR BURGERS
              </h2>
              <p className="text-sm sm:text-base text-[#0e372b]/80 font-medium leading-relaxed max-w-xl">
                We don't just make burgers — we craft unforgettable flavor experiences using premium ingredients, bold recipes, and perfectly grilled patties in every bite.
              </p>
            </div>

            {/* 3 Feature items */}
            <div className="space-y-6 sm:space-y-8">
              {features.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-[#ede3cf]/60 hover:bg-[#ede3cf] transition-all duration-200 border border-[#e1d5be]"
                  >
                    {/* Feature Icon */}
                    <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0e372b] text-[#f6e7b9] flex items-center justify-center shadow-md">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="font-display text-base sm:text-lg text-[#0e372b] tracking-wide mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#0e372b]/75 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
