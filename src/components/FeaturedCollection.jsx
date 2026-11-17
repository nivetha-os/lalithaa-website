import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { handleImageError } from '../utils/imageFallback';

export default function FeaturedCollection({ 
  onQuickView, 
  wishlist = [], 
  onToggleWishlist, 
  onAddToCart,
  onKnowMore
}) {
  // Exactly match the reference design: Necklace (p1), Earrings (p2), Bracelet (p3)
  const featuredProducts = ['p1', 'p2', 'p3']
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section id="featured" className="py-16 sm:py-20 bg-gradient-to-b from-[#071933] via-[#0A2240] to-[#071933] text-white border-t border-white/10 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#0E2A4D]/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Main Grid: Left Intro + 3 Featured Products + Our Story Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* 1. Left Editorial Intro Column */}
          <div className="lg:col-span-3 flex flex-col justify-between py-1 pr-2">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="text-[10px] font-sans font-semibold tracking-[0.25em] uppercase text-platinum/80">
                  FEATURED COLLECTION
                </span>
                <span className="w-5 h-[1px] bg-white/40" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-[1.18] mb-3.5">
                Radiance in
                <br />
                Every Detail
              </h2>

              <p className="text-xs sm:text-[13px] text-platinum/80 font-sans font-light leading-relaxed mb-6">
                Exquisite diamond pieces designed to celebrate your unique elegance.
              </p>
            </div>

            <div>
              <a
                href="#collections"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-platinum text-midnight text-[11px] font-sans font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-md group"
              >
                <span>VIEW COLLECTION</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* 2. Middle 3 Product Cards Column (Crisp White Luxury Cards) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-3.5 items-stretch">
            {featuredProducts.map((product) => {
              const isWishlisted = wishlist.some((item) => item.id === product.id);

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group bg-white rounded-xl sm:rounded-2xl border border-border-card hover:border-border-silver p-3 sm:p-3.5 flex flex-col justify-between transition-all duration-300 hover:shadow-card-hover relative cursor-pointer min-h-[250px] sm:min-h-[270px] text-midnight shadow-md"
                  onClick={() => onQuickView && onQuickView(product)}
                >
                  {/* Top Wishlist Heart Icon */}
                  <div className="flex justify-end">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist && onToggleWishlist(product);
                      }}
                      className="p-1 rounded-full text-slate-navy/40 hover:text-red-500 transition-colors z-10"
                      aria-label="Wishlist"
                    >
                      <Heart 
                        className={`w-3.5 h-3.5 ${
                          isWishlisted ? "fill-red-500 text-red-500" : "stroke-[1.5]"
                        }`} 
                      />
                    </button>
                  </div>

                  {/* Product Diamond Image on Dark Blue Attai */}
                  <div className="w-full h-28 sm:h-32 flex items-center justify-center my-1 overflow-hidden rounded-xl bg-gradient-to-b from-[#0A1D36] via-[#071933] to-[#040E1C] border border-[#0A2240] p-1.5 shadow-inner">
                    <img
                      src={product.image}
                      alt={product.name}
                      onError={(e) => handleImageError(e, product.category || product.categoryId)}
                      className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-108 drop-shadow-md"
                      loading="lazy"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="pt-2 border-t border-platinum/40">
                    <h3 className="text-xs sm:text-[13px] font-sans font-medium text-midnight truncate mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-[13px] font-sans font-bold text-midnight">
                      {product.priceFormatted}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* 3. Right: OUR STORY Promotional Panel matching Reference Design */}
          <div className="lg:col-span-4 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0B2548] via-[#071933] to-[#0A1F3D] text-white p-6 sm:p-7 flex flex-col justify-between relative shadow-xl min-h-[250px] sm:min-h-[270px] border border-white/15">
            {/* Background silk & brooch image on the right */}
            <div className="absolute top-0 right-0 bottom-0 w-[55%] pointer-events-none overflow-hidden">
              <img
                src="/images/custom/story_brooch.jpg"
                alt="Our Story Diamond Brooch"
                onError={(e) => handleImageError(e, 'accessories')}
                className="w-full h-full object-cover object-center opacity-85"
                loading="lazy"
              />
              {/* Dark Blue gradient to seamlessly blend text */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#071933] via-[#071933]/70 to-transparent" />
            </div>

            {/* Left Content inside Story Panel */}
            <div className="relative z-10 max-w-[65%]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-sans font-semibold tracking-[0.25em] uppercase text-white/90">
                  OUR STORY
                </span>
                <span className="w-4 h-[1px] bg-white/40" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight mb-2.5">
                A Legacy
                <br />
                of Elegance
              </h3>

              <p className="text-[11px] sm:text-xs text-platinum/90 font-sans font-light leading-relaxed mb-4">
                For generations, Lalitha has been a symbol of timeless beauty and unmatched craftsmanship.
              </p>
            </div>

            <div className="relative z-10">
              <button
                onClick={onKnowMore}
                className="inline-flex items-center gap-2 text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-white hover:text-platinum transition-colors group"
              >
                <span>KNOW MORE</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
