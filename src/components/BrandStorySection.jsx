import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Award, ArrowRight } from 'lucide-react';
import { handleImageError } from '../utils/imageFallback';

export default function BrandStorySection({ onKnowMore }) {
  return (
    <section id="story" className="py-20 sm:py-24 bg-ivory text-midnight relative overflow-hidden border-t border-platinum/40">
      {/* Decorative Botanical Watermark in corner */}
      <div className="absolute top-10 right-10 w-64 h-64 pointer-events-none opacity-10 select-none">
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-midnight">
          <circle cx="60" cy="60" r="14" stroke="currentColor" strokeWidth="1.2" />
          <path d="M60 16 C70 32, 82 44, 60 46 C38 44, 50 32, 60 16 Z" fill="currentColor" fillOpacity="0.5" />
          <path d="M60 104 C70 88, 82 76, 60 74 C38 76, 50 88, 60 104 Z" fill="currentColor" fillOpacity="0.5" />
          <path d="M16 60 C32 70, 44 82, 46 60 C44 38, 32 50, 16 60 Z" fill="currentColor" fillOpacity="0.5" />
          <path d="M104 60 C88 70, 76 82, 74 60 C76 38, 88 50, 104 60 Z" fill="currentColor" fillOpacity="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Heritage Narrative - Slides in from LEFT */}
          <motion.div 
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-slate-navy flex items-center gap-1.5">
                <span className="text-btn-primary animate-pulse">✦</span>
                OUR STORY &bull; SINCE 1950
              </span>
              <span className="w-8 h-[1px] bg-slate-navy/30" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-midnight font-normal leading-[1.15] mb-5">
              A Legacy of <br />
              <span className="italic font-light">Elegance & Precision</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-navy/80 font-sans font-light leading-relaxed mb-6">
              For generations, Lalitha has stood as an enduring symbol of timeless beauty and peerless master gemsetting. Every diamond in our vault is individually chosen for its extraordinary optical fire, ethical provenance, and sublime symmetry.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8 text-left">
              {[
                { icon: ShieldCheck, title: "GIA Certified", desc: "D-Flawless natural diamonds" },
                { icon: Sparkles, title: "Platinum 950", desc: "Noble hypoallergenic purity" },
                { icon: Award, title: "Hearts & Arrows", desc: "Triple excellent symmetry" }
              ].map((item, idx) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, x: -30, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  whileHover={{ y: -4, scale: 1.02, transition: { type: "spring", stiffness: 350, damping: 25 } }}
                  transition={{ duration: 0.5, delay: 0.25 + idx * 0.12 }}
                  className="p-3.5 rounded-xl bg-white border border-border-card hover:border-btn-primary/40 shadow-sm hover:shadow-md transition-colors cursor-pointer group"
                >
                  <item.icon className="w-4 h-4 text-btn-primary mb-1.5 transform group-hover:scale-110 transition-transform" />
                  <h4 className="text-xs font-sans font-semibold text-midnight group-hover:text-btn-primary transition-colors">{item.title}</h4>
                  <p className="text-[10px] text-slate-navy/70 mt-0.5">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onKnowMore}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-btn-primary hover:bg-btn-hover text-white text-xs font-sans font-medium tracking-[0.18em] uppercase transition-all duration-300 shadow-md hover:shadow-xl group"
            >
              <span>DISCOVER OUR HERITAGE</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right Column: Photography Showcase - Slides in from RIGHT */}
          <motion.div 
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-border-card shadow-2xl bg-midnight h-[360px] sm:h-[420px] flex items-center justify-center p-4 group">
              <img
                src="/images/custom/story_brooch.jpg"
                alt="Lalitha Master Diamond Brooch"
                onError={(e) => handleImageError(e, 'accessories')}
                className="w-full h-full object-contain p-2 object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent pointer-events-none" />

              {/* Light Shimmer Sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none skew-x-12" />

              {/* Floating Craftsmanship Badge with Ambient Animation */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#071933]/90 backdrop-blur-md border border-white/20 text-white shadow-2xl flex items-center justify-between"
              >
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-platinum/70 font-sans flex items-center gap-1">
                    <span className="text-white animate-pulse">✦</span>
                    MASTERPIECE VAULT
                  </p>
                  <p className="font-serif text-sm sm:text-base text-white mt-0.5">The Sovereign Flora Diamond Brooch</p>
                </div>
                <span className="text-[10px] uppercase font-sans font-semibold tracking-wider px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-white shrink-0">
                  Platinum 950
                </span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
