import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare, Check, Calendar, Sparkles } from 'lucide-react';

export default function ContactSection({ onBookingSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    boutique: 'Chennai Flagship Salon',
    date: '',
    interest: 'Diamond Necklaces & Chokers'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
      if (onBookingSuccess) {
        onBookingSuccess(`VIP Consultation booked for ${formData.name} at ${formData.boutique}`);
      }
    }
  };

  const salons = [
    { city: "Chennai", title: "Flagship High Jewellery Salon", address: "Cathedral Road & T. Nagar", phone: "+91 44 2814 0000" },
    { city: "Bengaluru", title: "Private Diamond Penthouse", address: "UB City, Vittal Mallya Road", phone: "+91 80 4123 8888" },
    { city: "Mumbai", title: "Haute Joaillerie Lounge", address: "Bandra Kurla Complex (BKC)", phone: "+91 22 6789 1111" },
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 bg-gradient-to-b from-[#071933] via-[#091F3D] to-[#071933] text-white relative border-t border-white/10 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#0E2A4D]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Header with Top-Drop Slide Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="w-8 h-[1px] bg-white/30" />
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-platinum/80 flex items-center gap-1.5">
              <span className="text-btn-hover animate-pulse">✦</span>
              PRIVATE CLIENT SERVICES
              <span className="text-btn-hover animate-pulse">✦</span>
            </span>
            <span className="w-8 h-[1px] bg-white/30" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight mb-3.5">
            Book a Private Consultation
          </h2>
          <p className="text-xs sm:text-sm text-platinum/75 font-sans font-light leading-relaxed">
            Experience Lalitha’s haute joaillerie in an exclusive private suite curated by our Master Diamantaires.
          </p>
        </motion.div>

        {/* Content Grid: Symmetrically Aligned Salons Info + Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Salon Ateliers & Locations - Slides in from Bottom-Left */}
          <motion.div 
            initial={{ opacity: 0, x: -50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="lg:col-span-5 bg-[#0A1D36] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between"
          >
            <div>
              {/* Header inside Left Card */}
              <div className="flex items-center gap-2 mb-2 pb-2.5 border-b border-white/10">
                <MapPin className="w-4 h-4 text-platinum" />
                <h3 className="font-sans text-xs sm:text-sm font-semibold text-white tracking-wider uppercase">
                  Flagship High Jewellery Salons
                </h3>
              </div>
              <p className="text-xs text-platinum/75 font-sans leading-relaxed mb-5">
                Private viewing suites for champagne curation, GIA natural diamond inspection, and bespoke bridal creations.
              </p>

              {/* 3 Boutique Locations with subtle slide on hover */}
              <div className="space-y-3">
                {salons.map((salon) => (
                  <motion.div 
                    key={salon.city} 
                    whileHover={{ x: 5, transition: { type: "spring", stiffness: 350, damping: 25 } }}
                    className="p-3.5 rounded-xl bg-[#071426] border border-white/10 hover:border-white/25 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-sans font-semibold text-xs text-white flex items-center gap-2 group-hover:text-platinum transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-platinum shrink-0" />
                          <span>{salon.city} &bull; {salon.title}</span>
                        </h4>
                        <p className="text-[11px] text-platinum/70 mt-1 pl-3.5 font-sans">
                          {salon.address}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 pl-3.5 flex items-center gap-4 text-[11px] text-platinum/85 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Phone className="w-3 h-3 text-platinum" />
                        {salon.phone}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Direct VIP WhatsApp Button */}
            <div className="mt-6 p-4 rounded-xl bg-[#071426] border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-white">Instant VIP Concierge</h5>
                  <p className="text-[10px] text-platinum/60">Live assistance via WhatsApp</p>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919840000000"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-white text-midnight hover:bg-platinum text-[10px] font-sans font-semibold uppercase tracking-wider transition-colors shrink-0 shadow-sm"
              >
                Chat Now
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Consultation Booking Form - Slides in from Bottom-Right */}
          <motion.div 
            initial={{ opacity: 0, x: 50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="lg:col-span-7 bg-[#0A1D36] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full space-y-4">
                <div>
                  {/* Header inside Right Form Card */}
                  <div className="flex items-center justify-between mb-2 pb-2.5 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-platinum" />
                      <h3 className="font-sans text-xs sm:text-sm font-semibold text-white tracking-wider uppercase">
                        Schedule Your Private Appointment
                      </h3>
                    </div>
                    <span className="text-[10px] font-sans uppercase tracking-wider text-platinum/70 hidden sm:inline">
                      VIP Curation
                    </span>
                  </div>

                  {/* VIP Perks Indicator Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-4 pt-1">
                    <span className="text-[10px] font-sans px-2.5 py-0.5 rounded-full bg-[#071426] border border-white/10 text-platinum">
                      ✦ Champagne Service
                    </span>
                    <span className="text-[10px] font-sans px-2.5 py-0.5 rounded-full bg-[#071426] border border-white/10 text-platinum">
                      ✦ GIA Master Diamantaire
                    </span>
                    <span className="text-[10px] font-sans px-2.5 py-0.5 rounded-full bg-[#071426] border border-white/10 text-platinum">
                      ✦ Private Viewing Suite
                    </span>
                  </div>

                  {/* Form Inputs Grid */}
                  <div className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-sans font-semibold text-platinum uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Priyadarshini Sundaram"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#071426] border border-white/20 focus:border-white text-xs text-white placeholder-white/35 outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-sans font-semibold text-platinum uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#071426] border border-white/20 focus:border-white text-xs text-white placeholder-white/35 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-sans font-semibold text-platinum uppercase tracking-wider mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="client@luxury.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#071426] border border-white/20 focus:border-white text-xs text-white placeholder-white/35 outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-sans font-semibold text-platinum uppercase tracking-wider mb-1.5">
                          Preferred Salon
                        </label>
                        <select
                          value={formData.boutique}
                          onChange={(e) => setFormData({ ...formData, boutique: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#071426] border border-white/20 focus:border-white text-xs text-white outline-none transition-colors cursor-pointer"
                        >
                          <option value="Chennai Flagship Salon">Chennai Flagship Salon</option>
                          <option value="Bengaluru UB City Penthouse">Bengaluru UB City Penthouse</option>
                          <option value="Mumbai BKC Suite">Mumbai BKC Suite</option>
                          <option value="Virtual High Diamond Curation">Virtual Diamond Curation</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-sans font-semibold text-platinum uppercase tracking-wider mb-1.5">
                          Jewellery Interest
                        </label>
                        <select
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#071426] border border-white/20 focus:border-white text-xs text-white outline-none transition-colors cursor-pointer"
                        >
                          <option value="Diamond Necklaces & Chokers">Diamond Necklaces & Chokers</option>
                          <option value="Chandelier & Solitaire Earrings">Chandelier & Solitaire Earrings</option>
                          <option value="Tennis Bracelets & Kada Bangles">Tennis Bracelets & Kada Bangles</option>
                          <option value="Solitaire Engagement & Eternity Rings">Solitaire Engagement & Eternity Rings</option>
                          <option value="Full Haute Joaillerie Bridal Suite">Full Bridal Haute Diamond Suite</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-sans font-semibold text-platinum uppercase tracking-wider mb-1.5">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#071426] border border-white/20 focus:border-white text-xs text-white outline-none transition-colors cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-white text-midnight hover:bg-platinum font-sans font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>CONFIRM VIP CONSULTATION</span>
                    <Sparkles className="w-3.5 h-3.5 transform group-hover:rotate-12 transition-transform" />
                  </motion.button>
                </div>
              </form>
            ) : (
              <div className="my-auto py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-white/10 border border-white/30 flex items-center justify-center mx-auto text-white">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-2xl text-white">Appointment Confirmed</h4>
                <p className="text-xs text-platinum/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your private consultation at our <span className="text-white font-semibold">{formData.boutique}</span> for <span className="text-white font-semibold">{formData.interest}</span> has been confirmed. Our Senior Diamantaire will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border border-white/30 text-white text-xs font-sans uppercase tracking-wider hover:bg-white/10 transition-colors"
                >
                  Book Another Session
                </button>
              </div>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
