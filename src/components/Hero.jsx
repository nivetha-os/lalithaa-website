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
      className="relative w-full min-h-[640px] lg:min-h-[700px] xl:min-h-[760px] bg-[#071426] overflow-hidden flex items-center pt-24 pb-12"
    >
      {/* =========================================================================
          BACKGROUND: 100% Crystal-Clear Full-Cover AI Fashion Video
          Starts strictly below navbar zone so navbar NEVER covers or disturbs the video
          "don't cover the AI video in navbar. because, navbar shouldn't disturb"
          ========================================================================= */}
      <div className="absolute top-16 sm:top-[68px] inset-x-0 bottom-0 z-0 overflow-hidden pointer-events-none">
        {/* Full-Cover HTML5 AI Fashion Video (Raw, Crystal-Clear, Vivid) */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          className="w-full h-full object-cover object-[68%_15%] md:object-[64%_12%] xl:object-[62%_10%]"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          <source src="/videos/hero-section.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full relative z-20 flex flex-col justify-between min-h-[480px] lg:min-h-[520px]">
        
        {/* Main Left Editorial Block */}
        <div className="max-w-xl my-auto pt-4 lg:pt-6 text-left">
          {/* L A L I T H A spaced badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="font-serif text-[11px] sm:text-xs tracking-[0.45em] text-white/90 uppercase font-light drop-shadow-sm">
              L A L I T H A
            </span>
          </motion.div>

          {/* Main Title: "Elegance That Lasts Forever" */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-normal leading-[1.1] mb-5 tracking-tight drop-shadow-[0_4px_16px_rgba(7,20,38,0.5)]"
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
            className="flex items-center gap-3.5 mb-8"
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
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-btn-primary hover:bg-btn-hover border border-white/60 hover:border-white text-white text-[11px] sm:text-xs font-sans font-medium tracking-[0.2em] uppercase transition-all duration-300 shadow-xl shadow-midnight/60 group"
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
