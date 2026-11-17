import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    quote: "LALITHA crafted our daughter's royal wedding rivière utilizing rare D-Flawless natural diamonds. The Platinum 950 micro-prong setting possesses an ethereal scintillation that catches every beam of light. It is not mere jewellery—it is pure crystallized majesty.",
    author: "Maharani Radhika Devi",
    location: "Royal Heritage Dynasty, Rajasthan",
    jewelAcquired: "Haute Diamond Rivière Collar & Pear Drops",
    year: "Patron Since 1978",
    rating: 5,
    verified: "GIA Certified D-Flawless Dossier"
  },
  {
    id: 2,
    quote: "The optical fire, dispersion, and Hearts & Arrows precision of their diamond cut place LALITHA firmly in the sovereign pantheon alongside Place Vendôme's historic maisons. A peerless diamantaire of our era.",
    author: "Siddharth Merchant",
    location: "Senior Editor, Haute Joaillerie Review",
    jewelAcquired: "Editorial Selection: 5.20 Ct Oval Solitaire",
    year: "Independent Critical Critique",
    rating: 5,
    verified: "GIA & IGI Master Diamond Dossier"
  },
  {
    id: 3,
    quote: "Commissioning a 36-carat graduating diamond collar for our 25th anniversary was effortless. From the diamond mapping plates to private armored delivery in Mayfair, their discretion and gemological standard are peerless.",
    author: "Lord Alistair & Lady Cynthia Crawford",
    location: "Mayfair, London & St. Moritz",
    jewelAcquired: "Bespoke Luminary Diamond Collar",
    year: "Patron Since 1996",
    rating: 5,
    verified: "International Armored Vault Dispatch"
  },
  {
    id: 4,
    quote: "Walking into my wedding reception wearing the Haute Diamond Bridal Suite was unforgettable. The diamonds illuminated the ballroom with hypnotic brilliance, perfectly balanced in lightweight Platinum 950.",
    author: "Dr. Ananya Piramal-Singhania",
    location: "South Mumbai & New York",
    jewelAcquired: "Celestial Diamond Bridal Suite",
    year: "Bride of 2024",
    rating: 5,
    verified: "Custom Atelier Diamond Handcraft"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const active = TESTIMONIALS[currentIndex];

  return (
    <section id="patrons" className="relative py-28 bg-[#070707] border-t border-luxury-gold/20 overflow-hidden">
      {/* Background radial gold aura */}
      <div className="absolute bottom-0 left-1/3 w-[700px] h-[500px] bg-luxury-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-luxury-gold/30 bg-luxury-gold/5 text-luxury-gold text-xs tracking-[0.25em] uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
            <span>Sovereign Patronage</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-ivory tracking-tight mb-5"
          >
            Voices of Patrons &mdash; <span className="text-gold-gradient font-light italic">& Connoisseurs</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-luxury-muted text-sm md:text-base leading-relaxed font-light"
          >
            Reflections from noble families, international collectors, and connoisseurs who entrust their lifetime heirlooms to the hands of LALITHA.
          </motion.p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="relative bg-[#0a0a0a] border border-luxury-gold/25 rounded-3xl p-8 sm:p-14 shadow-2xl backdrop-blur-xl mb-12">
          {/* Subtle Decorative Quote Icon */}
          <div className="absolute top-8 right-8 text-luxury-gold/15 pointer-events-none">
            <Quote className="w-20 h-20 sm:w-28 sm:h-28 rotate-180" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            {/* 5 Gold Stars Rating */}
            <div className="flex items-center justify-center gap-1.5 text-luxury-gold">
              {[...Array(active.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-luxury-ivory font-normal leading-relaxed italic">
              &ldquo;{active.quote}&rdquo;
            </blockquote>

            {/* Commissioned Piece Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 text-[11px] text-luxury-champagne font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-luxury-gold" />
              <span>{active.jewelAcquired} &bull; {active.verified}</span>
            </div>

            {/* Author Attribution */}
            <div className="pt-4 border-t border-luxury-gold/15">
              <h4 className="font-serif text-lg sm:text-xl font-bold text-luxury-ivory">
                {active.author}
              </h4>
              <p className="text-xs text-luxury-gold tracking-widest uppercase mt-1">
                {active.location}
              </p>
              <p className="text-[11px] text-luxury-muted font-mono mt-0.5">
                {active.year}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between absolute bottom-8 left-8 right-8 pointer-events-none">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-luxury-black/80 hover:bg-luxury-gold hover:text-luxury-black text-luxury-champagne border border-luxury-gold/30 transition-all pointer-events-auto"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full bg-luxury-black/80 hover:bg-luxury-gold hover:text-luxury-black text-luxury-champagne border border-luxury-gold/30 transition-all pointer-events-auto"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Thumbnail Selector Indicators */}
        <div className="flex items-center justify-center gap-3">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentIndex === idx
                  ? "w-10 bg-gold-gradient shadow-md shadow-luxury-gold/25"
                  : "w-2.5 bg-luxury-gold/25 hover:bg-luxury-gold/50"
              }`}
              aria-label={`View testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
