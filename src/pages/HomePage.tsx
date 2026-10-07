import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { VKLogo } from '../components/VKLogo';
import { JEWELLERY_PRODUCTS, GOLD_RATES, SHOWROOM_CONTACTS, JewelleryItem } from '../data/jewelleryData';
import { ArrowRight, Sparkles, ShieldCheck, Heart, Eye, TrendingUp, Phone, MapPin } from 'lucide-react';

interface HomePageProps {
  onSelectItem: (item: JewelleryItem) => void;
  wishlistIds: string[];
  onToggleWishlist: (item: JewelleryItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectItem,
  wishlistIds,
  onToggleWishlist,
}) => {
  const featured = JEWELLERY_PRODUCTS.slice(0, 4);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Live Gold Rate Strip */}
      <section className="bg-[#141311] border-b border-[#2a2417] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#262014] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <div className="text-xs font-semibold text-[#caa555] uppercase tracking-wider">
                  Today's Bisalpur Gold Indicators
                </div>
                <div className="text-xs text-[#a99c85]">
                  Live benchmark purity rates for transparent jewellery shopping
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs">
              <div className="px-3.5 py-1.5 bg-[#1b1916] border border-[#3b301c] rounded-lg">
                <span className="text-[#a59982]">22K (916): </span>
                <span className="font-mono font-bold text-[#fae5b6] ml-1">
                  {formatINR(GOLD_RATES.gold22k)}/g
                </span>
              </div>

              <div className="px-3.5 py-1.5 bg-[#1b1916] border border-[#3b301c] rounded-lg">
                <span className="text-[#a59982]">24K Pure: </span>
                <span className="font-mono font-bold text-[#fae5b6] ml-1">
                  {formatINR(GOLD_RATES.gold24k)}/g
                </span>
              </div>

              <div className="px-3.5 py-1.5 bg-[#1b1916] border border-[#3b301c] rounded-lg">
                <span className="text-[#a59982]">18K: </span>
                <span className="font-mono font-bold text-[#fae5b6] ml-1">
                  {formatINR(GOLD_RATES.gold18k)}/g
                </span>
              </div>

              <Link
                to="/gold-rate"
                className="px-4 py-1.5 bg-[#2a2316] text-[#edd28e] hover:text-white border border-[#4d3c1e] hover:border-[#8f6e2b] rounded-lg font-medium transition-all flex items-center gap-1.5"
              >
                <span>Calculate Jewellery Value</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Featured Showcase Grid */}
      <section className="py-20 bg-[#0c0d0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-[#231e17]">
            <div>
              <div className="text-xs font-semibold text-[#caa555] tracking-widest uppercase mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#e1ba5b]" />
                <span>Curated Highlights</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#faf3e4]">
                Exquisite Showroom Creations
              </h2>
              <p className="text-xs sm:text-sm text-[#b2a58f] mt-1.5 max-w-xl">
                A preview of our celebrated 22K gold necklaces, bridal choker sets, and handcrafted kadas available on Tehsil Road, Bisalpur.
              </p>
            </div>

            <Link
              to="/collections"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#fae5b6] hover:text-white group"
            >
              <span>Explore All Collections</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((item) => {
              const isSaved = wishlistIds.includes(item.id);

              return (
                <div
                  key={item.id}
                  onClick={() => onSelectItem(item)}
                  className="group bg-[#151412] border border-[#3b2f1c] rounded-2xl overflow-hidden hover:border-[#d4af37]/80 hover:shadow-[0_0_24px_rgba(212,175,55,0.18)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer shine-overlay"
                >
                  <div className="relative aspect-[4/3] bg-[#1a1815] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-[#0f0e0d]/85 backdrop-blur-md rounded text-[10px] text-[#edd290] font-medium border border-[#3e301a]">
                      {item.purity}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(item);
                      }}
                      className={`absolute top-2.5 right-2.5 p-1.5 rounded-full backdrop-blur-md border transition-all active:scale-90 ${
                        isSaved
                          ? 'bg-[#3b1212]/90 border-[#ef4444] text-[#ef4444]'
                          : 'bg-[#151412]/80 border-[#3d311c] text-[#a79880] hover:text-white hover:scale-110'
                      }`}
                      aria-label="Save item"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-[#ef4444]' : ''}`} />
                    </button>

                    <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between text-xs text-white">
                      <span className="flex items-center gap-1 text-[#eed596]">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Quick View</span>
                      </span>
                      <span className="font-mono text-[11px] text-[#d6c9b3]">{item.estimatedWeight}</span>
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="text-[10px] text-[#9a8c75] font-mono">
                        {item.code} · {item.purity}
                      </div>
                      <h3 className="font-editorial text-base font-bold text-[#faf3e4] group-hover:text-[#f8e5b6] transition-colors mt-0.5 leading-snug line-clamp-1">
                        {item.name}
                      </h3>
                      {item.hindiName && (
                        <div className="text-[11px] text-[#caa555] mt-0.5 truncate">
                          {item.hindiName}
                        </div>
                      )}
                    </div>

                    <div className="pt-2.5 border-t border-[#292216] flex items-center justify-between">
                      <div>
                        <div className="text-[9px] text-[#8e816c] uppercase">Approx Price</div>
                        <div className="font-mono text-xs font-bold text-[#fae5b6] tabular-nums">
                          {item.approxPriceRange}
                        </div>
                      </div>
                      <span className="text-xs text-[#d4af37] group-hover:underline">View details</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e1b16] hover:bg-[#28241d] text-[#fae5b6] border border-[#4a391e] rounded-xl text-xs font-semibold transition-all shadow"
            >
              <span>Browse All Jewellery by Category</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Bridal Spotlight Banner */}
      <section className="py-20 bg-gradient-to-r from-[#171410] via-[#1c1813] to-[#171410] border-y border-[#342918] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="text-xs font-semibold text-[#caa555] uppercase tracking-widest">
                The Royal Trousseau Studio
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#fbf7ed] leading-tight">
                Crafting Auspicious Heirlooms For Every Bride
              </h2>
              <p className="text-xs sm:text-sm text-[#bbaea0] leading-relaxed">
                Whether you envision a grand royal choker adorned with uncut polkis and emerald beads or a graceful 22K temple gold set, our showroom on Tehsil Road offers bespoke customisations to honor your wedding day.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/bridal"
                  className="px-5 py-3 bg-gradient-to-r from-[#edd07e] to-[#b8860b] text-black font-semibold text-xs rounded-xl hover:brightness-110 transition-all shadow"
                >
                  Explore Bridal Suites
                </Link>
                <Link
                  to="/about"
                  className="px-5 py-3 bg-[#131210] text-[#ded1b9] border border-[#3d311c] text-xs font-medium rounded-xl hover:border-[#8f6d2b] transition-all"
                >
                  Our Karigari & Purity Standards
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#4d3d1f] shadow-2xl">
                <img
                  src="/src/assets/images/bridal_choker_set_1791285138342.jpg"
                  alt="VK Jewellers Royal Bridal Set"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-[#faf3e3] font-medium flex items-center justify-between">
                  <span>Custom Karigari & Sizing Available</span>
                  <span className="font-mono text-[#edd390]">100% BIS 916 Stamped</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bisalpur Showroom Invitation Card */}
      <section className="py-16 bg-[#0e0f11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 bg-[#161513] border border-[#43351d] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <VKLogo size={42} />
                <span className="font-display text-lg font-bold text-[#fae5b6]">
                  VISIT VK JEWELLERS
                </span>
              </div>
              <h3 className="font-editorial text-2xl font-bold text-white">
                Located on Tehsil Road, Bisalpur
              </h3>
              <p className="text-xs text-[#a99c85] max-w-xl">
                Step into our showroom to touch, feel, and try on our latest hallmark collections. Open 7 days a week with 4 dedicated customer assistance phone lines.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#ded1b9] pt-1">
                <span className="flex items-center gap-1 font-mono">
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>+91 9410215507</span>
                </span>
                <span className="text-[#4e432f]">|</span>
                <span className="flex items-center gap-1 font-mono">
                  <span>+91 9412482687</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/showroom"
                className="px-6 py-3 bg-[#d4af37] text-black font-semibold text-xs rounded-xl hover:brightness-110 active:scale-95 transition-all text-center"
              >
                Showroom Guide & Directions
              </Link>
              <Link
                to="/showroom"
                className="px-6 py-3 bg-[#231f17] text-[#edd28e] border border-[#48391d] font-semibold text-xs rounded-xl hover:text-white transition-all text-center"
              >
                Book VIP Trial Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
