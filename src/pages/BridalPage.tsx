import React from 'react';
import { Link } from 'react-router-dom';
import { JEWELLERY_PRODUCTS, SHOWROOM_CONTACTS, JewelleryItem, JEWELLERY_IMAGES } from '../data/jewelleryData';
import { Sparkles, Heart, Eye, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface BridalPageProps {
  onSelectItem: (item: JewelleryItem) => void;
  wishlistIds: string[];
  onToggleWishlist: (item: JewelleryItem) => void;
}

export const BridalPage: React.FC<BridalPageProps> = ({
  onSelectItem,
  wishlistIds,
  onToggleWishlist,
}) => {
  const bridalItems = JEWELLERY_PRODUCTS.filter((item) => item.category === 'bridal');

  const steps = [
    {
      num: '01',
      title: 'Bridal Consultation & Lehenga Color Match',
      desc: 'Bring your wedding lehenga fabric swatch or digital photos to our Tehsil Road showroom. Our stylists match antique, yellow gold, or kundan hues to complement your bridal look perfectly.',
    },
    {
      num: '02',
      title: 'Weight Calibration & Custom Budgeting',
      desc: 'Whether designing a 60g classic set or an 85g grand imperial rani haar, our karigars balance gold thickness and comfortable weight distribution.',
    },
    {
      num: '03',
      title: 'Handcrafted Heritage Artistry',
      desc: 'Master artisans in Bisalpur hand-chisel traditional floral motifs, filigree wires, and set uncut polki stones with natural pearls and emerald drops.',
    },
    {
      num: '04',
      title: 'BIS 916 Hallmark & Auspicious Delivery',
      desc: 'Every piece is stamped with the government HUID laser hallmark and presented in a velvet bridal chest with lifelong authenticity.',
    },
  ];

  return (
    <div className="py-12 bg-[#0c0d0e] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner with Motion Entrance & Light Sweep */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-[#4d3c1e] bg-[#161513] mb-16 shadow-2xl group shine-overlay"
        >
          <div className="aspect-[16/9] sm:aspect-[21/9] relative overflow-hidden">
            <img
              src={JEWELLERY_IMAGES.heroBridal}
              alt="VK Jewellers Royal Bridal Suites"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f12] via-[#0e0f12]/60 to-transparent" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 text-left">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#caa555] tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#e4bc54] animate-sparkle" />
                <span>Bisalpur's Premier Wedding Destination</span>
              </div>
              <h1 className="font-editorial text-3xl sm:text-5xl font-bold text-[#faf4e6] leading-tight">
                Royal Bridal <span className="text-gold-shimmer">Trousseau Studio</span>
              </h1>
              <p className="text-xs sm:text-base text-[#d2c5b0] leading-relaxed">
                Celebrating the bride with timeless 22K hallmarked masterpieces. Where heritage artistry meets the sacred promises of your new beginning.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/showroom"
                  className="px-6 py-3 bg-gradient-to-r from-[#edd07e] to-[#b8860b] text-black font-semibold text-xs rounded-xl hover:brightness-110 active:scale-95 transition-all shadow"
                >
                  Book Private Bridal Trial on Tehsil Road
                </Link>
                <a
                  href={`https://wa.me/91${SHOWROOM_CONTACTS.whatsappPhone}?text=${encodeURIComponent(
                    'Namaste VK Jewellers (Bisalpur), I would like to consult for my upcoming wedding jewellery set.'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 bg-[#192b20] text-[#6ee7b7] border border-[#2b533a] font-medium text-xs rounded-xl hover:bg-[#203c2c] transition-all flex items-center gap-2 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-[#34d399]" />
                  <span>WhatsApp Bridal Stylist</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Bridal Suites Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold text-[#caa555] tracking-widest uppercase mb-1 flex items-center justify-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
              <span>Handcrafted for the Big Day</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#faf4e6]">
              Signature Bridal Creations
            </h2>
            <p className="text-xs sm:text-sm text-[#b2a58f] mt-1.5">
              Every set includes matching chandelier jhumkas, adjustable silk dori, and complete BIS 916 hallmarked certification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bridalItems.map((item, idx) => {
              const isSaved = wishlistIds.includes(item.id);

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => onSelectItem(item)}
                  className="group bg-[#151412] border border-[#3f311c] rounded-2xl overflow-hidden hover:border-[#d4af37] hover:shadow-[0_0_32px_rgba(212,175,55,0.22)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer shine-overlay"
                >
                  <div className="relative aspect-[16/10] bg-[#1a1815] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                    />

                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#0f0e0d]/80 backdrop-blur-md rounded text-xs text-[#edd290] font-medium border border-[#3e301a]">
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
                      aria-label="Save bridal set"
                    >
                      <Heart className={`w-4 h-4 ${isSaved ? 'fill-[#ef4444]' : ''}`} />
                    </button>

                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between text-xs text-white">
                      <span className="flex items-center gap-1 text-[#eed596]">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Bridal Specs</span>
                      </span>
                      <span className="font-mono text-xs text-[#d6c9b3]">{item.estimatedWeight}</span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-[#9a8c75] font-mono">
                        <span>Code: {item.code}</span>
                        <span aria-hidden="true">·</span>
                        <span>Full Bridal Suite</span>
                      </div>

                      <h3 className="font-editorial text-2xl font-bold text-[#faf3e4] group-hover:text-[#f8e5b6] transition-colors mt-1">
                        {item.name}
                      </h3>
                      {item.hindiName && (
                        <div className="text-xs text-[#caa555] font-medium mt-0.5">
                          {item.hindiName}
                        </div>
                      )}

                      <p className="text-xs sm:text-sm text-[#b2a590] mt-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#292216] flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-[#8e816c] uppercase">Approximate Valuation</div>
                        <div className="font-mono text-lg sm:text-xl font-bold text-[#fae5b6] tabular-nums">
                          {item.approxPriceRange}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link
                          to="/showroom"
                          onClick={(e) => e.stopPropagation()}
                          className="px-4 py-2 bg-[#d4af37] text-black font-semibold rounded-lg text-xs hover:brightness-110 active:scale-95 transition-all shadow"
                        >
                          Book Trial
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 4-Step Bespoke Karigari Process */}
        <div className="mb-20 p-8 sm:p-12 bg-[#141311] border border-[#3e321e] rounded-3xl relative overflow-hidden">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="text-xs font-semibold text-[#caa555] tracking-widest uppercase mb-1">
              From Vision to Reality
            </div>
            <h3 className="font-editorial text-3xl font-bold text-[#faf5ea]">
              How We Craft Your Custom Wedding Jewellery
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.num}
                className="p-6 bg-[#1b1916] border border-[#362c1b] rounded-2xl space-y-3 relative hover:border-[#8f6d2b] transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="font-editorial text-4xl font-bold text-[#e0bc58]/70">
                  {st.num}
                </div>
                <h4 className="font-editorial text-lg font-bold text-[#faf3e3]">
                  {st.title}
                </h4>
                <p className="text-xs text-[#a89a83] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Complete Dulhan Trousseau Checklist */}
        <div className="p-8 bg-[#181614] border border-[#48391e] rounded-2xl shadow-xl">
          <div className="text-xs font-semibold text-[#caa555] uppercase tracking-wider mb-2">
            The Traditional Indian Bridal Checklist Available at VK Jewellers:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#d2c5b0] pt-2">
            <div className="p-3 bg-[#1f1d19] rounded-xl border border-[#332a19] hover:border-[#6f582c] transition-colors">
              <strong className="block text-white font-medium">1. Choker & Rani Haar</strong>
              <span>Layered royal wedding neckpieces</span>
            </div>
            <div className="p-3 bg-[#1f1d19] rounded-xl border border-[#332a19] hover:border-[#6f582c] transition-colors">
              <strong className="block text-white font-medium">2. Jhumkas & Chandbalis</strong>
              <span>Matching ear chandelier ornaments</span>
            </div>
            <div className="p-3 bg-[#1f1d19] rounded-xl border border-[#332a19] hover:border-[#6f582c] transition-colors">
              <strong className="block text-white font-medium">3. Maang Tikka & Nath</strong>
              <span>Traditional forehead & nose adornments</span>
            </div>
            <div className="p-3 bg-[#1f1d19] rounded-xl border border-[#332a19] hover:border-[#6f582c] transition-colors">
              <strong className="block text-white font-medium">4. Kadas & Hathphool</strong>
              <span>Handcrafted gold bangles & handchains</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
