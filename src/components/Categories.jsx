import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { categoriesData } from '../data/products';
import { handleImageError } from '../utils/imageFallback';

export default function Categories({ onSelectCategory }) {
  return (
    <section id="collections" className="py-14 sm:py-16 bg-ivory text-midnight relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header with Centered Dashes */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-3 mb-2">
            <span className="w-8 sm:w-12 h-[1px] bg-slate-navy/30" />
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-slate-navy">
              OUR COLLECTIONS
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-slate-navy/30" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-midnight font-normal tracking-tight">
            Discover Your Style
          </h2>
        </div>

        {/* 5 Category Cards Grid matching the Reference Design */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {categoriesData.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => onSelectCategory && onSelectCategory(cat.id)}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#0A1D36] cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-[140px] sm:h-[160px] lg:h-[175px] flex flex-col justify-end p-4 border border-white/10"
            >
              {/* Background Diamond Photography on Navy Silk */}
              <div className="absolute inset-0 overflow-hidden bg-[#071426]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  onError={(e) => handleImageError(e, cat.id)}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110 opacity-95"
                  loading="lazy"
                />
                {/* Dark Blue Gradient Overlay for crisp white text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/90 via-[#071426]/30 to-transparent pointer-events-none" />
              </div>

              {/* Title & Arrow at the bottom */}
              <div className="relative z-10 flex items-center justify-between text-white">
                <span className="text-xs sm:text-[13px] font-sans font-medium tracking-wide">
                  {cat.title}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-white/80 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
