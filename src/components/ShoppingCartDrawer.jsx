// src/components/ShoppingCartDrawer.jsx
import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle } from 'lucide-react';

export default function ShoppingCartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [checkoutDone, setCheckoutDone] = useState(false);

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'BJORBUN20') {
      setDiscountPercent(20);
      setPromoError('');
    } else {
      setPromoError('Invalid coupon. Try "BJORBUN20" for 20% off!');
    }
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const deliveryFee = subtotal > 35 || subtotal === 0 ? 0 : 3.99;
  const total = Math.max(0, subtotal - discountAmount + (subtotal > 0 ? deliveryFee : 0));

  const handleCheckout = () => {
    setCheckoutDone(true);
    setTimeout(() => {
      onClearCart();
      setCheckoutDone(false);
      onClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#09251d] border-l border-[#f6e7b9]/20 shadow-2xl flex flex-col text-[#f6e7b9]">
          
          {/* Header */}
          <div className="p-6 border-b border-[#f6e7b9]/15 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-[#f2b93b]" />
              <h3 className="font-display text-xl text-[#f6e7b9] tracking-wider">
                YOUR ORDER
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#f6e7b9]/70 hover:text-[#f6e7b9] hover:bg-[#124234] transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {checkoutDone ? (
              <div className="py-16 text-center space-y-4 animate-fadeInUp">
                <CheckCircle className="w-16 h-16 text-[#38b000] mx-auto animate-bounce" />
                <h4 className="font-display text-2xl text-[#f6e7b9]">
                  Order Placed!
                </h4>
                <p className="text-sm text-[#f6e7b9]/80 max-w-xs mx-auto">
                  Your kitchen ticket has been sent to our grill master. It will arrive piping hot in ~25 minutes!
                </p>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#124234] flex items-center justify-center mx-auto text-3xl">
                  🍔
                </div>
                <h4 className="font-display text-xl text-[#f6e7b9]">
                  Your Cart is Empty
                </h4>
                <p className="text-xs text-[#f6e7b9]/70 max-w-xs mx-auto">
                  Add some delicious signature burgers, crinkle-cut fries, or craft drinks!
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#f6e7b9] text-[#0e372b] font-bold text-xs uppercase tracking-wider hover:bg-[#f2b93b] transition-all"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-[#0e372b] p-3.5 rounded-2xl border border-[#f6e7b9]/10"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-xl bg-black/20"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-sm text-[#f6e7b9] truncate">
                      {item.name}
                    </h5>
                    <p className="text-xs text-[#f2b93b] font-extrabold mt-0.5">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 bg-[#09251d] px-2 py-1 rounded-full border border-[#f6e7b9]/20">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:text-[#f2b93b]"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:text-[#f2b93b]"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1.5 text-red-400 hover:text-red-300 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer calculation */}
          {cartItems.length > 0 && !checkoutDone && (
            <div className="p-6 border-t border-[#f6e7b9]/15 bg-[#0a281f] space-y-4">
              
              {/* Promo code input */}
              <div className="space-y-1">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder='Promo code (try "BJORBUN20")'
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl bg-[#09251d] border border-[#f6e7b9]/25 text-xs text-[#f6e7b9] uppercase focus:outline-none focus:border-[#f2b93b]"
                  />
                  <button
                    onClick={applyPromo}
                    className="px-4 py-2 rounded-xl bg-[#f6e7b9] text-[#0e372b] font-bold text-xs uppercase hover:bg-[#f2b93b] transition-all"
                  >
                    Apply
                  </button>
                </div>
                {promoError && <p className="text-[11px] text-red-400">{promoError}</p>}
                {discountPercent > 0 && (
                  <p className="text-[11px] text-[#38b000] font-bold">
                    ✓ 20% Discount Applied!
                  </p>
                )}
              </div>

              {/* Price rows */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#f6e7b9]/80">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-[#38b000] font-bold">
                    <span>Discount (20%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#f6e7b9]/80">
                  <span>Delivery Fee</span>
                  <span>{deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-base font-black text-[#f6e7b9] pt-2 border-t border-[#f6e7b9]/15">
                  <span>Total</span>
                  <span className="text-[#f2b93b]">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full py-3.5 rounded-full bg-[#f6e7b9] hover:bg-[#f2b93b] text-[#0e372b] font-display text-sm tracking-wider uppercase shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-95"
              >
                <span>Complete Order (${total.toFixed(2)})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
