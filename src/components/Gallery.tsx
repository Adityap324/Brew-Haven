import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Moments' },
    { id: 'interior', label: 'Café Interior' },
    { id: 'coffee', label: 'Barista Craft' },
    { id: 'food', label: 'Artisan Pastries' },
    { id: 'ambience', label: 'Night Ambience' },
  ];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  const openLightbox = (index: number) => setActiveLightboxIndex(index);
  const closeLightbox = () => setActiveLightboxIndex(null);

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        activeLightboxIndex === 0 ? filteredItems.length - 1 : activeLightboxIndex - 1
      );
    }
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        activeLightboxIndex === filteredItems.length - 1 ? 0 : activeLightboxIndex + 1
      );
    }
  };

  const activeItem: GalleryItem | null =
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-mono text-[#B8860B] uppercase tracking-widest mb-4 shadow-sm">
            <Eye className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Visual Atmosphere</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-zinc-900 tracking-tight leading-tight mb-4">
            Our Visual <span className="gold-gradient-text">Gallery</span>
          </h2>

          <p className="text-zinc-600 font-light text-base sm:text-lg">
            Immerse yourself in our architectural lounge, golden crema extractions, and cozy night atmosphere.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#7C3AED] text-white border-transparent shadow-md'
                  : 'bg-white text-zinc-700 hover:text-zinc-900 border-zinc-200 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-3xl overflow-hidden border border-zinc-200/80 bg-white cursor-pointer h-80 shadow-sm hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest block mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif text-xl font-bold text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-zinc-300 text-xs line-clamp-2">
                  {item.description}
                </p>

                <div className="mt-3 flex items-center gap-2 text-xs font-bold text-[#D4AF37]">
                  <Eye className="w-4 h-4" />
                  <span>View Full Photo</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeItem && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeLightbox}
                className="fixed inset-0 bg-black/80 backdrop-blur-md"
              />

              {/* Lightbox Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative z-10 max-w-4xl w-full bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh]"
              >
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-zinc-900 border border-zinc-200 hover:border-[#D4AF37] shadow-md"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left/Right Controls */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 text-zinc-900 border border-zinc-200 hover:border-[#D4AF37] shadow-md"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 text-zinc-900 border border-zinc-200 hover:border-[#D4AF37] shadow-md"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Main Media View */}
                <div className="w-full md:w-2/3 bg-zinc-900 flex items-center justify-center overflow-hidden h-72 md:h-auto">
                  <img
                    src={activeItem.image}
                    alt={activeItem.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Sidebar Details */}
                <div className="w-full md:w-1/3 p-6 sm:p-8 flex flex-col justify-between bg-white text-zinc-900">
                  <div>
                    <span className="text-xs font-mono text-[#B8860B] uppercase tracking-widest block mb-2">
                      {activeItem.category}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-zinc-900 mb-4">
                      {activeItem.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                      {activeItem.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-500 font-mono">
                    <span>BREW HAVEN ARCHIVE</span>
                    <span>{activeLightboxIndex! + 1} / {filteredItems.length}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
