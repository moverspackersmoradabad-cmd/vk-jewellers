export interface JewelleryItem {
  id: string;
  name: string;
  hindiName?: string;
  category: 'bridal' | 'necklaces' | 'bangles' | 'rings' | 'earrings' | 'chains';
  purity: '22K (916 BIS)' | '18K Diamond' | '24K Pure Gold' | 'Antique Gold 22K';
  estimatedWeight: string;
  image: string;
  description: string;
  features: string[];
  inStock: boolean;
  code: string;
  approxPriceRange: string;
}

export const GOLD_RATES = {
  lastUpdated: 'Today, Live Market Indicator',
  gold24k: 8850, // per gram (approx current India market 2026)
  gold22k: 8120, // 916 Hallmarked per gram
  gold18k: 6640, // 18K Hallmarked per gram
  silver1kg: 98500, // Silver per kg
  silver10g: 985,
};

export const JEWELLERY_PRODUCTS: JewelleryItem[] = [
  {
    id: 'vk-br-01',
    name: 'Rajwada Imperial Bridal Choker Set',
    hindiName: 'राजवाड़ा ब्राइडल चोकर सेट',
    category: 'bridal',
    purity: '22K (916 BIS)',
    estimatedWeight: '68.50 grams',
    image: '/src/assets/images/bridal_choker_set_1791285138342.jpg',
    description: 'An opulent royal bridal masterpiece crafted in 22K gold featuring antique filigree work, uncut polki stones, deep Colombian emerald drops, and matching royal chandelier jhumkas.',
    features: ['100% BIS Hallmarked (HUID)', 'Comes with Matching Jhumkas & Maang Tikka', 'Custom sizing available for brides', 'Handcrafted by Master Karigars'],
    inStock: true,
    code: 'VK-BR-901',
    approxPriceRange: '₹5,75,000 – ₹6,10,000'
  },
  {
    id: 'vk-nk-02',
    name: 'Aishwarya Filigree Gold Necklace',
    hindiName: 'ऐश्वर्या 22K फिलीग्री स्वर्ण हार',
    category: 'necklaces',
    purity: '22K (916 BIS)',
    estimatedWeight: '34.20 grams',
    image: '/src/assets/images/gold_necklace_collection_1791285126320.jpg',
    description: 'Intricate traditional floral filigree gold necklace with delicate dangling beads. Designed for festive celebrations, weddings, and family milestones.',
    features: ['BIS 916 Hallmark certified', 'Smooth skin-comfort inner finish', 'Adjustable dori/gold chain loop', 'Complimentary velvet presentation box'],
    inStock: true,
    code: 'VK-NK-412',
    approxPriceRange: '₹2,90,000 – ₹3,15,000'
  },
  {
    id: 'vk-bg-03',
    name: 'Mayur Royal Handcrafted Gold Kadas',
    hindiName: 'मयूर रॉयल हस्तनिर्मित कड़ा जोड़ी',
    category: 'bangles',
    purity: '22K (916 BIS)',
    estimatedWeight: '46.80 grams (Pair)',
    image: '/src/assets/images/gold_bangles_kadas_1791285149226.jpg',
    description: 'Exquisite pair of traditional royal kadas embossed with majestic peacock and floral motifs. Fitted with a secure screw hinge for lifetime durability and comfort.',
    features: ['Pair of 2 heavy kadas', 'Secure invisible screw mechanism', 'Solid gold core construction', 'HUID hallmarked purity'],
    inStock: true,
    code: 'VK-BG-550',
    approxPriceRange: '₹3,95,000 – ₹4,20,000'
  },
  {
    id: 'vk-rg-04',
    name: 'Kohinoor Solitaire & Cocktail Rings',
    hindiName: 'कोहिनूर सॉलिटेयर एवं कॉकटेल अंगूठियां',
    category: 'rings',
    purity: '18K Diamond',
    estimatedWeight: '6.40 grams',
    image: '/src/assets/images/diamond_gold_rings_1791285161704.jpg',
    description: 'Dazzling brilliant-cut solitaire ring set alongside ornate 18K yellow and rose gold cocktail rings. Ideal for engagements, anniversaries, and modern everyday luxury.',
    features: ['IGI Certified Natural Diamonds', 'VVS Clarity & EF Color grade', 'Comfort fit band design', 'Free lifetime cleaning & polish at Bisalpur showroom'],
    inStock: true,
    code: 'VK-RG-118',
    approxPriceRange: '₹85,000 – ₹1,45,000'
  },
  {
    id: 'vk-br-05',
    name: 'Maharani Heritage Polki Choker Suite',
    hindiName: 'महारानी हेरिटेज पोलकी चोकर सूट',
    category: 'bridal',
    purity: 'Antique Gold 22K',
    estimatedWeight: '82.10 grams',
    image: '/src/assets/images/hero_bridal_jewellery_1791285116000.jpg',
    description: 'The pinnacle of wedding grandeur: handcrafted antique 22K gold choker featuring ruby accents, natural seed pearl tassels, and heritage temple embossing.',
    features: ['Complete bridal suite with matching earrings', 'Temple art embossed medallions', 'Adjustable luxury silk dori cord', 'Exclusive one-of-a-kind showroom edition'],
    inStock: true,
    code: 'VK-BR-999',
    approxPriceRange: '₹6,80,000 – ₹7,30,000'
  },
  {
    id: 'vk-nk-06',
    name: 'Ananya Everyday Minimalist Gold Chain & Pendant',
    hindiName: 'अनन्या 22K चेन व पेंडेंट',
    category: 'necklaces',
    purity: '22K (916 BIS)',
    estimatedWeight: '12.80 grams',
    image: '/src/assets/images/gold_necklace_collection_1791285126320.jpg',
    description: 'Subtle, lightweight 22K hallmarked gold rope chain paired with a modern geometric teardrop pendant for everyday elegance and office wear.',
    features: ['Durable daily wear rope link', 'High-polish anti-tarnish finish', 'BIS 916 Stamped', 'Ideal for gifting & festive surprises'],
    inStock: true,
    code: 'VK-NK-204',
    approxPriceRange: '₹1,08,000 – ₹1,20,000'
  }
];

export const SHOWROOM_CONTACTS = {
  name: 'VK Jewellers',
  tagline: 'Elegance That Lasts Forever',
  motto: 'Where Tradition Meets Timeless Elegance',
  address: 'Tehsil Road, Bisalpur, Uttar Pradesh, India',
  city: 'Bisalpur',
  phones: [
    '9410215507',
    '9412482687',
    '9411284440',
    '7500140049'
  ],
  primaryPhone: '9410215507',
  whatsappPhone: '9410215507',
  hours: 'Open Daily: 10:00 AM – 8:30 PM (All 7 Days)',
  googleMapsQuery: 'Tehsil Road, Bisalpur, Uttar Pradesh',
  googleMapsUrl: 'https://maps.google.com/?q=Tehsil+Road+Bisalpur+Uttar+Pradesh',
  services: [
    '100% BIS Hallmarked Gold (22K 916 & 18K 750)',
    'Certified Natural Diamond Jewellery',
    'Bespoke Bridal Trousseau Customisation',
    'Old Gold Best-Value Exchange & Testing',
    'Fine Silver Utensils, Coins & Idols',
    'Expert In-House Repair, Polishing & Resizing'
  ]
};
