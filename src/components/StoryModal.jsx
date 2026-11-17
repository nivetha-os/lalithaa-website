import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ShieldCheck, Award } from 'lucide-react';

export default function StoryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

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
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-midnight text-white border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-sans font-semibold tracking-[0.25em] uppercase text-platinum">
              OUR STORY
            </span>
            <span className="w-5 h-[1px] bg-white/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-4">
            A Legacy of Elegance
          </h2>

          <p className="text-xs sm:text-sm text-platinum/90 leading-relaxed font-sans font-light mb-6">
            For generations, Lalitha has been a symbol of timeless beauty and unmatched craftsmanship. Founded with a vision to create extraordinary diamond jewellery that transcends trends, each creation represents our relentless pursuit of optical brilliance and noble metal setting.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pt-6 border-t border-white/10 text-xs">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-white mb-2" />
              <h4 className="font-medium text-white mb-1">GIA Certified</h4>
              <p className="text-[11px] text-platinum/70">100% natural D-Flawless diamonds tested to highest standards.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <Sparkles className="w-4 h-4 text-white mb-2" />
              <h4 className="font-medium text-white mb-1">Platinum 950</h4>
              <p className="text-[11px] text-platinum/70">Engineered exclusively in hypoallergenic noble platinum & 18K white gold.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <Award className="w-4 h-4 text-white mb-2" />
              <h4 className="font-medium text-white mb-1">Hearts & Arrows</h4>
              <p className="text-[11px] text-platinum/70">Triple excellent optical symmetry with peerless fire and scintillation.</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3.5 rounded-full bg-btn-primary hover:bg-btn-hover border border-white/40 text-white font-sans font-medium text-xs tracking-[0.2em] uppercase transition-all"
          >
            DISCOVER THE COLLECTIONS
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
