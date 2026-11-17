import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingBag, ShieldCheck } from 'lucide-react';
import { handleImageError } from '../utils/imageFallback';

export default function QuickViewModal({ 
  product, 
  onClose, 
  isWishlisted, 
  onToggleWishlist,
  onAddToCart
}) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-midnight/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="relative w-full max-w-3xl bg-ivory text-midnight border border-border-silver/40 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/80 hover:bg-white text-midnight border border-border-card transition-all"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Left: Product Image */}
          <div className="md:w-1/2 p-8 bg-white flex items-center justify-center border-b md:border-b-0 md:border-r border-border-card">
            <img
              src={product.image}
              alt={product.name}
              onError={(e) => handleImageError(e, product.category || product.categoryId)}
              className="max-h-72 w-auto object-contain"
            />
          </div>

          {/* Right: Details & Action */}
          <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-sans font-semibold tracking-[0.25em] uppercase text-slate-navy block mb-1">
                {product.category}
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl text-midnight font-normal mb-3">
                {product.name}
              </h2>

              <p className="font-sans text-xl sm:text-2xl font-bold text-midnight mb-4">
                {product.priceFormatted}
              </p>

              <p className="text-xs sm:text-[13px] text-slate-navy/80 font-sans font-light leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="p-3.5 rounded-xl bg-ice-blue/40 border border-border-card text-xs space-y-1.5 mb-6">
                <div className="flex items-center gap-2 text-slate-navy font-medium">
                  <ShieldCheck className="w-4 h-4 text-btn-primary" />
                  <span>Specification & Certification</span>
                </div>
                <p className="text-[11px] text-slate-navy/70 leading-relaxed font-sans font-light">
                  {product.details}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-border-card">
              <button
                onClick={() => {
                  onAddToCart && onAddToCart(product);
                  onClose();
                }}
                className="flex-1 py-3.5 rounded-full bg-btn-primary hover:bg-btn-hover text-white text-xs font-sans font-medium tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Bag</span>
              </button>

              <button
                onClick={() => onToggleWishlist && onToggleWishlist(product)}
                className={`p-3.5 rounded-full border transition-colors ${
                  isWishlisted
                    ? "bg-red-500 text-white border-red-500"
                    : "bg-white text-slate-navy border-border-card hover:border-slate-navy"
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? "fill-white" : ""}`} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
