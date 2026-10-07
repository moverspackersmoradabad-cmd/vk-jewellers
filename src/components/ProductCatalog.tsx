import React, { useState } from 'react';
import { JewelleryItem, JEWELLERY_PRODUCTS, SHOWROOM_CONTACTS } from '../data/jewelleryData';
import { Eye, Heart, MessageCircle, Sparkles, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductCatalogProps {
  onSelectItem: (item: JewelleryItem) => void;
  wishlistIds: string[];
  onToggleWishlist: (item: JewelleryItem) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectItem,
  wishlistIds,
  onToggleWishlist,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'bridal', label: 'Royal Bridal Suites' },
    { id: 'necklaces', label: '22K Gold Necklaces' },
    { id: 'bangles', label: 'Bangles & Kadas' },
    { id: 'rings', label: 'Solitaire & Rings' },
  ];

  const filteredProducts = JEWELLERY_PRODUCTS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.purity.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.hindiName && item.hindiName.includes(searchQuery));
    return matchesCategory && matchesSearch;
  });

  const handleQuickWhatsApp = (e: React.MouseEvent, item: JewelleryItem) => {
    e.stopPropagation();
    const text = `Namaste VK Jewellers (Bisalpur), I would like to know the latest price and details for ${item.name} (${item.code}).`;
    window.open(`https://wa.me/91${SHOWROOM_CONTACTS.whatsappPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="collections" className="py-16 bg-[#0c0d0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#231e17]">
          <div>
            <div className="text-xs font-semibold text-[#caa555] tracking-widest uppercase mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#e1ba5b] animate-sparkle" />
              <span>Showroom Showcase</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#faf3e4]">
              Signature Jewellery Collections
            </h2>
            <p className="text-xs sm:text-sm text-[#b2a58f] mt-1.5 max-w-xl">
              From wedding heirloom treasures to everyday gold elegance, every ornament at VK Jewellers carries BIS 916 hallmarked authenticity.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8b7e68]" />
            <input
              type="text"
              placeholder="Search necklaces, bridal, 22K..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#171614] border border-[#3c301c] rounded-lg text-xs text-[#faf3e4] placeholder-[#7d715b] focus:outline-none focus:border-[#d4af37] transition-colors"
            />
          </div>
        </div>

        {/* Interactive Category Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#edd07e] to-[#b8860b] text-black font-semibold shadow-md scale-102'
                  : 'bg-[#181613] text-[#c0b399] border border-[#332b1d] hover:text-white hover:border-[#635334]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid: Animated with Motion & Light Sweep */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((item) => {
              const isSaved = wishlistIds.includes(item.id);

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  onClick={() => onSelectItem(item)}
                  className="group bg-[#151412] border border-[#3b2f1c] rounded-2xl overflow-hidden hover:border-[#d4af37]/80 hover:shadow-[0_0_28px_rgba(212,175,55,0.18)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer relative shine-overlay"
                >
                  {/* Image Section with Smooth Zoom & Light Beam Sweep */}
                  <div className="relative aspect-[4/3] bg-[#1a1815] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Subtle single text badge */}
                    <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#0f0e0d]/85 backdrop-blur-md rounded text-[10px] text-[#edd290] font-medium border border-[#3e301a]">
                      {item.purity}
                    </div>

                    {/* Wishlist Button with Heart Animation */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(item);
                      }}
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md border transition-all duration-200 active:scale-90 ${
                        isSaved
                          ? 'bg-[#3b1212]/90 border-[#ef4444] text-[#ef4444]'
                          : 'bg-[#151412]/80 border-[#3d311c] text-[#a79880] hover:text-white hover:scale-110'
                      }`}
                      aria-label="Save item"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-[#ef4444]' : ''}`} />
                    </button>

                    {/* Hover Quick View Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between text-xs text-white">
                      <span className="flex items-center gap-1 text-[#eed596]">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Specifications</span>
                      </span>
                      <span className="font-mono text-[11px] text-[#d6c9b3]">{item.estimatedWeight}</span>
                    </div>
                  </div>

                  {/* Card Content & Metadata */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Clean unboxed metadata per constitution */}
                      <div className="flex items-center gap-2 text-[11px] text-[#9a8c75] font-mono">
                        <span>{item.code}</span>
                        <span aria-hidden="true">·</span>
                        <span className="capitalize">{item.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>Bisalpur</span>
                      </div>

                      {/* Product Name */}
                      <h3 className="font-editorial text-lg font-bold text-[#faf3e4] group-hover:text-[#f8e5b6] transition-colors mt-1 leading-snug">
                        {item.name}
                      </h3>
                      {item.hindiName && (
                        <div className="text-xs text-[#caa555] font-normal mt-0.5">
                          {item.hindiName}
                        </div>
                      )}
                    </div>

                    {/* Price & Actions Baseline */}
                    <div className="pt-3 border-t border-[#292216] flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-[#8e816c] uppercase">Approx Price</div>
                        <div className="font-mono text-sm sm:text-base font-bold text-[#fae5b6] tabular-nums">
                          {item.approxPriceRange}
                        </div>
                      </div>

                      {/* WhatsApp Quick Link */}
                      <button
                        onClick={(e) => handleQuickWhatsApp(e, item)}
                        className="px-3 py-1.5 bg-[#1a2f23] hover:bg-[#223f2f] text-[#6ee7b7] border border-[#2b593e] rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 active:scale-95"
                        title="Enquire on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-[#34d399]" />
                        <span>Enquire</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-[#161513] border border-[#3b301c] rounded-2xl">
            <p className="text-sm text-[#b5a790]">No designs match your search filter.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-[#d4af37] underline hover:text-[#fae5b6]"
            >
              Reset filters to view all showroom collections
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
