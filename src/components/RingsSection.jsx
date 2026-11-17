import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function RingsSection({ wishlist = [], onToggleWishlist, onAddToCart, onQuickView }) {
  const ringProducts = products.filter((p) => p.categoryId === 'rings');

  return (
    <section id="rings" className="py-16 sm:py-20 bg-gradient-to-b from-[#071933] via-[#091F3D] to-[#071933] text-white relative border-t border-white/10 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#0E2A4D]/50 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-platinum/80">
                GIA CERTIFIED SOLITAIRES
              </span>
              <span className="w-8 h-[1px] bg-white/30" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight">
              Solitaire & Diamond Rings
            </h2>
            <p className="text-xs sm:text-sm text-platinum/70 font-sans font-light mt-2 max-w-xl">
              Monumental D-Flawless natural diamond solitaires, halo engagement rings, and full eternity bands crafted in solid Platinum 950.
            </p>
          </div>

          <a
            href="#collections"
            className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-white/90 hover:text-white tracking-wider uppercase transition-colors group"
          >
            <span>View All Rings</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Product Grid (Dark Blue Theme) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {ringProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              theme="dark"
              isWishlisted={wishlist.some((item) => item.id === product.id)}
              onToggleWishlist={onToggleWishlist}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
