import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function EarringsSection({ wishlist = [], onToggleWishlist, onAddToCart, onQuickView }) {
  const earringsProducts = products.filter((p) => p.categoryId === 'earrings');

  return (
    <section id="earrings" className="py-16 sm:py-20 bg-gradient-to-b from-[#071933] via-[#091F3D] to-[#071933] text-white relative border-t border-white/10 overflow-hidden">
      {/* Background Soft Glow with floating motion */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-0 w-96 h-96 bg-[#0E2A4D]/50 rounded-full blur-[130px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header with Top-Drop Slide Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-platinum/80 flex items-center gap-1.5">
                <span className="text-btn-hover animate-pulse">✦</span>
                LUMINOUS BRILLIANCE
              </span>
              <span className="w-8 h-[1px] bg-white/30" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight">
              Diamond Earrings
            </h2>
            <p className="text-xs sm:text-sm text-platinum/70 font-sans font-light mt-2 max-w-xl">
              From articulated chandelier pear drops to timeless solitaire studs, engineered to reflect light with every gesture.
            </p>
          </div>

          <motion.a
            whileHover={{ x: 5 }}
            href="#collections"
            className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-white/90 hover:text-white tracking-wider uppercase transition-colors group"
          >
            <span>View All Earrings</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Product Grid: Top-to-Bottom Chandelier Drop Slide */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {earringsProducts.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              theme="dark"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: idx * 0.12, type: "spring", stiffness: 220, damping: 20 }}
              isWishlisted={wishlist.some((item) => item.id === product.id)}
              onToggleWishlist={onToggleWishlist}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
