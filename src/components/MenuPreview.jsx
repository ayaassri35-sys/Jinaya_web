// src/components/MenuPreview.jsx
import React, { useState } from 'react';
import { CATEGORIES, ALL_MENU_ITEMS } from '../data/bjorbunData';
import { Plus, Check, Star, Sparkles } from 'lucide-react';

export default function MenuPreview({ onAddToCart, onSelectItem }) {
  const [activeCategory, setActiveCategory] = useState('burger');
  const [addedItemMap, setAddedItemMap] = useState({});

  const handleAdd = (item, e) => {
    e.stopPropagation();
    onAddToCart(item);
    setAddedItemMap((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemMap((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  const filteredItems = ALL_MENU_ITEMS.filter((item) => item.category === activeCategory);
  const activeCategoryObj = CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <section id="menu-preview" className="relative bg-[#0e372b] bg-doodles py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f6e7b9] tracking-wider mb-4 drop-shadow-sm">
            MENU PREVIEW
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#f6e7b9]/80 font-medium leading-relaxed max-w-2xl mx-auto">
            Discover our most-loved burgers, crafted with premium ingredients and bold flavors that keep customers coming back for more.
          </p>
        </div>

        {/* 3 CIRCULAR CATEGORY SHOWCASE (Matches reference screenshot 100%) */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-10 max-w-3xl mx-auto mb-14 sm:mb-20">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="group flex flex-col items-center cursor-pointer select-none transition-all duration-300"
              >
                {/* Circular Image Container with Beige/Sand background */}
                <div
                  className={`relative w-24 h-24 xs:w-28 xs:h-28 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full p-1.5 sm:p-2.5 transition-all duration-300 ${
                    isSelected
                      ? 'ring-4 ring-[#f5b731] scale-105 shadow-[0_10px_25px_rgba(245,183,49,0.35)]'
                      : 'ring-2 ring-transparent hover:ring-[#f6e7b9]/40 hover:scale-102'
                  }`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#faebd3] flex items-center justify-center p-2 shadow-inner">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-contain filter drop-shadow-md transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Pill Button Label */}
                <div className="mt-3 sm:mt-5 w-full max-w-[170px]">
                  <div
                    className={`w-full py-1.5 sm:py-2.5 px-2 sm:px-4 rounded-full font-display text-[10px] xs:text-xs sm:text-sm tracking-wider text-center uppercase shadow-md transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#f5b731] text-[#082119] font-black shadow-lg scale-105'
                        : 'bg-[#f6e7b9] text-[#0e372b] group-hover:bg-[#f5b731] group-hover:text-[#082119]'
                    }`}
                  >
                    {cat.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* DYNAMIC PRODUCTS CONTAINER: SHOWN WHEN CATEGORY IS CLICKED */}
        <div className="bg-[#09251d] border border-[#f6e7b9]/20 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl transition-all duration-500">
          
          {/* Header of Active Category */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#f6e7b9]/15 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f5b731] animate-pulse"></span>
                <span className="text-[11px] uppercase tracking-widest font-black text-[#f5b731]">
                  Current Category
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-[#f6e7b9] mt-0.5">
                {activeCategoryObj?.name}
              </h3>
              <p className="text-xs text-[#f6e7b9]/70 mt-1">
                {activeCategoryObj?.description}
              </p>
            </div>

            <div className="text-xs font-bold text-[#f6e7b9]/75 bg-[#0e372b] px-4 py-2 rounded-full border border-[#f6e7b9]/15 self-start sm:self-auto">
              {filteredItems.length} Products Available
            </div>
          </div>

          {/* Product Cards Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => {
              const isAdded = addedItemMap[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => onSelectItem && onSelectItem(item)}
                  className="group bg-[#0e372b] hover:bg-[#114234] border border-[#f6e7b9]/15 hover:border-[#f5b731]/60 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer transform hover:-translate-y-1.5"
                >
                  <div>
                    {/* Product Image */}
                    <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-4 bg-[#082119] flex items-center justify-center p-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain filter drop-shadow-lg transform group-hover:scale-108 transition-transform duration-500"
                      />
                      {item.tag && (
                        <span className="absolute top-2.5 left-2.5 bg-[#f5b731] text-[#082119] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-md">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    {/* Product Title & Info */}
                    <h4 className="font-display text-base sm:text-lg text-[#f6e7b9] group-hover:text-[#f5b731] transition-colors mb-1.5">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#f6e7b9]/75 leading-relaxed mb-4 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Price & Add to Order Action */}
                  <div className="pt-3 border-t border-[#f6e7b9]/10 flex items-center justify-between">
                    <span className="font-black text-lg text-[#f5b731]">
                      ${item.price.toFixed(2)}
                    </span>

                    <button
                      onClick={(e) => handleAdd(item, e)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-display text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-md ${
                        isAdded
                          ? 'bg-[#38b000] text-white shadow-lg'
                          : 'bg-[#f6e7b9] hover:bg-[#f5b731] text-[#082119]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
