import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Menu, X, ChevronDown, Heart } from 'lucide-react';

export default function Navbar({ 
  onOpenSearch, 
  onOpenCart, 
  cartCount = 0,
  wishlistCount = 0,
  onOpenWishlist 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['hero', 'collections', 'featured', 'necklaces', 'earrings', 'bracelets', 'rings', 'story', 'contact'];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "Collections", href: "#collections", id: "collections", hasDropdown: true },
    { label: "Necklace", href: "#necklaces", id: "necklaces" },
    { label: "Earrings", href: "#earrings", id: "earrings" },
    { label: "Bracelets", href: "#bracelets", id: "bracelets" },
    { label: "Our Story", href: "#story", id: "story" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const collectionDropdownItems = [
    { label: "All Collections", href: "#collections", desc: "Discover Your Style" },
    { label: "Diamond Necklaces", href: "#necklaces", desc: "Cascades & Solitaire Rivières" },
    { label: "Diamond Earrings", href: "#earrings", desc: "Chandelier Drops & Studs" },
    { label: "Tennis Bracelets", href: "#bracelets", desc: "Eternity Diamond Lines" },
    { label: "Solitaire & Diamond Rings", href: "#rings", desc: "GIA D-Flawless Masterpieces" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-[#071426]/95 backdrop-blur-md py-3.5 border-b border-white/15 shadow-lg text-white" 
            : "bg-[#071426] py-3.5 sm:py-4 border-b border-white/10 text-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          
          {/* Left: Official LALITHA Brand Logo */}
          <a href="#hero" className="flex items-center group select-none py-0.5">
            <img 
              src="/logo-white.svg" 
              alt="Lalitha Jewellery" 
              className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-[13px] tracking-wide">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <a
                      href={link.href}
                      className={`relative py-1 flex items-center gap-1 transition-colors ${
                        isActive ? "text-white font-medium" : "text-white/80 hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform text-white/70 ${dropdownOpen ? "rotate-180" : ""}`} />
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[1.5px] rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                      )}
                    </a>

                    {/* Dropdown Menu (Dark Blue Luxury Theme) */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 w-64 bg-[#0A1D36] border border-white/15 rounded-2xl shadow-2xl p-2.5 mt-2 z-50 backdrop-blur-xl text-white"
                        >
                          {collectionDropdownItems.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={() => setDropdownOpen(false)}
                              className="block p-2.5 rounded-xl hover:bg-[#0D2444] border border-transparent hover:border-amber-300/40 transition-all group"
                            >
                              <div className="font-sans text-xs font-semibold text-white group-hover:text-amber-300 transition-colors drop-shadow-sm">
                                {item.label}
                              </div>
                              <div className="font-sans text-[10px] text-white/60 group-hover:text-white/95 transition-colors">
                                {item.desc}
                              </div>
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative py-1 flex items-center gap-1 transition-colors ${
                    isActive ? "text-white font-medium" : "text-white/80 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Actions (Search, Divider, Wishlist, Cart) */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className="p-1.5 transition-colors text-white/90 hover:text-white"
              aria-label="Search"
            >
              <Search className="w-4 h-4 stroke-[1.8]" />
            </button>

            {/* Subtle Vertical Divider Line */}
            <span className="w-[1px] h-4 hidden sm:inline-block bg-white/30" />

            {/* Wishlist Heart Icon */}
            <button
              onClick={onOpenWishlist}
              className="relative p-1.5 transition-colors hidden sm:block text-white/90 hover:text-white"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4 stroke-[1.8]" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-btn-primary border border-white text-white text-[9px] font-medium rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag Icon */}
            <button
              onClick={onOpenCart}
              className="relative p-1.5 transition-colors text-white/90 hover:text-white"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 stroke-[1.8]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-white text-midnight text-[9px] font-bold rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-1.5 transition-colors text-white/90 hover:text-white"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#071426] p-6 flex flex-col justify-between text-white"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center">
                  <img src="/logo-white.svg" alt="Lalitha Jewellery" className="h-8 w-auto object-contain" />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white/70 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-8 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-serif text-white/90 hover:text-white tracking-wide"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-xs text-white/60 space-y-2">
              <p>Timeless Diamond Jewellery &bull; Platinum 950</p>
              <p className="font-mono text-[11px] text-white">concierge@lalithajewels.com</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
