import React from 'react';
import { JewelleryItem, SHOWROOM_CONTACTS } from '../data/jewelleryData';
import { X, Trash2, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: JewelleryItem[];
  onRemoveItem: (id: string) => void;
  onClear: () => void;
  onSelectItem: (item: JewelleryItem) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClear,
  onSelectItem,
}) => {
  if (!isOpen) return null;

  const handleSendAllToWhatsApp = () => {
    if (items.length === 0) return;

    let message = `Namaste VK Jewellers (Bisalpur),\nI have shortlisted ${items.length} jewellery design(s) from your digital catalog:\n\n`;

    items.forEach((item, idx) => {
      message += `${idx + 1}. *${item.name}* (Code: ${item.code})\n   • Purity: ${item.purity}\n   • Approx Weight: ${item.estimatedWeight}\n\n`;
    });

    message += `Please confirm current availability and pricing at your Tehsil Road, Bisalpur showroom. Thank you!`;

    window.open(`https://wa.me/91${SHOWROOM_CONTACTS.whatsappPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="wishlist-drawer-title"
        className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md bg-[#131211] border-l border-[#3d311d] h-full flex flex-col justify-between shadow-2xl text-left"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="p-5 border-b border-[#2b2316] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#d4af37]" />
              <div>
                <h2 id="wishlist-drawer-title" className="font-editorial text-lg font-bold text-[#faf3e3]">
                  Shortlisted Inquiry Bag
                </h2>
                <div className="text-[11px] text-[#9b8d76]">
                  {items.length} {items.length === 1 ? 'Design' : 'Designs'} Selected
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#9e8f78] hover:text-white rounded-lg hover:bg-[#201d18] transition-colors"
              aria-label="Close inquiry bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer List */}
          <div className="p-5 flex-1 overflow-y-auto space-y-4">
            {items.length === 0 ? (
              <div className="py-20 text-center space-y-3">
                <ShoppingBag className="w-10 h-10 text-[#4c4232] mx-auto animate-pulse" />
                <p className="text-sm text-[#b2a590]">Your inquiry bag is empty.</p>
                <p className="text-xs text-[#7e725e] max-w-xs mx-auto">
                  Explore our gold and bridal collections and tap the heart icon to save pieces for consultation.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onClose();
                    onSelectItem(item);
                  }}
                  className="p-3 bg-[#1a1815] border border-[#342a18] rounded-xl flex items-center justify-between gap-3 group hover:border-[#8e6d2b] hover:shadow-lg transition-all cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-lg object-cover shrink-0 border border-[#483a21] group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] text-[#a19077] font-mono">
                      {item.code} · {item.purity}
                    </div>
                    <div className="text-xs font-semibold text-[#faf3e3] truncate group-hover:text-[#edd28e] transition-colors">
                      {item.name}
                    </div>
                    <div className="text-[11px] font-mono text-[#dcd0b8] mt-0.5">
                      {item.estimatedWeight}
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveItem(item.id);
                    }}
                    className="p-2 text-[#7f715c] hover:text-[#ef4444] transition-colors active:scale-90"
                    title="Remove from bag"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#2d2518] bg-[#171512] space-y-3">
              <button
                onClick={handleSendAllToWhatsApp}
                className="w-full py-3.5 bg-[#204930] hover:bg-[#26593a] text-[#71f7c3] border border-[#378153] rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-[#34d399]" />
                <span>Send Full List on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center justify-between text-xs text-[#8f816b] px-1">
                <span>Showroom: Tehsil Road, Bisalpur</span>
                <button
                  onClick={onClear}
                  className="text-[#968872] hover:text-[#e57373] underline"
                >
                  Clear all
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
