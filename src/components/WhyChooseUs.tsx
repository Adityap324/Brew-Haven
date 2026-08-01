import React from 'react';
import { motion } from 'motion/react';
import { Wifi, ShieldCheck, Heart, Clock, Award, Coffee } from 'lucide-react';
import { PILLARS } from '../data/mockData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Bean': return Coffee;
      case 'Croissant': return Award;
      case 'Wifi': return Wifi;
      case 'Sparkles': return Award;
      case 'Clock': return Clock;
      case 'Heart': return Heart;
      default: return ShieldCheck;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-[#F5F2EC] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-mono text-[#B8860B] uppercase tracking-widest mb-4 shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>The Brew Haven Difference</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-zinc-900 tracking-tight leading-tight mb-4">
            Why Choose <span className="gold-gradient-text">Our Haven</span>
          </h2>

          <p className="text-zinc-600 font-light text-base sm:text-lg">
            We meticulously elevate every detail—from micro-lot bean roasting to acoustics and white-glove hospitality.
          </p>
        </div>

        {/* 6 Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLARS.map((pillar, index) => {
            const IconComponent = getIcon(pillar.iconName);
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-3xl p-8 border border-zinc-200/80 hover:border-[#D4AF37] transition-all duration-500 hover:shadow-xl relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/15 to-[#7C3AED]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#B8860B] group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-mono text-[#B8860B] uppercase tracking-widest px-2.5 py-1 rounded-full bg-zinc-50 border border-zinc-200">
                      {pillar.highlight}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-zinc-900 group-hover:text-[#B8860B] transition-colors mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center text-xs font-bold text-[#B8860B] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn Sourcing Standard</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
