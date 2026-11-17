import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function BraceletsSection({ wishlist = [], onToggleWishlist, onAddToCart, onQuickView }) {
  const braceletProducts = products.filter((p) => p.categoryId === 'bracelets');

  return (
    <section id="bracelets" className="py-16 sm:py-20 bg-ivory text-midnight relative border-t border-platinum/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-slate-navy">
                TIMELESS HARMONY
              </span>
              <span className="w-8 h-[1px] bg-slate-navy/30" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-midnight font-normal tracking-tight">
              Tennis Bracelets & Bangles
            </h2>
            <p className="text-xs sm:text-sm text-slate-navy/70 font-sans font-light mt-2 max-w-xl">
              Continuous lines of calibrated round diamonds, fluidly articulated with concealed platinum safety clasps for everyday elegance.
            </p>
          </div>

          <a
            href="#collections"
            className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-midnight hover:text-btn-hover tracking-wider uppercase transition-colors group"
          >
            <span>View All Bracelets</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {braceletProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              theme="light"
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
