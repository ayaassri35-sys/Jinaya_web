// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Sparkles } from 'lucide-react';

export default function Navbar({ cartCount = 0, onOpenCart, onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'MENU', href: '#menu-preview' },
    { name: 'TESTIMONIAL', href: '#testimonials' },
    { name: 'SERVICES', href: '#why-us' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#reservation' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0e372b]/95 backdrop-blur-md py-3 shadow-lg border-b border-[#f6e7b9]/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#"
          className="text-2xl sm:text-3xl font-display tracking-wider text-[#f6e7b9] hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <span>BJORBUN</span>
        </a>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs lg:text-sm font-bold tracking-widest text-[#f6e7b9]/90 hover:text-[#f6e7b9] transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f6e7b9] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            aria-label="Open Shopping Cart"
            className="relative p-2.5 rounded-full border border-[#f6e7b9]/40 text-[#f6e7b9] hover:bg-[#f6e7b9] hover:text-[#0e372b] transition-all duration-200"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#f2b93b] text-[#082119] text-xs font-black rounded-full w-5 h-5 flex items-center justify-center shadow-md animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* ORDER NOW CTA BUTTON */}
          <button
            onClick={onOpenCart}
            className="hidden sm:inline-flex items-center justify-center px-6 py-2 rounded-full border-2 border-[#f6e7b9] text-[#f6e7b9] text-xs sm:text-sm font-extrabold tracking-wider hover:bg-[#f6e7b9] hover:text-[#0e372b] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-sm"
          >
            ORDER NOW
          </button>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#f6e7b9] hover:opacity-80 transition-opacity"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a271f] border-b border-[#f6e7b9]/20 px-6 py-6 space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold tracking-wider text-[#f6e7b9] hover:text-[#f2b93b] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
              className="w-full py-2.5 rounded-full bg-[#f6e7b9] text-[#0e372b] font-extrabold text-xs tracking-wider uppercase text-center shadow-md"
            >
              Order Online Now
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking();
              }}
              className="w-full py-2.5 rounded-full border border-[#f6e7b9] text-[#f6e7b9] font-extrabold text-xs tracking-wider uppercase text-center"
            >
              Reserve a Table
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
