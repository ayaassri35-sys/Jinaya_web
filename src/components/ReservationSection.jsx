// src/components/ReservationSection.jsx
import React, { useState } from 'react';
import { Calendar, Users, Clock, CheckCircle2, Sparkles } from 'lucide-react';

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: '19:00',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="reservation" className="relative bg-[#f7f2e7] text-[#0e372b] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 rounded-t-[3rem] sm:rounded-t-[4rem] shadow-2xl">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADING WITH MINI BURGER ICON */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#0e372b] tracking-wider">
              COME ENJOY WITH US
            </h2>
            <span className="text-2xl sm:text-4xl">🍔</span>
          </div>
          <p className="text-sm sm:text-base text-[#0e372b]/80 font-medium leading-relaxed max-w-xl mx-auto">
            Come enjoy juicy handcrafted burgers made with premium ingredients, served hot and fresh in a comfortable and welcoming space.
          </p>
        </div>

        {/* RESERVATION FORM OR CONFIRMATION */}
        {submitted ? (
          <div className="bg-[#ede3cf] border-2 border-[#0e372b] rounded-3xl p-8 sm:p-12 text-center shadow-xl animate-fadeInUp">
            <div className="w-16 h-16 bg-[#0e372b] text-[#f6e7b9] rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-[#0e372b] mb-3">
              Table Reserved Successfully!
            </h3>
            <p className="text-sm sm:text-base text-[#0e372b]/80 font-medium max-w-md mx-auto mb-6">
              Thank you, <strong>{formData.name}</strong>. We've reserved a table for <strong>{formData.guests} people</strong> on <strong>{formData.date || 'today'}</strong> at <strong>{formData.time}</strong>. A confirmation SMS/email has been dispatched.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', phone: '', guests: '2', date: '', time: '19:00', notes: '' });
              }}
              className="px-8 py-3 rounded-full bg-[#0e372b] text-[#f6e7b9] font-bold text-xs uppercase tracking-widest hover:bg-[#164e3c] transition-all"
            >
              Make Another Reservation
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[#ede3cf]/80 border border-[#ded2bc] rounded-3xl p-6 sm:p-10 shadow-xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-[#0e372b] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#f7f2e7] border border-[#d6c7ac] text-[#0e372b] placeholder-[#0e372b]/40 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#0e372b]"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-[#0e372b] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#f7f2e7] border border-[#d6c7ac] text-[#0e372b] placeholder-[#0e372b]/40 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#0e372b]"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-[#0e372b] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#f7f2e7] border border-[#d6c7ac] text-[#0e372b] placeholder-[#0e372b]/40 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#0e372b]"
                />
              </div>

              {/* Guests Count */}
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-[#0e372b] mb-2">
                  Number of Guests
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#f7f2e7] border border-[#d6c7ac] text-[#0e372b] text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#0e372b]"
                >
                  <option value="1">1 Person (Solo Foodie)</option>
                  <option value="2">2 Persons (Table for Two)</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons (Family / Friends)</option>
                  <option value="6">6 Persons (Party Table)</option>
                  <option value="8+">8+ Persons (Large Group Event)</option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-[#0e372b] mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#f7f2e7] border border-[#d6c7ac] text-[#0e372b] text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#0e372b]"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-[#0e372b] mb-2">
                  Time Slot *
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#f7f2e7] border border-[#d6c7ac] text-[#0e372b] text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#0e372b]"
                >
                  <option value="12:00">12:00 PM - Lunch</option>
                  <option value="13:30">1:30 PM - Lunch</option>
                  <option value="18:00">6:00 PM - Dinner</option>
                  <option value="19:00">7:00 PM - Dinner</option>
                  <option value="20:30">8:30 PM - Dinner</option>
                  <option value="21:30">9:30 PM - Late Night</option>
                </select>
              </div>

            </div>

            {/* Special Requests */}
            <div className="mt-5">
              <label className="block text-xs font-black uppercase tracking-widest text-[#0e372b] mb-2">
                Special Requests or Dietary Preferences
              </label>
              <textarea
                rows="3"
                placeholder="Birthday celebration, high chair needed, outdoor patio seating, allergy alert..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#f7f2e7] border border-[#d6c7ac] text-[#0e372b] placeholder-[#0e372b]/40 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#0e372b] resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto min-w-[260px] py-4 px-8 rounded-full bg-[#0e372b] hover:bg-[#164e3c] text-[#f6e7b9] font-display text-sm tracking-wider uppercase shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50"
              >
                {loading ? 'Confirming Reservation...' : 'Reserve A Table Now'}
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
}
