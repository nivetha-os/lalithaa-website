import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { bridalCollection } from '../data/bridalCollection';
import { Crown, Sparkles, Check, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

export default function BridalSection({ onBookConsultation }) {
  const [activeSuiteIdx, setActiveSuiteIdx] = useState(0);
  const suite = bridalCollection[activeSuiteIdx];

  return (
    <section id="bridal" className="relative py-28 bg-[#080706] text-luxury-ivory overflow-hidden border-t border-luxury-gold/20">
      {/* Background Decorative Gold Watermark */}
      <div className="absolute right-0 top-1/3 -translate-y-1/2 opacity-5 pointer-events-none select-none font-cinzel text-[240px] font-bold text-luxury-gold hidden lg:block">
        VIVAHA
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-luxury-gold/40 bg-luxury-gold/10 text-luxury-gold text-xs tracking-[0.25em] uppercase mb-4"
          >
            <Crown className="w-4 h-4 text-luxury-gold" />
            <span>Vivaha Haute Couture &bull; The Bridal Trousseau</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide mb-4"
          >
            The Royal <span className="text-gold-gradient">Diamond Bridal Vault</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-luxury-muted text-sm sm:text-base leading-relaxed font-light"
          >
            For the bride stepping into sovereign grace. Handcrafted diamond wedding parures featuring GIA certified D-Flawless natural diamonds, high-carat rivières, and bespoke chandelier drops in noble Platinum 950.
          </motion.p>
        </div>

        {/* Cinematic Bridal Showcase Card */}
        <div className="bg-luxury-surface/80 border border-luxury-gold/30 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
            {/* Left: Cinematic High-Res Image */}
            <div className="lg:col-span-7 relative overflow-hidden h-[420px] lg:h-auto min-h-[460px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={suite.id}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={suite.image}
                    alt={suite.title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-transparent to-black/30" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-luxury-surface lg:block hidden" />
                </motion.div>
              </AnimatePresence>

              {/* Suite Badges on Image */}
              <div className="absolute bottom-6 left-6 z-20 flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-luxury-black/85 border border-luxury-gold/40 text-luxury-gold text-xs font-medium tracking-wider backdrop-blur-md flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {suite.karatage}
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-luxury-black/85 border border-luxury-gold/25 text-luxury-champagne text-xs font-mono backdrop-blur-md">
                  {suite.craftsmanship}
                </span>
              </div>
            </div>

            {/* Right: Suite Editorial Inclusions & Booking */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={suite.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-semibold block mb-1">
                    {suite.subtitle}
                  </span>
                  
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-luxury-ivory mb-4 leading-tight">
                    {suite.title}
                  </h3>

                  {/* Poetic Quote */}
                  <p className="font-serif italic text-luxury-champagne/90 text-sm sm:text-base border-l-2 border-luxury-gold pl-4 py-1 mb-6">
                    &ldquo;{suite.quote}&rdquo;
                  </p>

                  {/* Suite Inclusions Checklist */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs uppercase tracking-widest text-luxury-muted font-medium">
                      Parure Inclusions
                    </p>
                    {suite.details.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-luxury-ivory/90 font-light">
                        <div className="w-4 h-4 rounded-full bg-luxury-gold/20 border border-luxury-gold/60 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-luxury-gold" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Consultation Actions */}
              <div className="pt-6 border-t border-luxury-gold/15 space-y-3">
                <button
                  onClick={onBookConsultation}
                  className="gold-shimmer-btn w-full py-4 rounded-xl bg-gold-gradient text-luxury-black font-semibold text-xs tracking-[0.25em] uppercase hover:shadow-[0_0_25px_rgba(201,164,76,0.35)] transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Private Bridal Suite</span>
                </button>
                <p className="text-center text-[11px] text-luxury-muted font-light">
                  Complimentary 1-on-1 consultation with Head Gemologist in Mumbai, Delhi, or Encrypted Virtual Suite
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Suite Selector Tabs */}
          <div className="bg-luxury-black/90 border-t border-luxury-gold/20 p-4 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {bridalCollection.map((item, idx) => {
              const isActive = activeSuiteIdx === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSuiteIdx(idx)}
                  className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                    isActive
                      ? "border-luxury-gold bg-luxury-gold/15 shadow-lg shadow-luxury-gold/10"
                      : "border-luxury-gold/15 bg-luxury-surface/40 hover:border-luxury-gold/40 hover:bg-luxury-surface/80"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 rounded-lg object-cover shrink-0 border border-luxury-gold/30"
                  />
                  <div className="min-w-0">
                    <p className="text-[10px] text-luxury-muted font-mono">0{idx + 1} / SUITE</p>
                    <p className={`text-xs font-serif font-bold truncate ${isActive ? "text-luxury-gold" : "text-luxury-ivory"}`}>
                      {item.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Royal Bridal Epigram Banner */}
        <div className="mt-20 relative rounded-3xl overflow-hidden py-16 px-8 text-center border border-luxury-gold/25 bg-gradient-to-r from-luxury-black via-[#16130f] to-luxury-black shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-luxury-gold font-serif text-2xl">❖</span>
            <h4 className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-luxury-ivory font-light leading-relaxed">
              &ldquo;A Lalitha bridal creation does not merely adorn a wedding day &mdash; it inaugurates a family dynasty.&rdquo;
            </h4>
            <p className="text-xs uppercase tracking-[0.35em] text-luxury-muted">
              Master Goldsmith Guild of Lalitha Haute Parure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
