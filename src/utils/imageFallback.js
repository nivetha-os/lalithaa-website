// Fallback Dummy Images Utility for Lalitha Luxury Jewellery

export const DUMMY_IMAGES = {
  necklace: '/images/dummy/dummy-necklace.svg',
  necklaces: '/images/dummy/dummy-necklace.svg',
  earrings: '/images/dummy/dummy-earrings.svg',
  earring: '/images/dummy/dummy-earrings.svg',
  bracelets: '/images/dummy/dummy-bracelet.svg',
  bracelet: '/images/dummy/dummy-bracelet.svg',
  rings: '/images/dummy/dummy-ring.svg',
  ring: '/images/dummy/dummy-ring.svg',
  bridal: '/images/dummy/dummy-necklace.svg',
  accessories: '/images/dummy/dummy-accessories.svg',
  accessory: '/images/dummy/dummy-accessories.svg',
  default: '/images/dummy/dummy-placeholder.svg'
};

export function getFallbackImage(category = '') {
  const key = String(category).toLowerCase().trim();
  if (key.includes('neck')) return DUMMY_IMAGES.necklace;
  if (key.includes('ear')) return DUMMY_IMAGES.earrings;
  if (key.includes('brace') || key.includes('bangle')) return DUMMY_IMAGES.bracelet;
  if (key.includes('ring') || key.includes('solitaire')) return DUMMY_IMAGES.ring;
  if (key.includes('brid')) return DUMMY_IMAGES.bridal;
  return DUMMY_IMAGES[key] || DUMMY_IMAGES.default;
}

export function handleImageError(event, category = 'default') {
  const target = event.currentTarget;
  const fallback = getFallbackImage(category);
  if (target.src !== fallback && !target.src.endsWith(fallback)) {
    target.onerror = null; // Prevent infinite fallback loops
    target.src = fallback;
  }
}
