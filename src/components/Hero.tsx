import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Star, ChevronDown, ArrowRight, Award } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
  onOpenBrewQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenReservation,
  onOpenBrewQuiz,
}) => {
  const scrollToMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Ambient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000"
          alt="Brew Haven Luxury Café Ambient Interior"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover scale-105 filter brightness-95 contrast-105 opacity-40"
        />
        {/* Light Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/75 to-[#FAF8F5]/50" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#FAF8F5]/50 to-[#FAF8F5]" />
      </div>

      {/* Background Floating Purple & Gold Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-[#D4AF37]/40 text-[#B8860B] text-xs font-semibold tracking-widest uppercase mb-8 shadow-sm"
        >
          <Award className="w-4 h-4 text-[#B8860B]" />
          <span>Artisan Roastery & Espresso Reserve</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 max-w-4xl leading-[1.08] mb-6 drop-shadow-sm"
        >
          Every Cup <br className="hidden sm:block" />
          <span className="gold-gradient-text italic font-normal">Tells A Story</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-2xl text-zinc-600 max-w-2xl font-light leading-relaxed mb-10 text-balance"
        >
          Experience handcrafted single-origin coffee, artisan French pastries, and unforgettable sensory moments in a refined sanctuary.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12"
        >
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#D4AF37] text-white font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-md flex items-center justify-center gap-3 group"
          >
            <span>Reserve A Table</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={scrollToMenu}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-zinc-50 border border-zinc-200/80 hover:border-[#D4AF37]/50 text-zinc-900 font-semibold text-sm uppercase tracking-widest backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm"
          >
            <span>Explore Menu</span>
          </button>
        </motion.div>

        {/* Interactive Brew Quiz Trigger Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-12"
        >
          <button
            onClick={onOpenBrewQuiz}
            className="group px-5 py-2.5 rounded-full glass-panel border border-[#7C3AED]/30 hover:border-[#7C3AED] text-xs text-zinc-700 hover:text-zinc-900 flex items-center gap-2.5 transition-all shadow-sm hover:shadow-md"
          >
            <Coffee className="w-4 h-4 text-[#B8860B]" />
            <span>Unsure what to pick? Take our 15-sec <strong className="text-[#7C3AED]">Flavor Profiler Quiz</strong></span>
            <span className="text-[#B8860B] group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>

        {/* Floating Review Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-panel px-6 py-3 rounded-2xl flex items-center gap-4 border border-zinc-200/80 shadow-md animate-float"
        >
          <div className="flex items-center text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
            ))}
          </div>
          <div className="h-4 w-[1px] bg-zinc-300" />
          <div className="text-xs text-zinc-700 font-medium">
            Rated <span className="text-zinc-900 font-bold">4.9/5</span> by <span className="text-[#B8860B] font-semibold">2,000+ Connoisseurs</span>
          </div>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer" onClick={scrollToMenu}>
        <span className="text-[10px] tracking-widest uppercase font-mono">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
