import React, { useState } from 'react';
import { Mail, Instagram, Facebook, Youtube, Send, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer id="contact-footer" className="bg-gradient-to-b from-[#0B213D] via-[#071933] to-[#051326] text-white relative overflow-hidden border-t border-white/10 py-10 sm:py-12">
      {/* Decorative Botanical Watermark in Bottom-Left Corner from Reference */}
      <div className="absolute -bottom-6 -left-6 w-32 h-32 sm:w-40 sm:h-40 pointer-events-none opacity-25 select-none">
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
          <circle cx="60" cy="60" r="14" stroke="currentColor" strokeWidth="1.2" />
          <path d="M60 16 C70 32, 82 44, 60 46 C38 44, 50 32, 60 16 Z" fill="currentColor" fillOpacity="0.5" />
          <path d="M60 104 C70 88, 82 76, 60 74 C38 76, 50 88, 60 104 Z" fill="currentColor" fillOpacity="0.5" />
          <path d="M16 60 C32 70, 44 82, 46 60 C44 38, 32 50, 16 60 Z" fill="currentColor" fillOpacity="0.5" />
          <path d="M104 60 C88 70, 76 82, 74 60 C76 38, 88 50, 104 60 Z" fill="currentColor" fillOpacity="0.5" />
          <path d="M28 28 C46 38, 52 50, 48 52 C38 48, 28 38, 28 28 Z" fill="currentColor" fillOpacity="0.4" />
          <path d="M92 28 C74 38, 68 50, 72 52 C82 48, 92 38, 92 28 Z" fill="currentColor" fillOpacity="0.4" />
          <path d="M28 92 C46 82, 52 70, 48 68 C38 72, 28 82, 28 92 Z" fill="currentColor" fillOpacity="0.4" />
          <path d="M92 92 C74 82, 68 70, 72 68 C82 72, 92 82, 92 92 Z" fill="currentColor" fillOpacity="0.4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6">
          
          {/* Left: Join Our Exclusive Circle */}
          <div className="flex items-center gap-3.5 pl-6 sm:pl-10">
            <div className="w-10 h-10 rounded-xl border border-white/25 flex items-center justify-center shrink-0 bg-white/5">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-sans text-xs sm:text-sm font-semibold text-white tracking-wide">
                Join Our Exclusive Circle
              </h4>
              <p className="text-[10px] sm:text-[11px] text-platinum/75 font-sans font-light">
                Be the first to know about new collections and special offers.
              </p>
            </div>
          </div>

          {/* Center: Email Subscription Input & Button */}
          <div className="w-full max-w-md">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex items-center rounded-full bg-[#0A1D36] border border-white/20 p-1 pl-4 focus-within:border-white/50 transition-colors">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-transparent text-xs text-white placeholder-platinum/50 outline-none font-sans"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-btn-primary hover:bg-btn-hover border border-white/40 text-white font-sans font-medium text-[10px] sm:text-[11px] tracking-[0.18em] uppercase transition-all duration-300 shrink-0"
                >
                  SUBSCRIBE
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 py-2 text-xs text-platinum font-sans">
                <Check className="w-4 h-4 text-white" />
                <span>Thank you. Your invitation has been dispatched.</span>
              </div>
            )}
          </div>

          {/* Right: Social Icons, Copyright & Legal Links */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-end gap-3 text-center lg:text-right">
            {/* Social Icons (Instagram, Facebook, YouTube, Pinterest) */}
            <div className="flex items-center space-x-4 text-white/90">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Pinterest">
                {/* Pinterest icon SVG */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>

            {/* Copyright & Legal Links */}
            <div className="text-[10px] text-platinum/70 space-y-1 font-sans">
              <div className="flex items-center justify-center lg:justify-end mb-1">
                <img src="/logo-white.svg" alt="Lalitha Jewellery" className="h-7 w-auto object-contain opacity-90" />
              </div>
              <p>&copy; 2025 Lalitha. All rights reserved.</p>
              <div className="flex items-center justify-center lg:justify-end gap-2 text-platinum/60">
                <a href="#hero" className="hover:text-white transition-colors">Privacy Policy</a>
                <span>|</span>
                <a href="#hero" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
