import React, { useState } from 'react';
import { Coffee, ArrowUp, Instagram, Facebook, Twitter, Send, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#ECE8DF] border-t border-zinc-200 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#7C3AED] p-[1px]">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <Coffee className="w-4 h-4 text-[#B8860B]" />
                </div>
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-zinc-900">
                BREW HAVEN
              </span>
            </div>

            <p className="text-zinc-600 text-xs leading-relaxed">
              Every cup tells a story. An architectural sanctuary dedicated to single-origin coffee craftsmanship, French pastries, and refined ambience.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:text-[#B8860B] hover:border-[#D4AF37] transition-all shadow-sm">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:text-[#B8860B] hover:border-[#D4AF37] transition-all shadow-sm">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:text-[#B8860B] hover:border-[#D4AF37] transition-all shadow-sm">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-bold text-zinc-900 mb-4">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-zinc-600">
              <li><a href="#home" className="hover:text-[#B8860B] transition-colors">Home Experience</a></li>
              <li><a href="#about" className="hover:text-[#B8860B] transition-colors">Our Story & Heritage</a></li>
              <li><a href="#menu" className="hover:text-[#B8860B] transition-colors">Featured Artisanal Menu</a></li>
              <li><a href="#gallery" className="hover:text-[#B8860B] transition-colors">Visual Gallery</a></li>
              <li><a href="#reservation" className="hover:text-[#B8860B] transition-colors">Reserve Table</a></li>
            </ul>
          </div>

          {/* Hours & Sourcing */}
          <div>
            <h4 className="font-serif text-base font-bold text-zinc-900 mb-4">Hours & Reserve</h4>
            <div className="space-y-2 text-xs text-zinc-600">
              <p><strong className="text-zinc-900">Mon – Fri:</strong> 7:00 AM – 10:00 PM</p>
              <p><strong className="text-zinc-900">Sat – Sun:</strong> 8:00 AM – 11:00 PM</p>
              <p className="pt-2 text-[11px] text-[#B8860B]">
                MI Road, Near Panch Batti, Jaipur, Rajasthan, India
              </p>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-bold text-zinc-900">Private Reserve Newsletter</h4>
            <p className="text-xs text-zinc-600">
              Subscribe to receive invitations to private jazz nights, seasonal micro-lot bean drops, and tasting events.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-[#D4AF37] shadow-sm"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-[#D4AF37] text-white hover:brightness-105"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed to Private Reserve!</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Brew Haven Café. All rights reserved. Crafting coffee excellence.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-600 hover:text-[#B8860B] transition-colors"
          >
            <span className="uppercase text-[10px] tracking-widest font-mono">Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
