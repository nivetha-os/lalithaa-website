import React from 'react';
import { motion } from 'framer-motion';
import { brandStory } from '../data/brandStory';
import { Award, Hammer, Sparkles, ShieldCheck, Compass, HeartHandshake } from 'lucide-react';

export default function BrandStory() {
  const romanNumerals = ["I", "II", "III", "IV"];

  return (
    <section id="story" className="py-28 bg-[#060606] relative overflow-hidden border-t border-luxury-gold/15">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-luxury-gold/10 hidden xl:block" />
      <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-luxury-gold/10 hidden xl:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-luxury-gold/30 bg-luxury-gold/10 text-luxury-gold text-xs tracking-[0.25em] uppercase mb-4"
          >
            <Compass className="w-3.5 h-3.5 text-luxury-gold" />
            <span>The Heritage Manifesto</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-luxury-ivory mb-6"
          >
            Seven Decades of <span className="text-gold-gradient">Imperial Mastery</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif italic text-lg sm:text-xl text-luxury-champagne max-w-2xl mx-auto leading-relaxed font-light"
          >
            &ldquo;{brandStory.quote}&rdquo;
          </motion.p>
        </div>

        {/* Editorial Story Layout: Craftsmanship & Heritage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Left: Dual Photography Archival Collage */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative z-10 rounded-3xl overflow-hidden border border-luxury-gold/30 shadow-2xl h-[440px] sm:h-[500px]"
            >
              <img
                src="/images/craftsmanship-1.jpg"
                alt="Goldsmith at Lalitha Atelier"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] tracking-widest uppercase text-luxury-gold font-mono block mb-1">
                  Diamond Atelier &bull; 1954
                </span>
                <p className="font-serif text-lg font-bold text-luxury-ivory">
                  Precision Diamond Micro-Pavé Setting in Platinum 950
                </p>
              </div>
            </motion.div>

            {/* Overlapping Secondary Archival Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="hidden sm:block absolute -bottom-10 -right-6 z-20 w-64 h-72 rounded-2xl overflow-hidden border-2 border-luxury-gold shadow-2xl bg-luxury-surface"
            >
              <img
                src="/images/craftsmanship-3.jpg"
                alt="Intricate Goldsmith Work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-[11px] text-luxury-champagne font-medium">
                GIA D-Flawless Natural Solitaire Verified
              </div>
            </motion.div>
          </div>

          {/* Right: Narrative & Editorial Text */}
          <div className="lg:col-span-6 lg:pl-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-semibold">
                An Imperial Calling
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-luxury-ivory mt-2 mb-4 leading-tight">
                Where Optical Perfection Meets High Joaillerie
              </h3>
              <p className="text-luxury-muted text-sm sm:text-base leading-relaxed mb-4 font-light">
                Founded in 1954 by master artisan Shri Lalitha Shankar Narayanan, the house of LALITHA was born from a singular vow: to curate and sculpt the world's rarest natural diamonds into magnificent works of timeless art.
              </p>
              <p className="text-luxury-muted text-sm sm:text-base leading-relaxed font-light">
                Every creation begins with hand-selecting untamed rough diamonds, calculating precise 58-facet angles to unlock maximum fire and scintillation, and setting them in noble Platinum 950 and 18K White Gold by master diamantaires whose craft spans generations.
              </p>
            </motion.div>

            {/* Founder Lineage Signoff Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-6 rounded-2xl bg-luxury-surface/70 border border-luxury-gold/25 backdrop-blur-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-serif text-base font-bold text-luxury-ivory">The Narayanan Master Lineage</p>
                  <p className="text-xs text-luxury-muted font-light">Jaipur &bull; Mumbai &bull; New Delhi</p>
                </div>
                <div className="text-right">
                  <span className="font-cinzel text-xl text-gold-gradient font-bold">LALITHA</span>
                  <p className="text-[10px] text-luxury-gold/80 tracking-widest uppercase font-mono">Guild Stamp</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 4 Pillars Grid with Roman Numerals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {brandStory.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-luxury-surface/50 hover:bg-luxury-surface/90 border border-luxury-gold/20 hover:border-luxury-gold/60 transition-all duration-400 group relative"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-cinzel text-sm text-luxury-gold font-bold tracking-widest">
                  {romanNumerals[idx]}
                </span>
                <span className="w-6 h-[1px] bg-luxury-gold/30 group-hover:w-12 transition-all duration-300" />
              </div>
              <h4 className="font-serif text-xl font-bold text-luxury-ivory group-hover:text-gold-gradient transition-colors mb-2">
                {pillar.title}
              </h4>
              <p className="text-xs text-luxury-muted leading-relaxed font-light">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Heritage Timeline: 1954 to Present */}
        <div className="bg-luxury-surface/40 border border-luxury-gold/25 rounded-3xl p-8 sm:p-12 backdrop-blur-md">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-semibold">
              The Chronicle of Eminence
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-ivory mt-1">
              70 Years of Timeless Milestones
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {brandStory.milestones.map((m, idx) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="relative pl-6 md:pl-0 border-l md:border-l-0 md:border-t border-luxury-gold/30 pt-0 md:pt-6"
              >
                {/* Year Badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-luxury-gold/15 border border-luxury-gold/40 text-luxury-gold font-mono text-xs font-bold mb-3">
                  {m.year}
                </span>
                <h5 className="font-serif text-lg font-bold text-luxury-ivory mb-2">
                  {m.title}
                </h5>
                <p className="text-xs text-luxury-muted leading-relaxed font-light">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Counter Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {brandStory.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-luxury-surface/50 border border-luxury-gold/20"
            >
              <p className="font-cinzel text-3xl sm:text-5xl font-bold text-gold-gradient mb-1">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-widest text-luxury-muted font-light">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
