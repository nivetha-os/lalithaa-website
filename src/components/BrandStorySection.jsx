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
          
          {/* Left Column: Editorial Heritage Narrative */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-slate-navy">
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
              <div className="p-3.5 rounded-xl bg-white border border-border-card shadow-sm">
                <ShieldCheck className="w-4 h-4 text-btn-primary mb-1.5" />
                <h4 className="text-xs font-sans font-semibold text-midnight">GIA Certified</h4>
                <p className="text-[10px] text-slate-navy/70 mt-0.5">D-Flawless natural diamonds</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-border-card shadow-sm">
                <Sparkles className="w-4 h-4 text-btn-primary mb-1.5" />
                <h4 className="text-xs font-sans font-semibold text-midnight">Platinum 950</h4>
                <p className="text-[10px] text-slate-navy/70 mt-0.5">Noble hypoallergenic purity</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-border-card shadow-sm">
                <Award className="w-4 h-4 text-btn-primary mb-1.5" />
                <h4 className="text-xs font-sans font-semibold text-midnight">Hearts & Arrows</h4>
                <p className="text-[10px] text-slate-navy/70 mt-0.5">Triple excellent symmetry</p>
              </div>
            </div>

            <button
              onClick={onKnowMore}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-btn-primary hover:bg-btn-hover text-white text-xs font-sans font-medium tracking-[0.18em] uppercase transition-all duration-300 shadow-md"
            >
              <span>DISCOVER OUR HERITAGE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Column: Photography Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-border-card shadow-2xl bg-midnight h-[360px] sm:h-[420px]">
              <img
                src="/images/custom/story_brooch.jpg"
                alt="Lalitha Master Diamond Brooch"
                onError={(e) => handleImageError(e, 'accessories')}
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-platinum/80 mb-1">
                  Atelier Haute Joaillerie
                </p>
                <h3 className="font-serif text-lg sm:text-xl text-white">
                  Hand-set in Noble Platinum by Master Diamantaires
                </h3>
              </div>
            </div>

            {/* Overlapping Archival Craftsmanship Inset Badge */}
            <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 p-3 rounded-2xl bg-white border border-border-card shadow-xl z-20 max-w-xs">
              <img
                src="/images/craftsmanship-1.jpg"
                alt="Master Diamantaire Workshop"
                className="w-14 h-14 rounded-xl object-cover"
              />
              <div>
                <span className="text-[9px] font-sans uppercase tracking-widest text-slate-navy/70 block">Seven Decades</span>
                <p className="font-serif text-xs font-semibold text-midnight leading-tight">Master Goldsmith Bench</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
