import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, X, Check, ArrowRight, RotateCcw } from 'lucide-react';
import { MENU_ITEMS } from '../data/mockData';
import { MenuItem } from '../types';

interface BrewQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRecommended: (item: MenuItem) => void;
}

export const BrewQuizModal: React.FC<BrewQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectRecommended,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [intensity, setIntensity] = useState<string>('balanced');
  const [milk, setMilk] = useState<string>('oat');
  const [temp, setTemp] = useState<string>('hot');

  const handleFinish = () => {
    setStep(4); // Result step
  };

  const getRecommendation = (): MenuItem => {
    if (temp === 'cold') {
      return MENU_ITEMS.find((i) => i.id === 'c5') || MENU_ITEMS[0]; // 24-hr nitro
    }
    if (intensity === 'bold') {
      return MENU_ITEMS.find((i) => i.id === 'c1') || MENU_ITEMS[0]; // Velvet gold
    }
    if (intensity === 'smoky') {
      return MENU_ITEMS.find((i) => i.id === 'c3') || MENU_ITEMS[2]; // Smoked bourbon latte
    }
    return MENU_ITEMS.find((i) => i.id === 'c2') || MENU_ITEMS[1]; // Reserve Cappuccino
  };

  const recommendedItem = getRecommendation();

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative z-10 max-w-lg w-full bg-white rounded-3xl p-8 border border-zinc-200 shadow-2xl space-y-6"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-zinc-100 text-zinc-600 hover:text-zinc-900 border border-zinc-200"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-xs font-mono text-[#7C3AED] uppercase tracking-widest">
              <Coffee className="w-3.5 h-3.5 text-[#7C3AED]" />
              <span>Flavor Profiler</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-zinc-900">
              Find Your Signature Brew
            </h3>
          </div>

          {/* Step 1: Intensity */}
          {step === 1 && (
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#B8860B] uppercase tracking-wider block font-medium">
                Step 1 of 3: What is your preferred flavor profile?
              </span>

              <div className="space-y-2.5">
                {[
                  { id: 'floral', title: 'Bright, Citrus & Floral (Light Roast)', desc: 'Jasmine, bergamot, clean acidity' },
                  { id: 'balanced', title: 'Smooth & Velvet (Medium Roast)', desc: 'Milk chocolate, toasted almonds, cream' },
                  { id: 'smoky', title: 'Smoky, Vanilla & Bourbon (Signature)', desc: 'Torch-smoked oak, rich caramel sweetness' },
                  { id: 'bold', title: 'Intense Dark Truffle (Dark Roast)', desc: 'Deep cocoa, intense espresso bite' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setIntensity(opt.id);
                      setStep(2);
                    }}
                    className={`w-full p-4 rounded-2xl border text-left transition-all ${
                      intensity === opt.id
                        ? 'bg-[#7C3AED]/10 border-[#D4AF37] text-zinc-900 shadow-sm'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:text-zinc-900 hover:border-zinc-300'
                    }`}
                  >
                    <div className="font-serif font-bold text-sm text-zinc-900">{opt.title}</div>
                    <div className="text-xs text-zinc-500 mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Dairy */}
          {step === 2 && (
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#B8860B] uppercase tracking-wider block font-medium">
                Step 2 of 3: Preferred texture & milk?
              </span>

              <div className="space-y-2.5">
                {[
                  { id: 'black', title: 'Pure Espresso / Ristretto (No Milk)', desc: 'Unfiltered single-origin complexity' },
                  { id: 'oat', title: 'Silky Oat or Macadamia Milk', desc: 'Creamy, nuttiness without overpowering espresso' },
                  { id: 'whole', title: 'Traditional Whole Milk Microfoam', desc: 'Classic European cappuccino richness' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setMilk(opt.id);
                      setStep(3);
                    }}
                    className={`w-full p-4 rounded-2xl border text-left transition-all ${
                      milk === opt.id
                        ? 'bg-[#7C3AED]/10 border-[#D4AF37] text-zinc-900 shadow-sm'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:text-zinc-900 hover:border-zinc-300'
                    }`}
                  >
                    <div className="font-serif font-bold text-sm text-zinc-900">{opt.title}</div>
                    <div className="text-xs text-zinc-500 mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Temperature */}
          {step === 3 && (
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#B8860B] uppercase tracking-wider block font-medium">
                Step 3 of 3: Temperature & vibe?
              </span>

              <div className="space-y-2.5">
                {[
                  { id: 'hot', title: 'Warm & Comforting', desc: 'Steamed microfoam in ceramic cup' },
                  { id: 'cold', title: 'Chilled & Cascading Nitro Cold Brew', desc: 'Refreshing 24hr cold steeped' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setTemp(opt.id);
                      handleFinish();
                    }}
                    className={`w-full p-4 rounded-2xl border text-left transition-all ${
                      temp === opt.id
                        ? 'bg-[#7C3AED]/10 border-[#D4AF37] text-zinc-900 shadow-sm'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:text-zinc-900 hover:border-zinc-300'
                    }`}
                  >
                    <div className="font-serif font-bold text-sm text-zinc-900">{opt.title}</div>
                    <div className="text-xs text-zinc-500 mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Result */}
          {step === 4 && (
            <div className="space-y-6 text-center">
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-4">
                <div className="relative h-44 rounded-xl overflow-hidden">
                  <img
                    src={recommendedItem.image}
                    alt={recommendedItem.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 font-serif text-xl font-bold text-white">
                    {recommendedItem.name}
                  </span>
                </div>

                <p className="text-xs text-zinc-600">
                  {recommendedItem.description}
                </p>

                <div className="text-xs text-[#B8860B] font-mono font-bold">
                  Matches your profile: {intensity.toUpperCase()} • {temp.toUpperCase()} • ₹{recommendedItem.price}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="p-3 rounded-full bg-zinc-100 text-zinc-600 hover:text-zinc-900 border border-zinc-200"
                  title="Retake Quiz"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onSelectRecommended(recommendedItem);
                  }}
                  className="flex-1 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#7C3AED] text-white font-bold text-xs uppercase tracking-widest shadow-md flex items-center justify-center gap-2"
                >
                  <span>Customize & Order Match</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
