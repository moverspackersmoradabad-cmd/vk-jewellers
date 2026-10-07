import React from 'react';
import { ShowroomContact } from '../components/ShowroomContact';
import { VKLogo } from '../components/VKLogo';
import { SHOWROOM_CONTACTS } from '../data/jewelleryData';
import { MapPin, Phone, Clock, MessageSquare, Navigation, Sparkles } from 'lucide-react';

interface ShowroomPageProps {
  preselectedProduct?: string;
}

export const ShowroomPage: React.FC<ShowroomPageProps> = ({
  preselectedProduct = '',
}) => {
  return (
    <div className="py-12 bg-[#0c0d0e] min-h-screen space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-semibold text-[#caa555] tracking-widest uppercase mb-1 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#e1ba5b]" />
            <span>Bisalpur Flagship Destination</span>
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl font-bold text-[#faf4e6]">
            Showroom & Contact
          </h1>
          <p className="text-xs sm:text-sm text-[#b5a790] mt-2 leading-relaxed">
            We look forward to welcoming you and your family to our showroom on Tehsil Road, Bisalpur. Experience the warmth of our hospitality and the majesty of our hallmarked gold and diamond collections.
          </p>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 bg-[#161513] border border-[#3b301c] rounded-xl flex items-center gap-3">
            <div className="p-2.5 bg-[#252014] rounded-lg border border-[#d4af37]/30 text-[#d4af37]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] text-[#9f9078] uppercase font-semibold">Location</div>
              <div className="text-xs font-bold text-white mt-0.5">Tehsil Road, Bisalpur</div>
              <div className="text-[11px] text-[#8e816c]">Dist. Pilibhit, Uttar Pradesh</div>
            </div>
          </div>

          <div className="p-4 bg-[#161513] border border-[#3b301c] rounded-xl flex items-center gap-3">
            <div className="p-2.5 bg-[#252014] rounded-lg border border-[#d4af37]/30 text-[#d4af37]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] text-[#9f9078] uppercase font-semibold">Showroom Hours</div>
              <div className="text-xs font-bold text-white mt-0.5">10:00 AM – 8:30 PM</div>
              <div className="text-[11px] text-[#34d399]">Open All 7 Days (Mon - Sun)</div>
            </div>
          </div>

          <div className="p-4 bg-[#161513] border border-[#3b301c] rounded-xl flex items-center gap-3">
            <div className="p-2.5 bg-[#252014] rounded-lg border border-[#d4af37]/30 text-[#d4af37]">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] text-[#9f9078] uppercase font-semibold">Direct Help Desk</div>
              <div className="text-xs font-bold text-white mt-0.5 font-mono">+91 9410215507</div>
              <div className="text-[11px] text-[#caa555]">4 Calling Lines Available</div>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Map & Directions */}
        <div className="p-6 bg-[#161513] border border-[#3e321e] rounded-2xl mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="font-editorial text-lg font-bold text-[#faf3e3]">
                Tehsil Road, Bisalpur Location Map
              </h3>
              <p className="text-xs text-[#a99c85]">
                Easily accessible from Tehsil office, main market square, and Bisalpur railway junction.
              </p>
            </div>

            <a
              href={SHOWROOM_CONTACTS.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-[#d4af37] text-black font-semibold text-xs rounded-lg hover:brightness-110 transition-all flex items-center gap-1.5 shrink-0"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Open in Google Maps App</span>
            </a>
          </div>

          {/* Interactive Google Maps Iframe */}
          <div className="rounded-xl overflow-hidden border border-[#3c311f] aspect-[16/9] sm:aspect-[21/8] w-full bg-[#1e1c18] relative">
            <iframe
              title="VK Jewellers Bisalpur Map"
              src="https://maps.google.com/maps?q=Tehsil+Road+Bisalpur+Uttar+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter invert contrast-125 hue-rotate-180 opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Detailed Showroom Contact & Booking Form Component */}
        <ShowroomContact preselectedProduct={preselectedProduct} />

      </div>
    </div>
  );
};
