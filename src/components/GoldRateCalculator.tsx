import React, { useState } from 'react';
import { GOLD_RATES, SHOWROOM_CONTACTS } from '../data/jewelleryData';
import { Calculator, TrendingUp, Info, RefreshCw, MessageSquare } from 'lucide-react';

export const GoldRateCalculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buy' | 'exchange'>('buy');
  const [weight, setWeight] = useState<number>(15);
  const [purity, setPurity] = useState<'22k' | '18k' | '24k'>('22k');
  const [makingRate, setMakingRate] = useState<number>(10); // percentage

  // Rate lookup
  const ratePerGram =
    purity === '24k'
      ? GOLD_RATES.gold24k
      : purity === '22k'
      ? GOLD_RATES.gold22k
      : GOLD_RATES.gold18k;

  const rawGoldValue = weight * ratePerGram;
  const makingCharges = (rawGoldValue * makingRate) / 100;
  const subtotal = rawGoldValue + (activeTab === 'buy' ? makingCharges : 0);
  const gst = activeTab === 'buy' ? (subtotal * 0.03) : 0;
  const estimatedTotal = subtotal + gst;

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleWhatsAppQuote = () => {
    const text = `Namaste VK Jewellers (Bisalpur), I used your Gold Calculator for ${weight}g (${purity.toUpperCase()} Gold). Estimated calculation is approx ${formatINR(
      estimatedTotal
    )}. Please let me know current availability at your Tehsil Road showroom.`;
    window.open(`https://wa.me/91${SHOWROOM_CONTACTS.whatsappPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="gold-rate" className="py-16 bg-[#111215] border-b border-[#252119]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold text-[#caa555] tracking-widest uppercase mb-1">
            Bisalpur Market Transparency
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#faf5ea]">
            Live Gold Rates & Value Calculator
          </h2>
          <p className="text-sm text-[#b5a993] mt-2">
            VK Jewellers believes in 100% fair, transparent pricing. Check benchmark rates and calculate your jewellery investment before visiting our showroom on Tehsil Road.
          </p>
        </div>

        {/* Live Rates Ticker Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {/* 22K (916) */}
          <div className="bg-[#181715] border border-[#48391f] rounded-xl p-4 text-center relative overflow-hidden group hover:border-[#d4af37] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all hover:-translate-y-1">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e7c870] to-[#b8860b]" />
            <div className="text-xs text-[#a3947c] uppercase font-medium flex items-center justify-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
              <span>Gold 22K (916)</span>
            </div>
            <div className="font-mono text-2xl font-bold text-[#fceec7] mt-1 tabular-nums group-hover:text-white transition-colors">
              {formatINR(GOLD_RATES.gold22k)}
              <span className="text-xs font-sans text-[#a59981] font-normal"> / gram</span>
            </div>
            <div className="text-[11px] text-[#caa858] mt-1 font-medium flex items-center justify-center gap-1">
              <TrendingUp className="w-3 h-3 text-[#d4af37]" />
              <span>Standard Ornaments</span>
            </div>
          </div>

          {/* 24K */}
          <div className="bg-[#181715] border border-[#382f1f] rounded-xl p-4 text-center group hover:border-[#d4af37] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all hover:-translate-y-1">
            <div className="text-xs text-[#a3947c] uppercase font-medium">Gold 24K (999 Pure)</div>
            <div className="font-mono text-2xl font-bold text-[#fceec7] mt-1 tabular-nums group-hover:text-white transition-colors">
              {formatINR(GOLD_RATES.gold24k)}
              <span className="text-xs font-sans text-[#a59981] font-normal"> / gram</span>
            </div>
            <div className="text-[11px] text-[#9c8e77] mt-1">Bullion & Gold Coins</div>
          </div>

          {/* 18K */}
          <div className="bg-[#181715] border border-[#382f1f] rounded-xl p-4 text-center group hover:border-[#d4af37] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all hover:-translate-y-1">
            <div className="text-xs text-[#a3947c] uppercase font-medium">Gold 18K (750)</div>
            <div className="font-mono text-2xl font-bold text-[#fceec7] mt-1 tabular-nums group-hover:text-white transition-colors">
              {formatINR(GOLD_RATES.gold18k)}
              <span className="text-xs font-sans text-[#a59981] font-normal"> / gram</span>
            </div>
            <div className="text-[11px] text-[#9c8e77] mt-1">Diamond & Solitaires</div>
          </div>

          {/* Silver */}
          <div className="bg-[#181715] border border-[#382f1f] rounded-xl p-4 text-center group hover:border-[#94a3b8] transition-all hover:-translate-y-1">
            <div className="text-xs text-[#a3947c] uppercase font-medium">Fine Silver (999)</div>
            <div className="font-mono text-2xl font-bold text-[#e2e8f0] mt-1 tabular-nums group-hover:text-white transition-colors">
              {formatINR(GOLD_RATES.silver10g)}
              <span className="text-xs font-sans text-[#94a3b8] font-normal"> / 10g</span>
            </div>
            <div className="text-[11px] text-[#94a3b8] mt-1">₹{GOLD_RATES.silver1kg.toLocaleString('en-IN')} / kg</div>
          </div>
        </div>

        {/* Interactive Calculator Module */}
        <div className="bg-[#161513] border border-[#3e321e] rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-xl">
          
          {/* Segmented Tab: New Jewellery vs Old Gold Exchange */}
          <div className="flex items-center justify-between pb-6 border-b border-[#2d2518] mb-6">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#d4af37]" />
              <span className="font-display text-lg font-bold text-[#fbf5e7]">
                Instant Estimate Calculator
              </span>
            </div>

            {/* Interactive Filter / Tab */}
            <div className="flex items-center bg-[#23201a] p-1 rounded-lg border border-[#3f341d]">
              <button
                onClick={() => setActiveTab('buy')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeTab === 'buy'
                    ? 'bg-[#d4af37] text-black font-semibold shadow-sm'
                    : 'text-[#c0b399] hover:text-white'
                }`}
              >
                New Jewellery Purchase
              </button>
              <button
                onClick={() => setActiveTab('exchange')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeTab === 'exchange'
                    ? 'bg-[#d4af37] text-black font-semibold shadow-sm'
                    : 'text-[#c0b399] hover:text-white'
                }`}
              >
                Old Gold Exchange
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Input Controls (7 cols) */}
            <div className="md:col-span-7 space-y-6">
              
              {/* Weight in grams */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="gold-weight-input" className="text-xs font-medium text-[#cdc0a9]">
                    Weight in Grams (Net Gold)
                  </label>
                  <span className="font-mono text-base font-bold text-[#f7e4b9]">
                    {weight} grams
                  </span>
                </div>
                <input
                  id="gold-weight-input"
                  type="range"
                  min="1"
                  max="120"
                  step="0.5"
                  value={weight}
                  onChange={(e) => setWeight(parseFloat(e.target.value) || 1)}
                  className="w-full accent-[#d4af37] cursor-pointer bg-[#29241b] h-2 rounded-lg"
                />
                
                {/* Quick weight selector presets */}
                <div className="flex items-center gap-2 mt-2">
                  {[5, 10, 20, 35, 50, 75].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setWeight(preset)}
                      className={`px-2.5 py-1 text-xs rounded border transition-colors ${
                        weight === preset
                          ? 'border-[#d4af37] text-[#f7e4b9] bg-[#2d2517]'
                          : 'border-[#382f1f] text-[#9f917b] hover:border-[#635334]'
                      }`}
                    >
                      {preset}g
                    </button>
                  ))}
                </div>
              </div>

              {/* Purity selector */}
              <div>
                <label className="text-xs font-medium text-[#cdc0a9] block mb-2">
                  Gold Karat Purity
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setPurity('22k')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      purity === '22k'
                        ? 'border-[#d4af37] bg-[#282216]'
                        : 'border-[#332b1d] bg-[#1a1815] hover:border-[#52442c]'
                    }`}
                  >
                    <div className="text-xs font-bold text-[#fae9c1]">22K (916)</div>
                    <div className="text-[11px] text-[#9f9079] mt-0.5">Hallmarked Standard</div>
                  </button>

                  <button
                    onClick={() => setPurity('18k')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      purity === '18k'
                        ? 'border-[#d4af37] bg-[#282216]'
                        : 'border-[#332b1d] bg-[#1a1815] hover:border-[#52442c]'
                    }`}
                  >
                    <div className="text-xs font-bold text-[#fae9c1]">18K (750)</div>
                    <div className="text-[11px] text-[#9f9079] mt-0.5">Diamond & Rings</div>
                  </button>

                  <button
                    onClick={() => setPurity('24k')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      purity === '24k'
                        ? 'border-[#d4af37] bg-[#282216]'
                        : 'border-[#332b1d] bg-[#1a1815] hover:border-[#52442c]'
                    }`}
                  >
                    <div className="text-xs font-bold text-[#fae9c1]">24K (999)</div>
                    <div className="text-[11px] text-[#9f9079] mt-0.5">Pure Gold Bar</div>
                  </button>
                </div>
              </div>

              {/* Making charges slider (only for Buy) */}
              {activeTab === 'buy' && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="making-rate-input" className="text-xs font-medium text-[#cdc0a9] flex items-center gap-1.5">
                      <span>Making Charges (Karigari)</span>
                      <span title="Varies based on design complexity (filigree, antique, bridal)" className="inline-flex">
                        <Info className="w-3.5 h-3.5 text-[#8c7f68]" />
                      </span>
                    </label>
                    <span className="font-mono text-sm text-[#f0dfb7] font-semibold">
                      {makingRate}% ({formatINR(makingCharges)})
                    </span>
                  </div>
                  <input
                    id="making-rate-input"
                    type="range"
                    min="6"
                    max="18"
                    step="1"
                    value={makingRate}
                    onChange={(e) => setMakingRate(parseInt(e.target.value) || 10)}
                    className="w-full accent-[#d4af37] cursor-pointer bg-[#29241b] h-2 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-[#857863] mt-1">
                    <span>6% (Simple chains)</span>
                    <span>10% (Ornaments)</span>
                    <span>18% (Intricate Bridal/Antique)</span>
                  </div>
                </div>
              )}

              {activeTab === 'exchange' && (
                <div className="p-3 bg-[#1d1b17] border border-[#3a301e] rounded-xl text-xs text-[#c6b9a2] space-y-1">
                  <div className="font-semibold text-[#eed596] flex items-center gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>VK Jewellers Old Gold Guarantee:</span>
                  </div>
                  <p>
                    We provide transparent laser purity testing right before you at our Tehsil Road showroom with zero hidden melt deduction on hallmarked gold.
                  </p>
                </div>
              )}
            </div>

            {/* Calculated Breakdown Card (5 cols) */}
            <div className="md:col-span-5 bg-[#1f1d19] border border-[#483a21] rounded-xl p-5 space-y-4">
              <div className="text-xs font-semibold text-[#caa758] tracking-wider uppercase border-b border-[#352c1a] pb-2">
                Estimated Price Breakdown
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between text-[#c4b69d]">
                  <span>Gold Value ({weight}g @ {formatINR(ratePerGram)}):</span>
                  <span className="font-mono text-white tabular-nums">{formatINR(rawGoldValue)}</span>
                </div>

                {activeTab === 'buy' && (
                  <>
                    <div className="flex justify-between text-[#c4b69d]">
                      <span>Making Charges ({makingRate}%):</span>
                      <span className="font-mono text-white tabular-nums">{formatINR(makingCharges)}</span>
                    </div>

                    <div className="flex justify-between text-[#c4b69d]">
                      <span>GST (3% as per govt norms):</span>
                      <span className="font-mono text-white tabular-nums">{formatINR(gst)}</span>
                    </div>
                  </>
                )}

                {activeTab === 'exchange' && (
                  <div className="flex justify-between text-[#34d399]">
                    <span>Exchange Net Payout Estimate:</span>
                    <span className="font-mono font-semibold tabular-nums">{formatINR(rawGoldValue)}</span>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-[#3b311e]">
                <div className="text-xs text-[#a0927b]">
                  {activeTab === 'buy' ? 'Total Estimated Price' : 'Estimated Exchange Value'}
                </div>
                <div className="font-mono text-2xl sm:text-3xl font-bold text-[#fae5b6] mt-1 tabular-nums">
                  {formatINR(estimatedTotal)}
                </div>
                <div className="text-[10px] text-[#7e735f] mt-1">
                  *Subject to live market updates and exact piece craftsmanship at showroom.
                </div>
              </div>

              <button
                onClick={handleWhatsAppQuote}
                className="w-full py-2.5 bg-[#253f2c] hover:bg-[#2c4e36] text-[#6ee7b7] border border-[#3b6647] rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#34d399]" />
                <span>WhatsApp Quote to VK Jewellers</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
