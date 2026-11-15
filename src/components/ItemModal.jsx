// src/components/ItemModal.jsx
import React, { useState } from 'react';
import { X, Plus, Minus, Check, Flame, Sparkles } from 'lucide-react';

export default function ItemModal({ item, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState([]);

  if (!item) return null;

  const addonsList = [
    { id: 'cheese', name: 'Extra Cheddar Lava Sauce', price: 1.50 },
    { id: 'bacon', name: 'Crispy Maple Smoked Bacon', price: 2.00 },
    { id: 'jalapeno', name: 'Spicy Pickled Jalapeños', price: 0.75 },
    { id: 'truffle', name: 'Black Truffle Garlic Mayo', price: 1.25 },
  ];

  const toggleAddon = (addon) => {
    if (selectedAddons.find((a) => a.id === addon.id)) {
      setSelectedAddons(selectedAddons.filter((a) => a.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
  const itemTotal = (item.price + addonsTotal) * quantity;

  const handleAdd = () => {
    onAddToCart({
      ...item,
      quantity,
      selectedAddons,
      price: item.price + addonsTotal,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-lg bg-[#0e372b] border-2 border-[#f6e7b9]/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-[#f6e7b9] overflow-hidden">
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#09251d] text-[#f6e7b9] hover:bg-[#f6e7b9] hover:text-[#0e372b] transition-all z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Product Image */}
          <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-black/20 flex items-center justify-center mb-6">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-contain filter drop-shadow-xl"
            />
          </div>

          {/* Product Info */}
          <div className="mb-6">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="font-display text-2xl text-[#f6e7b9] tracking-wider">
                {item.name}
              </h3>
              <span className="font-black text-xl text-[#f2b93b] whitespace-nowrap">
                ${item.price.toFixed(2)}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#f6e7b9]/80 leading-relaxed font-medium">
              {item.shortDesc || item.description}
            </p>
          </div>

          {/* Add-ons Selector */}
          <div className="mb-6">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#f2b93b] mb-3">
              Custom Toppings & Dips
            </h4>
            <div className="space-y-2">
              {addonsList.map((addon) => {
                const isSelected = !!selectedAddons.find((a) => a.id === addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#124234] border-[#f2b93b]'
                        : 'bg-[#09251d] border-[#f6e7b9]/15 hover:border-[#f6e7b9]/40'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center text-xs ${
                          isSelected ? 'bg-[#f2b93b] text-[#082119]' : 'border border-[#f6e7b9]/30'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-semibold text-[#f6e7b9]">
                        {addon.name}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#f2b93b]">
                      +${addon.price.toFixed(2)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quantity & CTA */}
          <div className="pt-4 border-t border-[#f6e7b9]/15 flex items-center justify-between gap-4">
            {/* Quantity */}
            <div className="flex items-center gap-3 bg-[#09251d] px-3 py-1.5 rounded-full border border-[#f6e7b9]/25">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-1 hover:text-[#f2b93b]"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-bold text-sm w-4 text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-1 hover:text-[#f2b93b]"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Add Button */}
            <button
              onClick={handleAdd}
              className="flex-1 py-3 px-6 rounded-full bg-[#f6e7b9] hover:bg-[#f2b93b] text-[#0e372b] font-display text-xs sm:text-sm tracking-wider uppercase shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Add to Order (${itemTotal.toFixed(2)})</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
