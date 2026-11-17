import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, MapPin, CheckCircle, Sparkles, Send } from 'lucide-react';

export default function ConciergeModal({ isOpen, onClose, prefilledItem }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    atelier: "The Apollo Bunder Waterfront Atelier - Mumbai",
    date: "",
    service: prefilledItem ? `Bespoke Consultation: ${prefilledItem.name}` : "Bridal Trousseau Curation",
    notes: ""
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-xl bg-[#0b0b0b] border border-luxury-gold/30 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-luxury-black/80 hover:bg-luxury-gold hover:text-luxury-black text-luxury-champagne transition-all border border-luxury-gold/30"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 text-luxury-gold text-xs tracking-[0.25em] uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Private Client Service</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-ivory mb-2">
                Reserve Private Atelier Suite
              </h2>
              <p className="text-xs text-luxury-muted leading-relaxed font-light mb-6">
                Experience uninterrupted privacy with our Senior Master Goldsmith and Gemological Director. View rare uncut polki diamonds, custom bridal parures, and customized bullion designs.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-luxury-champagne uppercase tracking-wider mb-1 text-[11px]">Full Name & Salutation</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Her Highness / Lady / Mr. S. Narayanan"
                    className="w-full bg-[#080808] border border-luxury-gold/25 focus:border-luxury-gold rounded-xl px-4 py-3 text-luxury-ivory outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-luxury-champagne uppercase tracking-wider mb-1 text-[11px]">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="client@dynasty.com"
                      className="w-full bg-[#080808] border border-luxury-gold/25 focus:border-luxury-gold rounded-xl px-4 py-3 text-luxury-ivory outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-luxury-champagne uppercase tracking-wider mb-1 text-[11px]">Direct Phone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#080808] border border-luxury-gold/25 focus:border-luxury-gold rounded-xl px-4 py-3 text-luxury-ivory outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-luxury-champagne uppercase tracking-wider mb-1 text-[11px]">Select Flagship Salon</label>
                    <select
                      value={formData.atelier}
                      onChange={(e) => setFormData({ ...formData, atelier: e.target.value })}
                      className="w-full bg-[#080808] border border-luxury-gold/25 focus:border-luxury-gold rounded-xl px-4 py-3 text-luxury-ivory outline-none transition-colors"
                    >
                      <option value="The Apollo Bunder Waterfront Atelier - Mumbai">Mumbai Atelier (Colaba Waterfront)</option>
                      <option value="The Johari Heritage Vault - Jaipur">Jaipur Royal Vault (Johari Bazaar)</option>
                      <option value="The Lutyens Imperial Suite - New Delhi">New Delhi Lutyens Suite</option>
                      <option value="The Mayfair Private Residence - London">London Mayfair Residence</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-luxury-champagne uppercase tracking-wider mb-1 text-[11px]">Preferred Date</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#080808] border border-luxury-gold/25 focus:border-luxury-gold rounded-xl px-4 py-3 text-luxury-ivory outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-luxury-champagne uppercase tracking-wider mb-1 text-[11px]">Bespoke Commission Details</label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Special preferences: carat size, gemstone origin (Burmese ruby, Kashmiri sapphire), wedding date, or custom family crest engraving..."
                    className="w-full bg-[#080808] border border-luxury-gold/25 focus:border-luxury-gold rounded-xl px-4 py-3 text-luxury-ivory outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gold-gradient text-luxury-black font-semibold text-xs tracking-[0.25em] uppercase hover:shadow-lg hover:shadow-luxury-gold/25 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Suite Reservation</span>
                </button>
              </form>
            </div>
          ) : (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-luxury-gold/15 border border-luxury-gold flex items-center justify-center mx-auto text-luxury-gold">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-luxury-ivory">
                Suite Reserved With Honour
              </h3>
              <p className="text-xs text-luxury-muted max-w-sm mx-auto leading-relaxed font-light">
                Our Private Salon Director will contact you within two hours to confirm security credentials and arrange champagne reception.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-8 py-3 rounded-full bg-gold-gradient text-luxury-black font-semibold text-xs tracking-[0.2em] uppercase transition-all"
              >
                Close Dossier
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
