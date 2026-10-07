import React from 'react';
import { Link } from 'react-router-dom';
import { VKLogo } from './VKLogo';
import { Sparkles, MessageCircle, ShieldCheck, ArrowRight, Award } from 'lucide-react';
import { SHOWROOM_CONTACTS } from '../data/jewelleryData';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  const whatsappUrl = `https://wa.me/91${SHOWROOM_CONTACTS.whatsappPhone}?text=${encodeURIComponent(
    'Namaste VK Jewellers, I would like to enquire about your jewellery collection and showroom visit at Tehsil Road, Bisalpur.'
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0b0c0e] via-[#121316] to-[#0c0d0e] pt-8 pb-16 lg:py-20 border-b border-[#242018]">
      {/* Background ambient gold aura with subtle pulsation */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-[#d4af37]/10 blur-[150px] pointer-events-none rounded-full animate-breathing-gold" />
      <div className="absolute -top-10 -right-10 w-96 h-96 bg-[#7c5b1b]/15 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Story & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Trust Kicker with animated sparkle */}
            <div className="flex items-center gap-2 text-xs text-[#d8c290] tracking-wider uppercase font-medium">
              <span className="w-2 h-2 text-[#edd07e] animate-sparkle">✦</span>
              <span className="text-[#f1d78f]">Bisalpur's Trusted Jeweller</span>
              <span aria-hidden="true" className="text-[#64563a]">·</span>
              <span>Tehsil Road</span>
              <span aria-hidden="true" className="text-[#64563a]">·</span>
              <span className="text-[#c6b694]">100% BIS Hallmarked</span>
            </div>

            {/* Main Headline with shimmering text effect */}
            <div className="space-y-3">
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#fbf7ee] leading-[1.12]">
                Elegance That <br />
                <span className="text-gold-shimmer font-display italic font-normal tracking-wide">
                  Lasts Forever.
                </span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg text-[#cdc1a8] max-w-2xl font-light leading-relaxed"
              >
                Welcome to <strong className="text-white font-medium">VK Jewellers</strong>, your trusted destination for exquisite jewellery in <strong className="text-white font-medium">Bisalpur</strong>. Located on <span className="text-[#f5dc9e] underline decoration-[#8e7336]/60 underline-offset-4">Tehsil Road</span>, we bring together timeless craftsmanship, contemporary bridal collections, and quality you can cherish across generations.
              </motion.p>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 border-t border-[#2d2518]">
              <div className="p-2.5 rounded-lg bg-[#141311]/50 border border-[#2a2316] hover:border-[#6d5526] transition-colors">
                <div className="text-[11px] text-[#9c8e76] uppercase tracking-wide">Purity Guarantee</div>
                <div className="text-xs sm:text-sm font-semibold text-[#f7e6c0] flex items-center gap-1.5 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#e0bb56] shrink-0" />
                  <span>22K (916) & 18K</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-[#141311]/50 border border-[#2a2316] hover:border-[#6d5526] transition-colors">
                <div className="text-[11px] text-[#9c8e76] uppercase tracking-wide">Showroom Location</div>
                <div className="text-xs sm:text-sm font-semibold text-[#f7e6c0] mt-0.5">
                  Tehsil Road, Bisalpur
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-2.5 rounded-lg bg-[#141311]/50 border border-[#2a2316] hover:border-[#6d5526] transition-colors">
                <div className="text-[11px] text-[#9c8e76] uppercase tracking-wide">Artisan Heritage</div>
                <div className="text-xs sm:text-sm font-semibold text-[#f7e6c0] flex items-center gap-1.5 mt-0.5">
                  <Award className="w-4 h-4 text-[#e0bb56] shrink-0" />
                  <span>Custom Karigari</span>
                </div>
              </div>
            </div>

            {/* Call to Actions with hover animations */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/collections"
                className="px-6 py-3.5 bg-gradient-to-r from-[#efd17d] via-[#d4af37] to-[#aa7d1d] text-black font-semibold text-sm rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-lg flex items-center gap-2 group relative overflow-hidden"
              >
                <span>View Jewellery Collections</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 bg-[#1a2e22] text-[#6ee7b7] border border-[#234c34] font-medium text-sm rounded-lg hover:bg-[#203a2b] hover:border-[#34d399] transition-all flex items-center gap-2 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-[#34d399]" />
                <span>WhatsApp Enquiry</span>
              </a>

              <Link
                to="/showroom"
                className="px-5 py-3.5 bg-[#181613] text-[#e6d0a1] border border-[#3d311c] font-medium text-sm rounded-lg hover:border-[#8e6e2a] hover:text-white transition-all active:scale-95"
              >
                Book Showroom Trial
              </Link>
            </div>

            {/* Direct Phone Assistance bar */}
            <div className="pt-2 text-xs text-[#968971] flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>Showroom Direct:</span>
              <a href="tel:9410215507" className="font-mono text-[#ecd8ad] hover:text-white transition-colors">+91 9410215507</a>
              <span className="text-[#4e432f]">|</span>
              <a href="tel:9412482687" className="font-mono text-[#ecd8ad] hover:text-white transition-colors">+91 9412482687</a>
              <span className="text-[#4e432f]">|</span>
              <a href="tel:9411284440" className="font-mono text-[#ecd8ad] hover:text-white transition-colors">+91 9411284440</a>
              <span className="text-[#4e432f]">|</span>
              <a href="tel:7500140049" className="font-mono text-[#ecd8ad] hover:text-white transition-colors">+91 7500140049</a>
            </div>
          </motion.div>

          {/* Right Column: Visual Campaign Showcase (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative gold bevel frame with shine overlay */}
              <div className="relative rounded-2xl overflow-hidden border border-[#524121] bg-[#151413] shadow-2xl group shine-overlay">
                <div className="aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden">
                  <img
                    src="/src/assets/images/hero_bridal_jewellery_1791285116000.jpg"
                    alt="VK Jewellers Royal Bridal Gold Choker and Earrings Set"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  {/* Atmospheric gradient overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f11] via-transparent to-black/25" />
                </div>

                {/* Bottom Card Ribbon with official logo */}
                <div className="p-4 sm:p-5 bg-gradient-to-r from-[#171512] via-[#1d1913] to-[#171512] border-t border-[#3b2e18] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <VKLogo size={50} />
                    <div>
                      <div className="font-display text-sm font-bold text-[#fae5b6]">
                        V.K. JEWELLERS
                      </div>
                      <div className="text-[11px] text-[#b39962] tracking-wider uppercase">
                        Bisalpur Showroom Edition
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[11px] text-[#93866e]">Craftsmanship</div>
                    <div className="text-xs font-semibold text-[#f0ddb4]">Where Tradition Meets Timeless Elegance</div>
                  </div>
                </div>
              </div>

              {/* Floating Trust Certificate Tag with micro-float animation */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-[#181613]/95 backdrop-blur-md border border-[#4d3c1e] rounded-xl p-3 shadow-2xl flex items-center gap-3 text-left animate-micro-float">
                <div className="w-9 h-9 rounded-full bg-[#2a2214] border border-[#d4af37]/40 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-[#edd07b]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#f7e4b5]">100% BIS Hallmarked</div>
                  <div className="text-[10px] text-[#a89b83]">HUID Certified 22K (916) Purity</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
