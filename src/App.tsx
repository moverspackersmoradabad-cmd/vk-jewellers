import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CollectionsPage } from './pages/CollectionsPage';
import { BridalPage } from './pages/BridalPage';
import { GoldRatePage } from './pages/GoldRatePage';
import { AboutPage } from './pages/AboutPage';
import { ShowroomPage } from './pages/ShowroomPage';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ProductModal } from './components/ProductModal';
import { JewelleryItem, JEWELLERY_PRODUCTS, SHOWROOM_CONTACTS } from './data/jewelleryData';
import { Phone, MessageCircle } from 'lucide-react';

export default function App() {
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('vk_jewellers_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedProduct, setSelectedProduct] = useState<JewelleryItem | null>(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [preselectedBookingProduct, setPreselectedBookingProduct] = useState<string>('');

  useEffect(() => {
    try {
      localStorage.setItem('vk_jewellers_wishlist', JSON.stringify(wishlistIds));
    } catch (e) {
      console.error(e);
    }
  }, [wishlistIds]);

  const toggleWishlist = (item: JewelleryItem) => {
    setWishlistIds((prev) =>
      prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id]
    );
  };

  const handleClearWishlist = () => {
    setWishlistIds([]);
  };

  const wishlistedItems = JEWELLERY_PRODUCTS.filter((item) =>
    wishlistIds.includes(item.id)
  );

  const handleBookFromProduct = (item: JewelleryItem) => {
    setPreselectedBookingProduct(`${item.name} (${item.code})`);
    window.location.hash = '#/showroom';
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0c0d0e] text-[#f4efe6] flex flex-col font-body selection:bg-[#d4af37] selection:text-black">
        {/* Persistent 3-Zone Luxury Navbar */}
        <Navbar
          wishlistCount={wishlistIds.length}
          onOpenWishlist={() => setIsWishlistOpen(true)}
        />

        {/* Separate Multi-Page Routing */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onSelectItem={(item) => setSelectedProduct(item)}
                  wishlistIds={wishlistIds}
                  onToggleWishlist={toggleWishlist}
                />
              }
            />
            <Route
              path="/collections"
              element={
                <CollectionsPage
                  onSelectItem={(item) => setSelectedProduct(item)}
                  wishlistIds={wishlistIds}
                  onToggleWishlist={toggleWishlist}
                />
              }
            />
            <Route
              path="/bridal"
              element={
                <BridalPage
                  onSelectItem={(item) => setSelectedProduct(item)}
                  wishlistIds={wishlistIds}
                  onToggleWishlist={toggleWishlist}
                />
              }
            />
            <Route path="/gold-rate" element={<GoldRatePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/showroom"
              element={<ShowroomPage preselectedProduct={preselectedBookingProduct} />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Persistent Luxury Footer with Page Navigation */}
        <Footer />

        {/* Floating Quick Action Buttons for WhatsApp & Calling */}
        <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5">
          <a
            href={`https://wa.me/91${SHOWROOM_CONTACTS.whatsappPhone}?text=${encodeURIComponent(
              'Namaste VK Jewellers (Bisalpur), I would like to enquire about your jewellery collections.'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-[#1d5030] hover:bg-[#25663d] text-white rounded-full shadow-2xl border border-[#34d399]/40 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            title="Chat with VK Jewellers on WhatsApp"
            aria-label="WhatsApp VK Jewellers"
          >
            <MessageCircle className="w-5 h-5 text-[#34d399]" />
          </a>

          <a
            href={`tel:${SHOWROOM_CONTACTS.primaryPhone}`}
            className="p-3 bg-[#b8860b] hover:bg-[#d4af37] text-black rounded-full shadow-2xl border border-[#edd181]/50 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            title="Call VK Jewellers Showroom"
            aria-label="Call VK Jewellers Showroom"
          >
            <Phone className="w-5 h-5 text-black" />
          </a>
        </div>

        {/* Wishlist / Inquiry Bag Drawer */}
        <WishlistDrawer
          isOpen={isWishlistOpen}
          onClose={() => setIsWishlistOpen(false)}
          items={wishlistedItems}
          onRemoveItem={(id) => setWishlistIds((prev) => prev.filter((i) => i !== id))}
          onClear={handleClearWishlist}
          onSelectItem={(item) => setSelectedProduct(item)}
        />

        {/* Product Quick-View & Specifications Modal */}
        <ProductModal
          item={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
          onToggleWishlist={toggleWishlist}
          onBookShowroom={handleBookFromProduct}
        />
      </div>
    </HashRouter>
  );
}
