import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { handleImageError, getFallbackImage } from '../utils/imageFallback';

export default function ProductCard({ 
  product, 
  onQuickView, 
  onAddToCart, 
  isWishlisted, 
  onToggleWishlist,
  theme = "light", // "light" (for white/ivory sections) or "dark" (for deep royal blue sections)
  initial,
  whileInView,
  viewport,
  transition
}) {
  const isDark = theme === "dark";
  const fallbackImg = getFallbackImage(product.category || product.categoryId);

  return (
    <motion.div
      initial={initial || { opacity: 0, y: 30 }}
      whileInView={whileInView || { opacity: 1, y: 0 }}
      viewport={viewport || { once: true, margin: "-40px" }}
      whileHover={{ y: -7, transition: { type: "spring", stiffness: 350, damping: 25 } }}
      transition={transition || { duration: 0.55 }}
      onClick={() => onQuickView && onQuickView(product)}
      className={`group relative rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-colors duration-300 cursor-pointer ${
        isDark 
          ? "bg-[#0C223E] hover:bg-[#0E2849] border border-white/15 hover:border-white/35 text-white shadow-xl hover:shadow-2xl" 
          : "bg-white hover:bg-[#FAFBFD] border border-border-card hover:border-slate-navy/25 text-midnight shadow-card hover:shadow-card-hover"
      }`}
    >
      {/* Top Bar: Tag Badge & Wishlist Heart */}
      <div className="flex items-center justify-between gap-2 mb-3">
        {product.tag ? (
          <span className={`text-[10px] font-sans font-medium tracking-wider uppercase px-2.5 py-0.5 rounded-full transition-transform duration-300 group-hover:scale-105 ${
            isDark 
              ? "bg-white/10 text-platinum border border-white/15" 
              : "bg-slate-navy/5 text-slate-navy border border-slate-navy/10"
          }`}>
            {product.tag}
          </span>
        ) : <span />}

        <motion.button
          whileTap={{ scale: 1.35 }}
          whileHover={{ scale: 1.15 }}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist && onToggleWishlist(product);
          }}
          className={`p-1.5 rounded-full transition-colors z-10 ${
            isDark 
              ? "text-white/70 hover:text-red-400 hover:bg-white/10" 
              : "text-slate-navy/50 hover:text-red-500 hover:bg-slate-navy/5"
          }`}
          aria-label="Wishlist"
        >
          <Heart 
            className={`w-4 h-4 transition-colors ${
              isWishlisted ? "fill-red-500 text-red-500" : "stroke-[1.6]"
            }`} 
          />
        </motion.button>
      </div>

      {/* Product Image Area / Accessory Display Pad ("Dark Blue Attai" like Discover Your Style) */}
      <div className={`w-full h-44 sm:h-48 flex items-center justify-center my-2 overflow-hidden relative rounded-xl transition-all duration-300 ${
        isDark 
          ? "bg-[#071933]/70 border border-white/10 p-2.5 shadow-inner" 
          : "bg-gradient-to-b from-[#0A1D36] via-[#071933] to-[#040E1C] border border-[#0A2240] p-2.5 shadow-md group-hover:border-slate-navy/50"
      }`}>
        <img
          src={product.image || fallbackImg}
          alt={product.name}
          onError={(e) => handleImageError(e, product.category || product.categoryId)}
          className="w-full h-full object-cover rounded-lg transform transition-transform duration-700 ease-out group-hover:scale-110 drop-shadow-xl"
          loading="lazy"
        />

        {/* Subtle royal blue gradient vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/60 via-transparent to-[#071426]/20 pointer-events-none" />

        {/* Luxury Diamond Light Shimmer Sweep across the jewel on hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none skew-x-12" />

        {/* Twinkling 4-Point Diamond Sparkle Icon on Hover */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 pointer-events-none text-white/90 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
          <svg className="w-4 h-4 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z" />
          </svg>
        </div>

        {/* Quick View Hover Pill */}
        <div className="absolute inset-0 bg-[#071426]/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-midnight text-[11px] font-sans font-semibold tracking-wider uppercase shadow-xl transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
            <Eye className="w-3.5 h-3.5" />
            Quick View
          </span>
        </div>
      </div>

      {/* Bottom Information */}
      <div className={`pt-3 border-t ${isDark ? "border-white/10" : "border-platinum/40"}`}>
        <p className={`text-[10px] sm:text-[11px] font-sans uppercase tracking-widest mb-1 ${
          isDark ? "text-platinum/70" : "text-slate-navy/60"
        }`}>
          {product.category}
        </p>

        <h3 className={`text-xs sm:text-sm font-sans font-semibold truncate mb-1.5 group-hover:text-btn-primary transition-colors ${
          isDark ? "text-white group-hover:text-blue-200" : "text-midnight group-hover:text-btn-primary"
        }`}>
          {product.name}
        </h3>

        <div className="flex items-center justify-between mt-2 pt-1">
          <p className={`text-xs sm:text-sm font-sans font-bold tracking-tight ${
            isDark ? "text-white" : "text-midnight"
          }`}>
            {product.priceFormatted}
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart && onAddToCart(product);
            }}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-sans font-medium uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md ${
              isDark 
                ? "bg-white text-midnight hover:bg-platinum shadow-md font-semibold" 
                : "bg-btn-primary hover:bg-btn-hover text-white"
            }`}
          >
            <ShoppingBag className="w-3 h-3" />
            <span>Bag</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
