import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Heart } from 'lucide-react';
import { handleImageError } from '../utils/imageFallback';

export default function NecklacesSection({ wishlist = [], onToggleWishlist, onAddToCart, onQuickView }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // 5 Signature Haute Diamantaire Necklaces matching the Reference Design
  const necklaces = [
    {
      id: "p_emerald_sapphire_choker",
      number: "01",
      tag: "HIGH JOAILLERIE",
      name: "Emerald & Sapphire Royal Choker Suite",
      subCategory: "ZAMBIAN EMERALD & CEYLON SAPPHIRE",
      metal: "18KT WHITE GOLD & PLATINUM",
      priceFormatted: "₹ 5,80,000",
      image: "/images/products/real/emerald_sapphire_choker_set.jpg",
      description: "Imperial ceremonial collar set with tiers of rich Zambian emeralds, cabochon sapphire accents, and matching statement drop earrings.",
    },
    {
      id: "p_layered_haaram",
      number: "02",
      tag: "IMPERIAL BRIDAL",
      name: "Grand 3-Tier Layered Diamond & Emerald Haaram",
      subCategory: "TRIPLE-STRAND RANI HAAR",
      metal: "18KT WHITE GOLD",
      priceFormatted: "₹ 7,20,000",
      image: "/images/products/real/layered_diamond_haaram.jpg",
      description: "Opulent triple-strand bridal haaram cascading with calibrated brilliant diamond rivières and an elaborate emerald-centered medallion pendant.",
    },
    {
      id: "p_ruby_choker",
      number: "03",
      tag: "ROYAL HERITAGE",
      name: "Regal Ruby & Diamond Cascade Choker",
      subCategory: "PIGEON BLOOD RUBY & DIAMONDS",
      metal: "18KT WHITE GOLD",
      priceFormatted: "₹ 4,85,000",
      image: "/images/products/real/ruby_cascade_choker.jpg",
      description: "Majestic high-jewellery collar adorned with cushions of pigeon-blood rubies, brilliant diamond florets, and pear-cut droplets.",
    },
    {
      id: "p5",
      number: "04",
      tag: "HAUTE DIAMANTAIRE",
      name: "White Gold Emerald Barrel Choker Suite",
      subCategory: "EMERALD ARCHES & DROPS",
      metal: "18KT WHITE GOLD & PLATINUM",
      priceFormatted: "₹ 5,20,000",
      image: "/images/products/real/emerald_barrel_choker_set.jpg",
      description: "Architectural masterpiece collar composed of fluted emerald barrels alternating with diamond arches and tiered chandelier drop earrings.",
    },
    {
      id: "p1",
      number: "05",
      tag: "BESPOKE MASTERPIECE",
      name: "White Gold Diamond Necklace Set",
      subCategory: "SOLITAIRE & EMERALD SUITE",
      metal: "18KT WHITE GOLD",
      priceFormatted: "₹ 3,85,000",
      image: "/images/products/real/white_gold_necklace_set.jpg",
      description: "Spectacular bridal necklace set featuring a luminous emerald-cut focal gemstone surrounded by multi-tiered brilliant diamond drops with matching earrings.",
    }
  ];

  const total = necklaces.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="necklaces" className="py-16 sm:py-24 bg-ivory text-midnight relative border-t border-platinum/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header with Circular Arrow Navigation Controls matching Reference Image */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-slate-navy flex items-center gap-1.5">
                <span className="text-btn-primary animate-pulse">✦</span>
                HAUTE DIAMANTAIRE
              </span>
              <span className="w-8 h-[1px] bg-slate-navy/30" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-midnight font-normal tracking-tight">
              Diamond Necklaces
            </h2>
            <p className="text-xs sm:text-sm text-slate-navy/70 font-sans font-light mt-2 max-w-xl">
              Sculpted rivières, diamond collars, and cascading solitaires handcrafted in noble Platinum 950 and 18K White Gold.
            </p>
          </motion.div>

          {/* Top Right: Circular Navigation Buttons < > matching reference image */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono text-slate-navy/60 mr-2 tracking-widest hidden sm:inline-block">
              {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>

            <button
              onClick={handlePrev}
              aria-label="Previous piece"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-navy/25 hover:border-midnight hover:bg-slate-navy/5 flex items-center justify-center text-midnight transition-all active:scale-90"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next piece"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-navy/25 hover:border-midnight hover:bg-slate-navy/5 flex items-center justify-center text-midnight transition-all active:scale-90"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* =========================================================================
            3D COVERFLOW CAROUSEL STAGE (EXACTLY MATCHING THE USER'S REFERENCE IMAGE)
            ========================================================================= */}
        <div className="relative w-full h-[580px] sm:h-[620px] flex items-center justify-center perspective-[1400px]">
          {necklaces.map((item, idx) => {
            // Compute offset distance from activeIndex with circular wrap
            let offset = (idx - activeIndex + total) % total;
            if (offset > total / 2) offset -= total;

            const isCenter = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;
            const isFarLeft = offset === -2;
            const isFarRight = offset === 2;

            // Only display items within 2 steps
            const isVisible = Math.abs(offset) <= 2;
            if (!isVisible) return null;

            // Compute 3D coverflow styling matching reference image
            let xPos = "0%";
            let scale = 1;
            let rotateY = 0;
            let zIndex = 30;
            let opacity = 1;

            if (isCenter) {
              xPos = "0%";
              scale = 1;
              rotateY = 0;
              zIndex = 30;
              opacity = 1;
            } else if (isLeft) {
              xPos = "-56%";
              scale = 0.88;
              rotateY = 14;
              zIndex = 20;
              opacity = 0.65;
            } else if (isRight) {
              xPos = "56%";
              scale = 0.88;
              rotateY = -14;
              zIndex = 20;
              opacity = 0.65;
            } else if (isFarLeft) {
              xPos = "-105%";
              scale = 0.76;
              rotateY = 22;
              zIndex = 10;
              opacity = 0.25;
            } else if (isFarRight) {
              xPos = "105%";
              scale = 0.76;
              rotateY = -22;
              zIndex = 10;
              opacity = 0.25;
            }

            const isWishlisted = wishlist.some((w) => w.id === item.id);

            return (
              <motion.div
                key={item.id}
                onClick={() => {
                  if (!isCenter) {
                    setActiveIndex(idx);
                  }
                }}
                animate={{
                  x: xPos,
                  scale: scale,
                  rotateY: rotateY,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
                className={`absolute w-[310px] sm:w-[380px] md:w-[420px] lg:w-[440px] rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-white cursor-pointer select-none transition-shadow ${
                  isCenter
                    ? "bg-gradient-to-b from-[#0A1F3B] via-[#07162C] to-[#040E1C] border border-[#C5A880]/40 shadow-[0_25px_60px_rgba(4,14,28,0.7)]"
                    : "bg-[#07162C]/95 border border-white/10 shadow-xl hover:opacity-90"
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* 1. Card Top Bar: Badge on Left, Two-Digit Index on Right */}
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="px-2.5 py-1 rounded bg-[#071426] border border-white/20 text-[9px] sm:text-[10px] font-mono tracking-widest text-platinum uppercase">
                    {item.tag}
                  </span>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist && onToggleWishlist(item);
                      }}
                      className="text-white/60 hover:text-red-400 transition-colors"
                      aria-label="Wishlist"
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
                    </button>
                    <span className="font-serif text-sm sm:text-base text-white/70 tracking-widest font-light">
                      {item.number}
                    </span>
                  </div>
                </div>

                {/* 2. Card Image Container with "CLICK TO VIEW 3D DETAILS" Pill */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden my-3 bg-[#071426] flex items-center justify-center group/img shadow-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => handleImageError(e, 'necklaces')}
                    className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 ease-out group-hover/img:scale-105"
                    loading="lazy"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040E1C]/75 via-transparent to-transparent pointer-events-none" />

                  {/* "CLICK TO VIEW 3D DETAILS" Pill Button from Reference Image */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickView && onQuickView(item);
                    }}
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/30 text-[9px] sm:text-[10px] font-sans font-medium tracking-widest text-white uppercase shadow-lg flex items-center gap-1.5 transition-all transform hover:scale-105 active:scale-95"
                  >
                    <Sparkles className="w-3 h-3 text-[#C5A880]" />
                    <span>CLICK TO VIEW 3D DETAILS</span>
                  </button>
                </div>

                {/* 3. Card Meta Row: Subcategory on Left, Metal on Right */}
                <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-sans uppercase tracking-wider mb-1 pt-1">
                  <span className="text-[#C5A880] font-semibold">
                    {item.subCategory}
                  </span>
                  <span className="text-platinum/65 font-light">
                    {item.metal}
                  </span>
                </div>

                {/* 4. Card Title */}
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-white font-normal leading-snug my-1 line-clamp-1">
                  {item.name}
                </h3>

                {/* 5. Card Description */}
                <p className="text-xs text-platinum/75 font-sans font-light leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* 6. Card Bottom Action Buttons: EXPLORE PIECE -> and ENQUIRE NOW */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10 gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickView && onQuickView(item);
                    }}
                    className="inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-[0.2em] text-white hover:text-blue-200 uppercase transition-colors group/btn"
                  >
                    <span>EXPLORE PIECE</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToContact();
                    }}
                    className="px-4 sm:px-5 py-2 rounded-lg border border-white/35 hover:border-white text-white text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-wider hover:bg-white/10 transition-all shrink-0 active:scale-95"
                  >
                    ENQUIRE NOW
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {necklaces.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx 
                  ? "w-8 bg-btn-primary" 
                  : "w-2 bg-slate-navy/20 hover:bg-slate-navy/40"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
