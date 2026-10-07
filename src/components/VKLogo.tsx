import React from 'react';

interface VKLogoProps {
  className?: string;
  size?: number;
  withText?: boolean;
}

export const VKLogo: React.FC<VKLogoProps> = ({
  className = '',
  size = 64,
  withText = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 group/logo relative ${className}`}>
      {/* Subtle background ambient golden aura */}
      <div className="absolute inset-0 bg-[#d4af37]/15 rounded-full blur-md opacity-40 group-hover/logo:opacity-80 transition-opacity pointer-events-none" />

      <svg
        width={size}
        height={size}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-xl select-none relative z-10 transition-transform duration-300 ease-out group-hover/logo:scale-105"
        aria-label="VK Jewellers Logo"
      >
        <defs>
          {/* Metallic Gold Gradients */}
          <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#efd07b" />
            <stop offset="25%" stopColor="#caa042" />
            <stop offset="50%" stopColor="#fff2be" />
            <stop offset="75%" stopColor="#b8860b" />
            <stop offset="100%" stopColor="#e5be56" />
          </linearGradient>

          <linearGradient id="goldBevel" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffd875" />
            <stop offset="40%" stopColor="#966a1a" />
            <stop offset="65%" stopColor="#f5df93" />
            <stop offset="100%" stopColor="#7a5410" />
          </linearGradient>

          <linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b8860b" />
            <stop offset="30%" stopColor="#dfa732" />
            <stop offset="50%" stopColor="#f3ca65" />
            <stop offset="70%" stopColor="#dfa732" />
            <stop offset="100%" stopColor="#b8860b" />
          </linearGradient>

          <radialGradient id="darkCenter" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#242120" />
            <stop offset="70%" stopColor="#141312" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </radialGradient>

          <linearGradient id="rhombusGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#fcf6e8" />
            <stop offset="100%" stopColor="#e4c98c" />
          </linearGradient>

          {/* Diamond gem facet gradient */}
          <linearGradient id="gemGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#bae6fd" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
        </defs>

        {/* Outer Circular Ring Shadow */}
        <circle cx="250" cy="250" r="236" fill="#000000" opacity="0.35" />

        {/* Outer Gold Border Band */}
        <circle cx="250" cy="250" r="230" fill="url(#goldRim)" stroke="#875e11" strokeWidth="3" />

        {/* Gold Inner Bevel Rim */}
        <circle cx="250" cy="250" r="214" fill="url(#goldBevel)" />

        {/* Inner Dark Backdrop Disc */}
        <circle cx="250" cy="250" r="202" fill="url(#darkCenter)" stroke="#5c4314" strokeWidth="2" />

        {/* Decorative subtle gold inner hairline accent */}
        <circle cx="250" cy="250" r="198" fill="none" stroke="#d4af37" strokeWidth="1" opacity="0.4" />

        {/* TOP DIAMOND / RHOMBUS BADGE */}
        <g transform="translate(250, 150)">
          {/* Rhombus gold frame */}
          <polygon
            points="0,-68 62,0 0,68 -62,0"
            fill="url(#goldRim)"
            stroke="#aa771c"
            strokeWidth="3"
          />
          {/* Rhombus inner fill */}
          <polygon
            points="0,-58 52,0 0,58 -52,0"
            fill="url(#rhombusGlow)"
          />

          {/* Diamond gem at top with twinkle glint */}
          <g transform="translate(0, -32) scale(0.95)">
            <polygon points="0,-16 14,-6 8,14 -8,14 -14,-6" fill="url(#gemGradient)" stroke="#ffffff" strokeWidth="0.8" />
            <polygon points="0,-16 0,14 8,14" fill="#0284c7" opacity="0.4" />
            <polygon points="-8,-6 0,-16 8,-6 0,4" fill="#e0f2fe" opacity="0.8" />
            <circle cx="2" cy="-8" r="2" fill="#ffffff" />

            {/* Sparkle star atop the diamond */}
            <path
              d="M 0 -22 L 2 -17 L 7 -17 L 3 -13 L 5 -8 L 0 -11 L -5 -8 L -3 -13 L -7 -17 L -2 -17 Z"
              fill="#ffffff"
              opacity="0.9"
            />
          </g>

          {/* Bold Red "VK" letters inside the diamond cartouche */}
          <text
            x="0"
            y="22"
            textAnchor="middle"
            fill="#b91c1c"
            fontFamily="'Playfair Display', Georgia, serif"
            fontWeight="900"
            fontSize="46"
            letterSpacing="-1"
          >
            VK
          </text>
        </g>

        {/* GOLD RIBBON: "JEWELLERS" */}
        <g transform="translate(250, 240)">
          <rect
            x="-106"
            y="-18"
            width="212"
            height="36"
            rx="10"
            fill="url(#goldRibbon)"
            stroke="#875e11"
            strokeWidth="1.5"
          />
          <text
            x="0"
            y="7"
            textAnchor="middle"
            fill="#ffffff"
            fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
            fontWeight="800"
            fontSize="21"
            letterSpacing="2.5"
          >
            JEWELLERS
          </text>
        </g>

        {/* MAIN CENTER PIECE: "V.K." */}
        <text
          x="250"
          y="346"
          textAnchor="middle"
          fill="#ffffff"
          fontFamily="'Playfair Display', Times New Roman, serif"
          fontWeight="800"
          fontSize="106"
          letterSpacing="2"
        >
          V.K.
        </text>

        {/* LOWER SUBTITLE: "JEWELLERS" */}
        <text
          x="250"
          y="396"
          textAnchor="middle"
          fill="#ffffff"
          fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
          fontWeight="800"
          fontSize="36"
          letterSpacing="5"
        >
          JEWELLERS
        </text>

        {/* Bottom golden highlight shimmer reflection */}
        <path
          d="M 180 435 Q 250 452 320 435"
          stroke="#fde047"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>

      {withText && (
        <div className="flex flex-col">
          <span className="font-display text-xl sm:text-2xl tracking-wider font-bold text-[#f7dfa5] leading-none group-hover/logo:text-white transition-colors">
            VK JEWELLERS
          </span>
          <span className="text-[10px] sm:text-xs text-[#c9a758] tracking-[0.25em] uppercase font-medium mt-1">
            Bisalpur · Tehsil Road
          </span>
        </div>
      )}
    </div>
  );
};
