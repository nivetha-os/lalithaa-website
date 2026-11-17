import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ShieldCheck, Sparkles, ArrowRight, UserCheck } from 'lucide-react';

const SALONS = [
  {
    id: "mumbai",
    city: "Mumbai",
    title: "The Apollo Bunder Waterfront Atelier",
    address: "Suite 42, Heritage Wing, Apollo Bunder, Colaba, Mumbai",
    hours: "Mon – Sat: 10:30 AM – 8:30 PM (By Private Appointment)",
    phone: "+91 22 2845 7701",
    curator: "Maheshwar Rao, Senior Diamantaire",
    specialty: "High-Carat Diamond Bridal Suites & Platinum 950 Solitaires",
    image: "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=800&q=80",
    badge: "Flagship Diamond Vault"
  },
  {
    id: "jaipur",
    city: "Jaipur",
    title: "The Johari Heritage Vault",
    address: "108 Johari Bazaar, Royal Heritage Quarter, Jaipur",
    hours: "Tue – Sun: 11:00 AM – 7:30 PM",
    phone: "+91 141 256 8830",
    curator: "Pandit Ramkishore, Master Gemologist",
    specialty: "Type-IIa Natural Diamonds & High-Carat Rivières",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    badge: "Heritage Diamond Reserve"
  },
  {
    id: "delhi",
    city: "New Delhi",
    title: "The Lutyens Imperial Suite",
    address: "14 Lutyens Boulevard, Central Diplomatic Enclave, New Delhi",
    hours: "Mon – Sat: 10:00 AM – 8:00 PM",
    phone: "+91 11 4150 9920",
    curator: "Devika Singhania, Haute Joaillerie Director",
    specialty: "GIA D-Flawless Natural Diamonds & Bespoke Engagement Rings",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    badge: "Sovereign Diamond Chamber"
  },
  {
    id: "london",
    city: "London Mayfair",
    title: "The Mayfair Private Residence",
    address: "28 New Bond Street, Mayfair, London W1S 2RH",
    hours: "Tue – Sat: 11:00 AM – 6:00 PM GMT",
    phone: "+44 20 7946 0912",
    curator: "Alistair Montgomery, Senior Connoisseur",
    specialty: "Global Collector Vault & Armored International Delivery",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    badge: "International Diamond Salon"
  }
];

export default function AtelierSalons({ onBookAppointment }) {
  const [activeSalon, setActiveSalon] = useState(SALONS[0]);

  return (
    <section id="salons" className="relative py-28 bg-[#060606] border-t border-luxury-gold/20 overflow-hidden">
      {/* Background radial gold aura */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-luxury-gold/30 bg-luxury-gold/5 text-luxury-gold text-xs tracking-[0.25em] uppercase mb-4"
          >
            <MapPin className="w-3.5 h-3.5 text-luxury-gold" />
            <span>Sovereign Destinations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-ivory tracking-tight mb-5"
          >
            Haute Salons &mdash; <span className="text-gold-gradient font-light italic">Private Chambers</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-luxury-muted text-sm md:text-base leading-relaxed font-light"
          >
            Discover our discreet private chambers designed for royal trousseau viewings, bespoke master goldsmith consultations, and certified gemological appraisals.
          </motion.p>
        </div>

        {/* City Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {SALONS.map((salon) => {
            const isActive = activeSalon.id === salon.id;
            return (
              <button
                key={salon.id}
                onClick={() => setActiveSalon(salon)}
                className={`px-5 py-2.5 rounded-full text-xs tracking-[0.2em] uppercase transition-all duration-300 font-medium ${
                  isActive
                    ? "bg-gold-gradient text-luxury-black font-semibold shadow-lg shadow-luxury-gold/25"
                    : "bg-[#0b0b0b] text-luxury-muted border border-luxury-gold/20 hover:border-luxury-gold/50 hover:text-luxury-champagne"
                }`}
              >
                {salon.city}
              </button>
            );
          })}
        </div>

        {/* Featured Salon Showcase Card */}
        <div className="bg-[#0a0a0a] border border-luxury-gold/25 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 mb-16">
          {/* Left: Atmospheric Architectural Imagery */}
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[500px] overflow-hidden group">
            <img
              src={activeSalon.image}
              alt={activeSalon.title}
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-80" />
            
            {/* Badge */}
            <div className="absolute top-6 left-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-luxury-black/85 backdrop-blur-md border border-luxury-gold/40 text-[10px] tracking-[0.2em] uppercase text-luxury-gold font-medium">
                <Sparkles className="w-3 h-3 text-luxury-gold" />
                {activeSalon.badge}
              </span>
            </div>

            {/* Bottom Caption on Image */}
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[11px] uppercase tracking-[0.25em] text-luxury-champagne/80 font-mono">
                {activeSalon.city} Flagship
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-ivory mt-1">
                {activeSalon.title}
              </h3>
            </div>
          </div>

          {/* Right: Salon Dossier & Private Booking Details */}
          <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="pb-5 border-b border-luxury-gold/15">
                <span className="text-[10px] tracking-[0.25em] uppercase text-luxury-gold block mb-1">
                  Atelier Specialization
                </span>
                <p className="font-serif text-lg text-luxury-ivory font-bold">
                  {activeSalon.specialty}
                </p>
              </div>

              {/* Details List */}
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3 text-luxury-muted">
                  <MapPin className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="text-luxury-ivory font-medium block">Address</span>
                    <span className="leading-relaxed">{activeSalon.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-luxury-muted">
                  <Clock className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="text-luxury-ivory font-medium block">Viewing Hours</span>
                    <span>{activeSalon.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-luxury-muted">
                  <UserCheck className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="text-luxury-ivory font-medium block">Head of Salon</span>
                    <span>{activeSalon.curator}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-luxury-muted">
                  <Phone className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="text-luxury-ivory font-medium block">Private Desk Direct</span>
                    <span className="font-mono text-luxury-champagne">{activeSalon.phone}</span>
                  </div>
                </div>
              </div>

              {/* Security & Authenticity seal */}
              <div className="p-3.5 rounded-2xl bg-luxury-black/60 border border-luxury-gold/20 flex items-center gap-3 text-[11px] text-luxury-champagne">
                <ShieldCheck className="w-4 h-4 text-luxury-gold shrink-0" />
                <span>Private biometric safe suites &bull; Armed courier handover available</span>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={() => onBookAppointment && onBookAppointment(activeSalon.title)}
              className="w-full py-4 rounded-2xl bg-gold-gradient text-luxury-black font-semibold text-xs tracking-[0.25em] uppercase hover:shadow-xl hover:shadow-luxury-gold/25 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>Reserve Private Salon Suite</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Salons Mini Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SALONS.map((salon) => (
            <div
              key={salon.id}
              onClick={() => setActiveSalon(salon)}
              className={`p-6 rounded-2xl bg-[#0a0a0a] border transition-all cursor-pointer ${
                activeSalon.id === salon.id
                  ? "border-luxury-gold shadow-lg shadow-luxury-gold/15 bg-luxury-gold/5"
                  : "border-luxury-gold/15 hover:border-luxury-gold/40"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-serif font-bold text-luxury-ivory">
                  {salon.city}
                </span>
                <span className="text-[10px] tracking-wider text-luxury-gold uppercase font-mono">
                  {salon.badge.split(" ")[0]}
                </span>
              </div>
              <p className="text-xs text-luxury-champagne font-medium truncate mb-2">
                {salon.title}
              </p>
              <p className="text-[11px] text-luxury-muted line-clamp-2 leading-relaxed">
                {salon.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
