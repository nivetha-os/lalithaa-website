import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedCollection from './components/FeaturedCollection';
import NecklacesSection from './components/NecklacesSection';
import EarringsSection from './components/EarringsSection';
import BraceletsSection from './components/BraceletsSection';
import RingsSection from './components/RingsSection';
import BrandStorySection from './components/BrandStorySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuickViewModal from './components/QuickViewModal';
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';
import StoryModal from './components/StoryModal';
import { products } from './data/products';

export default function App() {
  const [wishlist, setWishlist] = useState([products[0]]);
  const [cartItems, setCartItems] = useState([products[1]]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleToggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);
    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
      showToast(`Removed "${product.name}" from Wishlist`);
    } else {
      setWishlist([...wishlist, product]);
      showToast(`Added "${product.name}" to Wishlist ✦`);
    }
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    showToast(`Added "${product.name}" to Shopping Bag`);
    
    try {
      confetti({
        particleCount: 20,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#E0E1DD', '#FFFFFF', '#00184C']
      });
    } catch (e) {}
  };

  const handleRemoveFromCart = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
    showToast("Item removed from Shopping Bag");
  };

  const handleProceedCheckout = () => {
    showToast("Proceeding to Private Diamond Checkout");
  };

  const handleExploreClick = () => {
    const elem = document.getElementById('collections');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (categoryId) => {
    const targetId = categoryId === 'necklaces' ? 'necklaces'
      : categoryId === 'earrings' ? 'earrings'
      : categoryId === 'bracelets' ? 'bracelets'
      : categoryId === 'rings' ? 'rings'
      : 'featured';
    
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-ivory text-midnight font-sans selection:bg-btn-primary selection:text-white">
      {/* 1. Header / Navigation with dedicated Midnight Glass backdrop */}
      <Navbar
        cartCount={cartItems.length}
        wishlistCount={wishlist.length}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => {
          if (wishlist.length > 0) {
            setQuickViewProduct(wishlist[0]);
          } else {
            showToast("Your wishlist is currently empty");
          }
        }}
      />

      {/* Main Page Layout */}
      <main>
        {/* 2. Hero Section: Left content + AI Fashion Video with reduced length & safe navbar spacing */}
        <Hero onExploreClick={handleExploreClick} />

        {/* 3. Jewellery Categories Overview: "OUR COLLECTIONS - Discover Your Style" */}
        <Categories onSelectCategory={handleCategorySelect} />

        {/* 4. Featured Collection Highlights + Our Story Card */}
        <FeaturedCollection
          wishlist={wishlist}
          onQuickView={(p) => setQuickViewProduct(p)}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
          onKnowMore={() => setIsStoryOpen(true)}
        />

        {/* 5. Dedicated Category Section: Diamond Necklaces (#necklaces) */}
        <NecklacesSection
          wishlist={wishlist}
          onQuickView={(p) => setQuickViewProduct(p)}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
        />

        {/* 6. Dedicated Category Section: Diamond Earrings (#earrings) */}
        <EarringsSection
          wishlist={wishlist}
          onQuickView={(p) => setQuickViewProduct(p)}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
        />

        {/* 7. Dedicated Category Section: Tennis Bracelets & Bangles (#bracelets) */}
        <BraceletsSection
          wishlist={wishlist}
          onQuickView={(p) => setQuickViewProduct(p)}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
        />

        {/* 8. Dedicated Category Section: Solitaire & Diamond Rings (#rings) */}
        <RingsSection
          wishlist={wishlist}
          onQuickView={(p) => setQuickViewProduct(p)}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
        />

        {/* 9. Dedicated Heritage Section: Our Story (#story) */}
        <BrandStorySection onKnowMore={() => setIsStoryOpen(true)} />

        {/* 10. Dedicated Client Services Section: Contact & VIP Appointments (#contact) */}
        <ContactSection onBookingSuccess={(msg) => showToast(msg)} />
      </main>

      {/* 11. Midnight Navy Footer */}
      <Footer />

      {/* Interactive Modals */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        isWishlisted={quickViewProduct ? wishlist.some((item) => item.id === quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onProceedCheckout={handleProceedCheckout}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setQuickViewProduct(p)}
      />

      <StoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-btn-primary/95 text-white border border-white/30 text-xs font-sans tracking-wide shadow-2xl backdrop-blur-md animate-bounce">
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
