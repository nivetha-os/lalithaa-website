import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { handleImageError } from '../utils/imageFallback';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems = [], 
  onRemoveItem,
  onProceedCheckout 
}) {
  if (!isOpen) return null;

  const totalINR = cartItems.reduce((acc, item) => acc + item.priceINR, 0);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-midnight/80 backdrop-blur-sm"
        />

        {/* Drawer */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-md bg-ivory text-midnight border-l border-border-card h-full z-10 flex flex-col justify-between shadow-2xl"
        >
          {/* Header */}
          <div className="p-6 border-b border-border-card flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-btn-primary" />
              <h2 className="font-serif text-lg text-midnight font-normal">
                Your Shopping Bag ({cartItems.length})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-navy/10 text-slate-navy transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <ShoppingBag className="w-10 h-10 text-slate-navy/30 mx-auto" />
                <h3 className="font-serif text-xl text-midnight font-normal">Your Bag is Empty</h3>
                <p className="text-xs text-slate-navy/70 max-w-xs mx-auto font-sans font-light">
                  Explore our diamond creations and add your chosen pieces.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-2.5 rounded-full bg-btn-primary text-white text-[11px] font-sans font-medium tracking-[0.2em] uppercase"
                >
                  CONTINUE BROWSING
                </button>
              </div>
            ) : (
              cartItems.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="flex gap-4 p-3.5 rounded-xl bg-white border border-border-card"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => handleImageError(e, item.category || item.categoryId)}
                    className="w-16 h-16 rounded-lg object-contain bg-ivory/50 p-1"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-sans text-xs font-semibold text-midnight truncate">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem && onRemoveItem(idx)}
                          className="text-slate-navy/40 hover:text-red-500 p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[10px] text-slate-navy/60 font-sans">{item.category}</p>
                    </div>

                    <p className="font-sans text-xs font-bold text-midnight mt-1">
                      {item.priceFormatted || `₹ ${item.priceINR.toLocaleString('en-IN')}`}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-border-card bg-white space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-navy/70">
                  <span>Subtotal:</span>
                  <span className="font-bold text-midnight font-sans">
                    ₹ {totalINR.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between text-slate-navy/70">
                  <span>Insured Shipping:</span>
                  <span className="text-emerald-700 font-medium">Complimentary</span>
                </div>
                <div className="pt-2 border-t border-border-card flex justify-between items-baseline">
                  <span className="font-serif text-base text-midnight font-normal">Estimated Total:</span>
                  <span className="font-sans text-lg text-midnight font-bold">
                    ₹ {totalINR.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <button
                onClick={onProceedCheckout}
                className="w-full py-3.5 rounded-full bg-btn-primary hover:bg-btn-hover text-white font-sans font-medium text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
