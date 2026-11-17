import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { categoriesData } from '../data/products';
import { handleImageError } from '../utils/imageFallback';

export default function Categories({ onSelectCategory }) {
  return (
    <section id="collections" className="py-14 sm:py-16 bg-ivory text-midnight relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header with Centered Dashes & Twinkling Sparkle - Slide Down Transition */}
        <motion.div 
          initial={{ opacity: 0, y: -35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-2">
            <span className="w-8 sm:w-12 h-[1px] bg-slate-navy/30" />
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-slate-navy flex items-center gap-1.5">
              <span className="text-btn-primary animate-pulse">✦</span>
              OUR COLLECTIONS
              <span className="text-btn-primary animate-pulse">✦</span>
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-slate-navy/30" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-midnight font-normal tracking-tight">
            Discover Your Style
          </h2>
        </motion.div>

        {/* 5 Category Cards Grid with Distinct Fan-Out Slide Transitions */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {categoriesData.map((cat, idx) => {
            // Fan-out slide offset based on position
            const xOffset = idx === 0 ? -40 : idx === 1 ? -20 : idx === 2 ? 0 : idx === 3 ? 20 : 40;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, x: xOffset, y: 45 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -6, scale: 1.02, transition: { type: "spring", stiffness: 350, damping: 25 } }}
                transition={{ duration: 0.6, delay: idx * 0.09, ease: [0.21, 1.02, 0.49, 0.99] }}
                onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#0A1D36] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 h-[140px] sm:h-[160px] lg:h-[175px] flex flex-col justify-end p-4 border border-white/10 hover:border-white/30"
              >
                {/* Background Diamond Photography on Navy Silk */}
                <div className="absolute inset-0 overflow-hidden bg-[#071426]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    onError={(e) => handleImageError(e, cat.id)}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-115 opacity-95"
                    loading="lazy"
                  />
                  {/* Dark Blue Gradient Overlay for crisp white text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/95 via-[#071426]/35 to-transparent pointer-events-none" />

                  {/* Shimmer sweep on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none skew-x-12" />
                </div>

                {/* Title & Arrow at the bottom with slide animation */}
                <div className="relative z-10 flex items-center justify-between text-white">
                  <span className="text-xs sm:text-[13px] font-sans font-medium tracking-wide group-hover:text-blue-100 transition-colors">
                    {cat.title}
                  </span>
                  <div className="w-5 h-5 rounded-full bg-white/10 group-hover:bg-white/25 flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3 h-3 text-white transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
