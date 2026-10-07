import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { VKLogo } from './VKLogo';
import { Phone, Sparkles, ShoppingBag, Menu, X, Clock, MapPin } from 'lucide-react';
import { SHOWROOM_CONTACTS } from '../data/jewelleryData';

interface NavbarProps {
  wishlistCount: number;
  onOpenWishlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  wishlistCount,
  onOpenWishlist,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPhoneDropdown, setShowPhoneDropdown] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/collections', label: 'Collections' },
    { to: '/bridal', label: 'Bridal Suites' },
    { to: '/gold-rate', label: 'Live Gold Rate' },
    { to: '/about', label: 'About & Purity' },
    { to: '/showroom', label: 'Showroom' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0e0f12]/95 backdrop-blur-md border-b border-[#2d2618]">
      {/* Top micro-announcement banner */}
      <div className="bg-gradient-to-r from-[#1f190e] via-[#2d2212] to-[#1f190e] border-b border-[#3d3019] px-4 py-1.5 text-xs text-[#dcd1ba]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#e6bf55] animate-pulse"></span>
            <span className="font-medium text-[#f3dfa7]">Bisalpur Showroom</span>
            <span className="text-[#6d6148]">·</span>
            <span>Tehsil Road, Bisalpur</span>
            <span className="hidden sm:inline text-[#6d6148]">·</span>
            <span className="hidden sm:inline text-[#c5b596]">100% BIS Hallmarked (916 / 22K & 18K)</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#e0cfad]">
            <span className="hidden md:flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#d4af37]" />
              <span>10:00 AM – 8:30 PM (Daily)</span>
            </span>
            <a
              href={`tel:${SHOWROOM_CONTACTS.primaryPhone}`}
              className="flex items-center gap-1 font-semibold text-[#f8e5b8] hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#d4af37]" />
              <span>+91 {SHOWROOM_CONTACTS.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 3-Zone Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark & Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <VKLogo size={52} />
          <div className="flex flex-col">
            <span className="font-display text-lg sm:text-2xl font-bold tracking-wider text-[#f8e6bc] group-hover:text-white transition-colors">
              VK JEWELLERS
            </span>
            <span className="text-[10px] sm:text-xs text-[#a98f53] tracking-[0.2em] uppercase font-medium">
              Bisalpur · Estd. Trust
            </span>
          </div>
        </Link>

        {/* Zone 2: Navigation Links (single-line, subtle active underline per constitution) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#dcd2be]">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors py-1 relative ${
                  isActive
                    ? 'text-[#f8e6bc] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#d4af37]'
                    : 'text-[#c6bba3] hover:text-[#f8e6bc]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          {/* Phone Dropdown for all 4 contacts */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => setShowPhoneDropdown(!showPhoneDropdown)}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#e8d2a0] bg-[#1a1815] border border-[#3f321d] rounded-lg hover:border-[#8f6d2b] transition-all"
              aria-expanded={showPhoneDropdown}
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Contact (4 Lines)</span>
            </button>

            {showPhoneDropdown && (
              <div
                className="absolute right-0 mt-2 w-64 p-3 bg-[#171615] border border-[#4a391e] rounded-xl shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150"
                onMouseLeave={() => setShowPhoneDropdown(false)}
              >
                <div className="text-[11px] font-semibold text-[#cbb689] uppercase tracking-wider mb-2 px-2">
                  Showroom Phone Lines
                </div>
                <div className="space-y-1">
                  {SHOWROOM_CONTACTS.phones.map((phone, idx) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium text-white hover:bg-[#28241d] hover:text-[#fae5b6] transition-colors"
                    >
                      <span className="text-[#a59982]">Line {idx + 1}</span>
                      <span className="font-mono text-sm tracking-wide text-[#f2e1b8]">{phone}</span>
                    </a>
                  ))}
                </div>
                <div className="mt-2 pt-2 border-t border-[#312a1f] px-2 text-[11px] text-[#8c826e] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#d4af37]" />
                  <span>Tehsil Road, Bisalpur</span>
                </div>
              </div>
            )}
          </div>

          {/* Inquiry / Saved Items */}
          <button
            onClick={onOpenWishlist}
            className="relative p-2.5 text-[#f1dec0] bg-[#1a1713] border border-[#3b2f1c] rounded-lg hover:border-[#8e6e2f] transition-colors"
            title="Shortlisted Items & WhatsApp Inquiry"
            aria-label="View shortlisted items"
          >
            <ShoppingBag className="w-4 h-4 text-[#e7c772]" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#b91c1c] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Primary Action: Book Showroom Visit (links to /showroom) */}
          <Link
            to="/showroom"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-black bg-gradient-to-r from-[#edd387] via-[#d4af37] to-[#b38520] hover:brightness-110 active:scale-95 transition-all rounded-lg shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Book Visit</span>
          </Link>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#e2cb9f] hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121110] border-b border-[#352816] px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-[#d9ceb7]">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `py-2 border-b border-[#231e16] flex items-center justify-between ${
                    isActive ? 'text-[#fae5b6] font-semibold' : 'text-[#c2b59b]'
                  }`
                }
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#8f7e61]">→</span>
              </NavLink>
            ))}
          </nav>

          <div className="pt-2">
            <div className="text-xs font-semibold text-[#caa858] uppercase mb-2">Showroom Direct Lines:</div>
            <div className="grid grid-cols-2 gap-2">
              {SHOWROOM_CONTACTS.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="flex items-center gap-1.5 p-2 bg-[#1b1916] border border-[#3b2e1a] rounded text-xs font-mono text-white hover:border-[#a07c30]"
                >
                  <Phone className="w-3 h-3 text-[#d4af37]" />
                  <span>{phone}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/showroom"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-2.5 text-center text-xs font-semibold text-black bg-[#d4af37] rounded-lg"
            >
              Book Showroom Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
