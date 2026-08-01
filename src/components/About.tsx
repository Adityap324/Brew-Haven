import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HeartHandshake, Award } from 'lucide-react';

export const About: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { label: 'Coffee Blends', target: 20, suffix: '+' },
    { label: 'Expert Baristas', target: 15, suffix: '' },
    { label: 'Years Experience', target: 10, suffix: ' Yrs' },
    { label: 'Happy Customers', target: 50, suffix: 'K+' },
  ];

  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Animate counts
          stats.forEach((stat, index) => {
            let start = 0;
            const duration = 2000;
            const steps = 40;
            const increment = stat.target / steps;
            const timer = setInterval(() => {
              start += increment;
              if (start >= stat.target) {
                start = stat.target;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const next = [...prev];
                next[index] = Math.floor(start);
                return next;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-[#F5F2EC] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#7C3AED]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Visual Composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-zinc-200/80 shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000"
                alt="Master Barista Pour Over Crafting at Brew Haven"
                referrerPolicy="no-referrer"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel rounded-2xl border border-zinc-200/80 bg-white/90 shadow-md">
                <p className="text-xs font-mono text-[#B8860B] uppercase tracking-widest mb-1">
                  Established 2016 • Jaipur Heritage
                </p>
                <p className="font-serif text-lg text-zinc-900">
                  "Architecture for the senses. Every batch roasted in micro-lots for uncompromised complexity."
                </p>
              </div>
            </div>

            {/* Overlapping Floating Small Image Card */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 z-20 w-64 rounded-2xl overflow-hidden glass-panel p-2 border border-[#D4AF37]/50 shadow-lg bg-white">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=500"
                alt="Espresso crema extraction detail"
                referrerPolicy="no-referrer"
                className="w-full h-36 object-cover rounded-xl"
              />
              <div className="p-3 text-center">
                <span className="text-[11px] font-bold text-[#B8860B] uppercase tracking-wider block">100% Ethiopian Micro-Lot</span>
                <span className="text-[10px] text-zinc-500">Directly Sourced Arabica</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Story Text & Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-mono text-[#B8860B] uppercase tracking-widest w-max mb-4 shadow-sm">
              <Award className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Our Sanctuary & Story</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight leading-tight mb-6">
              Where Coffee Meets <br />
              <span className="gold-gradient-text">Artisanal Perfection</span>
            </h2>

            <p className="text-zinc-600 font-light text-base sm:text-lg leading-relaxed mb-6">
              Founded in 2016, <strong className="text-zinc-900 font-semibold">Brew Haven Café</strong> was conceived as an architectural oasis for true coffee connoisseurs. We merge the timeless warmth of European coffee houses with refined modern aesthetics.
            </p>

            <p className="text-zinc-600 font-light text-sm sm:text-base leading-relaxed mb-8">
              Every bean is selected from micro-lot estates operating at altitudes above 1,800 meters. Our master baristas undergo over 500 hours of sensory calibration to ensure every cup delivers an unforgettable aromatic profile.
            </p>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-zinc-200/80 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider">Ethical Sourcing</h4>
                  <p className="text-[11px] text-zinc-600 mt-0.5">Fair trade wages directly to small-holding farm families.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-zinc-200/80 shadow-sm">
                <HeartHandshake className="w-5 h-5 text-[#7C3AED] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider">Artisanal Integrity</h4>
                  <p className="text-[11px] text-zinc-600 mt-0.5">No artificial syrups or shortcuts. Pure ingredients only.</p>
                </div>
              </div>
            </div>

            {/* Animated Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 glass-panel rounded-2xl border border-zinc-200/80 shadow-md bg-white">
              {stats.map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900 gold-gradient-text">
                    {counts[i]}{stat.suffix}
                  </div>
                  <div className="text-[11px] text-zinc-500 uppercase tracking-wider mt-1 font-mono">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
