import React from 'react';
import { Link } from 'react-router-dom';
import { VKLogo } from './VKLogo';
import { SHOWROOM_CONTACTS } from '../data/jewelleryData';
import { MapPin, Phone, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#09090b] border-t border-[#262118] text-[#a79a83] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#211c15]">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <VKLogo size={56} />
              <div>
                <span className="font-display text-lg font-bold text-[#faf4e6] tracking-wider block group-hover:text-white transition-colors">
                  VK JEWELLERS
                </span>
                <span className="text-[11px] text-[#caa555] tracking-widest uppercase block mt-0.5">
                  Elegance That Lasts Forever
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#9c8e77] leading-relaxed max-w-sm">
              Your trusted destination for exquisite jewellery in Bisalpur. From timeless 22K gold heirlooms and royal bridal suites to contemporary everyday designs, we celebrate life’s most precious moments with purity you can trust.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#e5d3a5] pt-1">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>100% BIS Hallmarked Jewellery (HUID Certified)</span>
            </div>
          </div>

          {/* Showroom Location & Timing (4 cols) */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <div className="font-editorial text-sm font-bold text-[#fbf5e7] uppercase tracking-wider">
              Showroom Information
            </div>

            <div className="space-y-2.5 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[#eee3cc] font-medium">Tehsil Road, Bisalpur</div>
                  <div className="text-[#8e806c]">District Pilibhit, Uttar Pradesh, India</div>
                </div>
              </div>

              <div className="text-[#8e806c] pl-6.5">
                <span>Timings: 10:00 AM to 8:30 PM (All 7 Days Open)</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-[11px] font-semibold text-[#caa555] uppercase tracking-wider mb-2">
                Showroom Phone Lines:
              </div>
              <div className="grid grid-cols-2 gap-2 font-mono">
                {SHOWROOM_CONTACTS.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="p-1.5 bg-[#141311] border border-[#2b2417] rounded text-xs text-[#ddd0b8] hover:text-white hover:border-[#7c6027] flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3 h-3 text-[#d4af37]" />
                    <span>{phone}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Separate Pages Navigation (4 cols) */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <div className="font-editorial text-sm font-bold text-[#fbf5e7] uppercase tracking-wider">
              Explore Pages
            </div>

            <ul className="space-y-2.5 pt-1 text-[#a59781]">
              <li>
                <Link to="/" className="hover:text-[#fae5b6] transition-colors">
                  • Home & Featured Highlights
                </Link>
              </li>
              <li>
                <Link to="/collections" className="hover:text-[#fae5b6] transition-colors">
                  • All Jewellery Collections (22K Gold, Bangles, Rings)
                </Link>
              </li>
              <li>
                <Link to="/bridal" className="hover:text-[#fae5b6] transition-colors">
                  • Royal Bridal Suites & Wedding Trousseau Studio
                </Link>
              </li>
              <li>
                <Link to="/gold-rate" className="hover:text-[#fae5b6] transition-colors">
                  • Live Bisalpur Gold Rates & Instant Price Calculator
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#fae5b6] transition-colors">
                  • About VK Jewellers & 100% BIS Hallmarking
                </Link>
              </li>
              <li>
                <Link to="/showroom" className="hover:text-[#fae5b6] transition-colors">
                  • Showroom Map, Contact Lines & VIP Visit Booking
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7e725f]">
          <div>
            © {new Date().getFullYear()} VK Jewellers, Bisalpur. All rights reserved.
          </div>

          <div className="font-editorial italic text-xs text-[#baa88c]">
            "VK Jewellers – Where Tradition Meets Timeless Elegance"
          </div>
        </div>

      </div>
    </footer>
  );
};
