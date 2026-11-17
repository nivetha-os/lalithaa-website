import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { handleImageError } from '../utils/imageFallback';

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  const [searchTerm, setSearchTerm] = useState("");

  const results = useMemo(() => {
    if (!searchTerm.trim()) return products;
    const q = searchTerm.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 sm:px-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-midnight/80 backdrop-blur-md"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          className="relative w-full max-w-xl bg-ivory text-midnight border border-border-card rounded-2xl overflow-hidden shadow-2xl z-10"
        >
          {/* Search Input Bar */}
          <div className="p-4 sm:p-5 border-b border-border-card flex items-center gap-3 bg-white">
            <Search className="w-5 h-5 text-slate-navy/60 shrink-0" />
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search diamond necklaces, earrings, bracelets..."
              className="w-full bg-transparent text-midnight text-sm placeholder-slate-navy/50 outline-none font-sans"
            />
            <button
              onClick={onClose}
              className="p-1.5 text-slate-navy/60 hover:text-midnight transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Suggestion Pills */}
          <div className="px-5 py-2.5 bg-ice-blue/30 border-b border-border-card flex items-center gap-2 overflow-x-auto text-[11px] text-slate-navy/70">
            <span className="shrink-0 font-medium">Trending:</span>
            {["Necklaces", "Earrings", "Bracelets", "Celestial Grace", "Platinum 950"].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchTerm(tag)}
                className="px-2.5 py-0.5 rounded-full bg-white hover:bg-btn-primary hover:text-white border border-border-card transition-colors shrink-0 font-sans"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Results List */}
          <div className="p-5 max-h-[50vh] overflow-y-auto space-y-2.5">
            {results.length === 0 ? (
              <div className="text-center py-10 text-slate-navy/60 text-xs">
                No diamond creations found matching &ldquo;{searchTerm}&rdquo;
              </div>
            ) : (
              results.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onSelectProduct && onSelectProduct(p);
                    onClose();
                  }}
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-ice-blue/30 border border-border-card cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={p.image}
                      alt={p.name}
                      onError={(e) => handleImageError(e, p.category || p.categoryId)}
                      className="w-12 h-12 rounded-lg object-contain bg-ivory p-0.5 border border-border-card"
                    />
                    <div>
                      <h4 className="font-sans text-xs font-semibold text-midnight">
                        {p.name}
                      </h4>
                      <p className="text-[10px] text-slate-navy/60 font-sans">{p.category}</p>
                    </div>
                  </div>

                  <div className="text-right flex items-center gap-2">
                    <span className="font-sans text-xs font-bold text-midnight">
                      {p.priceFormatted}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-navy/40" />
                  </div>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
