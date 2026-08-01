import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Star, Award, Coffee, Cake, Flame, Plus } from 'lucide-react';
import { MENU_ITEMS } from '../data/mockData';
import { MenuItem } from '../types';

interface FeaturedMenuProps {
  onSelectItem: (item: MenuItem) => void;
}

export const FeaturedMenu: React.FC<FeaturedMenuProps> = ({ onSelectItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'coffee' | 'desserts' | 'specialty'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Offerings', icon: Award },
    { id: 'coffee', label: 'Espresso & Cold Brew', icon: Coffee },
    { id: 'desserts', label: 'Artisan Pastries', icon: Cake },
    { id: 'specialty', label: 'Tea & Signature Elixirs', icon: Flame },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.notes.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 bg-[#FAF8F5] relative">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-mono text-[#B8860B] uppercase tracking-widest mb-4 shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Handcrafted Culinary Artistry</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-zinc-900 tracking-tight leading-tight mb-4">
            Featured <span className="gold-gradient-text">Menu</span>
          </h2>

          <p className="text-zinc-600 font-light text-base sm:text-lg">
            Savor single-origin espresso creations and handcrafted French pastries designed for discerning palates.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-300 border ${
                    isActive
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#7C3AED] text-white border-transparent shadow-md'
                      : 'bg-white text-zinc-700 hover:text-zinc-900 border-zinc-200 hover:border-zinc-300 shadow-sm'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Field */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search brews, ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-[#D4AF37] transition-all shadow-sm"
            />
          </div>

        </div>

        {/* Menu Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchQuery}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectItem(item)}
                className="group bg-white rounded-3xl overflow-hidden border border-zinc-200/80 hover:border-[#D4AF37] transition-all duration-500 hover:shadow-xl flex flex-col cursor-pointer"
              >
                {/* Image Aspect Box */}
                <div className="relative h-64 overflow-hidden bg-zinc-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-80" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    {item.isPopular ? (
                      <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-white font-bold text-[10px] uppercase tracking-wider shadow-sm">
                        Signature Choice
                      </span>
                    ) : <span />}

                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 border border-zinc-200 text-xs font-bold text-zinc-900 shadow-sm">
                      <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-4 left-4 font-serif text-2xl font-bold text-[#B8860B] drop-shadow-sm">
                    ₹{item.price}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-zinc-900 group-hover:text-[#B8860B] transition-colors mb-2">
                      {item.name}
                    </h3>
                    <p className="text-zinc-600 text-xs leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <span className="text-[11px] text-zinc-500 font-mono truncate max-w-[180px]">
                      Notes: <span className="text-zinc-800">{item.notes}</span>
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectItem(item);
                      }}
                      className="px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 group-hover:border-[#D4AF37] group-hover:bg-[#7C3AED] text-zinc-800 group-hover:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all"
                    >
                      <span>Customize</span>
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 text-zinc-500">
            <p className="text-lg">No offerings match your search criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 text-xs font-bold text-[#B8860B] underline tracking-widest uppercase"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
