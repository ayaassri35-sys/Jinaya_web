// src/components/Footer.jsx
import React from 'react';
import { ArrowUp, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#082119] text-[#f6e7b9] pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#f6e7b9]/15">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl tracking-wider text-[#f6e7b9]">
              BJORBUN
            </h3>
            <p className="text-xs sm:text-sm text-[#f6e7b9]/75 font-medium leading-relaxed">
              Crafted burgers with premium taste. Grilled to perfection, stacked with love, and made for true flavor connoisseurs.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {/* Instagram */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#0e372b] border border-[#f6e7b9]/30 flex items-center justify-center hover:bg-[#f6e7b9] hover:text-[#082119] transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#0e372b] border border-[#f6e7b9]/30 flex items-center justify-center hover:bg-[#f6e7b9] hover:text-[#082119] transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.69 5H18V0h-3.808C10.597 0 9 1.582 9 4.615V8z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#0e372b] border border-[#f6e7b9]/30 flex items-center justify-center hover:bg-[#f6e7b9] hover:text-[#082119] transition-all"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display text-sm tracking-widest uppercase text-[#f2b93b]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-[#f6e7b9]/80">
              <li>
                <a href="#signature-burgers" className="hover:text-[#f2b93b] transition-colors">
                  Signature Burgers
                </a>
              </li>
              <li>
                <a href="#menu-preview" className="hover:text-[#f2b93b] transition-colors">
                  Explore Full Menu
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#f2b93b] transition-colors">
                  Why People Love Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#f2b93b] transition-colors">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-[#f2b93b] transition-colors">
                  Reserve a Table
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Contact */}
          <div className="space-y-3">
            <h4 className="font-display text-sm tracking-widest uppercase text-[#f2b93b]">
              Hours & Location
            </h4>
            <div className="space-y-2.5 text-xs text-[#f6e7b9]/80 font-medium">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#f2b93b] flex-shrink-0 mt-0.5" />
                <div>
                  <p>Mon - Thu: 11:30 AM – 11:00 PM</p>
                  <p>Fri - Sun: 11:30 AM – 01:00 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#f2b93b] flex-shrink-0" />
                <span>428 Gourmet Boulevard, Downtown</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#f2b93b] flex-shrink-0" />
                <span>+1 (800) 555-BUNS</span>
              </div>
            </div>
          </div>

          {/* Newsletter / Flat 20% Off */}
          <div className="space-y-3">
            <h4 className="font-display text-sm tracking-widest uppercase text-[#f2b93b]">
              Get 20% Off Secret Drop
            </h4>
            <p className="text-xs text-[#f6e7b9]/75 font-medium leading-relaxed">
              Subscribe to get secret menu drop alerts and a flat 20% discount coupon code.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed! Use code BJORBUN20 at checkout.'); }} className="space-y-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-xl bg-[#0e372b] border border-[#f6e7b9]/25 text-xs text-[#f6e7b9] placeholder-[#f6e7b9]/40 focus:outline-none focus:border-[#f2b93b]"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#f6e7b9] hover:bg-[#f2b93b] text-[#082119] font-display text-xs tracking-wider uppercase transition-all shadow-md"
              >
                Claim 20% Voucher
              </button>
            </form>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#f6e7b9]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#f6e7b9]/60">
          <p>© {new Date().getFullYear()} BJORBUN Burgers Co. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#f2b93b] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
