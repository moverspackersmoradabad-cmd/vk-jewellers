import React, { useState } from 'react';
import { JewelleryItem, JEWELLERY_PRODUCTS, SHOWROOM_CONTACTS } from '../data/jewelleryData';
import { Eye, Heart, MessageCircle, Sparkles, Search, SlidersHorizontal, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CollectionsPageProps {
  onSelectItem: (item: JewelleryItem) => void;
  wishlistIds: string[];
  onToggleWishlist: (item: JewelleryItem) => void;
}

export const CollectionsPage: React.FC<CollectionsPageProps> = ({
  onSelectItem,
  wishlistIds,
  onToggleWishlist,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPurity, setSelectedPurity] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'bridal', label: 'Bridal Suites' },
    { id: 'necklaces', label: '22K Gold Necklaces' },
    { id: 'bangles', label: 'Bangles & Kadas' },
    { id: 'rings', label: 'Rings & Solitaires' },
  ];

  const purityOptions = [
    { id: 'all', label: 'All Purities' },
    { id: '22K (916 BIS)', label: '22K (916 BIS Hallmark)' },
    { id: '18K Diamond', label: '18K Natural Diamond' },
    { id: 'Antique Gold 22K', label: 'Antique Temple Gold 22K' },
  ];

  const filteredProducts = JEWELLERY_PRODUCTS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesPurity = selectedPurity === 'all' || item.purity === selectedPurity;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.hindiName && item.hindiName.includes(searchQuery));

    return matchesCategory && matchesPurity && matchesSearch;
  });

  const handleQuickWhatsApp = (e: React.MouseEvent, item: JewelleryItem) => {
    e.stopPropagation();
    const text = `Namaste VK Jewellers (Bisalpur), I would like to know the latest price, weight and availability for "${item.name}" (Code: ${item.code}).`;
    window.open(`https://wa.me/91${SHOWROOM_CONTACTS.whatsappPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="py-12 bg-[#0c0d0e] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header with animated gold shimmer */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold text-[#caa555] tracking-widest uppercase mb-1 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#e1ba5b] animate-sparkle" />
            <span>Bisalpur Showroom Catalog</span>
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl font-bold text-[#faf4e6]">
            Exquisite Jewellery <span className="text-gold-shimmer">Collections</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#b5a790] mt-2 leading-relaxed">
            Every piece is certified with BIS 916 Hallmark & HUID traceability, crafted by master karigars for life’s most precious occasions.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#151412] border border-[#3b301c] rounded-2xl p-4 sm:p-6 mb-10 space-y-4 shadow-xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#877a64]" />
              <input
                type="text"
                placeholder="Search jewellery by name, code (e.g. VK-BR)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-[#1e1c18] border border-[#3f331f] rounded-xl text-xs text-white placeholder-[#786c57] focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            {/* Purity Dropdown Selector */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <SlidersHorizontal className="w-4 h-4 text-[#caa555] shrink-0" />
              <select
                value={selectedPurity}
                onChange={(e) => setSelectedPurity(e.target.value)}
                className="w-full md:w-60 px-3 py-2 bg-[#1e1c18] border border-[#3f331f] rounded-xl text-xs text-white focus:outline-none focus:border-[#d4af37]"
              >
                {purityOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-[#262016] scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#edd07e] to-[#b8860b] text-black font-semibold shadow-sm'
                    : 'bg-[#1a1815] text-[#c0b399] border border-[#352c1b] hover:text-white hover:border-[#635334]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid with Motion & Shine */}
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
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  key={item.id}
                  onClick={() => onSelectItem(item)}
                  className="group bg-[#151412] border border-[#3b2f1c] rounded-2xl overflow-hidden hover:border-[#d4af37]/80 hover:shadow-[0_0_28px_rgba(212,175,55,0.18)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer shine-overlay"
                >
                  {/* Image Section */}
                  <div className="relative aspect-[4/3] bg-[#1a1815] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    
                    <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#0f0e0d]/80 backdrop-blur-md rounded text-[10px] text-[#edd290] font-medium border border-[#3e301a]">
                      {item.purity}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(item);
                      }}
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md border transition-all ${
                        isSaved
                          ? 'bg-[#3b1212]/90 border-[#ef4444] text-[#ef4444]'
                          : 'bg-[#151412]/80 border-[#3d311c] text-[#a79880] hover:text-white hover:scale-110'
                      }`}
                      aria-label="Save item"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-[#ef4444]' : ''}`} />
                    </button>

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
                      <div className="flex items-center gap-2 text-[11px] text-[#9a8c75] font-mono">
                        <span>{item.code}</span>
                        <span aria-hidden="true">·</span>
                        <span className="capitalize">{item.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>Bisalpur</span>
                      </div>

                      <h3 className="font-editorial text-lg font-bold text-[#faf3e4] group-hover:text-[#f8e5b6] transition-colors mt-1 leading-snug">
                        {item.name}
                      </h3>
                      {item.hindiName && (
                        <div className="text-xs text-[#caa555] font-normal mt-0.5">
                          {item.hindiName}
                        </div>
                      )}

                      <p className="text-xs text-[#a69883] mt-2 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Price & Actions Baseline */}
                    <div className="pt-3 border-t border-[#292216] flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-[#8e816c] uppercase">Approx Price</div>
                        <div className="font-mono text-sm sm:text-base font-bold text-[#fae5b6] tabular-nums">
                          {item.approxPriceRange}
                        </div>
                      </div>

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
          <div className="text-center py-20 bg-[#151412] border border-[#3b301c] rounded-2xl">
            <p className="text-sm text-[#b5a790]">No designs found with the selected filters.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSelectedPurity('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-[#d4af37] underline hover:text-[#fae5b6]"
            >
              Reset all filters
            </button>
          </div>
        )}

        {/* Purity Guarantee footer box */}
        <div className="mt-16 p-6 bg-[#161513] border border-[#44361e] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#282115] border border-[#d4af37]/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#edd181]" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#fae5b6]">
                Can't find the exact design you are looking for?
              </div>
              <div className="text-xs text-[#a99b84] mt-0.5">
                Visit our showroom on Tehsil Road, Bisalpur or share your design photo with our master karigars for custom making.
              </div>
            </div>
          </div>

          <a
            href={`https://wa.me/91${SHOWROOM_CONTACTS.whatsappPhone}?text=${encodeURIComponent(
              'Namaste VK Jewellers (Bisalpur), I have a custom jewellery design photo that I would like to make.'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-[#1e462e] text-[#6ee7b7] border border-[#327049] rounded-xl text-xs font-semibold hover:bg-[#25583a] transition-all whitespace-nowrap active:scale-95"
          >
            Send Custom Photo on WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
};
