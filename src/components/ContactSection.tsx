import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [inquiry, setInquiry] = useState({ name: '', email: '', subject: '', message: '' });
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiry.email || !inquiry.message) return;
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setInquiry({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-[#F5F2EC] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#7C3AED]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-mono text-[#B8860B] uppercase tracking-widest mb-4 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Connect & Visit</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-zinc-900 tracking-tight leading-tight mb-4">
            Visit Our <span className="gold-gradient-text">Sanctuary</span>
          </h2>

          <p className="text-zinc-600 font-light text-base sm:text-lg">
            Located in the heart of the luxury shopping district. Walk-ins welcome; reservations recommended.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Contact Cards & Hours */}
          <div className="space-y-8">
            
            {/* Hours & Address Glass Card */}
            <div className="bg-white rounded-3xl p-8 border border-zinc-200/80 shadow-md space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#B8860B] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-zinc-900 mb-1">Our Location</h4>
                  <p className="text-zinc-700 text-sm">MI Road, Near Panch Batti, Jaipur, Rajasthan, India</p>
                  <p className="text-zinc-500 text-xs mt-0.5">Complimentary valet parking available</p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-zinc-100 pt-6">
                <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/15 border border-[#7C3AED]/40 flex items-center justify-center text-[#7C3AED] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-xl font-bold text-zinc-900 mb-2">Opening Hours</h4>
                  <div className="flex justify-between gap-8 text-xs text-zinc-700">
                    <span className="text-zinc-500">Monday – Friday:</span>
                    <span className="font-mono font-bold text-[#B8860B]">7:00 AM – 10:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-8 text-xs text-zinc-700">
                    <span className="text-zinc-500">Saturday – Sunday:</span>
                    <span className="font-mono font-bold text-[#B8860B]">8:00 AM – 11:00 PM</span>
                  </div>
                  <div className="text-[11px] text-[#7C3AED] italic mt-1">
                    * Evening Vinyl Jazz & Espresso Cocktail hour begins at 6:00 PM daily.
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-zinc-100 pt-6">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#B8860B]" />
                  <span className="text-xs text-zinc-700 font-mono">+91 141 555 BREW</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#B8860B]" />
                  <span className="text-xs text-zinc-700 font-mono">concierge@brewhaven.com</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-zinc-200/80 shadow-md space-y-6">
            <h3 className="font-serif text-2xl font-bold text-zinc-900">
              Send Concierge Inquiry
            </h3>
            <p className="text-zinc-600 text-xs">
              For private events, catering, corporate tastings, or media inquiries.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-zinc-600 font-medium block mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="Alexandra Vance"
                  value={inquiry.name}
                  onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="text-xs text-zinc-600 font-medium block mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="alexandra@domain.com"
                  value={inquiry.email}
                  onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="text-xs text-zinc-600 font-medium block mb-1">Inquiry Subject</label>
                <select
                  value={inquiry.subject}
                  onChange={(e) => setInquiry({ ...inquiry, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="" className="bg-white">General Inquiry</option>
                  <option value="private" className="bg-white">Private Event & Lounge Rental</option>
                  <option value="catering" className="bg-white">Artisan Coffee Catering</option>
                  <option value="press" className="bg-white">Press & Media</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-zinc-600 font-medium block mb-1">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="How may we assist your upcoming gathering?"
                  value={inquiry.message}
                  onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <button
                type="submit"
                disabled={sentSuccess}
                className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 ${
                  sentSuccess
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gradient-to-r from-[#D4AF37] to-[#7C3AED] text-white hover:brightness-110 active:scale-95'
                }`}
              >
                {sentSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Inquiry Sent Successfully</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
