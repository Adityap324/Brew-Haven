import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data/mockData';

export const InstagramFeed: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-mono text-[#B8860B] uppercase tracking-widest mb-3 shadow-sm">
              <Instagram className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>@brewhaven.cafe</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
              Follow Us On <span className="gold-gradient-text">Instagram</span>
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#7C3AED] text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-md hover:brightness-110 transition-all"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow @brewhaven.cafe</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

        {/* 6 Grid Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <motion.a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative rounded-2xl overflow-hidden aspect-square border border-zinc-200/80 bg-white shadow-sm"
            >
              <img
                src={post.image}
                alt={post.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/75 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center text-white">
                <div className="flex items-center gap-4 mb-2 text-xs font-bold text-[#D4AF37]">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4 fill-[#D4AF37]" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {post.comments}
                  </span>
                </div>
                <p className="text-[10px] text-zinc-300 line-clamp-3 italic">
                  "{post.caption}"
                </p>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
