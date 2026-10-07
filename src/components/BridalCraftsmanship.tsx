import React from 'react';
import { Sparkles, Shield, Gem, CheckCircle2, MessageCircle } from 'lucide-react';
import { SHOWROOM_CONTACTS } from '../data/jewelleryData';

interface BridalCraftsmanshipProps {
  onBookConsultation: () => void;
}

export const BridalCraftsmanship: React.FC<BridalCraftsmanshipProps> = ({
  onBookConsultation,
}) => {
  const customOrderWhatsApp = () => {
    const text =
      'Namaste VK Jewellers (Bisalpur), I would like to consult with your master karigars for custom bridal/wedding jewellery.';
    window.open(`https://wa.me/91${SHOWROOM_CONTACTS.whatsappPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const steps = [
    {
      num: '01',
      title: 'Personalized Bridal Consultation',
      desc: 'Meet our jewellery specialists on Tehsil Road, Bisalpur. Share your bridal lehenga colors, wedding themes, and family heirloom preferences.',
    },
    {
      num: '02',
      title: 'Custom Weight & Karat Calibration',
      desc: 'We calibrate gold weight to match your specific budget and timeline, presenting hand sketches and 3D wax prototypes for approval.',
    },
    {
      num: '03',
      title: 'Handcrafted by Master Karigars',
      desc: 'Generations of silversmith and goldsmith heritage come together in every filigree wire, polki setting, and antique embossing.',
    },
    {
      num: '04',
      title: '100% BIS Hallmarking & Showroom Trial',
      desc: 'Every piece is stamped with the official government HUID code before you take delivery in an auspicious muhurat ceremony.',
    },
  ];

  return (
    <section id="bridal" className="py-20 bg-[#0f1013] border-b border-[#252018] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-[#d4af37]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top split: Story and Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#caa555] tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#e4bc54]" />
              <span>VK Bridal Trousseau Studio</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#faf4e6] leading-tight">
              Where Tradition Meets <br />
              <span className="text-gold-gradient font-display italic font-normal">
                Timeless Elegance
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#bbae96] leading-relaxed">
              At VK Jewellers, we believe wedding jewellery is not simply an ornament—it is an auspicious blessing, an heirloom passed from mother to daughter, and an eternal reminder of your most cherished day.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#181613] border border-[#3b301c] rounded-xl">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#fae5b6]">
                  <Gem className="w-4 h-4 text-[#d4af37]" />
                  <span>Bridal Complete Sets</span>
                </div>
                <p className="text-xs text-[#a3957f] mt-1">
                  Choker sets, rani haar, jhumkas, maang tikka, nath, and handcrafted kadas crafted in harmonious harmony.
                </p>
              </div>

              <div className="p-4 bg-[#181613] border border-[#3b301c] rounded-xl">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#fae5b6]">
                  <Shield className="w-4 h-4 text-[#d4af37]" />
                  <span>100% Purity Certified</span>
                </div>
                <p className="text-xs text-[#a3957f] mt-1">
                  BIS 916 Hallmark guarantee with laser HUID certification for complete peace of mind.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onBookConsultation}
                className="px-6 py-3 bg-gradient-to-r from-[#edd07e] to-[#b8860b] text-black font-semibold text-xs rounded-lg hover:brightness-110 active:scale-95 transition-all shadow"
              >
                Schedule Bridal Trial at Bisalpur
              </button>

              <button
                onClick={customOrderWhatsApp}
                className="px-5 py-3 bg-[#192b20] text-[#6ee7b7] border border-[#2b533a] font-medium text-xs rounded-lg hover:bg-[#203c2c] transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#34d399]" />
                <span>Custom Order WhatsApp</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#48391d] bg-[#171513] shadow-2xl">
              <img
                src="/src/assets/images/bridal_choker_set_1791285138342.jpg"
                alt="VK Jewellers Royal Wedding Bridal Jewelry Collection"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[460px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f12] via-transparent to-black/20" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#151412]/90 backdrop-blur-md border border-[#45361b] rounded-xl">
                <div className="text-xs font-semibold text-[#ebd59a] uppercase tracking-wider">
                  The Bisalpur Bridal Promise
                </div>
                <div className="text-xs text-[#b8aa93] mt-1">
                  "Every bride deserves a masterpiece crafted with unyielding purity and timeless beauty."
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Steps Editorial Craftsmanship List (natural human editorial numbering per constitution) */}
        <div id="craftsmanship" className="pt-12 border-t border-[#2a2318]">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="text-xs font-semibold text-[#caa555] tracking-widest uppercase mb-1">
              Bespoke Jewellery Process
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#faf5ea]">
              How We Create Your Dream Jewellery
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.num}
                className="p-5 bg-[#161513] border border-[#382d1c] rounded-xl space-y-3 relative hover:border-[#8f6d2b] transition-colors"
              >
                <div className="font-editorial text-3xl font-bold text-[#e0bc58]/70">
                  {st.num}
                </div>
                <h4 className="font-editorial text-base font-bold text-[#faf3e3]">
                  {st.title}
                </h4>
                <p className="text-xs text-[#a89a83] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hallmarking Trust Card */}
        <div className="mt-12 p-6 sm:p-8 bg-[#181613] border border-[#4a3a20] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#2a2214] border border-[#d4af37]/40 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6 text-[#edd181]" />
            </div>
            <div>
              <h4 className="font-editorial text-lg font-bold text-[#fae5b6]">
                Bureau of Indian Standards (BIS) Hallmark Assurance
              </h4>
              <p className="text-xs text-[#b6a891] mt-1 max-w-2xl">
                Every gold piece at VK Jewellers carries the official 3-part BIS hallmark stamp: <strong>BIS Triangular Logo</strong>, <strong>Purity in Karat & Fineness (22K916 or 18K750)</strong>, and a unique <strong>6-digit HUID code</strong> for laser authenticity.
              </p>
            </div>
          </div>

          <div className="shrink-0 text-right">
            <div className="text-xs font-mono font-bold text-[#edd28e] bg-[#292215] px-4 py-2 rounded-lg border border-[#48391f]">
              100% HUID Traceable
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
