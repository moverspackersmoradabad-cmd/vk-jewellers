import React from 'react';
import { JewelleryItem, SHOWROOM_CONTACTS } from '../data/jewelleryData';
import { X, Check, ShieldCheck, MessageCircle, Heart, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductModalProps {
  item: JewelleryItem | null;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (item: JewelleryItem) => void;
  onBookShowroom: (item: JewelleryItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  item,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onBookShowroom,
}) => {
  if (!item) return null;

  const handleWhatsAppEnquiry = () => {
    const text = `Namaste VK Jewellers (Bisalpur), I am interested in "${item.name}" (Code: ${item.code}, Purity: ${item.purity}). Please share current availability and final quotation at your Tehsil Road showroom.`;
    window.open(`https://wa.me/91${SHOWROOM_CONTACTS.whatsappPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#141312] border border-[#5a4422] rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-[0_0_50px_rgba(212,175,55,0.18)] text-left"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-[#a3947c] hover:text-white bg-[#221f1a] rounded-full border border-[#3b3221] transition-all hover:scale-105 active:scale-95"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
            
            {/* Image Showcase (5 cols) */}
            <div className="md:col-span-5 flex flex-col justify-between">
              <div className="relative rounded-2xl overflow-hidden border border-[#4a391e] bg-[#1a1815] aspect-[4/3] md:aspect-square shine-overlay group">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 bg-[#100f0e]/85 backdrop-blur-md rounded-lg text-[11px] text-[#eed494] font-medium border border-[#3f311c]">
                  {item.purity}
                </div>
              </div>

              <div className="mt-4 p-3 bg-[#1c1915] border border-[#342a17] rounded-xl flex items-center gap-2.5 text-xs text-[#b8ab94]">
                <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Certified with Bureau of Indian Standards (BIS) Hallmark & HUID traceability.</span>
              </div>
            </div>

            {/* Details & Actions (7 cols) */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-5">
              <div>
                {/* Category & Code kicker */}
                <div className="flex items-center gap-2 text-xs text-[#a8977c] uppercase tracking-wider font-mono">
                  <span>Code: {item.code}</span>
                  <span aria-hidden="true">·</span>
                  <span className="capitalize">{item.category}</span>
                </div>

                {/* Title */}
                <h2 id="modal-product-title" className="font-editorial text-2xl sm:text-3xl font-bold text-[#faf3e3] mt-1">
                  {item.name}
                </h2>
                {item.hindiName && (
                  <div className="text-xs text-[#caa555] font-medium mt-0.5">
                    {item.hindiName}
                  </div>
                )}

                {/* Price & Weight row */}
                <div className="mt-4 pt-3 border-t border-[#292215] flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <div className="text-[11px] text-[#91836c] uppercase">Approximate Valuation</div>
                    <div className="font-mono text-xl sm:text-2xl font-bold text-[#f7e2b1] tabular-nums">
                      {item.approxPriceRange}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[11px] text-[#91836c] uppercase">Estimated Weight</div>
                    <div className="font-mono text-sm font-semibold text-[#e8dbbf]">
                      {item.estimatedWeight}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-[#b8ab93] leading-relaxed">
                  {item.description}
                </p>

                {/* Feature Bullet Points */}
                <div className="mt-4 space-y-1.5">
                  <div className="text-xs font-semibold text-[#caa555] uppercase tracking-wider">
                    Artisan Specifications
                  </div>
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#cec1a9]">
                      <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-2.5 pt-4 border-t border-[#2a2216]">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleWhatsAppEnquiry}
                    className="py-3 px-4 bg-[#21432c] hover:bg-[#285538] text-[#75f5c0] border border-[#3b754e] rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 text-[#34d399]" />
                    <span>WhatsApp Inquiry</span>
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      onBookShowroom(item);
                    }}
                    className="py-3 px-4 bg-gradient-to-r from-[#edd07e] to-[#b8860b] text-black font-semibold rounded-xl text-xs hover:brightness-110 active:scale-95 transition-all shadow flex items-center justify-center gap-2"
                  >
                    <span>Book Trial Visit</span>
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <button
                    onClick={() => onToggleWishlist(item)}
                    className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg border transition-colors active:scale-95 ${
                      isWishlisted
                        ? 'border-[#b91c1c] text-[#f87171] bg-[#2a1313]'
                        : 'border-[#382d1c] text-[#a3947c] hover:text-white'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-[#ef4444] text-[#ef4444]' : ''}`} />
                    <span>{isWishlisted ? 'Shortlisted in Inquiry Bag' : 'Save to Inquiry Bag'}</span>
                  </button>

                  <a
                    href={`tel:${SHOWROOM_CONTACTS.primaryPhone}`}
                    className="text-[#caa555] hover:text-[#f3dfa7] flex items-center gap-1 font-mono"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call {SHOWROOM_CONTACTS.primaryPhone}</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
