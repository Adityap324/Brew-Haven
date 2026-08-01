import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Users, CheckCircle2, Copy, X, Armchair } from 'lucide-react';
import { Reservation } from '../types';

interface ReservationSectionProps {
  onOpenReservationModal?: () => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2 Guests',
    date: new Date().toISOString().split('T')[0],
    time: '18:00',
    seatingPreference: 'Lounge Sofas',
    message: '',
  });

  const [confirmedReservation, setConfirmedReservation] = useState<Reservation | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const seatingOptions = [
    'Lounge Sofas',
    'Barista Counter',
    'Window View',
    'Private Booth',
    'Heated Patio',
  ];

  const timeSlots = [
    '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '21:30'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill out your name, email, and contact phone number.');
      return;
    }

    const newReservation: Reservation = {
      id: `res-${Date.now()}`,
      referenceCode: `BH-${Math.floor(100000 + Math.random() * 900000)}`,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      guests: parseInt(formData.guests) || 2,
      date: formData.date,
      time: formData.time,
      seatingPreference: formData.seatingPreference,
      message: formData.message,
      createdAt: new Date().toISOString(),
    };

    setConfirmedReservation(newReservation);
  };

  const copyRefCode = () => {
    if (confirmedReservation) {
      navigator.clipboard.writeText(confirmedReservation.referenceCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <section id="reservation" className="py-24 bg-[#FAF8F5] relative">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-mono text-[#B8860B] uppercase tracking-widest mb-4 shadow-sm">
            <Armchair className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Table Reservations</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-zinc-900 tracking-tight leading-tight mb-4">
            Reserve Your <span className="gold-gradient-text">Experience</span>
          </h2>

          <p className="text-zinc-600 font-light text-base sm:text-lg">
            Ensure your preferred seating in our lounge. Reservations recommended for evening jazz sessions.
          </p>
        </div>

        {/* Booking Form Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200/80 shadow-md relative overflow-hidden">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Step 1: Guest Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              {/* Date */}
              <div>
                <label className="text-xs font-mono text-[#B8860B] uppercase tracking-wider block mb-2 font-semibold">
                  Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                  />
                </div>
              </div>

              {/* Time */}
              <div>
                <label className="text-xs font-mono text-[#B8860B] uppercase tracking-wider block mb-2 font-semibold">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                >
                  {timeSlots.map((t) => (
                    <option key={t} value={t} className="bg-white text-zinc-900">
                      {t} {parseInt(t) >= 12 ? 'PM' : 'AM'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Guests Count */}
              <div>
                <label className="text-xs font-mono text-[#B8860B] uppercase tracking-wider block mb-2 font-semibold">
                  Party Size
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((num) => (
                    <option key={num} value={`${num} Guests`} className="bg-white text-zinc-900">
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Seating Preference Pills */}
            <div>
              <label className="text-xs font-mono text-[#B8860B] uppercase tracking-wider block mb-3 font-semibold flex items-center gap-2">
                <Armchair className="w-4 h-4 text-[#B8860B]" />
                <span>Seating Atmosphere</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {seatingOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFormData({ ...formData, seatingPreference: option })}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
                      formData.seatingPreference === option
                        ? 'bg-gradient-to-r from-[#D4AF37] to-[#7C3AED] text-white border-transparent shadow-sm'
                        : 'bg-zinc-100 border-zinc-200 text-zinc-700 hover:text-zinc-900'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-zinc-100">
              <div>
                <label className="text-xs text-zinc-600 block mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Lord / Lady Sterling"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="text-xs text-zinc-600 block mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="sterling@haven.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="text-xs text-zinc-600 block mb-2 font-medium">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 234-5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            {/* Step 3: Special Requests */}
            <div>
              <label className="text-xs text-zinc-600 block mb-2 font-medium">Special Requests or Occasion Notes</label>
              <textarea
                rows={2}
                placeholder="Anniversary, birthday, preferred dietary restrictions or quiet corner table..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 text-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-12 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#D4AF37] text-white font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-md"
              >
                Confirm Table Reservation
              </button>
            </div>

          </form>
        </div>

      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {confirmedReservation && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setConfirmedReservation(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10 max-w-md w-full bg-white rounded-3xl p-8 border border-zinc-200 shadow-2xl text-center space-y-6"
            >
              <button
                onClick={() => setConfirmedReservation(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-zinc-100 text-zinc-600 hover:text-zinc-900"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono text-[#B8860B] uppercase tracking-widest block mb-1">
                  Reservation Confirmed
                </span>
                <h3 className="font-serif text-2xl font-bold text-zinc-900">
                  Welcome to Brew Haven
                </h3>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3 text-left text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Booking Code:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-[#B8860B] text-sm">
                      {confirmedReservation.referenceCode}
                    </span>
                    <button
                      onClick={copyRefCode}
                      className="text-zinc-500 hover:text-zinc-900"
                      title="Copy Code"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-zinc-200/80 pt-2">
                  <span className="text-zinc-500">Guest Name:</span>
                  <span className="text-zinc-900 font-medium">{confirmedReservation.name}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Date & Time:</span>
                  <span className="text-zinc-900 font-medium">{confirmedReservation.date} @ {confirmedReservation.time}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Party Size & Seating:</span>
                  <span className="text-zinc-900 font-medium">{confirmedReservation.guests} • {confirmedReservation.seatingPreference}</span>
                </div>
              </div>

              {copiedCode && (
                <p className="text-xs text-emerald-600 font-mono">Reference code copied to clipboard!</p>
              )}

              <button
                onClick={() => setConfirmedReservation(null)}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#7C3AED] text-white font-bold text-xs uppercase tracking-widest shadow-md"
              >
                Done
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
