import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section 
      id="hero" 
      className="relative w-full mt-16 sm:mt-[68px] h-[calc(100vh-64px)] sm:h-[calc(100vh-68px)] min-h-[580px] max-h-[850px] bg-[#071426] overflow-hidden flex items-center"
    >
      {/* =========================================================================
          BACKGROUND: 100% Crystal-Clear Full-Cover AI Fashion Video
          - Covers 100% of the hero section without any black bars or side gaps
            (no horizontal translate offset).
          - Natural scale without extreme zoom, keeping the head, face, earrings,
            and full diamond necklace completely visible and uncut.
          - Section starts strictly below navbar (mt-16 sm:mt-[68px]), so video
            never enters or disturbs the header navbar.
          ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Full-Cover HTML5 AI Fashion Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          className="w-full h-full object-cover object-[center_48%] sm:object-[center_50%]"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          <source src="/videos/hero-section.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full relative z-20 flex items-center h-full">
        
        {/* Main Left Editorial Block */}
        <div className="max-w-lg lg:max-w-xl text-left py-4">
          {/* L A L I T H A spaced badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3"
          >
            <span className="font-serif text-[10px] sm:text-[11px] tracking-[0.45em] text-white/90 uppercase font-light drop-shadow-sm">
              L A L I T H A
            </span>
          </motion.div>

          {/* Main Title: "Elegance That Lasts Forever" */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-normal leading-[1.12] mb-4 tracking-tight drop-shadow-[0_4px_16px_rgba(7,20,38,0.5)]"
          >
            <span>Elegance That</span>
            <br />
            <span>Lasts </span>
            <span className="italic font-light text-white/95">Forever</span>
          </motion.h1>

          {/* Horizontal line with subtext */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-white/70 shrink-0" />
            <p className="text-xs sm:text-sm text-platinum font-sans font-light tracking-wide drop-shadow-sm">
              Timeless diamond jewellery for every you
            </p>
          </motion.div>

          {/* Primary Button: EXPLORE COLLECTION -> */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-btn-primary hover:bg-btn-hover border border-white/60 hover:border-white text-white text-[11px] sm:text-xs font-sans font-medium tracking-[0.2em] uppercase transition-all duration-300 shadow-xl shadow-midnight/60 group"
            >
              <span>EXPLORE COLLECTION</span>
              <ArrowRight className="w-3.5 h-3.5 text-white transform group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
