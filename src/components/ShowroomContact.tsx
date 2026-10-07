import React, { useState } from 'react';
import { SHOWROOM_CONTACTS } from '../data/jewelleryData';
import { VKLogo } from './VKLogo';
import { MapPin, Phone, Clock, MessageSquare, Calendar, CheckCircle2, Navigation, Send } from 'lucide-react';

interface ShowroomContactProps {
  preselectedProduct?: string;
  isBookingOpen?: boolean;
  onCloseBooking?: () => void;
}

export const ShowroomContact: React.FC<ShowroomContactProps> = ({
  preselectedProduct = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('11:00 AM - 01:00 PM');
  const [occasion, setOccasion] = useState(
    preselectedProduct ? 'Product Trial' : 'Wedding / Bridal'
  );
  const [note, setNote] = useState(preselectedProduct ? `Inquiring about: ${preselectedProduct}` : '');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const ref = `VK-VISIT-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setBookingConfirmed(true);
  };

  const sendConfirmationToWhatsApp = () => {
    const text = `Namaste VK Jewellers (Bisalpur), I have scheduled a showroom appointment:\n\n*Reference:* ${bookingRef}\n*Name:* ${name}\n*Phone:* ${phone}\n*Date:* ${date || 'Soon'}\n*Time Slot:* ${timeSlot}\n*Occasion:* ${occasion}\n*Note:* ${note || 'Looking forward to visiting your Tehsil Road showroom.'}`;
    window.open(`https://wa.me/91${SHOWROOM_CONTACTS.whatsappPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="showroom" className="py-20 bg-[#0c0d0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold text-[#caa555] tracking-widest uppercase mb-1">
            Showroom Location & Contact
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#faf5ea]">
            Visit VK Jewellers in Bisalpur
          </h2>
          <p className="text-sm text-[#b2a58f] mt-2">
            Experience our timeless designs in person on Tehsil Road, Bisalpur. Our dedicated jewellery consultants are delighted to guide your family for every milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Showroom Details & Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address & Hours Card */}
            <div className="p-6 bg-[#161513] border border-[#42331b] rounded-2xl space-y-5">
              <div className="flex items-center gap-3">
                <VKLogo size={48} />
                <div>
                  <h3 className="font-display text-base font-bold text-[#f7e6c0]">
                    VK JEWELLERS
                  </h3>
                  <p className="text-xs text-[#a99980]">
                    Where Tradition Meets Timeless Elegance
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-2 border-t border-[#2d2518] text-xs">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#221c13] rounded-lg border border-[#3b301c] shrink-0">
                    <MapPin className="w-4 h-4 text-[#d4af37]" />
                  </div>
                  <div>
                    <div className="text-[#a1927a] font-medium uppercase tracking-wider text-[11px]">
                      Showroom Address
                    </div>
                    <div className="text-sm font-semibold text-[#faf3e3] mt-0.5">
                      Tehsil Road, Bisalpur
                    </div>
                    <div className="text-[#a59881] mt-0.5">
                      District Pilibhit, Uttar Pradesh, India
                    </div>
                    <a
                      href={SHOWROOM_CONTACTS.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#caa555] hover:text-[#f3dfa7] font-medium text-xs mt-2 underline"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>Get Directions on Google Maps</span>
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#221c13] rounded-lg border border-[#3b301c] shrink-0">
                    <Clock className="w-4 h-4 text-[#d4af37]" />
                  </div>
                  <div>
                    <div className="text-[#a1927a] font-medium uppercase tracking-wider text-[11px]">
                      Showroom Timings
                    </div>
                    <div className="text-sm font-semibold text-[#faf3e3] mt-0.5">
                      10:00 AM – 8:30 PM
                    </div>
                    <div className="text-[#a59881] mt-0.5">
                      Open All 7 Days (Monday to Sunday)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* All 4 Phone Numbers Grid */}
            <div className="p-6 bg-[#161513] border border-[#42331b] rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-semibold text-[#caa555] tracking-wider uppercase flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Direct Calling Lines</span>
                </div>
                <span className="text-[11px] text-[#8e816a]">Tap to Call</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SHOWROOM_CONTACTS.phones.map((phone, idx) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="p-3 bg-[#1e1c18] hover:bg-[#28241d] border border-[#3a2e1a] hover:border-[#8f6e2b] rounded-xl transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-[10px] text-[#938671]">Line 0{idx + 1}</div>
                      <div className="font-mono text-sm font-bold text-white group-hover:text-[#fae5b6]">
                        {phone}
                      </div>
                    </div>
                    <Phone className="w-3.5 h-3.5 text-[#d4af37] opacity-60 group-hover:opacity-100" />
                  </a>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-[#2e2619] flex items-center justify-between text-xs text-[#a3957f]">
                <span>WhatsApp Customer Care:</span>
                <a
                  href={`https://wa.me/91${SHOWROOM_CONTACTS.whatsappPhone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#34d399] font-medium hover:underline flex items-center gap-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Services provided */}
            <div className="p-5 bg-[#141311] border border-[#302616] rounded-xl">
              <div className="text-[11px] font-semibold text-[#caa555] uppercase tracking-wider mb-2">
                Available In-Showroom:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#b8ab94]">
                {SHOWROOM_CONTACTS.services.map((srv, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#d4af37]" />
                    <span>{srv}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Appointment Booking & Consultation Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#161513] border border-[#45361e] rounded-2xl p-6 sm:p-8 shadow-2xl">
            
            {!bookingConfirmed ? (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#caa555] uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>VIP Showroom Visit Booking</span>
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-[#faf4e6] mt-1">
                    Reserve a Private Jewellery Trial
                  </h3>
                  <p className="text-xs text-[#a99c86] mt-1">
                    Book an exclusive preview session with our master consultants on Tehsil Road, Bisalpur.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="booking-name" className="text-xs font-medium text-[#cbbfa9] block mb-1">
                      Full Name *
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar / Priya Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#1f1d19] border border-[#3a301e] rounded-lg text-xs text-white placeholder-[#786c57] focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="booking-phone" className="text-xs font-medium text-[#cbbfa9] block mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#1f1d19] border border-[#3a301e] rounded-lg text-xs text-white placeholder-[#786c57] focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Date */}
                  <div>
                    <label htmlFor="booking-date" className="text-xs font-medium text-[#cbbfa9] block mb-1">
                      Preferred Date
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#1f1d19] border border-[#3a301e] rounded-lg text-xs text-white focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  {/* Time slot */}
                  <div>
                    <label htmlFor="booking-time" className="text-xs font-medium text-[#cbbfa9] block mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      id="booking-time"
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#1f1d19] border border-[#3a301e] rounded-lg text-xs text-white focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="11:00 AM - 01:00 PM">Morning (11:00 AM – 01:00 PM)</option>
                      <option value="01:00 PM - 03:30 PM">Afternoon (01:00 PM – 03:30 PM)</option>
                      <option value="03:30 PM - 06:00 PM">Evening (03:30 PM – 06:00 PM)</option>
                      <option value="06:00 PM - 08:30 PM">Night (06:00 PM – 08:30 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Occasion */}
                <div>
                  <label htmlFor="booking-occasion" className="text-xs font-medium text-[#cbbfa9] block mb-1">
                    Occasion / Requirement
                  </label>
                  <select
                    id="booking-occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#1f1d19] border border-[#3a301e] rounded-lg text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="Wedding / Bridal">Wedding / Bridal Trousseau (Dulhan Sets)</option>
                    <option value="Engagement / Anniversary">Engagement / Solitaire / Anniversary</option>
                    <option value="Festival / Special Occasion">Festival (Dhanteras / Diwali / Akshay Tritiya)</option>
                    <option value="Everyday Gold / Gift">Everyday Wear Gold / Gifts / Mangalsutra</option>
                    <option value="Old Gold Exchange">Old Gold Purity Testing & Exchange</option>
                    <option value="Custom Bespoke Order">Custom Karigari / Special Design</option>
                  </select>
                </div>

                {/* Additional notes */}
                <div>
                  <label htmlFor="booking-notes" className="text-xs font-medium text-[#cbbfa9] block mb-1">
                    Special Requirements or Gold Gram Preferences (Optional)
                  </label>
                  <textarea
                    id="booking-notes"
                    rows={3}
                    placeholder="Mention specific items, approximate budget or design references you wish to see..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#1f1d19] border border-[#3a301e] rounded-lg text-xs text-white placeholder-[#786c57] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#ebd07c] via-[#d4af37] to-[#aa7d1e] text-black font-semibold text-xs rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Showroom Appointment</span>
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 bg-[#1f3024] border border-[#34d399] rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#34d399]" />
                </div>

                <div>
                  <div className="text-xs font-semibold text-[#caa555] uppercase tracking-wider">
                    Appointment Confirmed!
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-[#faf5ea] mt-1">
                    We look forward to welcoming you, {name}
                  </h3>
                  <div className="mt-2 text-xs font-mono text-[#ecd69e] bg-[#221f19] py-1.5 px-3 rounded inline-block border border-[#3f321d]">
                    Booking Ref: {bookingRef}
                  </div>
                  <p className="text-xs text-[#b8ab94] mt-3 max-w-md mx-auto">
                    Your appointment has been registered at VK Jewellers, Tehsil Road, Bisalpur for <strong>{date || 'upcoming days'}</strong> ({timeSlot}).
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={sendConfirmationToWhatsApp}
                    className="w-full sm:w-auto px-5 py-3 bg-[#1e462d] text-[#6ee7b7] border border-[#36794e] rounded-xl text-xs font-semibold hover:bg-[#255738] transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-[#34d399]" />
                    <span>Send Details to VK Jewellers on WhatsApp</span>
                  </button>

                  <button
                    onClick={() => {
                      setBookingConfirmed(false);
                      setName('');
                      setPhone('');
                      setNote('');
                    }}
                    className="w-full sm:w-auto px-5 py-3 bg-[#1c1a17] text-[#c0b39c] border border-[#3c311f] rounded-xl text-xs hover:text-white transition-all"
                  >
                    Book Another Visit
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
