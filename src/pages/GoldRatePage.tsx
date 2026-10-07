import React from 'react';
import { GoldRateCalculator } from '../components/GoldRateCalculator';
import { ShieldCheck, Info, Sparkles, Phone, MessageSquare } from 'lucide-react';
import { SHOWROOM_CONTACTS } from '../data/jewelleryData';

export const GoldRatePage: React.FC = () => {
  return (
    <div className="py-12 bg-[#0c0d0e] min-h-screen space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-semibold text-[#caa555] tracking-widest uppercase mb-1 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#e1ba5b]" />
            <span>Market Transparency</span>
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl font-bold text-[#faf4e6]">
            Live Gold Rates & Price Calculator
          </h1>
          <p className="text-xs sm:text-sm text-[#b5a790] mt-2 leading-relaxed">
            Transparent pricing is the cornerstone of VK Jewellers. Check today's benchmark gold and silver rates in Bisalpur and calculate your exact ornament cost before stepping into our showroom on Tehsil Road.
          </p>
        </div>

        {/* The Live Rates & Calculator Module */}
        <GoldRateCalculator />

        {/* Gold Purity & Karat Education Guide */}
        <div className="p-8 sm:p-12 bg-[#151412] border border-[#3e321e] rounded-3xl mt-12 space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <div className="text-xs font-semibold text-[#caa555] uppercase tracking-wider mb-1">
              Buyer's Purity Guide
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#faf3e3]">
              Understanding Gold Karats at VK Jewellers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 22K */}
            <div className="p-6 bg-[#1b1916] border border-[#4a391e] rounded-2xl space-y-3 relative overflow-hidden">
              <div className="text-xs font-mono font-bold text-[#caa555] uppercase">
                Most Popular for Jewellery
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#faf3e3]">
                22 Karat (916 BIS Hallmark)
              </h3>
              <p className="text-xs text-[#b8ab94] leading-relaxed">
                Contains 91.6% pure gold alloyed with 8.4% precious bonding metals to give enduring strength. This is the gold standard for Indian wedding necklaces, bangles, mangalsutra, and traditional heirloom ornaments.
              </p>
              <div className="pt-2 border-t border-[#2e2618] text-[11px] text-[#eed28e] font-mono">
                Hallmark Mark: 22K916 + 6-digit HUID
              </div>
            </div>

            {/* 24K */}
            <div className="p-6 bg-[#1b1916] border border-[#332b1b] rounded-2xl space-y-3">
              <div className="text-xs font-mono font-bold text-[#caa555] uppercase">
                Investment & Bullion
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#faf3e3]">
                24 Karat (999 Pure Gold)
              </h3>
              <p className="text-xs text-[#b8ab94] leading-relaxed">
                99.9% pure raw gold in its purest form. Because pure gold is naturally malleable, 24K is primarily used for gold coins, bars, and auspicious puja coins, rather than intricate daily-wear ornaments.
              </p>
              <div className="pt-2 border-t border-[#2e2618] text-[11px] text-[#eed28e] font-mono">
                Hallmark Mark: 24K999 Pure Stamped
              </div>
            </div>

            {/* 18K */}
            <div className="p-6 bg-[#1b1916] border border-[#332b1b] rounded-2xl space-y-3">
              <div className="text-xs font-mono font-bold text-[#caa555] uppercase">
                Diamond & Solitaire
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#faf3e3]">
                18 Karat (750 BIS Hallmark)
              </h3>
              <p className="text-xs text-[#b8ab94] leading-relaxed">
                75% pure gold combined with 25% metals. It provides the superior hardness necessary to securely hold brilliant-cut diamonds, gemstones, and modern sleek cocktail rings without stone loosening.
              </p>
              <div className="pt-2 border-t border-[#2e2618] text-[11px] text-[#eed28e] font-mono">
                Hallmark Mark: 18K750 + IGI Certificate
              </div>
            </div>
          </div>

          {/* BIS Hallmark 3-Signs Infographic */}
          <div className="p-6 bg-[#1f1d19] border border-[#4a3a1f] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-[#d4af37] shrink-0 mt-1" />
              <div>
                <h4 className="font-editorial text-base font-bold text-[#fae5b6]">
                  How to verify the BIS Hallmark on your jewellery at our showroom:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#bbaea0] mt-3">
                  <div>
                    <strong className="text-white block">1. BIS Triangle:</strong>
                    Official triangle emblem of the Bureau of Indian Standards.
                  </div>
                  <div>
                    <strong className="text-white block">2. Purity & Fineness:</strong>
                    "22K916" or "18K750" stamped into the gold surface.
                  </div>
                  <div>
                    <strong className="text-white block">3. 6-Digit HUID:</strong>
                    Unique laser-engraved alphanumeric code verifiable on the BIS Care app.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Bar */}
        <div className="p-8 bg-gradient-to-r from-[#1b1813] to-[#241f17] border border-[#483a1e] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-sm font-bold text-[#fae5b6]">
              Have questions about live rates or booking a rate lock?
            </div>
            <div className="text-xs text-[#a99c85] mt-1">
              Contact our showroom directly on Tehsil Road, Bisalpur:
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SHOWROOM_CONTACTS.primaryPhone}`}
              className="px-4 py-2 bg-[#d4af37] text-black font-semibold text-xs rounded-xl hover:brightness-110 transition-all flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {SHOWROOM_CONTACTS.primaryPhone}</span>
            </a>

            <a
              href={`https://wa.me/91${SHOWROOM_CONTACTS.whatsappPhone}?text=${encodeURIComponent(
                'Namaste VK Jewellers (Bisalpur), what is the gold rate today and do you offer old gold exchange?'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-[#1c3e27] text-[#6ee7b7] border border-[#2b683e] font-semibold text-xs rounded-xl hover:bg-[#234e32] transition-all flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#34d399]" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
