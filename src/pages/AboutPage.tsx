import React from 'react';
import { Link } from 'react-router-dom';
import { VKLogo } from '../components/VKLogo';
import { ShieldCheck, Award, Heart, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { SHOWROOM_CONTACTS, JEWELLERY_IMAGES } from '../data/jewelleryData';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 bg-[#0c0d0e] min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Banner */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex justify-center mb-4">
            <VKLogo size={90} />
          </div>
          <div className="text-xs font-semibold text-[#caa555] tracking-widest uppercase mb-1">
            Heritage & Craftsmanship
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl font-bold text-[#faf4e6]">
            Where Tradition Meets <br />
            <span className="text-gold-gradient font-display italic font-normal">
              Timeless Elegance
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-[#b5a790] mt-3 leading-relaxed">
            Welcome to VK Jewellers, your trusted destination for exquisite jewellery in Bisalpur. Located on Tehsil Road, we celebrate life's most precious milestones with purity, artistry, and warmth.
          </p>
        </div>

        {/* Narrative Section: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5 text-xs sm:text-sm text-[#beb199] leading-relaxed">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#faf3e3] leading-snug">
              Jewellery is More Than An Ornament — It Is An Eternal Emotion.
            </h2>
            <p>
              Founded with an uncompromising devotion to gold purity and master karigari, <strong className="text-white">VK Jewellers</strong> has grown to become Bisalpur's premier family jeweller on <strong className="text-white">Tehsil Road</strong>.
            </p>
            <p>
              We believe jewellery is a sacred symbol of love, family tradition, auspicious celebrations, and cherished memories passed down through generations. From the bride's first regal choker to everyday gold chains, baby shower blessings, and Diwali coin investments, each design is sculpted with precision and genuine hallmark authenticity.
            </p>
            <p>
              Our artisans blend centuries of Indian jewelry-making heritage—intricate filigree, antique temple repoussé, uncut polki settings—with clean, contemporary silhouettes made for modern celebrations.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/collections"
                className="px-5 py-2.5 bg-gradient-to-r from-[#edd07e] to-[#b8860b] text-black font-semibold text-xs rounded-xl hover:brightness-110 transition-all shadow"
              >
                View Our Collections
              </Link>
              <Link
                to="/showroom"
                className="px-5 py-2.5 bg-[#1b1916] text-[#edd28e] border border-[#3e321e] font-semibold text-xs rounded-xl hover:border-[#8f6e2b] transition-all"
              >
                Visit Our Bisalpur Showroom
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#48391d] bg-[#171513] shadow-2xl">
              <img
                src={JEWELLERY_IMAGES.bangles}
                alt="VK Jewellers 22K Handcrafted Gold Bangles"
                referrerPolicy="no-referrer"
                className="w-full h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#141311]/90 backdrop-blur-md rounded-2xl border border-[#3d311c]">
                <div className="text-xs font-semibold text-[#f0dc9e] uppercase tracking-wider">
                  The VK Jewellers Standard
                </div>
                <div className="text-xs text-[#b8ab94] mt-1">
                  100% BIS Hallmarked (22K 916 & 18K 750) with unique laser HUID certification.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Trust */}
        <div className="pt-10">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="text-xs font-semibold text-[#caa555] uppercase tracking-widest mb-1">
              Our Core Promises
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#faf3e3]">
              Why Families in Bisalpur Choose VK Jewellers
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 bg-[#151412] border border-[#3b301c] rounded-2xl space-y-3 hover:border-[#8f6d2b] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#252014] border border-[#d4af37]/30 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#d4af37]" />
              </div>
              <h4 className="font-editorial text-base font-bold text-[#faf3e3]">
                100% BIS Hallmarked
              </h4>
              <p className="text-xs text-[#a99c85] leading-relaxed">
                Zero ambiguity on purity. Every gram of 22K (916) and 18K (750) jewellery is stamped with the government Bureau of Indian Standards HUID code.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 bg-[#151412] border border-[#3b301c] rounded-2xl space-y-3 hover:border-[#8f6d2b] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#252014] border border-[#d4af37]/30 flex items-center justify-center">
                <Award className="w-5 h-5 text-[#d4af37]" />
              </div>
              <h4 className="font-editorial text-base font-bold text-[#faf3e3]">
                Bespoke Karigari
              </h4>
              <p className="text-xs text-[#a99c85] leading-relaxed">
                Our in-house master artisans create tailor-made wedding suites, antique kadas, and personalized pieces matching your exact weight and design specifications.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 bg-[#151412] border border-[#3b301c] rounded-2xl space-y-3 hover:border-[#8f6d2b] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#252014] border border-[#d4af37]/30 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#d4af37]" />
              </div>
              <h4 className="font-editorial text-base font-bold text-[#faf3e3]">
                Complete Transparency
              </h4>
              <p className="text-xs text-[#a99c85] leading-relaxed">
                Itemized invoices displaying net gold weight, stone weight deducted completely, live rate applied, and exact making charges with 3% GST.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 bg-[#151412] border border-[#3b301c] rounded-2xl space-y-3 hover:border-[#8f6d2b] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#252014] border border-[#d4af37]/30 flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#d4af37]" />
              </div>
              <h4 className="font-editorial text-base font-bold text-[#faf3e3]">
                Old Gold Exchange
              </h4>
              <p className="text-xs text-[#a99c85] leading-relaxed">
                Bring your old family gold for non-destructive digital testing right in front of you on Tehsil Road, offering highest market valuation.
              </p>
            </div>
          </div>
        </div>

        {/* Showroom Amenities */}
        <div className="p-8 sm:p-10 bg-[#161513] border border-[#43351d] rounded-3xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <div className="text-xs font-semibold text-[#caa555] uppercase tracking-wider">
                Showroom Experience on Tehsil Road
              </div>
              <h3 className="font-editorial text-2xl font-bold text-white">
                Personalized Care For Every Family
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#b8ab94] pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Private Bridal Trial Room & Jewellery Mirrors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Digital High-Precision Karatometer Gold Tester</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Free Lifetime Cleaning & Ultrasonic Polish</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Auspicious Packaging in Royal Velvet Boxes</span>
                </div>
              </div>
            </div>

            <div className="shrink-0">
              <Link
                to="/showroom"
                className="px-6 py-3.5 bg-gradient-to-r from-[#edd07e] to-[#b8860b] text-black font-semibold text-xs rounded-xl hover:brightness-110 transition-all flex items-center gap-2 shadow"
              >
                <span>Book a Showroom Visit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
